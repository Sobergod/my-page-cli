// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Utils from './utils/utils'
import Vuetify from 'vuetify'
import ApiResult from './network/api_result'
import 'vuetify/dist/vuetify.min.css'
// import '@fortawesome/fontawesome-free/css/all.css'
Vue.use(Vuetify, {
  iconfont: 'mdi'
})
const utils = new Utils()
Vue.prototype.$utils = utils
Vue.prototype.$ApiResult = ApiResult
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
