<template>
<div id="data-visualisatie">

    <div id="waarde-boven">Aantal hits zoekresultaten</div>

    <svg version="1.1" id="data" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 410.05 630.93" style="enable-background:new 0 0 410.05 630.93;" xml:space="preserve">

        <path class="nos" d="M400.56,338.51c0,0-60.56,131.09-111.03,125.17c-50.47-5.91-31.34,40.29-76.7,40.29
            c-60.08,0-89.68-60.12-125.29-125.1c-27.96-51.01-69.93-30.71-73.9-40.36c-7.26-17.64,14.71-108.31,19.58-147.88
            C46.01,86.79,131.29,21.56,208.97,21.56c65.29,0,71.87,88.78,145.69,126.23C404.6,173.13,400.56,338.51,400.56,338.51z"/>

        <path class="nu" d="M400.56,338.51c0,0-17.46,192.4-52.75,199.4c-31.82,6.32-118.3,72.23-147.26,72.23
            c-38.36,0-149.13-116.4-160.95-155.82C28.93,418.75,7.39,340.86,13.63,338.51s79.43-78.28,86.98-102.56
            c19.83-63.8,62.62-107.95,112.21-107.95c41.69,0,45.89,56.68,93.02,80.59C337.73,224.78,400.56,338.51,400.56,338.51z"/>
    </svg>

    <div id="waarde-onder">Eigen aandeel door publicatie op eigen site</div>

    <v-row class="justify-center align-center ma-2">
        <v-col cols="2">
            <v-img src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2Fnos.png?alt=media&token=a2ba78e8-bcee-4971-bf58-45423a7c9150"></v-img>
        </v-col>
        <v-col center>
        = NOS
        </v-col>
        <v-col cols="2">
            <v-img src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2Fnu.png?alt=media&token=c4bf0934-2914-467f-a796-fd261171bb6e"></v-img>
        </v-col>
        <v-col>
        = NU.NL
        </v-col>
    </v-row>

</div>
    
</template>
<script>
import anime from 'animejs'
import test from '../../animate-data'


console.log(test)

