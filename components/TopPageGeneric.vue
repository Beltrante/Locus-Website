<template>
  <div class="containert">
    <div class="row">
      <div class="col-md">
        <h1 class="header">{{ name }}</h1>
      </div>
      <div class="col-md">
        <p class="snippet">
          {{ description }}
        </p>
        <p class="tags"># TagDinamici</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopPageGeneric',
  props: {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
}
</script>

<style scoped>
.container {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.tags {
  font-size: 1.8rem;
  font-weight: 800;
}
</style>