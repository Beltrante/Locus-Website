/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component is used for the creation of the all-services pages and will produce each item 
of the list containing all the different selected services (the actual services, not the categories).
The required parameters are:
    - the image depicting how the specific service (bank, theater, ecc) looks like from the street;
    - the opening hours of the servie;
    - the address of the service;
    - the website of the service;
    - the name of the service;
    - the rating of the service;*/
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>
  <!-- the clas row is used in order to crate the single list's item -->

  <!-- the clas mb-4 provide a margin-bottom of 4 px in order to allow mobile user to visually 
  percieve when a service ends and the next one starts (on desktop this problem is not evident 
  because the services are organized in rows and it is more easy to distiguish them) -->
  <div class="row mb-5">
    <!-- the class column will create the space for the image of the serice (displayed thanks 
    to the StaticCardComponent) -->
    <div class="col-md-5 order-xl-1 order-2 ">
      <!-- here the StaticCardComponent is passed inside this component in order to display 
      the image of the service -->
      <StaticCardComponent :image="image" :height="height" />
    </div>
    <!-- this second column will contain two elements:
      - the opening hours of the service
      - the general info of the service (address, site/name, rating) -->

    <!-- <div class="col-md-7">
      <div class="row"> -->

        <!-- here is the column of the opening hours -->
        <div class="col-xl-4 order-xl-2 order-3">
          <!-- here the OpeningHoursComponent is passed inside this component in order to display 
          the opening hours block (the creation of a specific component was needed because it is 
          also used in the TopMapDescription component ) -->
          <OpeningHoursComponent :hours="hours" />
        </div>
        <!-- here is the columns of the general info -->
        <div class="col-xl-3 order-xl-3 order-1">
          <div class="info-style ">
            <h1 class="p-1">{{ name }}</h1>
            <hr style="margin-top:0;">
            <p><span class="attribute">Address: </span>{{ address }}</p>
            <p><span class="attribute">Site: </span><a :href="`${website}`">{{ name }}'s website</a></p>
            <p><span class="attribute">Rating: </span>{{ rating }}/5</p>
          </div>
        </div>

     <!--  </div>
    </div> -->

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
  data() {
    return {
      height: '355px',
    }
  },
}
</script>

<style scoped>
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
h1 {
  font-size: 180%;
}
</style>