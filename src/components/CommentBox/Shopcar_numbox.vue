<template>
    
        	<div class="mui-numbox" data-numbox-min='1' data-numbox-max='10' style=' height:25px;'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" :value='parseInt(initcount)' 
                    @change="getChangeCount" ref="numbox"  readonly   >
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
			</div>
   
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
    export default {
        data(){
        return{
            
        }
        },
        mounted(){
            //初始化数字选（xuan）择框组件
            mui('.mui-numbox').numbox()
        },
        methods:{
            getChangeCount(){
             
                this.$store.commit('updateGoodsinfo',{id:this.goodsId,count:this.$refs.numbox.value});
            }
        },
        props:["initcount",'goodsId']
  
    }
</script>

<style lang="scss" scoped>

</style>