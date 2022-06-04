/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component is used for the creation of the opening hours sections for points of interest
and for services (so we have decided to create a separate component in order to reuse it on 
different pages). The required parameters are:
    - an array containing the opening hours of the poi/service;*/
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>
  <div class="op-hours-style">
    <h3 class="subtitle center">Opening hours</h3>
    <p v-for="day in hours" :key="day">{{ day }}</p>
  </div>
</template>

<script>
export default {
  name: 'OpeningHoursComponent',
  props: {
      hours:{
          type: Array,
          required: true
      }
  },
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