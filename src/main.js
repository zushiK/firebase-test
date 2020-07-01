import Vue from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'
// import LightBox from 'vue-image-lightbox'
require('vue-image-lightbox/dist/vue-image-lightbox.min.css');
Vue.config.productionTip = false
Vue.use(VueLazyLoad);

new Vue({
  render: h => h(App),
}).$mount('#app')
