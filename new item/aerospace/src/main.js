// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 导入路由组件
import router from './router'
// 导入ElementUI网站快速生成工具
import ElementUI from 'element-ui'
// 导入ElementUI样式
import 'element-ui/lib/theme-chalk/index.css'
// 导入axios
import axios from 'axios';
// 导入qs,处理axios传回值格式问题
import qs from 'qs';
// 导入jQuery
import $ from "jquery"
// 导入echarts
import echarts from 'echarts'
// 导入fontawesome字体图标库相关文件
import 'font-awesome/css/font-awesome.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'


library.add(fas, far, fab)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)



Vue.config.productionTip = false
// 使用ElementUI
Vue.use(ElementUI)
// 配置axios
Vue.prototype.$ajax = axios;
//配置qs
Vue.prototype.$qs = qs;
// 配置echars
Vue.prototype.$echarts = echarts 

// 路由跳转页面后默认滚动条在顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: function (h) {
    return h(App);
}
}).$mount('#app');
