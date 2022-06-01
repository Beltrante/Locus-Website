<template>
  <div class="mt-5">
    <h2 class="subtitle">{{ data.name }}'s Top 3 rated</h2>
    <ListComponent
      v-for="service in data.services"
      :key="service.id"
      :name="service.name"
      :image="service.image"
      :hours="service.openingHours"
      :website="service.website"
      :address="service.address"
    />
  </div>
</template>

<script>
export default {
  name: 'TopRatedService',
  props:{
    // must contain name and list of objects with
    // (name,image,hours,website,address) for ListComponent
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>