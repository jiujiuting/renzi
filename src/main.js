import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// svg文件
import '@/icons'
// 使不同浏览器标签样式统一
import 'normalize.css'
// 初始化样式
import '@/styles/reset.css'
// element-ui文件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
