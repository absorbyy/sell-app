import Vue from 'vue';
import goods from '../components/goods/goods.vue';
import ratings from '../components/ratings/ratings.vue';
import seller from '../components/seller/seller.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
/* eslint-disable no-new */
export default new VueRouter({
  routes: [
    {path: '/', redirect: '/goods'},
    {path: '/goods', component: goods, name: 'goods'},
    {path: '/ratings', component: ratings, name: 'ratings'},
    {path: '/seller', component: seller, name: 'seller'}
  ],
  linkActiveClass: 'act'
});
