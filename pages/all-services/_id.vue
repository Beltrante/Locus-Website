<template>
  <div class="container mt-5">
    <TopPageGeneric
      :name="serviceType.name"
      :description="serviceType.description"
    />
    <div class="mt-5">
      <ListComponent
        v-for="service in serviceType.services"
        :key="service.id"
        :name="service.name"
        :image="service.image"
        :hours="service.openingHours"
        :website="service.website"
        :address="service.address"
        :rating="service.rating"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceType',
  async asyncData({ route, $axios }) {
    // Get the id of the poi to show from route
    const { id } = route.params
    const { data } = await $axios.get('/api/serviceType/' + id)
    return {
      serviceType: data,
    }
  },
}
</script>

<style>
</style>