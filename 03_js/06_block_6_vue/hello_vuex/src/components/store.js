import Vue from 'vue'
import Vuex from 'vuex'
import products from "./products";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    count(state) {
      return state.count;
    },
    doubleCount({ count }) {
      return count * 2;
    }
  },
  mutations: {
    // ici vous listez les méthodes synchrones pour agir (mutate) sur le store
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    }
  },
  actions: {
    // ici, méthodes asynchrones ET/OU ayant besoind 'accéder à tout le contexte
    asyncIncrement(ctx) {
      window.setTimeout(() => {
        ctx.state.count += 1;
      }, 2000);
    }
  },
  modules: {
    products
  }
});
