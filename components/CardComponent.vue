<template>
<!-- per passare da small card a event/itinerary/poi un'idea
potrebbe essere quella di usare i template literals per
modificare dinamicamente il path passato a to="..." in 
NuxtLink-->
  <NuxtLink :to="`/${path}/${id}`" class="card-container">
<!-- NB: il to="..." è variabile!!! ora è statico solo come esempio -->
    <div class="external">
      <div>
        <img :src="image" class="card-image" alt="" />
      </div>
      <div class="description">{{name}}</div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'CardComponent',
  props:{
    path:{
      type: String,
      required: true,
    },
    id:{
      type: Number,
      required: true,
    },
    name:{
      type: String,
      required: true,
    },
    image:{
      type: String,
      required: true,
    },
    
  }
}
</script>

<style scoped>

</style>