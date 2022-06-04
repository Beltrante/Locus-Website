<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <MapComponent :bbox="section.map.bbox" :marker="section.map.marker" />
      </div>
      <div class="col-md-6">
        <TitleDescription
          :name="section.name"
          :description="section.description"
        />
      </div>
    </div>
    <hr />
    <div class="row">
      <h2 class="subtitle">{{ section.type }}-Photo</h2>
      <div class="col-md-6">
        <!-- <div style="height:100%; background:gray; border-radius:10px; margin:10px; height:365.6px">ciao</div> -->
        <StaticCardComponent :image="section.image" />
      </div>
      <div class="col-md-6">
        <OpeningHoursComponent :hours="section.op_hours" />
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import OpeningHoursComponent from './OpeningHoursComponent.vue'
export default {
  name: 'TopMapDescriptionComponent',
  components: { OpeningHoursComponent },
  props: {
    section: {
      type: Object,
      required: true
    }
  }
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
  height: 350px;
}
h3 {
  font-weight: 300;
}
.center {
  text-align: center;
}
</style>