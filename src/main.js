import Vue from 'vue'
import app from './App.vue'
import {Header} from 'mint-ui'
import './lib/mui/css/mui.min.css'



Vue.component(Header.name,Header);

var vm = new Vue({
    el:'#app',
    //把APP这个子组件渲染到父组件身上
    render:r=>r(app)
})