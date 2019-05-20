<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.titles}}</h3>
        <p class="subtitle">
            <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
            <span>点击：{{photoinfo.click}}次</span>
        </p>
        <hr>
        <vue-preview :slides="slide1" ></vue-preview>
        <div class="content" v-html="photoinfo.content"></div>
      
     <cmt-box :id='id'></cmt-box>
     
    </div>
</template>

<script>
import Comment from '../CommentBox/Comment.vue'
    export default {
        data(){
            return{
                id:this.$route.params.id,
                photoinfo:{},
            slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          }
        ]

            }
        },
        components:{
            'cmt-box':Comment
        },
        created(){
 this.getPhotoInfo();
        },
        methods:{
            getPhotoInfo(){
                this.$http.get('lists/'+this.id).then(result=>{
                    console.log(result.body.message)
                    var result=result.body.message[0].info
                    this.photoinfo=result
                })
            }
        
        }
    }
</script>

<style lang="scss" scoped>
.photoinfo-container{
    padding: 3px;
    h3{
        color: #26a2ff;
        font-size: 15px;
        text-align: center;
        margin: 15px 0px;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content{
            line-height: 30px;
    }

  
}

</style>