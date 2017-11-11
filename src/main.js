import 'core-js/fn/promise';
import 'core-js/fn/array/fill';
import Vue from 'vue';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import vMediaQuery from 'v-media-query';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Dialog, Checkbox, Notification } from 'element-ui';
import './styles/global.scss';
import App from './App';
import store from './store/index';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueAxios, Axios);
Vue.use(Vuex);
Vue.use(vMediaQuery);

Vue.use(Dialog);
Vue.use(Button);
Vue.use(Checkbox);
Vue.prototype.$notify = Notification;
global.$notify = Notification;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
