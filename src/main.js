// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';

import './assets/semantic/dist/semantic.min.css'
import './assets/semantic/dist/semantic.min.js'

Vue.config.productionTip = false;
Vue.use(require('vue-moment'));
Vue.use(Vuex);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
