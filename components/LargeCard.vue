<template>
  <NuxtLink to="/big-deep">
    <div class="external">
      <div class="image">
        <img :src="`${cat.img}`" class="card-image" alt="" />
      </div>
      <div class="description">{{ cat.name }}</div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'LargeCard',
  // eslint-disable-next-line vue/require-prop-types
  props: ['cat'],
}
</script>

<style scoped>
.external {
  padding: 8px;
  height: 400px;
  border-radius: 10px;
  background: rgba(60, 128, 125, 0.611);
  border: 2px solid white;

  transition: all 0.5s ease-out;
  margin: 5px;
}

.external:hover {
  border: 2px solid black;
  background: transparent;


}

.external:hover .description {

  color: black;

}

.card-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}

.image {
  margin: 0px;
  padding: 0px;
  /*  background: greenyellow;
            border: 2px solid salmon; */
}

.description {
  padding-right: 5px;
  color: white;
  /* border: 2px solid salmon; */
  font-size: 1.5em;
}

a:link {
  text-decoration: none;
  color: white;
}
</style>