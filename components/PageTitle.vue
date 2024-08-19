<template>
  <section class="wrapper bg-primary text-white">
    <!-- TODO: pb-md-21 for contact page -->
    <div class="container pt-17 pb-12 pt-md-19 pb-md-12 text-center">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h1 class="display-1 mb-3 text-white">{{ title }}</h1>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /section -->
</template>

<script lang="ts">
export default {
  props: {
    title: String
  }
}

</script>

