<template>
    <div>
  <mt-swipe :auto="4000">
  <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
    <img :src="item.url" :class={full:isfull}>      
  </mt-swipe-item>
 </mt-swipe>
    </div>
</template>

<script>
    export default {
        props:['lunbotuList','isfull']
    }
</script>

<style lang="scss" scoped>
.mint-swipe{
height: 200px;

.mint-swipe-item{
    img{
        height:100%;
        //width:100%;
    }
   text-align: center;
}

}
.full{
   width:100%; 
}
</style>