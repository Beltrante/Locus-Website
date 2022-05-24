<template>
  <div class="page container mt-5">
    <TopPageGeneric 
    :info="info"/>
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
  // TODO this implemetation is really skethcy
  async asyncData({ params, $axios }) {
    const type = params.type
    const { data } = await $axios.get('/api/' + type+'Type/'+params.id)
    return {
      info: {
        name: data.name,
        description: data.description
      },
      children: data.childrens,
      childType: {name: type}
    }
  }
}
</script>

<style scoped>
</style>