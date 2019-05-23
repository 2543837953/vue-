<template>
<div class=shopcar_container>
    <div class="goods_list" >
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner" v-for="(item,index) in goodslist" :key="item.id">
           <mt-switch v-model="$store.getters.getGoodsSelected[item.id]"
           @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
           <img :src="item.img_path">
           <div class="info">
               <h1>{{item.title}}</h1>
               <p>
                   <span class="price">￥{{item.now}}</span>
                   <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsId="item.id"></numbox>
                   <a href="#" @click.prevent="remove(item.id,index)">删除</a>
               </p>
           </div>
					</div>
				</div>
			</div>

    </div>
         
            
             <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner settlement">
					<div class="left">
                        <p>总计(不含运费)</p>
                        <p>以勾选商品 <span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span> 件, 总价<span class="red"> ￥{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
                    </div>
                     <mt-button type="danger" >去结算</mt-button>
					</div>
                   
				</div>
			</div>
            <!-- <p>{{this.$store.getters.getGoodsSelected}}</p> -->
</div>

            
  
</template>

<script>
import numbox from '../CommentBox/Shopcar_numbox.vue'
    export default {
        data(){
            return{
              goodslist:[]
            }

        },
        created(){
            this.getGoodsList();
        },
        methods:{
        
        getGoodsList(){
        var idArr=[]
        this.$store.state.car.forEach(item =>idArr.push(item.id));
            if(idArr.length<=0){
                return
            }
       this.$http.get('shopcar').then(result=>{
                 var result=result.body[0].message
                 this.goodslist=result
                 
       })
            },
            remove(id,index){
                //点击删除，把商品从store中根据传递id删除，同时，把当前组件中的goodslist中，对应要删除的那个商品，使用index来删除
                this.goodslist.splice(index,1);
                this.$store.commit('removeFormCar',id)
            },
            selectedChanged(id,val){
                //每当点击开关，把最新的状态同步到state中
                this.$store.commit('updateGoodsSelected',{id,selected:val})
            }
     
        },

        components:{
            numbox
        }
    }
</script>

<style lang="scss" scoped>
.shopcar_container{
    background-color:#eee;
    overflow: hidden; 
.goods_list{
.mui-card-content-inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
img{
    width: 60px;
    height: 60px;
}
h1{
    font-size: 13px;
    margin: 10px;

}
.info{
   
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .price{
        color: red;
        font-weight: bold;
        
    }
}

}
.settlement{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red{
        color: red;
        font-weight: bold;
        font-size: 16px;
    }
}
}
</style>