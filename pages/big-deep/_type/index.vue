<template>
  <div class="page container mt-5">
    <TopPageGeneric :info="info" />
    <div class="row mt-4 g-0">
      <!-- la classe di CardComponent detta la grandezza della stessa
      tramite il numero "3" -->
      <CardComponent
        v-for="child in children"
        :key="child.id"
        :cat="child"
        :type="childType"
        class="col-sm-3 p-2"
       />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BigDeep',
  async asyncData({ route, $axios }) {
    const { type } = route.params
    const { data } = await $axios.get('/api/' + type)
    return {
      // children can be all itineraries/serevicies/pois/events
      children: data,
      // type can be: poi/itinerary/service/event
      childType: {name: type}
    }
  },
  // TODO all elements pages have no DB description...what to do?
  // maybe use store?
  data(){
    return{
      info: {
        name: "All-Of Page",
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
</style>