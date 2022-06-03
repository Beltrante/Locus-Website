<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <StaticCardComponent :image="image" />
      </div>
      <div class="col-md-6">
        <TitleDescription :name="name" :description="description" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopEventDescriptionComponent',
  props: {
    image: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
}
</script>

<style scoped>
</style>