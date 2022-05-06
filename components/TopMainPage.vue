<template>
  <div class="container">
    <div class="text-container">
      <h1 class="header">Page title</h1>
      <p class="snippet">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veniam
        in, eos tempora, molestias modi voluptatem totam quidem deleniti eveniet
        obcaecati, atque fugiat! Dolor incidunt excepturi, esse doloremque
        repellat tempora?
      </p>
    </div>
     <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          src="https://assets5.lottiefiles.com/packages/lf20_rocodyl6.json"
          background="transparent"
          speed="1"
          style="width: 500px; height: 500px"
          loop
          autoplay
          class="image"
        ></lottie-player>
  </div>
</template>

<script>
export default {
  name: 'TopMainPage',
}
</script>

<!--la keyword "scoped" serve per applicare lo stile specificato in questo file solo a questo component-->
<style scoped>
.container {
  height: 50vh;
  position: relative;
  display: flex;
  padding: 5rem 30;
  align-items: flex-start;
  justify-content: space-between;
}
.text-container {
  width: 50%;
  margin-top: 4rem;
}

.image {
  width: 27.5rem;
  margin-top: 2rem;
}
@media (max-width: 500px) {
  .container {
    height: 40vh;
  }
}
</style>