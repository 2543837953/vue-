<template>
    <div>
        <div class="goods-list">
            <div class="goods-item" v-for="item in goodslist" :key="item">
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
            
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                goodslist:[
                    {
                    img:'https://img.alicdn.com/imgextra/i3/51673455/O1CN01mdXnj31bOQtXQ7PUq_!!0-saturn_solar.jpg_220x220.jpg_.webp',
                    title:'大金空气净化器家用除甲醛雾霾PM2.5',
                    now:1900,
                    old:2000,
                    remaining:100

                    },
                    {
                    img:'https://img.alicdn.com/imgextra/i3/24232930/O1CN01IvMxZe1XVz03PGieC_!!0-saturn_solar.jpg_220x220.jpg_.webp',
                    title:'黑白调电脑椅家用舒适转椅可躺办公椅电竞椅黑白调旗舰店6485人付款',
                    now:190,
                    old:200,
                     remaining:108
                    },
                    {
                    img:'https://img.alicdn.com/imgextra/i2/12913813/O1CN01DkGwpi1e2Oh2QpQeV_!!0-saturn_solar.jpg_220x220.jpg_.webp',
                    title:'林氏木业北欧简约现代沙发床小户型布艺沙发',
                    now:800,
                    old:899,
                     remaining:10
                    },
                    {
                     img:'https://img.alicdn.com/imgextra/i2/57180258/O1CN01abUKGW1DmChgpzdke_!!0-saturn_solar.jpg_220x220.jpg_.webp',
                     title:'热销7万余件弹簧乳胶床垫椰棕垫 席梦思定制铂马仕旗舰店827人付款',
                    now:500,
                    old:599,
                     remaining:159
                    }

                ]
           
                
            }
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