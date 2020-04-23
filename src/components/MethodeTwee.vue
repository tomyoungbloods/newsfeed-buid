<template>
    <div id="methode-twee">
        <v-row class="no-padding">
            <v-col class="no-padding">    
                        <v-img
                        src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FPHOTO-2020-04-17-14-10-56.jpg?alt=media&token=fe00e1c5-c687-4a86-b53f-0aa33b0ebf42"
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
            src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FPHOTO-2020-04-17-14-10-56.jpg?alt=media&token=fe00e1c5-c687-4a86-b53f-0aa33b0ebf42"
            >
            </v-img>
            <v-img
            src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FPHOTO-2020-04-17-14-13-48.jpg?alt=media&token=bce1b400-ead3-4dbb-8b53-4aa29a15ac4f"
            >
            </v-img>
             <v-img
            src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FPHOTO-2020-04-17-14-07-25.jpg?alt=media&token=7bf1bcc5-9cc9-427e-b1b1-a25a6a37feda"
            >
            </v-img>
        </v-row>
    </div>
</template>
<script>
export default {
     data: () => ({
         title: 'Methode 2' ,
         text: 'Om vanuit mijn methode ook daadwerkelijk data te verzamelen ben ik via Whatsapp mensen gaan benaderen om mijn methode uit te voeren. '
     })
}
</script>
   
