import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import "lib-flexible"
import element from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import APlayer from "@moefe/vue-aplayer" 
// import VueAwesomeSwiper from "vue-awesome-swiper"

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'


// import  { Swiper, Navigation } from 'swiper'



Vue.config.productionTip = false
// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(element)
Vue.use(APlayer,{
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
