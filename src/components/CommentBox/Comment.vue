<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea name="" id="" cols="30" rows="10" placeholder="请输入要评论的内容（限制字数120）" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户:密名&nbsp;&nbsp;发表评论：2019-05-14 10:46
                </div>
                <div class="cmt-body">
                    哈哈哈哈
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
        
    </div>
</template>

<script>
    export default {
        
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