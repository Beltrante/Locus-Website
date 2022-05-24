<template>
  <div class="container mt-5">
    <TopPageGeneric :info="info" />
    <div class="row mt-4 g-0">
      <!-- la classe di CardComponent detta la grandezza della stessa
      tramite il numero "6" -->
      <CardComponent
        v-for="poiType in poiTypes"
        :key="poiType.id"
        :cat="poiType"
        :type="type"
        class="col-sm-6 p-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MidDeep',
  async asyncData({ route, $axios }) {
    const { type } = route.params
    const { data } = await $axios.get('/api/' + type+"Type")
    return {
      poiTypes: data,
      type: {name: "big-deep/"+type}
    }
  },
  // TODO getting all poiTypes/eventTypes does not give a description from db....what to do? 
  // maybe use the store?
  data(){
    return{
      info: {
        name: "All-Of-Type Page",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veniam
          in, eos tempora, molestias modi voluptatem totam quidem deleniti
          eveniet obcaecati, atque fugiat! Dolor incidunt excepturi, esse
          doloremque repellat tempora?`
      }
    }
  }
}
</script>

<style scoped>
.row {
  justify-content: center;
}
</style>