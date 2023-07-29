<template>  
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const title = ref('Paroisse Saint-Sauveur');

useHead({
  title: title,
  meta: [{
    name: 'viewport',
    content: "width=device-width, initial-scale=1.0",
  }, {
    name: 'description',
    content: "Paroisse Catholique dans la région des Laurentides au Canada.",
  }, {
    name: 'keywords',
    content: "Saint-Sauveur, église",
  }, {
    name: 'author',
    content: "Fabrique de la Paroisse Saint-Sauveur",
  }],
  link: [{
    rel: "shortcut icon",
    href: "/img/favicon.png"
  }, {
    rel: "stylesheet",
    href: "/css/plugins.css"
  }, {
    rel: "stylesheet",
    href: "/css/dm.css"
  }, ],
  script: [{
    src: "/js/plugins.js",
    body: true
  }, {
    src: "/js/theme.js",
    body: true
  }, {
    src: "https://www.googletagmanager.com/gtag/js?id=G-MKQM3LE09Q",
    async: true
  }]
});

</script>

<style lang="scss">
@use "node_modules/bootstrap/scss/bootstrap.scss";
@use "~/assets/scss/style.scss";
</style>
