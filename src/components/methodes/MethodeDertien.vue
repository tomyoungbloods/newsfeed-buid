<template>
    <div id="methode-twaalf">
        <v-row class="no-padding">
            <v-col class="no-padding">    
                        <v-img
                        src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FScreenshot%202020-06-05%20at%2022.41.33.png?alt=media&token=d46fc628-2642-4140-b74b-fea3cc1594fd"
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
            src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FScreenshot%202020-06-05%20at%2022.41.33.png?alt=media&token=d46fc628-2642-4140-b74b-fea3cc1594fd"
            >
            </v-img>
             <v-img
            src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FScreenshot%202020-06-05%20at%2022.42.12.png?alt=media&token=9860ff49-198e-4bc1-aec8-879add995236"
            >
            </v-img>
        </v-row>
    </div>
</template>
<script>
export default {
     data: () => ({
         title: 'Methode 13' ,
         text: 'Om het onderzoek wat ik gehad heb samen te vatten en de conclusies daaruit goed in kaart te brengen. Heb ik ervoor gekozen om een verhaallijn uit te schrijven binnen de app. Daarmee loop ik door mijn app heen en leg ik mijn onderzoek uit. Hiervoor is er begonnen met een schets. Vervolgens is die schets verder uitgewerkt met Adobe XD en uiteindelijk is dit verwerkt in de app onder het kopje resultaten.'
     })
}
</script>
   
