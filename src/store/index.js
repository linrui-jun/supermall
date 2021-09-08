import Vue from 'vue'
import Vuex from 'vuex'

import getters from "@/store/getters";

//1.安装插件
Vue.use(Vuex)

//2.创建Store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCounter(state,payload) {
      payload.count++
    },
    addToCart(state,payload) {
      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context,payload) {
      return new Promise((resolve,reject) => {
        //1.查找之前数组中是否有该商品
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

        //2.判断oldProduct
        if (oldProduct) { //数量+1
          // oldProduct.count += 1
          context.commit('addCounter',oldProduct)
          resolve('当前的商品数量+1')
        }else {//添加新的商品
          payload.count = 1
          // state.cartList.push(payload)
          context.commit('addToCart',payload)
          resolve('添加了新的商品')
        }
      })
    }
  },
  getters
})

//3.挂载Vue实例上
export default store
