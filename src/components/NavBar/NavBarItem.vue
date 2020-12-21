<template>
  <li class="nav-bar-item">
    <RouterLink :to="{ name: route.name }" exact-active-class="is-active">
      {{ route.title }}
    </RouterLink>
  </li>
</template>

<script>
export default {
  name: 'NavBarItem',
  props: {
    route: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.is-active {
  font-weight: bold;
  text-decoration: none;
  color: #39a275;
  cursor: default;
}
</style>
