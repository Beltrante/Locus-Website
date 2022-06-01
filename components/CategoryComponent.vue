<template>
  <NuxtLink :to="`${path}/${id}`" class="card-container">
    <div class="external row">
      <div class="col-4">
        <img :src="image" class="card-image" :alt="`${name}-image`" />
      </div>
      <div class="description vertical col-8">
        {{ name }}
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'CategoryComponent',
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.external {
  height: 80px;
}
.card-image {
  height: 60px;
  width: 60px;
}
.vertical {
  display: flex;
  align-items: center;
  justify-content: center;
}
.description {
  font-size: 1.2em;
}
.card-container {
  padding: 0;
}
</style>