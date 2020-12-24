<script>
import NavBar from '@/app/components/nav-bar.vue'

export default {
  components: { NavBar }
}
</script>

<template>
  <v-fragment>
    <NavBar />
    <main>
      <div :class="$style.container">
        <slot />
      </div>
    </main>
  </v-fragment>
</template>

<style lang="scss" module>
.container {
  min-width: 1140px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
