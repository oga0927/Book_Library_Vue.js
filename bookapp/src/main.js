import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from './plugins/firebase'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.config.errorHandler = function (error) {
  if (error.name === 'NavigationDuplicated') {
    // routerで遷移する時、同じページに遷移しようとすると起こるエラーを回避
    return
  }
}

new Vue({
  router,
  store,
  vuetify,
  firebase,
  render: h => h(App)
}).$mount('#app')
