import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

import store from '@/state'
import Vuelidate from 'vuelidate'
import VueMq from 'vue-mq'

import '@/scss/app.scss'

Vue.use(VueMq, {
  breakpoints: {
    // default breakpoints - customize this
    mobile: 768,
    tablet: 1440,
    desktop: Infinity
  },
  defaultBreakpoint: 'mobile' // customize this for SSR
})

Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
