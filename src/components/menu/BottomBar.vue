<template>
 <v-bottom-navigation
        dark
        fixed
        height="80px"
      >
      <v-row v-if="isLoggedIn">
          <LoggedInBar/>
      </v-row>
      <v-row v-if="!isLoggedIn">
          <GuestBar/>
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
    },
    methods: {
        logout: function() {
            firebase.auth().signOut().then(() => {
                // alert('Account created for ${user.email}');
                this.$router.push('/login');
            });
        }
    }
    
};

    
</script>
 