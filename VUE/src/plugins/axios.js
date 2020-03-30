import axios from 'axios';
import Vue from 'vue';
import router from './router.js'
import vm from '../main.js'
axios.interceptors.request.use(function(config) {
  console.log('请求时拦截器');
  
  let token = window.localStorage.getItem('user')
  token = token ? JSON.parse(window.localStorage.getItem('user')).token : ''
  config.headers={
    token: token
  }
  
  vm.bLoading=true;
  return config;
}, function(error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function(response) {
  console.log('响应时拦截器',response.data.err);
  
  vm.bLoading=false;
  let currentRoute = router.currentRoute.fullPath;
  if(response.data.err===2 && !currentRoute.includes('/login')){
    router.replace({
      path:'/login',
      query:{p:currentRoute}
    })
  } 
  return response;
}, function(error) {
  return Promise.reject(error);
});

Vue.prototype.$axios=axios;
window.axios=axios;
export default axios;