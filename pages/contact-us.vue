<template>
  <div class="container mt-5">
      <div class="row">
    <CardComponent
      v-for="contact in contacts"
      :key="contact.id"
      :cat="contact"
      class="col-md-4"
    />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUsPage',
  data() {
    return {
      contacts: {
        contact1: {
          id: 0,
          name: 'Event info',
          mail: 'event@livel.com',
          img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/calendar-design-template-98d00f49dd312fb1aac808b09f521f76_screen.jpg?ts=1633715910',
        },
        contact2: {
          id: 1,
          name: 'Itineraries info',
          mail: 'itineraries@livel.com',
          img: 'https://drive.google.com/uc?export=view&id=1ADNF0imK2TBuQY5FnXYQFdCZaOPsqrGd',
        },
        contact3: {
          id: 2,
          name: 'Points of interest info',
          mail: 'poi@livel.com',
          img: 'http://www.mymedbook.eu/wp-content/uploads/map.png',
        },
      },
    }
  },
}
</script>

<style scoped>
</style>