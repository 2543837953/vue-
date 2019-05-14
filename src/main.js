import Vue from 'vue';
import app from './App.vue';

import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

import VueRouter from 'vue-router/dist/vue-router.js';
Vue.use(VueRouter);

import VueResource from 'vue-resource'
Vue.use(VueResource);

import {Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name,Header);



import router from './router.js'
var vm = new Vue({
    el:'#app',
    //把APP这个子组件渲染到父组件身上
    render:r=>r(app),
    router//挂载路由对象到 VM实例上
})