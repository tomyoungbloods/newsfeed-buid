import Vue from 'vue'
import router from './router'
import App from './App.vue'
import jquery from 'vue-jquery'
import vuetify from './plugins/vuetify';
import './registerServiceWorker'
import firebase from 'firebase'
import './components/firebaseInit'
import Codebird from '../public/codebird'

 
Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(user => {
  if(!app) {

    app = new Vue({
      vuetify,
      jquery,
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
 

 

var cb = new Codebird
cb.setConsumerKey("p9dYauvFpVsXhC4KeWKk7Vrc8", "039L9wKEeTNxlsoFoXKruwVEgmtaGz1xQPVyDlMGQyNnVAWl1T")

let term  = 'Corona';

cb.__call(
  "search_tweets",
  "q=" + term,
  function(reply) {
    console.log(reply)
  },
  true // this parameter required
);