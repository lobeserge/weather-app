import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './common/routes.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.use(VueRouter)
const router=new VueRouter({
routes:Routes,
mode:'history'
})
Vue.use(VueAxios, axios);


// export const HTTP = axios.create({
//   baseURL: 'api.openweathermap.org/data/2.5/weather?lat=35&lon=139',
//   headers: {"x-rapidapi-host": "mourits-lyrics.p.rapidapi.com",
//   "x-rapidapi-key": "8c8e1129b0msh4027fda88850c7fp1b49bfjsnc858c376981a"
// }
// })

new Vue({
  render: h => h(App),
  router:router,

}).$mount('#app')
