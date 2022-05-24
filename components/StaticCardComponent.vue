<template>
  <div>
    <NuxtLink :to="``" class="card-container">
      <div class="external-static">
        <div class="image">
          <img src="" class="card-image" alt="" />
        </div>
        <div class="description"></div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'StaticCardComponent',
}
</script>

<style scoped>
</style>