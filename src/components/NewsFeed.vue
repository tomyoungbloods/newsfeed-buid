<template>
    <div id="new-feed">
       <v-row>
            <v-col>     
                <router-link v-bind:to="{name: 'view-news', params: {news_id: news[0].news_id}}">
                        <v-img
                        v-bind:src= news[0].image
                        class="white--text align-end border-radius "
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="60vh"
                        
                        >
                            <v-card-title class="font-weight-bold" v-text="news[0].title"></v-card-title>
                        </v-img>
                </router-link>
            </v-col>
        </v-row>
        <v-row
        v-for="newsitems in news"
        v-bind:key="newsitems.news_id"
        >
            
            <v-col
            cols="5"
            md="4"
            >
            <router-link v-bind:to="{name: 'view-news', params: {news_id: newsitems.news_id}}">
                
                <v-img
                v-bind:src= newsitems.image
                class="white--text align-end border-radius"
                height="140px"
                > 
                </v-img>   
            </router-link>
            </v-col> 
            
            <v-col
            cols="7"
            md="6"
            >
            <router-link v-bind:to="{name: 'view-news', params: {news_id: newsitems.news_id}}">
                <v-card-title 
                v-text="newsitems.title"
                class="body-2 font-weight-bold"
                ></v-card-title>
            </router-link>
            </v-col>
            
        </v-row>
    </div>
    
</template>

<script>
import db from './firebaseInit'
export default {
    data(){
        return{
            news: []
        }
    },

    created(){
        db.collection('news').orderBy('news_id', 'desc').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                'news_id' : doc.data().news_id,    
                'author' : doc.data().author,
                'title' : doc.data().title,
                'text' : doc.data().text,
                'image' : doc.data().image,
                }
                this.news.push(data)
            })
        }
        
        )
    }
}
</script>