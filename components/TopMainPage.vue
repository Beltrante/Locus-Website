/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component is used for the creation of the top part of the Homepage. It aggregates two 
different elements (considered too small, simple and poorly reusable to be synthesized in 2 
actual ad hoc components). The purpose of this component is to crate a big row containing:
    - An animation in order to make the UI more fun to watch;
    - A "Title + Description" section, representative of the entire site 

There are not required parameters*/
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>
  <div class="container">
    <div class="row">
      <div class="col-md mt-5">
        <h1 class="header-index">Locus</h1>
        <p class="snippet">
          Want to visit Bergamo? Not sure where to go? and what to do? You are
          in the right place to find out!
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

.header-index {
  font-weight: 900;
  font-size: 10vw;
}
.center-div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
}
</style>