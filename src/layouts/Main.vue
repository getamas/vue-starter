<template>
  <div :class="$style.container">
    <NavBar />
    <slot />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue'

export default {
  components: { NavBar }
}
</script>

<style lang="scss" module>
.container {
  min-width: 1140px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
