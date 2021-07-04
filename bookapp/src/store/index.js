import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase"
import router from "@/router/index.js"
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    user: null,
    userName: '',
    isAuthenticated: false,
  },
  // stateを更新する関数が書かれる場所
  mutations: { //第一引数には必ずstateを書く
    setUser(state, payload) {
      state.user = payload;
    },
    onAuthStateChanged(state, user) {
      //firebaseが返したユーザー情報
      state.user = user;
    },
    onUserStatusChanged(state, status) {
      //ログインしてるかどうか true or false
      state.status = status; 
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setUserName(state, payload) {
      state.userName = payload;
      console.log(state.userName);
    },
  },
  // 非同期処理の開始
  actions: { 
    userLogin({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(result => {
          commit('setUserName', result.user.displayName)
          commit('setUserId', result.user.uid)
          commit('setIsAuthenticated', true);
          // ログインしたら投稿一覧画面
          router.push('/bookindex');
        })
        .catch(() => {
          commit('setIsAuthenticated', false);
          alert('ログインに失敗しました');
          router.push('/login');
        });
    },
    
  // 再描画されてもデータを保持
  plugins: [
    createPersistedState({
      key: 'example',
      storage: window.sessionStorage
  })]

});