import Vue from 'vue';
import app from './App.vue';

import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

import VueRouter from 'vue-router/dist/vue-router.js';
Vue.use(VueRouter);

import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.http.options.root='http://localhost:3000' 

import {Header,Swipe, SwipeItem,Button } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name,Header);
Vue.component(Button.name,Button);

//导入时间插件
import moment from 'moment';
//定义的全局过滤器
Vue.filter("dateFormat",function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern);
})


import router from './router.js'
var vm = new Vue({
    el:'#app',
    //把APP这个子组件渲染到父组件身上
    render:r=>r(app),
    router//挂载路由对象到 VM实例上
})


