<template>
<div class="youtube-video-container">
  <iframe 
    width="560" 
    height="315" 
    :src="'https://www.youtube-nocookie.com/embed/videoseries?si=61_5Y0XqwxVINXQ8&amp;list=' + playlistId" 
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

</template>

<script lang="ts">
  
export default {
  props: {
    playlistId: String
  },
  
}
</script>

<style>
.youtube-video-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.youtube-video-container::after {
  display: block;
  content: "";
  padding-top: 56.25%;
}

.youtube-video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
