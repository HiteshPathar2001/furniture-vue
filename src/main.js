import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';
import VueSmoothScroll from 'vue2-smooth-scroll';
Vue.use(VueSmoothScroll);
Vue.use(VueCarousel);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
