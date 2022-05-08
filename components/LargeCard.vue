<template>
  <div>
    <NuxtLink to="/big-deep">
      <div class="card">
        <div class="box">
        <img :src="`${cat.img}`" class="card-img-top card-image" alt="..." />
        </div>
        <div class="card-body">
          <p class="card-text">
            {{cat.name}}
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'LargeCard',
  // eslint-disable-next-line vue/require-prop-types
  props: ['cat'],
}
</script>

<style scoped>
.card{
}
.card-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
}
.box{
  height: 200px;
}
</style>