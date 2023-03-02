import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import router from './router'
import service from './service'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as Icons from '@element-plus/icons'
import echarts from 'echarts'

const app = createApp(App)

//app.config.globalProperties.axios = axios //挂在到原型，可以在全局使用
app.config.globalProperties.service = service
app.config.globalProperties.productionTip = false
app.config.globalProperties.$echarts = echarts
// axios.create({
//     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
// })
//路由导航守卫
router.beforeEach((to,from,next)=>{
  if(!localStorage.getItem('username')){
    if(to.path !== '/login'){
      next('/login')
    }else next()
  } next()
})
app.use(router)

for (const [key, component] of Object.entries(Icons)) {
    app.component(key, component)
  }
app.use(ElementPlus)
app.mount('#app')
