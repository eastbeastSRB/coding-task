// styles
import './assets/main.scss'

// basic config
import { createApp } from 'vue'
import { store } from "./store";

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify-plugin'

// app
const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(store)

app.mount('#app')
