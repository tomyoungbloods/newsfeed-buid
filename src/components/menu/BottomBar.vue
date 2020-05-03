<template>
 <v-bottom-navigation
        dark
        fixed
        height="80px"
      >

          <LoggedInBar v-if="isLoggedIn"/>


          <GuestBar v-if="!isLoggedIn"/>

        

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
 