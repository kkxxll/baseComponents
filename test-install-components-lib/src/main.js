import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import myTinyComponents from 'my-app-tiny-components'
import 'my-app-tiny-components/dist/style.css'

createApp(App).use(myTinyComponents).mount('#app')
