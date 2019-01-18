// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import router from './router';
// import './common/stylus/icon.styl'
// TODO: 路由导入
import router from './router';
import app from './App';

Vue.config.productionTip = false;

/* eslint-disable no-new */
// new必须有 对象 ---跳过此检验

new Vue({
  el: '#app',
  router,
  render: c => c(app)
});
