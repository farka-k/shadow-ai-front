import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import {store} from './store';
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL= 'http://192.168.50.150:8080'

new Vue({
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')
