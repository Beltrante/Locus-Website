/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component is used for the creation of the clusters displaying the top 3 services for 
each service category in the all-services/index.vue page (Top 3 Pharmacy/Bank/Restaurant/Supermarket
/Teather/GasStation). The choiche to display the top 3 ranked services for each caregory in the 
same page where the user can choose the specific service category has been implemented to be 
coherent with the rest of the webiste (the same pattern is used in all-pois/index.vue and 
all-events/index.vue). Inside this component is then passed another component called ListComponent 
for the creation of each one of the items (services) to be listed in each cluster. The required 
parameters are:
    - The name of the service category;
    - The info of the top 3 services for each service category:
        - id, name, image, opening hours, website, address, rating;*/
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>
  <div class="mt-5">
    <h2 class="subtitle">{{ data.name }}'s Top 3 rated</h2>
    <!-- here the info of the top 3 rated services for each category are passed in order to 
    create each item of the top 3 list -->
    <ListComponent
      v-for="service in data.services"
      :key="service.id"
      :name="service.name"
      :image="service.image"
      :hours="service.openingHours"
      :website="service.website"
      :address="service.address"
      :rating="service.rating"
    />
  </div>
</template>

<script>
export default {
  name: 'TopRatedService',
  props:{
    // must contain name and list of objects with
    // (name,image,hours,website,address) for ListComponent
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>