<template>
  <Layout>
    <PageTitle title="Home Page" />
    <img src="@/app/assets/images/logo.png" alt="Logo" />
  </Layout>
</template>

<script>
import Layout from '@/app/layouts/Main.vue'
import PageTitle from '@/app/components/PageTitle/PageTitle.vue'

export default {
  name: 'Home',
  components: {
    PageTitle,
    Layout
  }
}
</script>
