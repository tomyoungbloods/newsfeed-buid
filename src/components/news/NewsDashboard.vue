<template>
    <div id="new-dashboard">
        <h3>Dashboard News</h3>
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>newssss</h4>
            </li>
            <li v-for="newsitems in news" v-bind:key="newsitems.id" class="collection-item">
                {{newsitems.news_id}} 
                {{newsitems.author}} 
                -
                {{newsitems.title}}
                -


                 <router-link class="secondary-content" v-bind:to="{name: 'edit-news', params: {news_id: newsitems.news_id}}">
                    <i class="fa fa-eye"></i>
                </router-link>
            </li>
        </ul>


    </div>
</template>

<script>
import db from '../firebaseInit'
export default {
    data(){
        return{
            news: []
        }
    },

    created(){
        db.collection('news').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                'id' : doc.id, 
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