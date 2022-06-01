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
    // since we chose to deploy as STATIC we are not worried about client resources for this operation
    // as it is not called every time but only during generate 
    data.services.forEach((service) => {
      // split hour string
      const splitted = service.openingHours.split(';')
      const openingHours = []
      splitted.forEach((x, i) => {
        const day = {}
        day.id = i
        day.str = x
        openingHours.push(day)
      })
      service.openingHours = openingHours
    })
    return {
      serviceType: data,
    }
  },
}
</script>

<style>
</style>