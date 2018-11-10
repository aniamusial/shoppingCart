import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import locale from "element-ui/lib/locale/lang/en"
import "element-ui/lib/theme-chalk/index.css"
import VueRouter from 'vue-router'

import NavBar from './Components/NavBar.vue'
import ProductsList from './Components/ProductsList.vue'
import Cart from './Components/Cart.vue'

Vue.use(Element, {locale})
Vue.use(VueRouter)

Vue.component('NavBar', NavBar)
Vue.component('ProductsList', ProductsList)
Vue.component('Cart', Cart)

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App)
})
