<template>
    <div id="methode-twaalf">
        <v-row class="no-padding">
            <v-col class="no-padding">    
                        <v-img
                        src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FScreenshot%202020-06-05%20at%2022.29.14.png?alt=media&token=3bfdd1e8-54d5-4b83-b416-8df28f0d99ea"
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
            src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FScreenshot%202020-06-05%20at%2022.29.14.png?alt=media&token=3bfdd1e8-54d5-4b83-b416-8df28f0d99ea"
            >
            </v-img>
             <v-img
            src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FScreenshot%202020-06-05%20at%2022.31.07.png?alt=media&token=9b566d7d-7446-4710-ac86-1b0edde31a6e"
            >
            </v-img>
        </v-row>
    </div>
</template>
<script>
export default {
     data: () => ({
         title: 'Methode 14' ,
         text: ' Om de data in een beeld te vangen is er een ontwerp gemaakt. Daarbij is er eerst uitgetekend wat relevant is voor de resultaten in kaart te brengen. Vanuit daar is er een schets gemaakt wat uiteindelijk in illustrator uitgewerkt is. Uiteindelijk is dit ook gevisualiseerd in de app dit kun je terug vinden onder de knop visualisatie.'
     })
}
</script>
   
