<template>
    <div class="goodsinfo-container">
        <transition 
  
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        >
        <!-- 半程动画 钩子函数(@before-enter)(@enter)(@after-enter) -->
                <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
           <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :lunbotuList="imgList" :isfull="false"></swiper>
					</div>
				</div>
			</div>

            	<div class="mui-card">
				<div class="mui-card-header">{{ infoList.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                          市场价：<del>￥{{ infoList.old}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ infoList.now}}</span>
                        </p>
                        <p>购买数量：<numbox @getcount="getSelectedCount" :max="infoList.stock_quantity"></numbox>  </p> 
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                                   <mt-button type="danger" size="small" v-on:click="goBallFlag" >加入购物车</mt-button>
                        </p>


					</div>
				</div>
			</div>

            	<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{ infoList.goods_on}}</p>
                        <p>库存情况：{{infoList.stock_quantity}} 件</p>
                        <p>上架时间：{{infoList.time | dateFormat}}</p>

					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                      <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
                </div>
			</div>
         
    </div>
</template>

<script>
import swiper from '../CommentBox/swiper.vue'
import numbox from '../CommentBox/GoodsInfo_numbox.vue'
    export default {
        data(){
            return{
              imgList:[
                  {"id":0, 
     "url":"https://gd1.alicdn.com/imgextra/i1/3482690287/O1CN01QtT8dl1DzUCDSOwVU_!!3482690287.jpg"
    },
    {
        "id":1,
        "url":"https://gd1.alicdn.com/imgextra/i3/3482690287/O1CN01r26GkK1DzUCCGZNaf_!!3482690287.jpg_400x400.jpg"
    },
    {
        "id":2,
        "url":"https://gd2.alicdn.com/imgextra/i2/3482690287/O1CN01k7HoH61DzUCHJcF1z_!!3482690287.jpg"
    }
              ],
             id:this.$route.params.id,
              infoList: {},
              ballFlag:false,//控制小球隐藏显示
              selectedCount:1
                  
            }
        },
        created(){
            this.getinfoList();
        },
        methods:{
            getinfoList(){
                this.$http.get('goods/'+this.id).then((result) => {
                  
                    var result=result.body.infolist
                    this.infoList=result
                    
                })
            },
            goDesc(id){
                 this.$router.push({name:'goodsdesc',params:{id}})
            },
            goComment(id){
                this.$router.push({name:'goodscomment', params:{id}})
            },
            goBallFlag(){
                this.ballFlag=!this.ballFlag;
                //拼接出一个，要保存到store中的car数组里的商品信息对象
                var goodsinfo={id:this.id,
                count:this.selectedCount,
                price:this.infoList.now,
                selected:true}
                this.$store.commit('addToCar',goodsinfo)
            },
            beforeEnter(el){
                el.style.transform="translate(0,0)"
            },
            enter(el,done){
                el.offsetWidth;//不写没有动画
                //获取 小球的页面中的位置
                const ballPosition=this.$refs.ball.getBoundingClientRect();
                //获取购物车徽标 在页面中的位置
                const badgePosition=document.getElementById('badge').getBoundingClientRect();

                const x=badgePosition.left - ballPosition.left;
                const y=badgePosition.top - ballPosition.top;
                el.style.transform=`translate(${x}px,${y}px)`;
                el.style.transition="all 0.5s cubic-bezier(.4,-0.3,1,.68)";
                done();
                
            },
            afterEnter(el){
                this.ballFlag=!this.ballFlag
            },
            getSelectedCount(count){
                this.selectedCount=count;
               
            }


        },
        components:{
        swiper,
        numbox
        }
        
    }
</script>

<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;//把溢出的隐藏
    
    .now_price{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
    .mui-card-footer{
        display: block;
        button{
         margin: 15px 0px;
        }
    }
    .ball{
        background-color:red;
        height: 20px;
        width: 20px;
        border-radius:50%;
        position: absolute;
        z-index: 99;
        top:390px;
        left:146px;
    
    }
}


</style>