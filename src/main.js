import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Vue from 'vue';
import 'swiper/dist/css/swiper.css';
import App from './App';
import router from './router';

fastClick.attach(document.body);
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
