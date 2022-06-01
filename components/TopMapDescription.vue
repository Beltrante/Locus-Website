<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <MapComponent :bbox="section.map.bbox" :marker="section.map.marker" />
      </div>
      <div class="col-md-6">
        <TitleDescription :name="section.name" :description="section.description" />
      </div>
    </div>
    <hr />
    <div class="row">
      <h2 class="subtitle">{{ section.type }}-Photo</h2>
      <div class="col-md-6">
        <StaticCardComponent :image="section.image" />
      </div>
      <div class="col-md-6">
        <div class="op-hours-style">
          <h3 class="subtitle center">Opening hours</h3>
          <p v-for="day in section.op_hours" :key="day.id">{{ day.str }}</p>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'TopMapDescriptionComponent',
  // eslint-disable-next-line vue/require-prop-types
  props: ['section'],
}
</script>

<style scoped>
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
h3 {
  font-weight: 300;
}
.center{
  text-align: center;
}
</style>