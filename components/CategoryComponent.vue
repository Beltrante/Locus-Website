/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component will produce some clickable "pseudo buttons" (they are not real buttons but
NuxtLinks) in order to allow the access to differend category of elements defined in the site
such as:
  - for POIs : Churches, Monuments, Squares & Streest and Cultural services
  - for Events : Summer Events, Autumn Events, Winter Events, Spring Events
  - for Services: Pharmacy, Bank, Restaurant, Supermarket, Theater, GasStation

The required parameters are:
    - the path to be followed in order to reach the specific category;
    - the icon representing the releted category
    - the name of the category */
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>
  <NuxtLink :to="`/${path}/${id}`" class="card-container">
    <div class="external row">
      <div class="col-4">
        <img :src="image" class="card-image" :alt="`${name}-image`" />
      </div>
      <div class="description vertical col-8">
        {{ name }}
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'CategoryComponent',
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.external {
  height: 80px;
}
.external:hover .card-image{
  filter: none;
}
.card-image {
  height: 60px;
  width: 60px;
  filter: invert();
}
.vertical {
  display: flex;
  align-items: center;
  justify-content: center;
}
.description {
  font-size: 1.2em;
}
.card-container {
  padding: 0;
}
</style>