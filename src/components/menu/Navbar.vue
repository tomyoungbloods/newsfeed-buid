<template>
<div>
           <v-app-bar
            relative
            color="#50b5f2"
            class="header-home"
            >
                <v-btn
                color="white"
                dark
                icon medium
                @click.stop="drawer = !drawer"
                >
                <v-icon white  light>mdi-menu</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-toolbar-title>Nieuwslandschap</v-toolbar-title>
                <v-spacer></v-spacer> 
                <v-btn
                v-if="isLoggedIn"
                v-on:click="logout"
                class="white primary"
                >
                Logout
                </v-btn >

                <v-btn 
                v-if="!isLoggedIn" 
                icon medium color="white" 
                dark to="/login" 
                class="no-hover"
                >
                    <v-icon white  light>mdi-account-circle</v-icon>
                </v-btn>
           </v-app-bar>

            <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            class="primary white"
            dark
            >
                <v-list-item>
                    <v-list-item-content>
                    <v-list-item-title>Nieuwslandschap</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>
                <v-list dense>
                    <v-list-item
                    v-for="item in items"
                    :key="item.icon"
                    :to="item.link"
                    link
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>

                    </v-list-item>
                </v-list>

                <template v-slot:append>
                    <div class="pa-2">

                        <v-btn
                        block
                        v-if="isLoggedIn"
                        v-on:click="logout"
                        class="dark"
                        >
                        Logout
                        </v-btn >
                        <v-btn
                        block
                        v-if="!isLoggedIn"
                        to="/login"
                        class="dark"
                        >
                        Login
                        </v-btn >
                                        
                    </div>
                </template>

            </v-navigation-drawer>
           
        </div> 
</template>
<style scoped>
.v-btn:not(.v-btn--text):not(.v-btn--outlined):hover:before {
    opacity: 0;
}

</style>

<script>
    import firebase from 'firebase';
export default {
    name: 'navbar',
    data(){
        return {
            isLoggedIn: false,
            currentUser: false,
            drawer: false,
            group: null,

            items: [
                { icon: 'mdi-ab-testing' ,title: 'Methode 3 Resultaten', link: '/methode-3' },
                { icon: 'mdi-chart-scatter-plot' ,title: 'Methode 4 Resultaten', link: '/methode-4-results' },
            ],
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
                this.$router.go({path: this.$router.path});
            });
        }
    },
    watch: {
      group () {
        this.drawer = false
      },
    },    
};
</script>