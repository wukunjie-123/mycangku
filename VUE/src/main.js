import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

import './assets/css/base.css'

import './assets/js/font.js'

import router from './plugins/router.js'

import server from './config/serve.js';
import axios from './plugins/axios.js'
Vue.prototype.$baseUrl = server.baseUrl;

let vm =new Vue({
	data:{
		bNav:true,
		bFoot:true,
		BLoading:false,
	},
	
  render: h => h(App),
  router
}).$mount('#app')
export default vm;