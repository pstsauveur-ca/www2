<template>
  <div>
		<section class="wrapper bg-dark">
			<div class="swiper-container swiper-thumbs-container swiper-fullscreen nav-dark" data-margin="0" data-autoplay="false" data-autoplaytime="7000" data-nav="false" data-dots="false" data-items="1" data-thumbs="false">
			  <div class="swiper">
				<div class="swiper-wrapper">
				  <div class="swiper-slide bg-overlay bg-overlay-400 bg-light bg-image" data-image-src="/img/photos/toit-eglise.jpg"></div>
				</div>
				<!--/.swiper-wrapper -->
			  </div>
			  <!-- /.swiper -->
			  <div class="swiper-static">
				<div class="container h-100 d-flex align-items-center justify-content-center">
				  <div class="row">
					<div class="col-lg-8 mx-auto mt-n10 text-center">
					  <h1 class="fs-19 text-uppercase ls-xl text-white mb-3 animate__animated animate__zoomIn animate__delay-1s">
              Permets-moi de te raconter
            </h1>
					  <h2 class="display-1 fs-60 text-white mb-0 animate__animated animate__zoomIn animate__delay-2s"> 
              les merveilles que Dieu fait dans ma vie.
            </h2>
					</div>
					<!-- /column -->
				  </div>
				  <!-- /.row -->
				</div>
				<!-- /.container -->
			  </div>
			  <!-- /.swiper-static -->
			</div>
			<!-- /.swiper-container -->
    </section>
    <!-- /section -->

    <section class="wrapper bg-light">
      <div class="container py-14 py-md-16">
        <div class="row gx-lg-8 gx-xl-12">
          <div class="col-lg-8 order-lg-2">
            <div class="blog classic-view">
              <article class="post">
                <div class="card">
                  <figure class="card-img-top overlay overlay-1 hover-scale">
                    <!-- <a href="#"> -->
                      <img src="/img/photos/the_holy_spirit_blessing_a_Canadian_village_winter.png" alt="" />
                    <!-- </a> -->
                    <figcaption>
                      <!-- <h5 class="from-top mb-0">Read More</h5> -->
                    </figcaption>
                  </figure>
                  <div class="card-body">
                    <div class="post-header">
                      <!-- <div class="post-category text-line">
                        <a href="#" class="hover" rel="category">Teamwork</a>
                      </div> -->
                      <!-- /.post-category -->
                      <h2 class="post-title mt-1 mb-0">
                        <!-- <a class="link-dark" href="#"> -->
                          Prière pour le renouveau de notre communauté paroissiale
                        <!-- </a> -->
                      </h2>
                    </div>
                    <!-- /.post-header -->
                    <div class="post-content">
                      <p>
                        Dieu notre Père, </p>

                      <p>Toi qui es plein de tendresse pour tes enfants;
                        comble-nous de ta grâce, de ta joie et de ta paix.</p>
                        
                      <p>Comme disciples du Christ, que les membres de notre communauté chrétienne soient
                        conscients de leur vocation à la sainteté, en partageant leurs
                        dons et leurs charismes, en les mettant au service de leurs frères
                        et sœurs.</p>
                        
                      <p>Envoie ton Esprit Saint pour que, dans ce nouvel élan
                        d’évangélisation, nous devenions missionnaires de foi,
                        d’espérance et d’amour auprès de nos familles, de nos
                        communautés et dans nos milieux de travail.</p>
                        
                      <p>Mets en nous le désir de vivre comme Toi, à l’exemple de la bienheureuse Catherine
                        de Saint-Augustin, afin que, d’autres expérimentent ton immense amour et ta divine miséricorde. Bénis notre communauté paroissiale pour qu’avec l’aide de Notre Dame de toute joie, elle soit un milieu favorable à la vocation du mariage, du sacerdoce et de la vie religieuse.</p>
                      <p>Amen</p>
                    </div>
                    <!-- /.post-content -->
                  </div>
                  <!--/.card-body -->
                  <div class="card-footer">
                    <ul class="post-meta d-flex mb-0">
                      <li class="post-date">
                        <i class="uil uil-calendar-alt"></i>
                        <span>5 Décembre 2022</span>
                      </li>
                      <!-- <li class="post-author"><a href="#"><i class="uil uil-user"></i><span>By Sandbox</span></a></li> -->
                    </ul>
                    <!-- /.post-meta -->
                  </div>
                  <!-- /.card-footer -->
                </div>
                <!-- /.card -->
              </article>
              <!-- /.post -->
              
            </div>
            <!-- /.blog -->
            <nav class="d-flex" aria-label="pagination">
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true"><i class="uil uil-arrow-left"></i></span>
                  </a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <!-- <li class="page-item"><a class="page-link" href="#">2</a></li> -->
                <!-- <li class="page-item"><a class="page-link" href="#">3</a></li> -->
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true"><i class="uil uil-arrow-right"></i></span>
                  </a>
                </li>
              </ul>
              <!-- /.pagination -->
            </nav>
            <!-- /nav -->
          </div>
          <!-- /column -->
          <aside class="col-lg-4 sidebar mt-8 mt-lg-6">
            <div class="widget">
              <h4 class="widget-title mb-3">À propos de la paroisse</h4>
              <p>Située au cœur du village de Saint-Sauveur, la paroisse est au service de la population de Saint-Sauveur et de Piedmont depuis 1854. Au-delà de la belle vieille église, la paroisse est une communauté chrétienne dynamique qui prend plaisir à vous accueillir.
              </p>
            </div>
            <!-- /.widget -->

            <div class="widget text-center">
              <Calendar color="blue" :attributes=calendarAttributes locale="fr-ca" />
            </div>

            <div class="widget">
              <h4 class="widget-title mb-3">Événements à venir</h4>
              <ul class="image-list">
                <li v-for="event in upcomingEvents" :key="event._path">
                  <figure class="rounded">
                    <a :href=event.link>
                      <img :src="`https://static.pstsauveur.ca/${event.image}`" alt=""/>
                    </a>
                  </figure>
                  <div class="post-content">
                    <h6 class="mb-2">
                      <a class="link-dark" :href=event.link>
                        {{ event.titre }}
                      </a>
                    </h6>
                    <ul class="post-meta">
                      <li class="post-date">
                        <i class="uil uil-calendar-alt"></i>
                        <span>{{ event.formattedDate }}</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <!-- /.image-list -->
            </div>
            <!-- /.widget -->

            <div class="widget">
              <a href="/evenements">
                <i class="uil uil-calendar-alt"></i>
                Voir tous les événements
              </a>
            </div>
            <!-- /.widget -->

            <div class="widget">
              <a href="https://www.semainierparoissial.com/semainiers/195.pdf">
                <i class="uil uil-external-link-alt"></i>
                Semainier Paroissial
              </a>
            </div>
            <!-- /.widget -->

          </aside>
          <!-- /column .sidebar -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /section -->

    <ImplicationCTABox />
  </div>
