import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import { setupVant } from './plugins/vant'

const bootstrap = () => {
  const app = createApp(App)

  // 安装vant 全局
  setupVant(app)

  // 安装pinia
  setupStore(app)

  // 安装路由
  setupRouter(app)

  app.mount('#app')
}

bootstrap()
