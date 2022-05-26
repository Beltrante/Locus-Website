<template>
  <div class="container">
    <p class="header">This page does not exist</p>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_mk6o3c37.json"
          background="transparent"
          speed="1"
          style="width: 1000px; height: 500px"
          loop
          autoplay
          class="animation"
        ></lottie-player>
  </div>
</template>

<script>
export default {
  name: 'NotFoundComponent',
}
</script>

<style scoped>
div{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50rem;
}
.animation{
  width: 15rem;
  margin: 0 auto;
}
</style>