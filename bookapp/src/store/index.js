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
    drawer: false,
    userName: '',
    status: false,
    isAuthenticated: false,
    count: 0
  },
  // stateを更新する関数が書かれる場所
  mutations: { //第一引数には必ずstateを書く
    setUser(state, payload) {
      state.user = payload;
    },
    onAuthStateChanged(state, user) {
      state.user = user; //firebaseが返したユーザー情報
    },
    onUserStatusChanged(state, status) {
      state.status = status; //ログインしてるかどうか true or false
    },

    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    addCount(state) {
      state.count++;
    },
    setUserName(state, payload) {
      state.userName = payload;
      console.log(state.userName);
    }
    // addCount(state, payload ) { //第二引数でコンポーネントから渡るデータ(オブジェクト)
    //   state.count = payload.count
    // }
  },
  // 非同期処理の開始
  actions: { 
    userRegister({ commit }, { email, password, userName }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(result => {
          // console.log(user);
          result.user.updateProfile({
            displayName: userName
          })
          commit('setUserName', userName)
          commit('setIsAuthenticated', true);
          router.push('/');
        })
        .catch(() => {
          // commit('setUser', null);
          commit('setIsAuthenticated', false);
          alert('登録済みです')
          router.push('/register');
        });
        // firebase
        //   .database()
        //   .ref('users')
        //   .push({
        //     displayName: userName,
        //     email: email,
        //     password: password
        //   });
    },
    userLogin({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(result => {

          commit('setUserName', result.user.displayName)
          // commit('setUser', user);
          commit('setIsAuthenticated', true);
          router.push('/');
        })
        .catch(() => {
          // commit('setUser', null);
          commit('setIsAuthenticated', false);
          alert('ログインに失敗しました');
          router.push('/login');
        });
    },
    userSignOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('app');
        })
        .catch(() => {
          // commit('setUser', null);
          commit('setIsAuthenticated', false);
          alert('ユーザー登録に失敗しました')
          router.push('/login');
        });
    },
    userDelete({ commit }) {
      firebase
        .auth()
        .currentUser.delete()
        .then(() => {
          // commit("setUser", null);
          commit("setIsAuthenticated", false);
          alert('アカウントを削除しました')
          router.push("/");
        })
        .catch(() => {
          // commit("setUser", null);
          commit("setIsAuthenticated", false);
          alert('アカウントを削除に失敗しました')
          router.push("/");
        });
    },

  },
  getters: {
    // isAuthenticated(state) {
    //   return state.user !== null && state.user !== undefined;
    // },
    // user(state) {
    //   return state.user;
    // },
    isSignedIn(state) {
      return state.status;
    },
    getStateUser(state) {
      return state.user;
    },
    getUserName(state) {
      return state.userName;
    },
  },
  plugins: [
    createPersistedState({key: 'example',
    storage: window.sessionStorage
  })]
  
});