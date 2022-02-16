import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';
import VueSmoothScroll from 'vue2-smooth-scroll';
import Toasted from 'vue-toasted';
Vue.use(VueSmoothScroll);
Vue.use(VueCarousel);
Vue.use(Toasted, {
  duration: 1500
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
