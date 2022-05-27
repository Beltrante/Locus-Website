<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <StaticCardComponent 
        v-for="event in events" 
        :key="event.id" 
        :title="event.name"
        :image="event.image"
        :section="event"/>
      </div>
      <div class="col-md-6">
        <h1 class="header">{{ events.ev1.name }}</h1>
        <p class="snippet">
          {{ events.ev1.description }}
        </p>
      </div>
    </div>
    <hr />
    <div class="row">
      <h2 class="subtitle">Where this event is hosted</h2>
      <!-- Display carta larga con tutto il container più informazioni
      dato che il point of interest da mostrare è uno solo -->
      <CardComponent
        :id="events.ev1.HostingPoi.id"
        :name="events.ev1.HostingPoi.name"
        :image="events.ev1.HostingPoi.image"
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
      events: {
        ev1: {
          id: data.id,
          name: data.name,
          image: data.image,
          description: data.description,
          HostingPoi: data.poi
        },
      },
    }
  },
  data() {
    return {
      path:"event"
    }
  }
}
</script>

<style scoped>
.event-image {
  height: 100%;
  width: 100%;
}
</style>