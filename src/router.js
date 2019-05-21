// 创建 router.js 这个文件的目的是使 main.js 里的导入的文件不会太乱太多

import VueRouter from 'vue-router/dist/vue-router.js'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/photoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'

var routerObj=new VueRouter({
    routes: [
        {path : '/',redirect:'/home'},
        { path : '/home',component:HomeContainer},
        { path : '/member',component:MemberContainer},
        { path : '/search',component:SearchContainer},
        { path : '/shopcar',component:ShopcarContainer},
        { path : '/home/newslist',component:NewsList},
        { path : '/home/newslist/:id',component:NewsInfo},
        { path : '/home/photolist',component:PhotoList},
        { path : '/home/photolist/:id',component:PhotoInfo},
        { path : '/home/goodslist',component:GoodsList},
        { path : '/home/goodslist/:id',component:GoodsInfo,name:'goodslist'},
        { path : '/home/goodsdesc/:id',component:GoodsDesc,name:'goodsdesc'},
        { path : '/home/goodscomment/:id',component:GoodsComment,name:'goodscomment'}
        
  

        
    ],
    linkActiveClass:'mui-active'//linkActiveClass构造自定义一个css类来全局配置router-link的css样式 
})

// 导出routerObj的路由 
export default routerObj