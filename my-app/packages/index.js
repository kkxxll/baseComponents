import Icon from './components/Icon.vue'

const myPlugin = {
    install(app) {
        app.component('Icon', Icon)
    }
}

export default myPlugin
