<template>
    <div>
        <Comment :id="id"></Comment>
    </div>
</template>

<script>
 import Comment from '../CommentBox/Comment.vue'
    export default {
        data(){
                return{
                    id:this.$route.params.id
                }
        },
        components:{
          Comment
        }
    }
</script>

<style lang="scss" scoped>

</style>