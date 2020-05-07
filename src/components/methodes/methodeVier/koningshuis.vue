<template>
    <div id="sport">
        <h5>Wie spreekt de waarheid over koningshuis?</h5>
            <v-row class="nos">
                <v-col
                    v-for="koningshuisResults in koningshuisFilterNos"
                    v-bind:key="koningshuisResults.naam"
                    class="news-feed-list">

                    {{koningshuisResults.koningshuis}}
                </v-col>
            </v-row>
            <v-row class="volkskrant">
            <v-col
                v-for="koningshuisResults in koningshuisFilterVolkskrant"
                v-bind:key="koningshuisResults.naam"
                class="news-feed-list">

                {{koningshuisResults.koningshuis}}
            </v-col>
            </v-row>
            <v-row class="nu">
            <v-col
                v-for="koningshuisResults in koningshuisFilterNu"
                v-bind:key="koningshuisResults.naam"
                class="news-feed-list">

                {{koningshuisResults.koningshuis}}
            </v-col>
            </v-row>
            <v-row class="rtl">
            <v-col
                v-for="koningshuisResults in koningshuisFilterRtl"
                v-bind:key="koningshuisResults.naam"
                class="news-feed-list">

                {{koningshuisResults.koningshuis}}
            </v-col>
            </v-row>
    </div>
</template>
<style scoped>

.row.nos, .row.volkskrant, .row.nu, .row.rtl {
    border-radius: 28px;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    font-weight: 600;
}

.row.volkskrant {
    background: #008bc3;
}

.row.nu {
    background: #1f2544;
}

.row.rtl {
    background: #35a7d7;
}

.row.nos {
    background: #e61e14;
}

.news-feed-list.col {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
}

</style>

<script>
import db from '../firebaseInit'
import firebase, { storage } from 'firebase'
export default {
   data(){
        return{
            methode4: [],
            nos: []
        }
    },

    created(){
        db.collection('methode4').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                'naam' : doc.data().naam,    
                'leeftijd' : doc.data().leeftijd,
                'sport' : doc.data().sport,
                'klimaat' : doc.data().klimaat,
                'politiek' : doc.data().politiek,
                'koningshuis' : doc.data().koningshuis,
                }
                this.methode4.push(data)
            })
        })
    }, 
    computed:{
        koningshuisFilterNos: function() {
            return this.methode4.filter(function(item) {
                const data = item.koningshuis == "NOS"
                
                return data
        })
        },
        koningshuisFilterVolkskrant: function() {
            return this.methode4.filter(function(item) {
                const data = item.koningshuis == "VOLKSKRANT"

                return data
        })
        },
         koningshuisFilterNu: function() {
            return this.methode4.filter(function(item) {
                const data = item.koningshuis == "NU.NL"

                return data
        })
        },
        koningshuisFilterRtl: function() {
            return this.methode4.filter(function(item) {
                const data = item.koningshuis == "RTL"

                return data
        })
        }
    } 


}
</script>