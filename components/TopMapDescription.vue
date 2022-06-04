/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component is used for the creation of the top part of the single Point of interest page
(the set of pages displaying the map). It aggregates four different components organized on two 
main rows:
    - The first two components are MapComponent and TitleDescription: They are organized in the 
      first of the two rows (so, the very top of the page) and respectively allow to show the 
      Map (displaying the location of the point of interest) and the Descriptive section (composed 
      by Title + Description)
    - The second two components are StaticCardComponent and OpeningHoursComponent: They are 
      organized in the second of the two rows and respectively allow to show the image of the Point 
      of interest and the related opening hours

The required parameters are:
    - The bounding box of the map (bbox);
    - The coordinates of the location of the specific POI (marker)
    - The Name and Description of the specific Point of interest;
    - The image of the Point of interest
    - The opening hours of the point of interest*/
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <!-- here the bounding box and the location of the poi are passed in order to display 
        the map -->
        <MapComponent :bbox="section.map.bbox" :marker="section.map.marker" />
      </div>
      <div class="col-md-6">
        <!-- here name and description of the poi are passed in order to create the descriptive 
        section -->
        <TitleDescription :name="section.name" :description="section.description" />
      </div>
    </div>
    <hr />
    <div class="row">
      <h2 class="subtitle">{{ section.type }}-Photo</h2>
      <div class="col-md-6">
        <!-- here the image is passed inside the StaticCardComponent in order to be displayed -->
        <StaticCardComponent :image="section.image" />
      </div>
      <div class="col-md-6">
        <!-- here the OpeningHoursComponent is passed inside this component in order to display 
          the opening hours block (the creation of a specific component was needed because it is 
          also used in the ListComponent ) -->
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
      required: true,
    },
  },
}
</script>

<style scoped>
</style>