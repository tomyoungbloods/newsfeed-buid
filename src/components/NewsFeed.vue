<template>
    <div id="new-feed">
       <v-row>
            <v-col class="pa-0">     
                <router-link v-bind:to="{name: 'view-news', params: {news_id: news[0].news_id}}">
                        <v-img
                        v-bind:src="news[0].image" 
                        class="white--text align-end border-radius-full"
                        gradient="to bottom, rgba(255,255,255,0) 40%, rgba(80,181,242,1)"
                        height="50vh"
                        
                        >
                            <v-card-title class="headline font-weight-bold" v-text="news[0].title"></v-card-title>
                        </v-img>
                </router-link>
            </v-col>
        </v-row>
        <v-row
        v-for="newsitems in news"
        v-bind:key="newsitems.news_id"
        class="news-feed-list"
        >
            <v-col
            cols="4"
            md="4"
            class="pa-0"
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
            cols="8"
            md="6"
            class="pa-0"
            >
            <router-link v-bind:to="{name: 'view-news', params: {news_id: newsitems.news_id}}">
                <v-card-title 
                v-text="newsitems.title"
                class="subtitle-1 font-weight-bold"
                >
                </v-card-title>
                <v-card-text class="overline">{{newsitems.author}}</v-card-text>
                
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
        })
    }
}
</script>