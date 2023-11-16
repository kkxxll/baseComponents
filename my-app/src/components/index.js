import HelloWorld from './HelloWorld.vue'
import Demo from './Demo.vue'

export default (app) => {
    app.component('HelloWorld', HelloWorld)
    app.component('Demo', Demo)
}
