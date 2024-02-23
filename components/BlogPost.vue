<template>
  <article class="post">
    <div class="card">
      <figure class="card-img-top overlay overlay-1 hover-scale">
          <img :src="image" alt="" />
        <figcaption>
          <!-- <h5 class="from-top mb-0">Read More</h5> -->
        </figcaption>
      </figure>
      <div class="card-body">
        <div class="post-header">
          <!-- <div class="post-category text-line">
            <a href="#" class="hover" rel="category">Teamwork</a>
          </div> -->
          <h2 class="post-title mt-1 mb-0">
            <!-- <a class="link-dark" href="#"> -->
              {{ title }}
            <!-- </a> -->
          </h2>
        </div>
        <div class="post-content">
          <slot></slot>
        </div>
      </div>
      <div class="card-footer">
        <ul class="post-meta d-flex mb-0">
          <li class="post-date">
            <i class="uil uil-calendar-alt"></i>
            <span>{{ date }}</span>
          </li>
          <!-- <li class="post-author"><a href="#"><i class="uil uil-user"></i><span>By Sandbox</span></a></li> -->
        </ul>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
export default {
  props: {
    date: String,
    image: String,
    title: String
  }
}

</script>
