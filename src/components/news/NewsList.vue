<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in NewsList" :key="item.id">
					<router-link :to="'/home/newslist/' + item.id" >
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发布时间:{{item.add_time | dateFormat('YYYY-MM-DD')}}</span>
                                <span>点击：{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
				
			</ul>
       
    </div>
</template>

<script>

    export default {
        data(){
			return{
			NewsList:[]
			}
		},
		created(){
			this.getNewsList();
		},
		methods:{
			getNewsList(){
				this.$http.get("data").then(result=> {
				 var result=result.body
                   //更换NewsList对象里的值
                   this.NewsList=result;
				})
			}
		}
    }
</script>

<style lang="scss" scoped>
ul{
    li{
        h1{
            font-size: 15px;
        }
        .mui-ellipsis{
            font-size: 15px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
		
		
    }
}
</style>