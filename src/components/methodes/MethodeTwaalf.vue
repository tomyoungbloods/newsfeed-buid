<template>
    <div id="methode-twaalf">
        <v-row class="no-padding">
            <v-col class="no-padding">    
                        <v-img
                        src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FScreenshot%202020-05-26%20at%2020.03.07.png?alt=media&token=9d19206a-b443-45be-b676-bb1f0ac13a25"
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
            src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FScreenshot%202020-05-26%20at%2020.03.07.png?alt=media&token=9d19206a-b443-45be-b676-bb1f0ac13a25"
            >
            </v-img>
        </v-row>
    </div>
</template>
<script>
export default {
     data: () => ({
         title: 'Methode 12' ,
         text: ' Met de Twitter API ben ik verder gaan kijken naar hoe de volgers van NOS en NU.NL zichzelf verhouden. Daarin kwam naar voren dat er weinig verschil zit tussen de volgers. Vanuit daar ben ik verder gaan kijken naar degene die het delen. Daarin kwam wel een duidelijk verschil naar voren. Namelijk zie je dat de mensen die de NOS delen een stuk populairder zijn op Twitter. '
     })
}
</script>
   
