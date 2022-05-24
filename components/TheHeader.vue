<template>
  <nav class="navbar navbar-expand-lg navbar-light px-3 header">
    <a class="navbar-brand" href="/"><img class="logo" src="https://drive.google.com/uc?export=view&id=10PsHvYIL1H7_3zTNsNDPPCpW3XyZw2xa" alt=""></a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarToggler" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
        <li
          v-for="(navItem, navItemIndex) of headerList"
          :key="`navItem${navItemIndex}`"
          style="color:white;"
        >
          <nuxt-link :to="navItem.path" style="color:white;" class="nav-link">
            {{ navItem.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script scoped>
export default {
  name: 'TheHeader',
  data() {
    return {
      headerList: [
        {
          name: 'Itineraries',
          path: '/big-deep/itinerary',
        },
        {
          name: 'Points of interest',
          path: '/big-deep/poi',
        },
        {
          name: 'Events',
          path: '/big-deep/event',
        },
        {
          name: 'Services',
          path: '/mid-deep/service',
        },
        {
          name: 'About-Us',
          path: '/about-us',
        },
        {
          name: 'Contact-Us',
          path: '/contact-us',
        }
      ],
    }
  },
}
</script>

<style scoped>
a {
  font-size: 25px;
  font-weight: 300;
}
.nav-link {
  margin: 0 10px 5px 10px;
  border-radius: 10px;
}
.nav-link:hover {
  background: rgba(128, 60, 64, 0.5);
}
.header {
  background: rgb(60, 128, 125);
  
}
.logo {
  height: 70px;
}
</style>
