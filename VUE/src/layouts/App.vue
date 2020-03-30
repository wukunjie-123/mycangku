<template>
  <div id="app">
   <loading v-if="$root.bLoading"/>
  <Header v-if="$root.bNav"/>
   <router-view></router-view>
   <Footer v-show="$root.bFoot"/>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Login from '../pages/Login.vue'
import loading from '../components/loading.vue'

export default {
  name: 'app',
  components: {
	  Header,Footer,Login,loading
  },
  watch:{
	  $route:{
		  handler(nextValue,PrevValue){
			  console.log('路由变化了',nextValue);
			  let path = nextValue.path;
			  if(/home|follow|Column/.test(path)){
				  this.$root.bNav=this.$root.bFoot=true;
			  }
			  if(/detail|login|reg/.test(path)){
			  				  this.$root.bNav=this.$root.bFoot=false;
			  }
			  if(path.includes('/user')){
				this.$root.bNav=false;
				this.$root.bFoot=true;
			  				  
			  }
		  },
		  immediate:true
	  }
  }
}
</script>

<style>

</style>
