<template>
<div>
           <v-app-bar
            relative
            color="#50b5f2"
            class="header-home"
            >
       
        <v-toolbar-title>Nieuwslandschap</v-toolbar-title> <v-spacer></v-spacer>
        <v-btn v-if="isLoggedIn" v-on:click="logout" class="white primary">Logout</v-btn >
        <v-btn v-if="!isLoggedIn" icon medium color="white" dark to="/login" class="no-hover">
                <v-icon white  light>mdi-account-circle</v-icon>
        </v-btn>
            
           </v-app-bar>
           
        </div> 
</template>

<script>
    import firebase from 'firebase';
export default {
    name: 'navbar',
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