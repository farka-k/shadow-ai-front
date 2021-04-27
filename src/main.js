import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import {store} from './store';
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL= '52.79.227.34:80'

new Vue({
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')
