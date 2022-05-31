<template>
    <div>
        <div class="col-md-6">
        
        <StaticCardComponent 
          :image="section.image"
         />
      </div>
      <div class="col-md-6">
        <div class="op-hours-style">
          <h3 class="subtitle offset">Opening hours</h3>
          <p v-for="day in section.op_hours" :key="day.id">{{ day.str }}</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ListComponent",
        // eslint-disable-next-line vue/require-prop-types
        props: ['section']
    }
</script>

<style scoped>

</style>