import axios from "axios";
import auth from "./../utils/auth";

export default {
  namespaced: true,
  state: {
    users: [],
    user: null
  },
  getters: {
    all(state) {
      return state.users;
    },
    current(state) {
      return state.user;
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
    unsetUser(state) {
      state.user = null;
    }
  },
  actions: {
    login(context, user) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/v1/user/login", {
            user
          })
          .then(res => {
            auth.setLocalToken(res.data.token);
            context.commit("setUser", res.data.user)
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    getAll(context) {
      return new Promise((resolve, reject) => {
        axios
          .get("api/v1/user/").then(res => {
            context.commit("setUsers", res.data);
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    register(context, data) {
        return new Promise((resolve, reject) => {
          axios.post("/api/v1/user", {
              data
          }).then(res => {
              resolve(res);
              
          }).catch(err => {
              console.log(err);
              reject(err);
            });
        });
    }
  }
};
