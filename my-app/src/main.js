import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

import myPlugin from '../packages'
app.use(myPlugin)

app.mount('#app')
