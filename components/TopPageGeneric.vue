<template>
  <div class="containert">
    <div class="row">
      <div class="col-md">
        <h1 class="header">Page title</h1>
      </div>
      <div class="col-md">
        <p class="snippet">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veniam
          in, eos tempora, molestias modi voluptatem totam quidem deleniti
          eveniet obcaecati, atque fugiat! Dolor incidunt excepturi, esse
          doloremque repellat tempora?
        </p>
        <p class="tags"># TagDinamici</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopPageGenericComponent',
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