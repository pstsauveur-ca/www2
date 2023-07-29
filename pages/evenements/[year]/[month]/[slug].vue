<template>
  <ContentDoc v-slot="{ doc }">
  <section class="wrapper bg-primary pt-10">
    <div class="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
      <div class="row">
        <div class="col-md-10 col-xl-8 mx-auto">
          <div class="post-header">
            <div class="post-category text-line text-white">
              <a href="#" class="hover text-white" rel="category">Évènements</a>
            </div>
            <!-- /.post-category -->
            <h1 class="display-1 mb-4 text-white">{{ doc.title }}</h1>
            <ul class="post-meta mb-5">
              <li class="post-date"><i class="uil uil-calendar-alt"></i><span>{{ doc.date }}</span></li>
            </ul>
            <!-- /.post-meta -->
          </div>
          <!-- /.post-header -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /section -->
  <section class="wrapper bg-light">
    <div class="container pb-14 pb-md-16">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="blog single mt-n17">
            <div class="card">
              <figure class="card-img-top">
                <img :src="`https://static.pstsauveur.ca/${doc.image}`" alt="" />
              </figure>
              <div class="card-body">
                <div class="classic-view">
                  <article class="post">
                    <div class="post-content mb-5">
                      <ContentRenderer :value="doc" />
                    </div>
                    <!-- /.post-content -->
                  </article>
                  <!-- /.post -->
                </div>
                <!-- /.classic-view -->
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.blog -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /section -->
  </ContentDoc>
</template>

<script setup>
// const props = defineProps(['category', 'title', 'date', 'image', 'text'])
// const { navigation, page, surround, globals } = useContent()

// const { body: events } = await queryContent('events').where({ _file:   }).findOne();


</script>
