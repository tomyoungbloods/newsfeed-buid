<template>
    <div id="new-dashboard">
        <v-row class="no-padding">
            <v-col class="no-padding">    
                        <v-img
                        :src="image"
                        class="white--text align-end border-radius-full"
                        gradient="to bottom, rgba(255,255,255,0) 40%, rgba(80,181,242,1)"
                        height="40vh"
                        
                        >
                            <v-card-title class="font-weight-bold" v-text="this.title"></v-card-title>
                        </v-img>
            </v-col>
        </v-row>
        <v-row
        class="ma-2"
        >

            <v-col
            cols="12"
            class="pb-4"
            > 
                {{this.author}}
            </v-col>

            <v-col
            cols="12"
            > 
                {{this.text}}
            </v-col>
            <v-col
            cols="12"
            > 

               <img :src="image1">
                        
            </v-col>
            <v-col
            cols="12"
            > 
            <img :src="image2">
              
            </v-col>

        </v-row>
        </div>
</template>

<script>
import db from '../firebaseInit'
import firebase, { storage } from 'firebase'
export default {
    data(){
        return{
            news_id:null,
            author:null,
            image:null,
            image1:null,
            image2:null,
            title:null,
            text:null,
            time:null
            }
    },
    //Voordat de pagina geladen wordt haalt hij de data op. 
    beforeRouteEnter (to, from, next){
        db.collection('news').where('news_id', '==', to.params.news_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc =>{
                next(vm => {
                    vm.news_id = doc.data().news_id
                    vm.author = doc.data().author
                    vm.image = doc.data().image
                    vm.image1 = doc.data().image1
                    vm.image2 = doc.data().image2
                    vm.title = doc.data().title
                    vm.text = doc.data().text
                    vm.time = doc.data().time
                })
            })
        })
    },
}
</script>

