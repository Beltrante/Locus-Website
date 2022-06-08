<template>
  <div class="container mt-5">
    <!-- this is the first (top) row of the homepage and includes
     the Title of the site, a small descritpion of its purpose 
    and an animation -->
    <div class="row">
      <div class="col-md margin-top">
        <h1 class="header-index mb-5">Bergamo</h1>
        <p class="snippet">
          Want to visit Bergamo? Not sure where to go? and what to do? You are
          in the right place to find out! Here there is all you need to enjoy
          places, itineraries, events and much more in one of the most beautiful
          city of Lombardy.
        </p>
      </div>
      <div class="col-md center-div">
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          src="https://assets5.lottiefiles.com/packages/lf20_rocodyl6.json"
          background="transparent"
          speed="1"
          style="width: 600px; height: 500px"
          loop
          autoplay
          class="image"
        ></lottie-player>
      </div>
    </div>
    <div class="row mt-4 g-0">
      <!-- this component creates the 4 main sections in which the site is 
      structured (POIs, Itineraries, Events and Services) -->
      <IndexCard
        v-for="section in sections"
        :key="section.id"
        :path="section.path"
        :name="section.name"
        :image="section.image"
        :class="`col-sm-${section.col} p-2 active position-relative menu`"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    // Home Page data never changes
    return {
      sections: {
        s1: {
          id: 0,
          name: 'Places',
          image: 'https://i.ibb.co/89svVxH/places-11zon.webp',
          col: 7,
          path: 'all-places',
        },
        s2: {
          id: 1,
          name: 'Itineraries',
          image: 'https://i.ibb.co/YbTpHfG/itineraries-1-80.webp',
          col: 5,
          path: 'all-itineraries',
        },
        s3: {
          id: 2,
          name: 'Events',
          image: 'https://i.ibb.co/dPjytym/events-11zon-1-80.webp',
          col: 5,
          path: 'all-events',
        },
        s4: {
          id: 3,
          name: 'Services',
          image: 'https://i.ibb.co/frb1D4T/services-11zon-1-80.webp',
          col: 7,
          path: 'all-services',
        },
      },
    }
  },
  head() {
    return {
      title: `Bergamo | Locus`,
      meta: [
        {
          hid: 'descriptionHomepage',
          name: 'description',
          content: `Homepage showing all possible sections of the site`,
        },
        {
          hid: 'keywordsHomepage',
          name: 'keywords',
          content: [
            'Homepage',
            'Itineraries',
            'Places',
            'Events',
            'Services',
            'About the town',
            'Contact-us',
            'Fun',
            'Culture',
            'Art Town',
            'Bergamo',
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.header-index {
  font-weight: 900;
  font-size: 7vw;
}
.center-div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
}
.margin-top {
  margin-top: 80px;
}
@media screen and (max-width: 1100px) {
  .header-index {
    font-size: 3em;
  }
}
@media screen and (max-width: 375px) {
  .header-index {
    font-size: 12vw;
  }
}
@media screen and (max-width: 991px) {
  .margin-top {
    margin-top: 0;
  }
}
</style>
