import Vue from 'vue'
import Vuex from 'vuex'
import productData from '../mock/index.js'
import getFilterArray from '../main.js'
import { resolve } from 'url';
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    // 商品列表商品
    productList: [],
    // 购物车数据
    cartList: []
  },
  getters: {
    // 使用map方法把productList的brand和color数据过滤过来，用getFilterArray方法对数组去重
    // 品牌
    brands: state => {
      const brands = state.productList.map(item => item.brand)
      return getFilterArray(brands)
    },
    // 颜色
    colors: state => {
      const colors = state.productList.map(item => item.color)
      return getFilterArray(colors)
    }
  },
  mutations: {
    // 添加商品列表
    setProductList (state, data) {
      state.productList = data
    },
    // 添加到购物车
    addCart (state, id) {
      // 先判断购物车是否已有，如果有，数量+1
      const isAdded = state.cartList.find (item => item.id === id )
      if(isAdded) {
        isAdded.count ++
      }else {
        // cartList保存购物车记录，数据格式为数组，每项是对象，包含商品id和数量count
        state.cartList.push({
          id: id,
          count: 1
        })
      }
    },
    // 修改商品数量
    editCartCount (state, payload) {
      const product = state.cartList.find(item => item.id === payload.id)
      product.count += payload.count
    },
    // 删除商品
    deleteCart (state, id){
      // findIndex 返回数组中满足提供的函数的第一个元素的索引，之后的值不会再调用执行函数。
      // 如果没有符合条件的元素返回 -1
      const index = state.cartList.findIndex(item => item.id === id)
      state.cartList.splice(index, 1)
    },
    // 清空购物车
    emptyCart (state) {
      state.cartList = []
    }
  },
  actions: {
    // 请求商品列表
    getProductList (context) {
      // 真实环境通过AJAX获取，这里用异步模拟
      setTimeout(() => {
        context.commit('setProductList', productData)
      }, 500)
    },
    // 购买
    buy (context) {
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('emptyCart')
          resolve()
        }, 500)
      })
    }
  }
})

export default store
