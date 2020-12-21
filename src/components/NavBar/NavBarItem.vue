<template>
  <li>
    <RouterLink :to="{ name: route.name }" :exact-active-class="$style.active">
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

<style lang="scss" module>
.active {
  font-weight: bold;
  text-decoration: none;
  color: #39a275;
  cursor: default;
}
</style>
