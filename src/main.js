import { createApp } from 'vue'
import App from './App.vue'

// vue router
import router from './routes'
//vuex store
import store from './store'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
