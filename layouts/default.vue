<template>
  <div class="main-page">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;900&display=swap"
      rel="stylesheet"
    />
    <the-header />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
  },
}
</script>