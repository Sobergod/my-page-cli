import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import routes from '../router.config.js'
const router = new Router({
  routes: routes
})
export default router