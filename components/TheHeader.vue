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
      ],
    }
  },
}
</script>

<style scoped>
a{
  font-size: 25px;
}
.nav-link{
  margin: 0 10px 5px 10px;
  border-radius: 25px;
}
.nav-link:hover{
  background: rgb(65, 182, 255);
}
.header {
  background: rgb(135, 206, 250);
}
.logo {
  color: white;
  font-size: 40px;
}
</style>
