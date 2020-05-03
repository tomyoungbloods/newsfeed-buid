<template>
    <div id="methode-een">
        <v-row class="no-padding">
            <v-col class="no-padding">    
                        <v-img
                        src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FScreenshot%202020-04-22%20at%2022.22.19.png?alt=media&token=fa7e28ee-b438-45ea-ba68-67acbf51bcd5"
                        class="white--text align-end border-radius-full"
                        gradient="to bottom, rgba(255,255,255,0) 40%, rgba(80,181,242,1)"
                        height="40vh"
                        
                        >
                            <v-card-title class="font-weight-bold" ></v-card-title>
                        </v-img>
            </v-col>
        </v-row>
            <v-row class="full-height">
                <v-col cols="12"> 
            <form @submit.prevent="saveNews">
                <v-text-field
                    v-model="naam"
                    :counter="20"
                    label="Naam"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="leeftijd"
                    :counter="2"
                    label="Leeftijd"
                    required
                    type="number"
                ></v-text-field>
               <v-select
                    v-model="sport"
                    :items="items"
                    :menu-props="{ top: true, offsetY: true }"
                    label="Wie spreekt de waarheid over sport"
                ></v-select>
                <v-select
                    v-model="klimaat"
                    :items="items"
                    :menu-props="{ top: true, offsetY: true }"
                    label="Wie spreekt de waarheid over het klimaat"
                ></v-select>
                <v-select
                    v-model="politiek"
                    :items="items"
                    :menu-props="{ top: true, offsetY: true }"
                    label="Wie spreekt de waarheid over de politiek"
                ></v-select>
                <v-select
                    v-model="koningshuis"
                    :items="items"
                    :menu-props="{ top: true, offsetY: true }"
                    label="Wie spreekt de waarheid over het koningshuis"
                ></v-select>
                <v-btn type="submit" color="primary">Submit</v-btn>

            </form>
            </v-col>
            </v-row>
    </div>
</template>
<script>
import db from './firebaseInit'
import firebase, { storage } from 'firebase'

  export default {
    data () {
      return {
       items: ['NOS', 'RTL', 'VOLKSKRANT', 'NU.NL'],

        naam: null,
        leeftijd: null,
        sport: null,
        klimaat: null,
        politiek: null,
        koningshuis: null
      }
    },
    methods : {
        saveNews(){
            db.collection('methode4').add({
                    naam: this.naam,
                    leeftijd: this.leeftijd,
                    sport: this.sport,
                    klimaat: this.klimaat,
                    politiek: this.politiek,
                    koningshuis: this.koningshuis
            })
            .then(this.$router.push('/'))
            }
  }
  }

</script>
