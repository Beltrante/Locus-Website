<template>
  <div class="container mt-5">
    <BreadCrump :items="breadcrumps" />
    <TopPageGeneric
      :name="serviceType.name"
      :description="serviceType.description"
      :tags="tags"
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
import BreadCrump from '~/components/BreadCrump.vue'
export default {
  name: 'ServiceType',
  components: {
    BreadCrump,
  },
  async asyncData({ route, $axios }) {
    // Get the id of the poi to show from route
    const { id } = route.params
    const { data } = await $axios.get('/api/serviceType/' + id)

    const tagList = []
    data.services.forEach((service) => {
      tagList.push(service.name)
    })

    return {
      serviceType: data,
      tags: tagList
    }
  },
  computed: {
    // define breadcrumbs routes
    breadcrumps() {
      return [
        {
          label: 'All Services',
          url: '/all-services',
        }    
      ]
    },
  },
}
</script>

<style>
</style>