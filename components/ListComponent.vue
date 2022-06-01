<template>
  <div class="row mb-5">
    <div class="col-md-5">
      <StaticCardComponent :image="image" :height="height" />
    </div>
    <div class="col-md-7">
      <div class="row">
        <div class="col-xl-7">
          <div class="op-hours-style">
            <h2>Opening Hours</h2>
            <p v-for="day in hours" :key="day">{{ day }}</p>
          </div>
        </div>
        <div class="col">
          <div class="info-style">
            <p><span class="attribute">Address:</span> {{ address }}</p>
            <p>
              <span class="attribute">Site:</span>
              <a :href="`${website}`">{{ name }}</a>
            </p>
            <p><span class="attribute">Rating: </span>{{ rating }}/5</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListComponent',
  props: {
    image: {
      type: String,
      required: true,
    },
    hours: {
      type: Array,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  data(){
    return{
      height: '355px',
    }
  }
}
</script>

<style scoped>
/* TODO: DA METTERE IN CONDIVISIONE CON QUELLO DI TopMapDescription */
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

.info-style {
  background: rgba(128, 60, 65, 0.5);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
}

.attribute {
  font-weight: 600;
}

</style>