export default {
      data() {
    return {

    }
    },
    mounted() {
    const nos = "M400.56,338.51c0,0-17.46,192.4-52.75,199.4c-31.82,6.32-118.3,72.23-147.26,72.23c-38.36,0-149.13-116.4-160.95-155.82C28.93,418.36,7.39,340.47,13.63,338.12s60.84-106.55,68.38-130.83C101.84,143.5,163.44,78.9,213.04,78.9c41.69,0,58.74,83.08,105.87,106.99C350.79,202.07,400.56,338.12,400.56,338.12z"

    const nos1 = "M402.53,348.23c0,0-3.94,203.41-39.23,210.42c-31.82,6.32-125.64,99.11-154.6,99.11c-38.36,0-175.58-152.04-187.4-191.46c-10.67-35.57-12.86-116.73-9.01-122.17c4.5-6.36,14.98-138.49,22.52-162.77c19.83-63.8,124.29-158.8,173.88-158.8c41.69,0,107.47,94.34,154.6,118.26C395.19,156.99,402.53,348.23,402.53,348.23z"

    const nos2 = "M400.56,338.51c0,0-60.56,131.09-111.03,125.17c-50.47-5.91-31.34,40.29-76.7,40.29c-60.08,0-89.68-60.12-125.29-125.1c-27.96-51.01-69.93-30.71-73.9-40.36c-7.26-17.64,14.71-108.31,19.58-147.88C46.01,86.79,131.29,21.56,208.97,21.56c65.29,0,71.87,88.78,145.69,126.23C404.6,173.13,400.56,338.51,400.56,338.51z"

    const nu = "M400.56,338.51c0,0-25.55,100.33-76.02,94.42c-50.47-5.91-67.08,23.65-112.44,23.65c-60.08,0-88.95-12.73-124.57-77.71c-27.96-51.01-69.93-30.71-73.9-40.36c-7.26-17.64,8.51-109.58,19.58-147.88c18.11-62.63,98.08-169.08,175.75-169.08c65.29,0,71.87,88.78,145.69,126.23C404.6,172.74,400.56,338.12,400.56,338.12z"

    const nu1 = "M340.15,367.11c0,0,13.69,87.19-36.78,81.28c-50.47-5.91-44.74,57.44-90.1,57.44c-60.08,0-62.36,24.43-97.98-40.54c-27.96-51.01-12.93-55.67-16.89-65.32c-7.26-17.64,4.69-64.19,15.77-102.49c18.11-62.63,19.18-119.38,96.86-119.38c65.29,0,26.42,31.25,100.24,68.7C361.2,272.14,340.15,367.11,340.15,367.11z"

    const nu2 = "M400.56,338.51c0,0-17.46,192.4-52.75,199.4c-31.82,6.32-118.3,72.23-147.26,72.23c-38.36,0-149.13-116.4-160.95-155.82C28.93,418.75,7.39,340.86,13.63,338.51s79.43-78.28,86.98-102.56c19.83-63.8,62.62-107.95,112.21-107.95c41.69,0,45.89,56.68,93.02,80.59C337.73,224.78,400.56,338.51,400.56,338.51z"

   

    const dataVisualisatie = document.querySelector("#data-visualisatie");

    
    let toggle = 1;

    let waarde = "Gemiddeld aantal volgers";

    // dataVisualisatie.addEventListener('click', () => {
    //     const timeline = anime.timeline({
    //         duration : 750,
    //         easing : "easeOutExpo"
    //     });

    //     timeline.add({
    //         targets: '.nos',
    //         d: [{value: nos}]
    //         })
    //         .add({
    //         targets: '.nu',
    //         d: [{value: nu}]
    //         }, '-= 350')

    // })
    // },


     dataVisualisatie.addEventListener('click', () => {

       


        if(toggle == 1){ 
            
            anime({
                    targets: '.nos',
                    d: [
                        {value: nos},
                        ],
                    duration : 1500,
                    easing: 'easeOutQuad'
            });

            anime({
                    targets: '.nu',
                    d: [
                        {value: nu},
                        ],
                    duration : 1500,
                    easing: 'easeOutQuad'
            });

            toggle = 2; 
            document.getElementById("waarde-boven").innerHTML = 'Aantal volgers op Twitter'
            document.getElementById("waarde-onder").innerHTML = 'Gemiddelde interactie op een tweet'           

        }else if (toggle == 2){
            anime({
                targets: '.nos',
                d: [
                    {value: nos1},
                    ],
                duration : 1500,
                easing: 'easeOutQuad'
        });

        anime({
                targets: '.nu',
                d: [
                    {value: nu1},
                    ],
                duration : 1500,
                easing: 'easeOutQuad'
        });
            document.getElementById("waarde-boven").innerHTML = 'Gemiddeld aantal volgers'
            document.getElementById("waarde-onder").innerHTML = 'Gemiddeld aantal volgend'  
            toggle = 3;
        }
        else if (toggle == 3){
            anime({
                targets: '.nos',
                d: [
                    {value: nos2},
                    ],
                duration : 2500,
                easing: 'easeOutQuad'
        });

        anime({
                targets: '.nu',
                d: [
                    {value: nu2},
                    ],
                duration : 1500,
                easing: 'easeOutQuad'
        });
            toggle = 1;
            document.getElementById("waarde-boven").innerHTML = 'Aantal hits zoekresultaten'
            document.getElementById("waarde-onder").innerHTML = 'Eigen aandeel door publicatie op eigen site' 
        }

    
})
    }
}

</script>
<style scoped>
    #data-visualisatie {
        background: #0f191d !important;
        width: 100%;
        height: calc(100vh - 80px);
        margin-top: 0;
    }

    .v-toolbar__content {
    background: #0f191d !important;
}

    .nos{
        fill:#EE2427;
        opacity: 0.9;
        }
    .nu {
        fill: #272f54;
        opacity: 0.9;
        }
        .col {
            color: #fff;
        }

    div#waarde-boven {
        color: #b2b2b2;
        font-weight: 600;
        text-align: center;
        padding-top: 25px;
        transition: 0.8s;
        font-size: 12px;
    }

    div#waarde-onder {
    color: #b2b2b2;
    font-weight: 600;
    text-align: center;
    padding-top: 25px;
    transition: 0.8s;
    font-size: 12px;
}
</style>
