// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import Routers from './router/index'
import store from './store'
import './assets/style.css'
Vue.use(Vuex)
Vue.use(VueRouter)

// 路由配置
const RouterConfig = {
  // 使用HTML5的History模式
  mode: 'history',
  routes: Routers
}
const router = new VueRouter(RouterConfig)
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
// 数据排重
function getFilterArray (array) {
  const res = []
  const json = {}
  for( let i = 0; i<array.length; i++){
    const _self = array[i];
    if(!json[_self]) {
      res.push(_self)
      json[_self] = 1
    }
  }
  return res
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => {
    return h(App)
  }
})

export default getFilterArray
