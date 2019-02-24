import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
import fastClick from 'fastclick';
import Vue from 'vue';
import App from './App';
import router from './router';

fastClick.attach(document.body);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
