import Vue from 'vue'
import App from './App.vue'
import { Button , Layout ,Menu , Icon , Carousel } from 'ant-design-vue';
import bootstrap from 'bootstrap'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import $ from 'jquery'
import router from './router/router.js'
import animate from 'animate.css'
Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Layout.name, Layout)
Vue.use(Menu)
Vue.component(Carousel.name,Carousel)
Vue.component(Icon.name,Icon)
new Vue({
  animate,
  bootstrap,
  $,
  router,
  render: h => h(App),
}).$mount('#app')
