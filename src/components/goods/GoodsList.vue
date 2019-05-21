<template>
    
        <!-- <div class="goods-list">
            <router-link class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodslist/'+item.id" tag="div">
                <img :src="item.img" alt="">
                <h1 class="title">{{item.title}}</h1>
                <div class="info">
                    <p class="price">
                        <span class="now">￥{{item.now}}</span>
                        <span class="old">￥{{item.old}}</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩余{{item.remaining}}件</span>
                    </p>
                </div>
            </router-link>
        <mt-button type="danger" size='large'>加载更多</mt-button>
    </div> -->
      <div class="goods-list">
            <div class="goods-item" v-for="item in goodslist" :key="item.id" v-on:click="getList(item.id)">
                <img :src="item.img" alt="">
                <h1 class="title">{{item.title}}</h1>
                <div class="info">
                    <p class="price">
                        <span class="now">￥{{item.now}}</span>
                        <span class="old">￥{{item.old}}</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩余{{item.remaining}}件</span>
                    </p>
                </div>
            </div>
        <mt-button type="danger" size='large'>加载更多</mt-button>
    </div>

    
</template>

<script>
import { parse } from 'querystring';
    export default {
        data(){
            return{
                goodslist:[]
           
                
            }
        },
        methods:{
            getList(id){
                this.$router.push({name:'goodslist',params:{id}})
            },

            getGoodsList(){
             this.$http.get('goods').then((result) => {
                var result=result.body
                this.goodslist=result
             })
            }
        },
        created(){
            this.getGoodsList();
        }
    }
</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    //flex-weap 自动换行
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 10px #ccc;
        margin: 4px 0;//上下  左右
        padding: 2px;
         display: flex;
        flex-direction: column;
         justify-content:space-between;
         min-height:293px; 
       img{
           width: 100%;
       }
       .title{
           font-size: 14px;
       }
       .info{
           background-color: #eee;
           p{
               margin: 0;
               padding: 5px;
           }
           .price{
              
            .now{
                color: red;
                font-weight: bold; //加粗
                font-size: 16px;
           }
           .old{
               
               text-decoration: line-through;//生成横线
               font-size: 12px;
               margin-left: 10px;
           }
           }
             .sell{
               display: flex;
               justify-content:space-between;
               font-size: 13px;
           }
        
       }
    }
}
</style>