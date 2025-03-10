import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import components from './components/index.js'

Vue.config.productionTip = false
Vue.use(components);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
