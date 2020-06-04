import Vue from 'vue'
import App from './App.vue'
import router from './router'
import animated from 'animate.css'
import swiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css' // 这里注意具体看使用的版本是否需要引入样式，以及具体位置。

Vue.use(swiper /* { default global options } */)
Vue.use(animated)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
