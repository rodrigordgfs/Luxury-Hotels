import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

import ModalWizard from 'vue-modal-wizard'
Vue.use(ModalWizard)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
