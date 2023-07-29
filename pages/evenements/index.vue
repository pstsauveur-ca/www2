<template>
	<PageTitle title="Événements" />

  <section class="wrapper bg-light">
    <div class="container py-14 py-md-16">
      <div class="row">
        <div class="col-xl-10 mx-auto">

          <div v-for="{ month, year, events } of eventsByMonth" :key="month" class="job-list mb-10">
            <h3 class="mb-4">{{ formatMonth(month) }} {{ year }}</h3>

            <a v-for="event of events" :href=event.link class="card mb-4 lift">
              <div class="card-body p-5">
                <span class="row justify-content-between align-items-center">
                  <span class="col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body">
                    {{ event.titre }}
                  </span>
                  <span class="col-5 col-md-3 text-body d-flex align-items-center">
                    <i class="uil uil-calendar-alt me-1"></i> {{ formatDate(event.date) }} </span>
                  <span class="col-7 col-md-4 col-lg-3 text-body d-flex align-items-center">
                    <i class="uil uil-location-arrow me-1"></i> Église St-Sauveur </span>
                  <span class="d-none d-lg-block col-1 text-center text-body">
                    <i class="uil uil-angle-right-b"></i>
                  </span>
                </span>
              </div>
              <!-- /.card-body -->
            </a>
            <!-- /.card -->

          </div>

        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
<!-- /section -->
</template>

<script lang="ts" setup>

const { body: events } = await queryContent('/').where({ _file: 'evenements.json' }).findOne();
const formatter = new Intl.DateTimeFormat('fr', { month: 'long' });

function sortDesc (a, b) {
  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();

  return dateB - dateA 
}

function capitalize(str: string) {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}

function formatMonth(month: number) {
  const date = new Date(1900, month, 1);
  return capitalize(date.toLocaleString('fr-ca', { month: 'long' }));
}

function formatDate(str: string) {
  const date = new Date(str);
  return date.toLocaleString('fr-ca', { dateStyle: 'short' })
}

// [{ year: 2023, month: 6, events: [] }, ...]
const eventsByMonth = events.sort(sortDesc).reduce((acc, next) => {
  const nextDate = new Date(next.date);
  const nextYear = nextDate.getFullYear();
  const nextMonth = nextDate.getMonth();

  let last = acc[acc.length - 1];

  if (!last || (last.year !== nextYear) || (last.year === nextYear && last.month !== nextMonth)) {
    last = {
      year: nextYear,
      month: nextMonth,
      events: []
    };
    acc.push(last);
  }

  last.events.push(next);

  return acc;
}, [])

</script>