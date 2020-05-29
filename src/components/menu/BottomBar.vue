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

<style scoped>
.theme--dark.v-bottom-navigation {
    background-color: #eee;
    color: #50b5f2;
    box-shadow: #fff 1px 1px 20px !important;
}
</style>

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

 