import Vue from 'vue'
import Vuex from 'vuex'
// import product from "./product";
import user from "./user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // product,
    user
  }
});
