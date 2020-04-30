<template>
        <v-row align="center" justify="center" class="ma-12">
        <form @submit.prevent="saveNews">
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
            <input type="file" @change="uploadImage" required>
            <label>News Image1</label>

            <input type="file" @change="uploadImage1">
            <label>News Image2</label>

            <input type="file" @change="uploadImage2">
            <label>News Image2</label>
            

       

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

</template> 

<script>
import db from '../firebaseInit'
import firebase, { storage } from 'firebase'

export default { 


    data(){
        return{
            news_id: null, props: { Number },
            author: null,
            image: null,
            image1: null,
            image2: null,
            title: null,
            text: null,
        }
    },

    methods : {
        saveNews(){
            db.collection('news').add({
                news_id: this.news_id,
                author: this.author,
                image: this.image,
                image1: this.image1,
                image2: this.image2,
                title: this.title,
                text: this.text,
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
                },
                uploadImage1(e) {
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
                    this.image1 = downloadURL;
                    console.log('File available at', downloadURL);
                });
                });
                },
                uploadImage2(e) {
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
                    this.image2 = downloadURL;
                    console.log('File available at', downloadURL);
                });
                });
                }
            }
} 






</script>