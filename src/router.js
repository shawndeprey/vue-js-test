import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store';

Vue.use(Router)

const checkIfCoinExists = (to, from, next) => {
  const slug = to.params.slug;
  const coins = store.getters.coins;

  if (!coins.length) {
    store.watch(
      state => state.coins,
      () => {
        if (store.getters.coinDataFromSlug(slug)) next();
        else next('/not-found');
      }
    )
  } else {
    if (store.getters.coinDataFromSlug(slug)) next();
    else next('/not-found');
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => { return import('@/views/home/home-page.vue') }
    },
    {
      path: '*',
      name: 'NotFoundPage',
      component: () => { return import('@/views/not-found/not-found-page.vue') }
    },
    {
      path: '/currency/:slug',
      name: 'CoinDetailsPage',
      component: () => { return import('@/views/coin-details/coin-details-page.vue') },
      props: true,
      beforeEnter: checkIfCoinExists
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: () => { return import('@/views/about/about-page.vue') }
    }
  ]
})
