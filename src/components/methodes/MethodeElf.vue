<template>
    <div id="methode-twee">
        <v-row class="no-padding">
            <v-col class="no-padding">    
                        <v-img
                        src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FScreenshot%202020-05-23%20at%2010.21.27.png?alt=media&token=fe95c6ab-895b-4b0e-ba33-49ff789ba9db"
                        class="white--text align-end border-radius-full"
                        gradient="to bottom, rgba(255,255,255,0) 40%, rgba(80,181,242,1)"
                        height="40vh"
                        
                        >
                            <v-card-title class="font-weight-bold" v-text="this.title"></v-card-title>
                        </v-img>
            </v-col>
            <v-col    
            cols="12"
            class="pt-4"
            > 
                {{this.text}}
            </v-col>
            <v-img
            src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FScreenshot%202020-05-23%20at%2010.21.27.png?alt=media&token=fe95c6ab-895b-4b0e-ba33-49ff789ba9db"
            >
            </v-img>
            <v-img
            src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FScreenshot%202020-05-23%20at%2010.23.26.png?alt=media&token=4e86b65d-7ca0-44a5-a8f8-e09c5aa40c3c"
            >
            </v-img>
        </v-row>
    </div>
</template>
<script>
export default {
     data: () => ({
         title: 'Methode 11' ,
         text: 'Door het analyseren van de data ben ik er achter gekomen dat een NOS ondanks dat ze minder volgers hebben, meer tweeten en ook nog is meer tweeten over corona ze alsnog veel meer gedeeld worden. Dat betekend dat elke tweet van NOS vele malen meer waard is. Ik ben daarom benieuwd naar waardoor dat komt dat mensen ervoor kiezen om een NOS te delen.'
     })
}
</script>
   
