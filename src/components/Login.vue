<template>
    <div class="login">
        <v-row 
          align="center"
          justify="center"
          class="full-height"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Mail"
                    name="email"
                    type="text"
                    v-model="email"
                    
                  />

                  <v-text-field
                    id="password"
                    label="Wachtwoord"
                    name="password"
                    type="password"
                    v-model="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn v-on:click="login" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
       </v-row>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'login',
    data: function (){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        login: function(e){
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(user => {
                alert('You are logged in as ${user.email}');
                this.$router.push('/');
            },
            err => {
                alert(err.message);
            })
            e.preventDefault();
        }
    }
}
 
</script>