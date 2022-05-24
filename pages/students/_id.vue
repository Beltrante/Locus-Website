<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
      <div class="image">
      
      <img :src="'https://www.greenme.it/wp-content/uploads/2015/08/leonardo_di_caprio_ambiente.jpg'" class="card-image img-fluid" :style="`border: 3px solid`" alt="" />
      
      </div>
      </div>
     
      <div class="col-md-6">
        <h1 class="header">{{ students.st1.name }}</h1>
        <p class="snippet">
          {{ students.st1.email }}
        </p>
      </div>
    </div>
    <hr />
    
  </div>
</template>

<script>


export default {
  name: 'SingleStudent',
  data() {
    return {
      students: {
        st1: {
          id: 0,
          name: 'Alessandro Austoni',
          email:'alessandro.austoni@mail.polimi.it'
          
        },
      },
    }
  },
}
</script>

<style scoped>

</style>