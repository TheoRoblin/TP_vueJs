import './assets/main.scss'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import axiosPlugin from '@/plugins/axions.js'



import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(axiosPlugin)
const pinia = createPinia()
pinia.use(({store}) => {
    store.$http = app.config.globalProperties.$http
})
app.use(pinia)
app.use(router)

// enregistrement de composants globaux
import AppDebug from '@/components/AppDebug.vue'
app.component(
  // nom à utiliser dans le template
  'AppDebug',
  // le composant à utiliser
  AppDebug
)

app.mount('#app')
