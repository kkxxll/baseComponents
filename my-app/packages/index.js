import HelloWorld from './components/HelloWorld.vue'
import Demo from './components/Demo.vue'

const myPlugin = {
    install(app) {
        app.component('HelloWorld', HelloWorld)
        app.component('Demo', Demo)
    }
}

export default myPlugin
