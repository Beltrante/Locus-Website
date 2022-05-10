<template>
<!-- per passare da small card a event/itinerary/poi un'idea
potrebbe essere quella di usare i template literals per
modificare dinamicamente il path passato a to="..." in 
NuxtLink-->
  <NuxtLink to="/event/_id" class="card-container">
    <div class="external">
      <div class="image">
        <img :src="event.img" class="card-image" alt="" />
      </div>
      <div class="description">{{event.name}}</div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'SmallCard',
  props: ['event']
}
</script>

<style scoped>

</style>