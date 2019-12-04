import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
 return routerPush.call(this, location).catch(error=> error)
}


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: ()=>import ('../page/homepage.vue')
    },
    {
      path: '/list',
      name: 'List',
      component: ()=>import ('../page/list.vue')
    },
    {
      path: '/list/precise_recommend',
      name: 'Precise_recommend',
      component: ()=>import ('../page/precise_recommend.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=>import ('../page/login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: ()=>import ('../page/register.vue')
    },
    {
      path: '/list/detail',
      name: 'Detail',
      component: ()=>import ('../page/detail.vue')
    },
    {
      path: '/list/ranklist',
      name: 'Ranklist',
      component: ()=>import ('../page/ranklist.vue')
    },
    {
      path: '/list/abstract',
      name: 'Abstract',
      component: ()=>import ('../page/abstract.vue')
    },
    {
      path: '/list/pay',
      name: 'Pay',
      component: ()=>import ('../page/pay.vue')
    },
    {
      path:'/mobile',
      name:'Mobile',
      component: ()=>import('../page/mobile.vue')
    },
    {
      path:'/hangtian1',
      name:'Hangtian1',
      component: ()=>import ('../page/choosepage/hangtian1.vue')
    },
    {
      path:'/hangtian2',
      name:'Hangtian2',
      component: ()=>import ('../page/choosepage/hangtian2.vue')
    },
    {
      path:'/hangtian3',
      name:'Hangtian3',
      component: ()=>import ('../page/choosepage/hangtian3.vue')
    },
    {
      path:'/dashuju1',
      name:'Dashuju1',
      component: ()=>import ('../page/choosepage/dashuju1.vue')
    },
    {
      path:'/dashuju2',
      name:'Dashuju2',
      component: ()=>import ('../page/choosepage/dashuju2.vue')
    },
    {
      path:'/dashuju3',
      name:'Dashuju3',
      component: ()=>import ('../page/choosepage/dashuju3.vue')
    },
    {
      path:'/qukuailian1',
      name:'Qukuailian1',
      component: ()=>import ('../page/choosepage/qukuailian1.vue')
    },
    {
      path:'/qukuailian2',
      name:'Qukuailian2',
      component: ()=>import ('../page/choosepage/qukuailian2.vue')
    },
    {
      path:'/qukuailian3',
      name:'Qukuailian3',
      component: ()=>import ('../page/choosepage/qukuailian3.vue')
    }
    ,
    {
      path:'/qingbaowenxian1',
      name:'Qingbaowenxian1',
      component: ()=>import ('../page/choosepage/qingbaowenxian1.vue')
    },
    {
      path:'/qingbaowenxian2',
      name:'Qingbaowenxian2',
      component: ()=>import ('../page/choosepage/qingbaowenxian2.vue')
    },
    {
      path:'/qingbaowenxian3',
      name:'Qingbaowenxian3',
      component: ()=>import ('../page/choosepage/qingbaowenxian3.vue')
    },
    {
      path:'/suo1',
      name:'Suo1',
      component: ()=>import ('../page/recommendpage/suo1.vue')
    },
    {
      path:'/suo2',
      name:'Suo2',
      component: ()=>import ('../page/recommendpage/suo2.vue')
    },
    {
      path:'/suo3',
      name:'Suo3',
      component: ()=>import ('../page/recommendpage/suo3.vue')
    },
    {
      path:'/ku1',
      name:'Ku1',
      component: ()=>import ('../page/recommendpage/ku1.vue')
    },
    {
      path:'/ku2',
      name:'Ku2',
      component: ()=>import ('../page/recommendpage/ku2.vue')
    },
    {
      path:'/ku3',
      name:'Ku3',
      component: ()=>import ('../page/recommendpage/ku3.vue')
    },
    {
      path:'/mei1',
      name:'Mei1',
      component: ()=>import ('../page/recommendpage/mei1.vue')
    },
    {
      path:'/mei2',
      name:'Mei2',
      component: ()=>import ('../page/recommendpage/mei2.vue')
    },
    {
      path:'/mei3',
      name:'Mei3',
      component: ()=>import ('../page/recommendpage/mei3.vue')
    },
    {
      path:'/e1',
      name:'E1',
      component: ()=>import ('../page/recommendpage/e1.vue')
    },
    {
      path:'/e2',
      name:'E2',
      component: ()=>import ('../page/recommendpage/e2.vue')
    },
    {
      path:'/e3',
      name:'E3',
      component: ()=>import ('../page/recommendpage/e3.vue')
    },
    {
      path:'/ou1',
      name:'Ou1',
      component: ()=>import ('../page/recommendpage/ou1.vue')
    },
    {
      path:'/ou2',
      name:'Ou2',
      component: ()=>import ('../page/recommendpage/ou2.vue')
    },
    {
      path:'/ou3',
      name:'Ou3',
      component: ()=>import ('../page/recommendpage/ou3.vue')
    }
  ]
})


export default router