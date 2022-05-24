<template>
  <div class="container">
    <div class="row">
      <div class="col-md text-container">
        <h1 class="header-index">Locus</h1>
        <p class="snippet">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veniam
          in, eos tempora, molestias modi voluptatem totam quidem deleniti
          eveniet obcaecati, atque fugiat! Dolor incidunt excepturi, esse
          doloremque repellat tempora?
        </p>
      </div>
      <div class="col-md center-div">
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          src="https://assets5.lottiefiles.com/packages/lf20_rocodyl6.json"
          background="transparent"
          speed="1"
          style="width: 600px; height: 500px"
          loop
          autoplay
          class="image"
        ></lottie-player>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopMainPageComponent',
}
</script>

<!--la keyword "scoped" serve per applicare lo stile specificato in questo file solo a questo component-->
<style scoped>

.text-container {
  margin-top: 4rem;
}
.header-index{
  font-weight: 900;
  font-size: 10vw
}
.center-div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
}

</style>