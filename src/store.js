import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex)

// Modules
import market from '@/modules/market';

export default new Vuex.Store({
  state: {
    coins: [],
    loading: false
  },
  mutations: {
    UPDATE_COINS(state, payload) {
      const {data} = payload;
      const coinsArray = Object.keys(data).map(key => {
        return data[key]
      });
      state.coins = coinsArray.sort((a,b) => a.rank - b.rank);
    },
    UPDATE_MARKET_DATA(state, payload) {
      const {data} = payload;
      const {quotes} = data;
      state['market'].totalMarketCap = quotes.USD.total_market_cap;
      state['market'].total24HrVolume = quotes.USD.total_volume_24h;
      state['market'].totalBTCPercentage = data.bitcoin_percentage_of_market_cap;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    getCoins({commit}) {
      commit('SET_LOADING', true);
      axios.get('/api/coins').then((response) => {
        commit('UPDATE_COINS', response.data);
        commit('SET_LOADING', false);
      });
    },
    getMarketData({commit}) {
      commit('SET_LOADING', true);
      axios.get('/api/market_data').then((response) => {
        commit('UPDATE_MARKET_DATA', response.data);
        commit('SET_LOADING', false);
      });
    }
  },
  getters: {
    coins: state => state.coins,
    loading: state => state.loading,
    coinDataFromSlug: (state) => (websiteSlug) => {
      return state.coins.find(coin => coin.website_slug === websiteSlug);
    }
  },
  modules: {
    market: market
  }
})
