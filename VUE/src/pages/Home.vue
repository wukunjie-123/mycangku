<template>
	<div class="Home">
		<swiper
			:data="list"
			apiName="banner"
		/>
		<div class="box1">
			<!-- <Cell :data="{_id:123321,title:'这波啊',des:'这波是 肉蛋葱鸡'}"/>
			<Cell :index='0' :data="{_id:123321,title:'这波啊',des:'这波是 肉蛋葱鸡'}"/> -->
			<Cell
				v-for="(item,index) of home"
				:key="item._id"
				:data="item"
				:index="index"
				api-name="home"
			/>
		</div>
	</div>
</template>

<script>
	import swiper from '../components/swiper.vue'
	import Cell from '../components/Cell.vue'
	
	export default{
		name:'Home',
		porps:{},
		data(){
			return{
				list:[],
				home:[]
			}
		},
		components:{
			swiper,Cell
		},
		mounted(){
			axios({
				url:'/api/goods/banner',
				params:{_page:1,_limit:3},
				
			}).then(
				res=>{
					console.log(res.data)
				if(res.data.err==0){
					this.list=res.data.data
				 }
			   }
			)
			axios({
				url:'/api/goods/home',
				params:{_page:1,_limit:10},
					
			}).then(
				res=>this.home = res.data.data
			)
		},
		updated(){},
		methods:{}
	}
	
</script>

<style scoped>
	.box1{
		margin: 0 0.4rem;
	}
</style>
