import Vue from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './registerServiceWorker'
import firebase from 'firebase'
import './components/firebaseInit'
import Twitter from 'twitter-lite';
 
Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(user => {
  if(!app) {

    app = new Vue({
      vuetify,
      router,
      render: h => h(App)
    }).$mount('#app')
  }
}) 


const client = new Twitter({
  subdomain: "api", // "api" is the default (change for other subdomains)
  version: "1.1", // version "1.1" is the default (change for other subdomains)
  consumer_key: "p9dYauvFpVsXhC4KeWKk7Vrc8",
  consumer_secret: "039L9wKEeTNxlsoFoXKruwVEgmtaGz1xQPVyDlMGQyNnVAWl1T",
  access_token_key: "239511634-gxvQuYFw8XBqi0ppygYr9fjQZSt9eepe961CErEm",
  access_token_secret: "A3OGpYBIt13jRPy8pgEHrKNFX8NnBz8PwhZIbn4MmH4oO",
});

client
  .get("account/verify_credentials")
  .then(results => {
    console.log("results", results);
  })
  .catch(console.error);
