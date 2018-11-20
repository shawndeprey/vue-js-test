import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'semantic-ui-css/semantic.css'

// AT 33:34 in screencast 3.

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
