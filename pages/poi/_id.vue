<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <MapComponent />
      </div>
      <div class="col-md-6">
        <h1 class="header">Nome Point of interest</h1>
        <p class="snippet">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A rerum eos
          ipsam omnis voluptas nulla tempore cupiditate. Eveniet excepturi
          corrupti odit, fuga veritatis ad saepe perferendis optio. Id, dicta
          itaque.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 slide-show">slide show immagini "POI"</div>
      <div class="col-md-6 opening-hours">Orari di apertura "POI"</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SinglePoi',
}
</script>

<style scoped>
</style>