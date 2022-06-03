<template>
  <div class="container mt-5">
    <TopPageGeneric :name="header.name" :description="header.description" :tags="tags" />
    <hr />
    <!-- row of category links -->
    <div class="row">
      <div class="col-lg-4 snippet-categories">
        Choose a category or scroll down to see the top 3 services for each category
      </div>
      <div class="col-lg-8">
        <div class="row">
          <CategoryComponent
            v-for="service in serviceTypes"
            :id="service.id"
            :key="service.id"
            :name="service.name"
            :image="service.image"
            :path="servicePath"
            class="col-md-6"
          />
        </div>
      </div>
    </div>
    <!-- rows of service sections -->
    <div class="row mt-4 g-0">
      <TopRatedService
        v-for="type in serviceTypes"
        :key="type.id"
        :data="type"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllServicePage',

  async asyncData({ $axios }) {
    // Get all the service types previews data from server
    const { data } = await $axios.get('/api/all-serviceTypes')

    const tagList = []
    data.forEach((type) => {
      tagList.push(type.name)
    })

    return {
      // data has id/name/image/services as a list of the top n rated
      serviceTypes: data,
      tags: tagList
    }
  },

  data() {
    return {
      header: {
        name: 'All Services',
        description:
          'A city is not only adventure but also relax and comfort. The following page shows some of the services the city of Bergamo offers',
      },
      servicePath: 'all-services',
    }
  },
}
</script>

<style scoped>
</style>



