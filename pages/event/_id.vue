<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <StaticCardComponent  
        :image="event.image"/>
      </div>
      <div class="col-md-6">
        <h1 class="header">{{ event.name }}</h1>
        <p class="snippet">
          {{ event.description }}
        </p>
      </div>
    </div>
    <hr />
    <div class="row">
      <h2 class="subtitle">Where this event is hosted</h2>
      <!-- Display carta larga con tutto il container più informazioni
      dato che il point of interest da mostrare è uno solo -->
      <CardComponent
        :id="event.HostingPoi.id"
        :name="event.HostingPoi.name"
        :image="event.HostingPoi.image"
        :path="path"
        class="col-sm p-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleEvent',
  
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/event/' + id)
    return {
      
        event: {
          id: data.id,
          name: data.name,
          image: data.image,
          description: data.description,
          HostingPoi: data.poi
        },
         path:"poi"
      
    }
  },
  /*
  data() {
    return {
      path:"poi"
    }
  }
  */
}
</script>

<style scoped>
.event-image {
  height: 100%;
  width: 100%;
}
</style>