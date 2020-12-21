<template>
  <nav :class="$style.nav">
    <ul>
      <NavBarItem v-for="route in routes" :key="route.name" :route="route" />
    </ul>
  </nav>
</template>

<script>
import NavBarItem from './NavBarItem.vue'

export default {
  name: 'NavBar',
  components: { NavBarItem },
  data() {
    return {
      routes: [
        {
          name: 'home',
          title: 'Home'
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
.nav {
  ul {
    list-style-type: none;
  }
}
</style>
