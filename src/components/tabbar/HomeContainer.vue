<template>
    <div>
        <!-- 轮播图区域 -->
    <swiper :lunbotuList=list :isfull=true></swiper>
        <!-- 九宫格改造成六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newslist">
                            <img src=../../imags/1.png alt="">
		                    <div class="mui-media-body">新闻资讯</div>
                        </router-link>
		                  </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link  to="/home/photolist">
		                   <img src=../../imags/2.png alt="">
		                    <div class="mui-media-body">图片分享</div></router-link ></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                   <img src=../../imags/3.png alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src=../../imags/4.png alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src=../../imags/5.png alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src=../../imags/6.png alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 


    </div>
    
</template>

<script>
import swiper from '../CommentBox/swiper.vue'
    export default {
        data(){
            return{
                list:[]
            }
        },
        created() {
            this.getLunbotu();
        },
        methods:{
            getLunbotu(){//获取轮播图数据
            this.$http.get("users").then(result=>{
                // this.lunbotuList=result.body.users;
                 var result=result.body
                   //更换list对象里的值
                    this.list=result
               
            })

            }
        },
        components:{
        swiper
        }
    }
</script>

<style lang="scss" scoped>
.mint-swipe{
height: 200px;

.mint-swipe-item{
    img{
        height:100%;
        width:100%;
    }
    &:nth-child(1){
        background-color: #00ffff;
    }
     &:nth-child(2){
        background-color: #ffff00;
    }
     &:nth-child(3){
        background-color: #ff00ff;
        
    }
}

}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: none;
    img{
        height: 60px;
        width: 60px;
    }
    .mui-media-body{
        font-size: 15px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:none;
}

</style>