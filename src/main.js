import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueWow from 'vue-wow'
import './theme/index.css'
import './theme/tailwind.css'
import './theme/theme.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueWow)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
