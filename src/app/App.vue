<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script>
import appConfig from '@/app/app.config'

export default {
  page: {
    titleTemplate(title) {
      title = typeof title === 'function' ? title(this.$store) : title
      return title ? `${title} | ${appConfig.title}` : appConfig.title
    }
  }
}
</script>

<style lang="scss">
@import '~normalize.css/normalize.css';
</style>
