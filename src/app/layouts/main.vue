<script>
import NavBar from '@/app/components/nav-bar.vue'

export default {
  components: { NavBar }
}
</script>

<template>
  <div :class="$style.container">
    <NavBar />
    <slot />
  </div>
</template>

<style lang="scss" module>
.container {
  min-width: 1140px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
