import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase"
import router from "@/router/index.js"

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    drawer: false,
    user: null,
    isAuthenticated: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
  },
  getters: {

  },
  actions: {
    userRegister({ commit }, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit('setUser', user);
          commit('setIsAuthenticated', true);
          router.push('/search');
        })
        .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/register');
        });
    },
  },
});