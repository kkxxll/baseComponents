import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

import comp from './components'

app.use(comp)

console.log(comp, app)
app.mount('#app')
