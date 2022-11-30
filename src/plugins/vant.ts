import {
  Toast,
  Dialog,
  NavBar,
  ConfigProvider,
} from 'vant'

import 'vant/lib/index.css'

import type { App } from 'vue'

export const setupVant = (app: App<Element>) => {
  app.use(Toast)
    .use(Dialog)
    .use(ConfigProvider)
    .use(NavBar)
}


