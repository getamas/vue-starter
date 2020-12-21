<template>
  <Layout>
    <PageTitle title="Home Page" />
    <img src="@/assets/images/logo.png" alt="Logo" />
  </Layout>
</template>

<script>
import Layout from '@/layouts/Main.vue'
import PageTitle from '@/components/PageTitle/PageTitle.vue'

export default {
  name: 'Home',
  components: {
    PageTitle,
    Layout
  }
}
</script>
