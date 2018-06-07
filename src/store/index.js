import Vue from 'vue'
import Vuex from 'vuex'
import productData from '../mock/index.js'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    // 商品列表商品
    productList: [],
    // 购物车数据
    cartList: []
  },
  getters: {
  },
  mutations: {
    // 添加商品列表
    setProductList (state, data) {
      state.productList = data
    }
  },
  actions: {
    // 请求商品列表
    getProductList (context) {
      // 真实环境通过AJAX获取，这里用异步模拟
      setTimeout(() => {
        context.commit('setProductList', productData)
      }, 500)
    }
  }
})

export default store
