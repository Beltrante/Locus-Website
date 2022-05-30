<template>
  <h6>
    <span v-for="(item, index) in items" :key="index">
      <NuxtLink :to="item.url" class="crumb">
        <span>{{ item.label }}</span>
      </NuxtLink>
    </span>
  </h6>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: false,
      default: null,
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.crumb {
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 15px;
  margin-right: 10px;
  background: rgb(60, 128, 125);
  opacity: 0.8;
  clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%,0% 100%);
  /*transform: skew(-20deg);*/
  /*border-radius: 10px 50px 50px 10px;*/
}

.crumb:hover {
  opacity: 1;
}
.crumb span {
  color: #fff;
}
</style>