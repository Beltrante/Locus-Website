<template>
<!-- per passare da small card a event/itinerary/poi un'idea
potrebbe essere quella di usare i template literals per
modificare dinamicamente il path passato a to="..." in 
NuxtLink-->
  <NuxtLink to="/event/_id" class="card-container">
    <div class="external">
      <div class="image">
        <img :src="evento.img" class="card-image" alt="" />
      </div>
      <div class="description">{{evento.name}}</div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'SmallCard',
  props: ['evento']
}
</script>

<style scoped>

</style>