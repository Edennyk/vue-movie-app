import { createApp } from 'vue'
import App from './App.vue'

// vue router
import router from './routes'
//vuex store
import store from './store'
// load plugin
import loadImage from './plugins/loadImage'

createApp(App)
  .use(router) //$route, $router
  .use(store) //$store
  .use(loadImage) //$loadImage
  .mount('#app')