</template>

<style>
.vc-container .vc-title {
  background: none;
}

.vc-container .vc-title span {
  text-transform: capitalize;
}

.vc-container .vc-weeks {
  padding: 1rem;
}

.vc-container .vc-weekday {
  padding-left: .5rem;
  padding-right: .5rem;
}

</style>

<script lang="ts" setup>
import 'v-calendar/style.css';
import { Calendar } from 'v-calendar';

const today = Date.now();

const { body: events } = await queryContent('/').where({ _file: 'evenements.json' }).findOne();

const upcomingEvents = events.filter((event) => {
  return new Date(event.date).getTime() > today;
});

const weeklyEvents = [
  {
    start: new Date(2023, 6, 30, 11),
    name: 'Messe du Dimanche (11h00)',
    weekdays: 1,
  },
  {
    start: new Date(2023, 6, 30, 9, 30),
    name: 'Messe du Dimanche (9h30)',
    weekdays: 1,
  },
  {
    start: new Date(2023, 6, 31, 8, 30),
    name: 'Messe, P. P. Rivard (8h30)',
    weekdays: 2,
  },
  {
    start: new Date(2023, 7, 3, 8, 30),
    name: 'Messe, P. P. Rivard (8h30)',
    weekdays: 5,
  },
  {
    start: new Date(2023, 7, 4, 8, 30),
    name: 'Messe, P. P. Rivard (8h30)',
    weekdays: 6,
  },
]

const calendarAttributes = [
  {
    key: 'today',
    highlight: true,
    dates: new Date(),
    popover: {
      label: "Aujourd'hui",
    },
  },
  ...weeklyEvents.map(event => {
    return {
      key: event.name,
      dot: {
        color: 'blue'
      },
      dates: {
        start: event.start,
        repeat: {
          every: [1, 'weeks'],
          weekdays: event.weekdays,
        },
      },
      popover: {
        label: event.name,
      },
    }
  }),
  ...upcomingEvents.map(event => {
    return {
      key: event.title,
      highlight: {
        color: 'purple',
        fillMode: 'outline'
      },
      dates: new Date(event.date),
      popover: {
        label: event.titre,
      },
    }
  })
]

</script>
