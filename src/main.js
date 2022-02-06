import Vue from 'vue'
import App from './App.vue'; // Initial
//import Tree from './Tree.vue'; // Test Component

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

import enLocale from 'element-ui/lib/locale/lang/en';
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN';

import VueRouter from 'vue-router';
import routes from './router/index';

Vue.use(ElementUI, {enLocale} );
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
