import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyC9Nxu5MjTts_FnRYnIeqAvNc_Xo3WMtnU",
  authDomain: "vue-book-library-5d6d5.firebaseapp.com",
  projectId: "vue-book-library-5d6d5",
  storageBucket: "vue-book-library-5d6d5.appspot.com",
  messagingSenderId: "376703859489",
  appId: "1:376703859489:web:61e3d9b3618bcf24a99c60"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
