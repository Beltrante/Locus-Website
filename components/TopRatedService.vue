<template>
  <div class="mt-5">
    <h2 class="subtitle">{{ data.serviceType }}'s Top 3 rated</h2>
    <ListComponent
      v-for="service in data.services"
      :key="service.id"
      :section="service"
    />
  </div>
</template>

<script>
export default {
  name: 'TopRatedService',
  // eslint-disable-next-line vue/require-prop-types
  props: ['data'],
}
</script>

<style scoped>
</style>