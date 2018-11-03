import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import locale from "element-ui/lib/locale/lang/en"
import "element-ui/lib/theme-chalk/index.css"

import NavBar from './Components/NavBar'
import ProductList from './Components/ProductsList'

Vue.use(Element, {locale})

Vue.component('NavBar', NavBar)
Vue.component('ProductList', ProductList)

new Vue({
  el: '#app',
  render: h => h(App)
})
