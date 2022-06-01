<template>
  <div class="row">
    <div class="col-md-6">
      <StaticCardComponent :image="section.image" />
    </div>
    <div class="col-md-6">
      <div class="op-hours-style">
        <h2>Opening Hours</h2>
        <p >{{ section.op_hours }}</p>
      </div>
      <div class="info-style">
      <p> <span class="attribute">Address:</span> {{section.address}}</p>
      <p> <span class="attribute">Site:</span> <a :href="`${section.website}`">{{section.name}}</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListComponent',
  // eslint-disable-next-line vue/require-prop-types
  props: ['section'],
}
</script>

<style scoped>
/* DA METTERE IN CONDIVISIONE CON QUELLO DI TopMapDescription */
.op-hours-style {
  background: rgb(224, 220, 220);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.info-style{
  background: rgba(128, 60, 65, 0.5);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
}
.attribute{
  font-weight: 600;
}
</style>