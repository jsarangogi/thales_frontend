import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

axios.defaults.baseURL = "http://localhost:8080/api/v1/"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
