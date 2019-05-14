// 创建 router.js 这个文件的目的是使 main.js 里的导入的文件不会太乱太多

import VueRouter from 'vue-router/dist/vue-router.js'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

var routerObj=new VueRouter({
    routes: [
        {path : '/',redirect:'/home'},
        { path : '/home',component:HomeContainer},
        { path : '/member',component:MemberContainer},
        { path : '/search',component:SearchContainer},
        { path : '/shopcar',component:ShopcarContainer}
        
    ],
    linkActiveClass:'mui-active'//linkActiveClass构造自定义一个css类来全局配置router-link的css样式 
})

// 导出routerObj的路由 
export default routerObj