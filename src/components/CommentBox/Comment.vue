<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea name="" id="" cols="30" rows="10" placeholder="请输入要评论的内容（限制字数120）" maxlength="120"
        v-model="msg"></textarea>
        <mt-button type="primary" size="large" v-on:click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in commennts" :key="item.add_time">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name + (i+1)}}&nbsp;&nbsp;发表评论：{{item.add_time | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content === 'undefined' ? '此用户很懒,没有留言' : item.content}}
                </div>
                
            </div>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
        
    </div>
</template>

<script>
 import {Toast} from "mint-ui"
    export default {
        data(){
            return{
                pageIndex:1,
                commennts:[],
                msg:''
            }
        },
        created(){
          
            this.getComment();
        },
        methods:{
          
        getComment(){  //获取评论
            this.$http.get('data/'+this.id+"?pageIndex="+this.pageIndex)
            .then(result=>{
                var result=result.body.newsid.comment;
                //每当获取到新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据 拼接上新数据
                this.commennts=this.commennts.concat(result);
             

          
            })
        },
           postComment(){//发表评论
            if(this.msg.trim().length===0){
                return Toast("评论内容不能为空")
            }
          
            this.$http.post('data/'+this.$route.params.id,{content:this.msg.trim()})

            .then(function(result){ 
        
                var cmt={
                user_name:'密名用户',
                add_time:new Date(),
                content:this.mag.trim()
                };
                this.comments.unshift(cmt);
                this.msg=""
             })
            
        }
        },
        
        // getMore(){//加载更多评论
        // this.pageIndex++;
        // this.getComment();
        // },
        props:['id'],
     
    }
</script>

<style lang="scss" scoped>
 .cmt-container{
    
     h3{
         font-size: 18px;
     }
     textarea{
         font-size: 14px;
         margin: 0;
         height: 85px;
     }
     .cmt-list{
         margin-top: 5px 0;
         .cmt-item{
             font-size: 13px;
             .cmt-title{
                margin-top: 5px;
                 line-height: 30px;
                 background-color: #ccc;
             }
             .cmt-body{
                 line-height: 35px;
                 text-indent: 2em;
             }
         }
     }
 }
</style>