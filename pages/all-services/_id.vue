/* Page for the individual SERVICE CATEGORY */
<template>
  <!-- class container in order to center the contend -->
  <!-- class mt-5 in order to heva a margin top of 5 units -->
  <div class="container mt-5">
    <!-- this component will include the breadcrumps in the page -->
    <BreadCrump :items="breadcrumps" />
    <!-- this component creates the top (first row) of the page. 
    The passed parameters are the name (for the title of the page), 
    the descritpion (in order to describe the content) and the tags 
    (in order to dynamically display the hashtags) -->
    <TopPageGeneric
      :name="serviceType.name"
      :description="serviceType.description"
      :tags="tags"
    />
    <div class="mt-5">
      <!-- this component will create each item of the serivce list 
      related to the selected category -->
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
      tags: tagList,
    }
  },
  computed: {
    // define breadcrumbs routes
    breadcrumps() {
      return [
        {
          label: 'All Services',
          url: '/all-services',
        },
      ]
    },
  },
}
</script>

<style>
</style>