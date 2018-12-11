
export default {
  namespaced: true,
  state: {
    products: [
      { name: "tshirt 1", price: 10 },
      { name: "tshirt 2", price: 40 }
    ]
  },
  getters: {
    all(state) {
      return state.products;
    }
  },
  mutations: {},
  actions: {}
};
