<template>
  <nav class="navbar navbar-expand-lg navbar-light px-3 header">
    <a class="navbar-brand" href="/">Locus</a>
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
          class="nav-item"
        >
          <nuxt-link :to="navItem.path" class="nav-link">
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
          path: '/mid-deep',
        },
        {
          name: 'Points of interest',
          path: '/mid-deep',
        },
        {
          name: 'Events',
          path: '/mid-deep',
        },
        {
          name: 'Services',
          path: '/mid-deep',
        },
        {
          name: 'AboutUs',
          path: '/about-us',
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
  height: 80px;
}
.logo {
  color: white;
  font-size: 40px;
}
</style>
