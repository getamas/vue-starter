<template>
  <header>
    <ul class="nav-bar">
      <NavBarItem v-for="route in routes" :key="route.name" :route="route" />
    </ul>
  </header>
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
