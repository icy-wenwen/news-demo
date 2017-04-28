import Vue from 'vue'
import App from './App.vue'
require('./assets/css/base.css')
import VueRouter from 'vue-router'
import RouterConfig from './router.config'
import store from './store/';
import axios from 'axios'
import Loading from './components/loading';
import filters from './filters'

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

// 关于axios的配置
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('showLoading')  
  return config;
}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function (error) {
  return Promise.reject(error);
});
//axios.defaults.baseURL='http://localhost:8082/';  配置请求的跟路径
Vue.prototype.$http=axios;  /*把axios对象挂在vue原型上*/
Vue.use(VueRouter);
Vue.use(Loading)

const router = new VueRouter({
  mode:'history',
  scrollBehavior: () => ({ 
    y: 0 
  }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  routes:RouterConfig
})




new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
