/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { mkdir, writeFile } from 'fs/promises';
import * as path from 'path';
import {
  createDirectus, readItems, rest, staticToken,
} from '@directus/sdk';
import { Schema, WebsiteEvent } from './schema';

const token = process.env.DIRECTUS_TOKEN;

if (!token) throw new Error('Missing DIRECTUS_TOKEN');

const dataDir = path.join(__dirname, '../data');
const directus = createDirectus<Schema>('https://cms.pstsauveur.ca')
  .with(rest())
  .with(staticToken(token));

if (!process.env.DIRECTUS_TOKEN) {
  throw new Error('Missing process.env.DIRECTUS_TOKEN');
}

async function start() {
  try {
    await mkdir(dataDir, { recursive: true });

    await fetchAndSaveEvents();
    await fetchAndSaveBaptismAvailabilities();
  } catch (err) {
    console.log(err);
  }

  console.log('Done.');
}

async function fetchAndSaveEvents() {
  console.log('Fetching evenements...');
  const data = await directus.request(readItems('evenements', {
    sort: ['date'],
    filter: {
      status: {
        _eq: 'published',
      },
    },
  }));

  const events = data.map((event) => {
    const [year, month] = event.date.split('T')[0].split('-');

    const websiteEvent: WebsiteEvent = {
      ...event,
      formattedDate: formatDateLong(event.date),
      link: `evenements/${year}/${month}/${event.id}`,
    };

    return websiteEvent;
  });

  await writeFile(
    path.join(dataDir, 'evenements_a_venir.json'),
    JSON.stringify(events.filter((ev) => isInTheFuture(ev.date)).slice(0, 5), null, 2),
    'utf8',
  );

  await writeFile(
    path.join(dataDir, 'evenements.json'),
    JSON.stringify(events, null, 2),
    'utf8',
  );

  for await (const event of events) {
    const [year, month] = event.date.split('T')[0].split('-');
    const dirname = path.join(dataDir, 'evenements', `${year}/${month}`);
    const filepath = path.join(dirname, `${event.id}`);

    const meta = Object.entries({
      title: `"${(event.titre || '')}"`,
      description: '',
      date: `"${event.formattedDate}"`,
      image: `"${event.image}"`,
    }).map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    const content = `---\n${meta}\n---\n\n${event.contenu || '‎ '}`;

    await mkdir(dirname, { recursive: true });
    await writeFile(`${filepath}.md`, content, 'utf8');
  }
}

async function fetchAndSaveBaptismAvailabilities() {
  console.log('Fetching disponibilite_bapteme + disponibilite_catechese_bapteme...');

  const disponibilite_bapteme = await directus.request(readItems('disponibilite_bapteme', {
    sort: ['date'],
    filter: {
      status: {
        _eq: 'published',
      },
      date: {
        _gte: '$NOW',
      },
    },
  })).then((data) => data.map((d) => {
    d.formattedDate = formatDateLong(d.date);
    return d;
  }));

  const disponibilite_catechese_bapteme = await directus.request(readItems('disponibilite_catechese_bapteme', {
    sort: ['date'],
    filter: {
      status: {
        _eq: 'published',
      },
      date: {
        _gte: '$NOW',
      },
    },
  })).then((data) => data.map((d) => {
    d.formattedDate = formatDateLong(d.date);
    return d;
  }));

  await writeFile(
    path.join(dataDir, 'disponibilites_bapteme.json'),
    JSON.stringify(disponibilite_bapteme, null, 2),
    'utf8',
  );

  await writeFile(
    path.join(dataDir, 'disponibilite_catechese_bapteme.json'),
    JSON.stringify(disponibilite_catechese_bapteme, null, 2),
    'utf8',
  );
}

start();

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDateLong(str: string) {
  return capitalize(new Intl.DateTimeFormat('fr-CA', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(new Date(str)));
}

function isInTheFuture(str: string) {
  return new Date(str) > new Date();
}
