import Vue from 'vue';
import app from './App.vue';

import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';




//1.导入Vuex包
import Vuex from 'vuex'
//2.注册Vuex到Vue中
Vue.use(Vuex)
//每次刚进入网站肯定，会调用main.js 在刚调用的时候，先从本地存储中，把购物车的数据读出来，放到store中
var car=JSON.parse(localStorage.getItem('car')||'[]');
//3.new Vuex.Store()实例，得到一个数据仓储对象
var store=new Vuex.Store({
    state:{
        car:car//将购物车 中的商品的数据，用一个数组存储起来，在 car 数组中，存储一些商品的对象，咱们可以暂时将这个商品对象，
        //设计成这个样子{id：商品的id，count：要购买的数量，price:商品的单价，selected：true}

        
        
        
        
        //可以把state想象成组件中的data，专门用来存储数据的
        //如果在组件中，想要访问,store中的数据，只能通过this.$store.state.***来访问
    },
    mutations:{
            addToCar(state,goodsinfo){//点击加入购物车，把商品信息，保存到store中的car上
             //假设在购物车中，没有找到对应的商品
              var flag=false;
                state.car.some(item=>{
                //some()方法用于检测数组中的元素是否满足指定条件
                //方法会依次执行数组的每个元素,不会对空数组进行检测，不会改变原始数组
                    if(item.id==goodsinfo.id){
                        item.count+=parseInt(goodsinfo.count)
                        flag =true
                        return true
                    }
                } )

                if(!flag){
                    state.car.push(goodsinfo);
                }
                //当更新car之后，把car数组，存储到本地的localStorage中
                localStorage.setItem('car',JSON.stringify(state.car))
            },
            updateGoodsinfo(state,goodsinfo) {
                state.car.some(item=>{
                    if(item.id==goodsinfo.id){
                        item.count=parseInt(goodsinfo.count)
                        return true;
                    }
                })
                localStorage.setItem('car',JSON.stringify(state.car))
            },
            removeFormCar(state,id){
                //根据id，从store中的购物车删除对应的那条商品数据
                state.car.some((item,index)=>{
                    if(item.id==id){
                        state.car.splice(index,1)
                        return true
                    }
                })
                //将删除完毕的，最新的购物车数据，同步到本地存储中
                localStorage.setItem('car',JSON.stringify(state.car))
            },
            updateGoodsSelected(state,info){
                state.car.some(item=>{
                    if(item.id==info.id){
                        item.selected=info.selected
                        return true;
                    }
                })
                localStorage.setItem('car',JSON.stringify(state.car))
            }



        //  注意：如果要操作store中的state值，只能通过调用mutations提供方法，才能操作对应的数据，不推荐直接操作state中的数据,
        // 因为 万一导致了数据紊乱，不能快速定位到错误的源头，因为，每个组件都可能有操作数据的方法

        //注意：如果组件想要调用 mutations 中的方法，只能使用this.$store.commit('方法名')
        //这种调用 mutations 方法的格式，和this.$emit('父组件中的方法名')相似


        //subtract(state,a){
        //注意：mutation 的函数(subtract)参数列表中，最多支持俩个参数，其中，参数1：是state状态;参数二：通过commit提交过来的参数
        //}
    },
    getters:{
        getAllCount(state){
            var c=0;
            state.car.forEach(item=>{
                c+=item.count
            })
            return c
        },
    getGoodsCount(state){
        var  o={}
        state.car.forEach(item=>{
         o[item.id]=item.count
        })
        return o;   
    },
    getGoodsSelected(state){
        var o={}
        state.car.forEach(item=>{
            o[item.id]=item.selected
        })
        return o
    },
    getGoodsCountAndAmount(state){
        var o={
            count:0,//勾选的数量
            amount:0//勾选的总和
        }
        state.car.forEach(item=>{
            if(item.selected){
            o.count+=item.count;
            o.amount+=item.price * item.count
            }
        })
        return o;
        
    }






        //注意：这里的个getters,只负责对外提供数据，不负责 修改数据，如果要修改 state 中的数据，请去找 mutations

        //经过咱们回顾对比，发现getters 中的方法，和组件中的过滤器比较类似，因为过滤器和getters都没修改原数据，
        //都是把原数据做了一层包装，提供给调用者

        // 其次 getters也和computed 比较像，只要state 中的数据发生了变化，那么，如果 getters 也正好也引用了这个数据，
        //那么就会立即触发getters的重新求值

    }
    //如果不知道怎么使用请看笔记本上有总结

})

import VueRouter from 'vue-router/dist/vue-router.js';
Vue.use(VueRouter);

import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.http.options.root=' http://127.0.0.1:3000';
//全局设置post 时候表单数据格式组织形式
Vue.http.options.emulateJSON=true;

// import {Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui';
// Vue.use(Lazyload);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Header.name,Header);
// Vue.component(Button.name,Button);

import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css';

//安装图片预览插件
import VuePreview from 'vue-preview';
Vue.use(VuePreview)
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
    //挂载路由对象到 VM实例上
    router,
    //4.将vuex创建的store挂载到VM实例上，只要挂载到了VM上，任何组件都能使用store来存取数据
    store
})


