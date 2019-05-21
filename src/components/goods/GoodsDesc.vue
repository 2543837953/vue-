<template>
    <div class="goodsdesc_container">
        <h3>{{info.title}}</h3>
        <hr>
        <div class="content" v-html="info.content">
    
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                info:{},
                id:this.$route.params.id
            }
        },
    created(){
        this.goodsDescInfo();
    },
        methods:{
            goodsDescInfo(){
            this.$http.get('goods/'+this.id).then(result=>{
               var result=result.body.infolist.message;
               this.info=result
            })
            }
        }
    }
</script>

<style lang="scss" >
.goodsdesc_container{
    padding: 4px;
    h3{
        font-size:18px;
        color: #226aff;
        text-align: center;
        margin: 15px 0;
    }
    .content{
        img{
            width: 100%;
        }
    }
}
</style>