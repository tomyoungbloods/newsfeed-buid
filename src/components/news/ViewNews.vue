<template>
    <div id="new-dashboard">
        <v-row class="no-padding">
            <v-col class="no-padding">    
                        <v-img
                        :src="image"
                        class="white--text align-end border-radius-full"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="40vh"
                        
                        >
                            <v-card-title class="font-weight-bold" v-text="this.title"></v-card-title>
                        </v-img>
            </v-col>
        </v-row>
        <v-row
        class="ma-4"
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



            <!-- <ul class="collection with-header">
                <li class="collection-header">
                    <h4>{{title}}</h4>
                </li>
                <li class="collection-item">News ID: {{news_id}}</li>
                <li class="collection-item">Schrijver: {{author}}</li>
                <li class="collection-item">News Image: 
                    {{image}}
                </li>
                <li class="collection-item">News Title: {{title}}</li>
                <li class="collection-item">News Text: {{text}}</li>
                <li class="collection-item">News Time: {{time}}</li>
            </ul>
            <img :src="image" style="width:100%;" alt="">

            <router-link to="/news" class="btn grey">Back</router-link>
            <button @click="deleteNews" class="btn red">Delete</button>
                <div class="fixed-action-btn">
                <router-link v-bind:to="{ name: 'edit-news', params: {news: news_id}}" class="btn-floating btn-large red">
                    <i class="fa fa-pencil"></i>
                </router-link>
            </div> -->
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
    // watch: {
    //     '$route': 'fetchData'
    // },
    // methods: {
    //     fetchData (){
    //         db.collection('news').where('news_id', '==', this.$route.params.news_id).get()
    //         .then(querySnapshot => {
    //             querySnapshot.forEach(doc => {
    //                 this.news_id = doc.data().news_id
    //                 this.author = doc.data().author
    //                 this.image = doc.data().image
    //                 this.image1 = doc.data().image1
    //                 this.image2 = doc.data().image2
    //                 this.title = doc.data().title
    //                 this.text = doc.data().text
    //                 this.time = doc.data().time
    //             })
    //         })
    //     },
    //     deleteNews () {
    //     if(confirm('Are you sure?')) {
    //         {
    //         db.collection('news').where('id', '==', this.$route.params.id).get()
    //         .then(querySnapshot => {
    //             querySnapshot.forEach(doc => {
    //                 doc.ref.delete();
    //                 this.$router.push('/news');
    //             })
    //         })
    //     }
    //     }
    // }
    // }
}
</script>

