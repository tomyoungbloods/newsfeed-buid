<template>
    <v-container>
        <v-row align="center" justify="center">
        <form @submit.prevent="saveNews">
      <v-text-field
        v-model="news_id"
        :counter="20"
        label="news_id"
        required
      ></v-text-field>
      <v-text-field
        v-model="author"
        :counter="20"
        label="author"
        required
      ></v-text-field>

        <input type="file" @change="uploadImage" required>
        <label>News Image</label>

        <v-text-field
        v-model="title"
        :counter="20"
        label="title"
        required
      ></v-text-field>

      <v-text-field
        v-model="text"
        :counter="20"
        label="text"
        required
      ></v-text-field>


        <button type="submit" class="btn">Submit</button>
        <router-link to="/news" class="btn grey">Cancel</router-link>
            </form>
        </v-row>
</v-container>
</template> 

<script>
import db from '../firebaseInit'
import firebase, { storage } from 'firebase'

export default { 
    data(){
        return{
            news_id: null,
            author: null,
            image: null,
            title: null,
            text: null,
            time: null,
        }
    },
    methods : {
        saveNews(){
            db.collection('news').add({
                news_id: this.news_id,
                author: this.author,
                image: this.image,
                title: this.title,
                text: this.text,
                time: this.time
            })
            .then(this.$router.push('/')
            )
            },
            uploadImage(e) {
                console.log(new firebase.firestore.Timestamp()) 

                let file = e.target.files[0]

                var storageRef = firebase.storage().ref('news/' + file.name)

                let uploadTask = storageRef.put(file);

                storageRef.put(file);

                    uploadTask.on('state_changed', (snapshot) =>{

                }, (error) => {
                // Handle unsuccessful uploads
                }, () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    this.image = downloadURL;
                    console.log('File available at', downloadURL);
                });
                });
                }
            }
} 






</script>