<template>
    <div>
  
			<div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id===0?'mui-active':'']" v-for="item in cates" :key="item.id" v-on:click="getPhotoListByCateId(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>

			</div>

			<ul class="photo-list">
			
			<router-link :to="'/home/photolist/'+item.id" v-for="item in list" :key="item.id" tag="li">
				<img v-lazy="item.img_url">
				<div class="info">
					<h1 class="info-title">{{item.title}}</h1>
					<div class="info-body">{{item.zhaiyao}}</div>
				</div>

			</router-link>
			</ul>
					
    </div>
</template>

<script>

//1.导入mui 的js 文件
import mui from '../../lib/mui/js/mui.min.js';
// //2. 初始化滑动组件
// mui('.mui-scroll-wrapper').scroll({
// 	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
// });   
//使用了这个滑动组件但是会报错，页面不会加载 要解决这个错误就要将js的严格模式禁用，
//要禁用严格模式就要安装一个插件(babel-plugin-transform-remove)还要在.babelrc
//进行配置("plugins":["transform-remove-strict-mode"])才能将严格模式禁用

    export default {
        data(){
            return{
				cates:[],
				list:[]
			
            }
		},
   mounted(){//组件挂载后，此方法执行后，页面显示
   mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
 })
	},
	created(){
		this.getAllCategory();
		this.getPhotoListByCateId(0);
	},
        methods:{
			getAllCategory(){
				this.$http.get('lists').then(result=>{
					var result=result.body
					this.cates=result

				})
			},
			getPhotoListByCateId(CateId){
				
				this.$http.get('lists/'+ CateId).then(result=>{
					if(result.body.status===0){
						// console.log(result.body["0"].message);
						// console.log(result.body.message);
						this.list=result.body.message;
						
					}
				})
			}
		}
    }
</script>

<style lang="scss" scoped>
*{
	touch-action: pan-y;

}
.photo-list{
	list-style: none;
	margin: 0;
	padding: 10px;
	padding-bottom: 0px;
	
	li{
		background-color: #ccc;
		text-align: center;
		margin-bottom: 10px;
		box-shadow: 0 0 10px #111;
		border-radius: 5px;
		position: relative;
		
	
	img{
	
		width: 100%;
		vertical-align: middle;
		
		border-radius: 5px;
		

	}

img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.info{
	color: white;
	text-align: left;
	position: absolute;
	bottom: 0;
	background-color: rgba($color:#ccc, $alpha: 0.4);
	max-height: 84px;
	.info-title{
		font-size: 14px;
	}
	.info-body{
		font-size: 13px;

	}
}
	}

}

	
</style>