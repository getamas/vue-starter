import Vue from 'vue'

import App from '@/app/app.vue'
import router from '@/app/router'
import store from '@/store'

import VFragment from '@/app/components/global/VFragment'

Vue.component('VFragment', VFragment)

Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
