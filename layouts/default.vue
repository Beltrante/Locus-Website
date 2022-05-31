<template>
  <div class="main-page">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;900&display=swap"
      rel="stylesheet"
    />
    <the-header />
    <bread-crump />
    <nuxt />
    <div class="default-image">
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      <lottie-player
        src="https://assets6.lottiefiles.com/private_files/lf30_tzxtv5wy.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        class="icon"
      ></lottie-player>
    </div>
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import BreadCrump from '~/components/BreadCrump.vue'
export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    BreadCrump,
    TheFooter,
  },
}
</script>

<style scoped>
.default-image {
  right: 20px;
  bottom: 20px;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
}
.icon {
  height: 50px;
}

@media screen and (max-width: 1100px) {
  .default-image {
    visibility: hidden;
    display: none;
  }
}
</style>