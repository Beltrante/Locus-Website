<template>
<!-- per passare da small card a event/itinerary/poi un'idea
potrebbe essere quella di usare i template literals per
modificare dinamicamente il path passato a to="..." in 
NuxtLink-->
  <NuxtLink :to="`/${type.name}/${card.id}`" class="card-container">
<!-- NB: il to="..." è variabile!!! ora è statico solo come esempio -->
    <div class="external">
      <div>
        <img :src="card.image" class="card-image" alt="" />
      </div>
      <div class="description">{{card.name}}</div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'CardComponent',
  // eslint-disable-next-line vue/require-prop-types
  props: ['card','type']
}
</script>

<style scoped>

</style>