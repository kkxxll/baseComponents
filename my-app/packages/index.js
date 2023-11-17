import Icon from './components/Icon.vue'
import Button from './components/Button.vue'

const myPlugin = {
    install(app) {
        app.component('Icon', Icon)
        app.component('Button', Button)
    }
}

export default myPlugin
