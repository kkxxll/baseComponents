import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

import HelloWorld from './components/HelloWorld.vue'

const _HelloWorld  = app.component('HelloWorld', HelloWorld)
app.use(_HelloWorld)

app.mount('#app')
