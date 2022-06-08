/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component is used for the creation of the top part of the itinerary page. It aggregates 
two different components (SegementComponent and TitleDescription) in a single one in order to 
create a big row containing: 
    - An interactive map for the preview of the selected itinerary;
      [SegmentComponent];
    - A "Title + Description" section in order to describe the itinerary 
      [TitleDescritpion]

The required parameters are:
    - The link related to the sepcific itinerary;
    - The Name and Description of the specific itinerary;*/
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-xl-6 order-xl-1 order-2">
        <!-- here the link or the specific itinerary is passed in order to create the 
        interactive map -->
        <SegmentComponent :link="link" />
      </div>
      <div class="col-xl-6 order-xl-2 order-1">
        <!-- here name and description of the itinerary are passed in order to create the 
        descriptive section -->
        <TitleDescription :name="name" :description="description" />
        <p>Duration: {{ duration }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopSegmentDescriptionComponent',
  props: {
    link: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true}
  },
}
</script>

<style scoped>
p{
  font-weight: 600;
  font-size: 150%;
}
</style>