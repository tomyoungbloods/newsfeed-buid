<template>
    <div id="methode-een">
        <v-row class="no-padding">
            <v-col class="no-padding">    
                        <v-img
                        src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FScreenshot%202020-04-22%20at%2022.22.19.png?alt=media&token=fa7e28ee-b438-45ea-ba68-67acbf51bcd5"
                        class="white--text align-end border-radius-full"
                        gradient="to bottom, rgba(255,255,255,0) 40%, rgba(80,181,242,1)"
                        height="40vh"
                        
                        >
                            <v-card-title class="font-weight-bold" v-text="this.title"></v-card-title>
                        </v-img>
            </v-col>
        </v-row>
            <v-row class="full-height"> 
                <iframe src="https://player.vimeo.com/video/410763543" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </v-row>
    </div>
</template>
<script>
export default {
     data: () => ({
         title: 'Methode 1' 
     })
}
</script>

<style scoped>
.vp-center {
    height: auto;
}
</style>