<template>
    <div id="new-news">
        <h3>Create News Item</h3>
         <v-row align="center" justify="center" class="pt-12">
        <form @submit.prevent="updateNews">
      <v-text-field
        v-model="news_id"
        :counter="20"
        label="number"
        required
        type="number"
      ></v-text-field>
      <v-text-field
        v-model="author"
        :counter="20"
        label="author"
        required
      ></v-text-field>

        <v-text-field
        v-model="title"
        :counter="20"
        label="title"
        required
      ></v-text-field>

      <v-textarea
          v-model="text"
          filled
          name="input-7-4"
          label="Filled textarea"
          value="Hier komt het verhaal"
          required
        ></v-textarea>
        <v-btn type="submit" color="primary">Submit</v-btn>
        <router-link to="/news" class="btn grey">Cancel</router-link>
            </form>
        </v-row>
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
            // image: null,
            title: null,
            text: null,
            // time: null
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
                    // vm.image = doc.data().image
                    vm.title = doc.data().title
                    vm.text = doc.data().text
                    // vm.time = doc.data().time
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
                    // this.image = doc.data().image
                    this.title = doc.data().title
                    this.text = doc.data().text
                    // this.time = doc.data().time
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
                        // image: this.image,
                        title: this.title,
                        text: this.text,
                        // time: this.time,
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