<template>
    <div id="new-news">
        <h3>Create News Item</h3>
        <div class="row">
           <form @submit.prevent="updateNews" class="col s12">
                <div class="row">
                    <div class="input-field colo s12">
                        <input disabled type="text" v-model="news_id" required>
                        <label>News ID#</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field colo s12">
                        <input type="text" v-model="author" required>
                        <label>Auteur</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field colo s12">
                        <input type="text" v-model="image" required>
                        <label>News Image</label>
                    </div>
                </div>
                 <div class="row">
                    <div class="input-field colo s12">
                        <input type="text" v-model="title" required>
                        <label>Titel</label>
                    </div>
                </div>
                  <div class="row">
                    <div class="input-field colo s12">
                        <input type="text" v-model="text" required>
                        <label>Bericht</label>
                    </div>
                </div>
                  <div class="row">
                    <div class="input-field colo s12">
                        <input type="text" v-model="time" required>
                        <label>Datum Bericht</label>
                    </div>
                </div>
                <button type="submit" class="btn">Submit</button>
                <router-link to="/news" class="btn grey">Cancel</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import db from '../firebaseInit'
export default {
     dept: 'new-employee',
    data(){
        return{
            news_id: null,
            author: null,
            image: null,
            title: null,
            text: null,
            time: null
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
                    vm.title = doc.data().title
                    vm.text = doc.data().text
                    vm.time = doc.data().time
                })
            })
        })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData (){
            db.collection('news').where('news_id', '==', this.$route.params.news_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.news_id = doc.data().news_id
                    this.author = doc.data().author
                    this.image = doc.data().image
                    this.title = doc.data().title
                    this.text = doc.data().text
                    this.time = doc.data().time
                })
            })
        },
        updateNews () {
             db.collection('news').where('news_id', '==', this.$route.params.news_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({
                        news_id: this.news_id,
                        author: this.author,
                        image: this.image,
                        title: this.title,
                        text: this.text,
                        time: this.time,
                    })
                    .then(() =>
                    {
                        this.$router.push({name: 'view-news', params: {news_id: this.news_id}})
                    })
                })
            })
        }
    }
    }
</script>