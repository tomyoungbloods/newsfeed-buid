import Vue from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './registerServiceWorker'
import firebase from 'firebase'
import './components/firebaseInit'
import barba from '@barba/core';
import { gsap } from 'gsap';
import swup from 'swup';

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(user => {
  if(!app) {

    app = new Vue({
      vuetify,
      router,
      gsap,
      barba,
      swup,
      render: h => h(App)
    }).$mount('#app')
  }
}) 



