import fastClick from 'fastclick';
import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/styles/reset.css';
import './assets/styles/border.css';

fastClick.attach(document.body);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});