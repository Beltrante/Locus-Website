<template>
  <div class="page container mt-5">
    <TopPageGeneric 
    :name="info.name"
    :description="info.description"
    />
    <div class="row mt-4 g-0">
      <!-- la classe di CardComponent detta la grandezza della stessa
      tramite il numero "3" -->
      <CardComponent
        v-for="event in events"
         :id="event.id"
        :key="event.id"
        :name="event.name"
        :image="event.image"
        :path="pathToEvent"
        class="col-sm-3 p-2"
       />
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventSeason',
  async asyncData({ params, $axios }) {
    // type can be poi/event intended as poiType/eventType
    const id = params.id
    const { data } = await $axios.get('/api/event-season/'+id)
    return {
      info: {
        name: data.name,
        description: data.description
      },
      events: data.events,
    }
  },
  data() {
    return {
      pathToEvent:"event"
    }
  }
}
</script>

<style scoped>
</style>