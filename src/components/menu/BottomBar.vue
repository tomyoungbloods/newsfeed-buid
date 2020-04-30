<template>
 <v-bottom-navigation
        dark
        fixed
        height="80px"
      >
      <v-row>
          <LoggedInBar v-if="isLoggedIn"/>
      </v-row>
      <v-row>
          <GuestBar v-if="!isLoggedIn"/>
      </v-row>
        

  </v-bottom-navigation>

</template>

<script>
import firebase from 'firebase'; 
import LoggedInBar from './LoggedInBar'
import GuestBar from './GuestBar'

export default {
    name: 'bottombar',
    components: {
    LoggedInBar,
    GuestBar
  },
      data(){
        return {
            isLoggedIn: false,
            currentUser: false
        }
    },
    created(){
        if(firebase.auth().currentUser) {
            this.isLoggedIn = true;
            this.currentUser = firebase.auth().currentUser.email;
        }
    }
    
};


    
</script>
 