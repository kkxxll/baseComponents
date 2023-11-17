import Icon from './components/Icon.vue'
import Button from './components/Button.vue'

const myPlugin = {
    install(app) {
        app.component('tiny-icon', Icon)
        app.component('tiny-button', Button)
    }
}

export default myPlugin
