import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyDNAGhlOGHhRmyjacIIHd4sZm2w0N596IE',
  authDomain: 'my-address-pj-c8ead.firebaseapp.com',
  databaseURL: 'https://my-address-pj-c8ead.firebaseio.com',
  projectId: 'my-address-pj-c8ead',
  storageBucket: 'my-address-pj-c8ead.appspot.com',
  messagingSenderId: '78470147669',
  appId: '1:78470147669:web:1369b6e22421803d296edc',
  measurementId: 'G-YJNS2DJWS5',
}
firebase.initializeApp(config)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
