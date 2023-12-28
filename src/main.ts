import './styles/quasar.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//Quasar
import { Quasar, Notify } from 'quasar'
import quasarLang from 'quasar/lang/pl'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const app = createApp(App)

app.use(createPinia()).use(router).use(Quasar, {
  plugins: {
    Notify
  },
  lang: quasarLang
})

app.mount('#app')
