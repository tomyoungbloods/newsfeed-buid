<template>
  <v-app class="myFont">
    <Navbar :key="$route.fullPath"/>
    <v-container>
          <router-view class="px-4 content"></router-view>
    </v-container>
    <BottomBar :key="$route.fullPath"/>
        <v-content>
      <v-snackbar 
        v-model="snackWithButtons"
        :timeout="timeout"
        bottom
        left
        class="snack"
      >
        Er is een nieuwe update!
        <v-spacer />
        <v-btn
          white
          primary
          @click.native="refreshApp"
        >
          {{ snackBtnText }}
        </v-btn>
        <!-- <v-btn
          class="white primary"
          @click="snackWithButtons = false"
        >
        Sluit
        </v-btn> -->
      </v-snackbar>
    </v-content>     
  </v-app>
        
</template>
<style scoped>
@import "./assets/css/style.css";

</style>

<script>
import Navbar from './components/menu/Navbar'
import BottomBar from './components/menu/BottomBar'
export default {
  name: 'App',
  components: {
    Navbar,
    BottomBar
  },
  data () {
    return {
      refreshing: false,
      registration: null,
      snackBtnText: 'Update',
      snackWithBtnText: '',
      snackWithButtons: false,  
      timeout: 0,
    };
  },
  created () {
    // Listen for swUpdated event and display refresh snackbar as required.
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true });
    // Refresh all open app tabs when a new service worker is installed.
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return;
      this.refreshing = true;
      window.location.reload();
    });
  },
  methods: {
    showRefreshUI (e) {
      // Display a snackbar inviting the user to refresh/reload the app due
      // to an app update being available.
      // The new service worker is installed, but not yet active.
      // Store the ServiceWorkerRegistration instance for later use.
      this.registration = e.detail;
      this.snackBtnText = 'Update';
      this.snackWithBtnText = 'New version available!';
      this.snackWithButtons = true;
    },
    refreshApp () {
      this.snackWithButtons = false;
      // Protect against missing registration.waiting.
      if (!this.registration || !this.registration.waiting) { return; }
      this.registration.waiting.postMessage('skipWaiting');
    },
  },
}


</script>

