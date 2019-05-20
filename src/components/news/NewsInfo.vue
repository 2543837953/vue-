<template>
    <div class="newsinfo-container">
        <h3 class="title">{{NewsInfo.title}}</h3>
        <p class="subtitle">
              <span>发布时间:{{NewsInfo.add_time | dateFormat}}</span>
                <span>点击：{{NewsInfo.click}}</span>
        </p>  
<hr>
<div class="content" v-html="NewsInfo.content"></div>
      
    <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
import Comment from '../CommentBox/Comment.vue'

    export default {
        data(){
         return{
             NewsInfo:{

             },
             //子路由向父路由获取id参数的数据
             id:this.$route.params.id,//父路由向子路由传递数据
         }
        },
        created(){
            this.getNewsInfo();
        },
        methods:{
            getNewsInfo(){
                this.$http.get('data/'+this.id).then((result) => {
                      var result=result.body.newsid;
                     this.NewsInfo=result;
                    //  console.log(result.body.newsid);
                })
            }
        },
        components:{
       'comment-box':Comment
        }
    }
</script>

<style lang="scss" >
.newsinfo-container{
    padding: 0 4px;
    .title{
    font-size: 16px;
    text-align: center;
    color: red;
    margin: 15px 0;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{
        color: #ccc;
        //行距  
        line-height: 2em;
         //字与字之间的距离
        letter-spacing: 3px;
        //段落首行缩进
        text-indent: 2em;

    }
}

</style>