<template>
    <div id="data-visualisatie">
        <div class="row">
        <div>
                    <h1 class="zij">Zij of wij?</h1>
                    <h3>Hier ziet u een overzicht van de uitkomsten uit het onderzoek. Klik hieronder om dieper op de data in te duiken.</h3>
        </div>

        <v-row class="justify-center align-center ma-2">
            <v-col cols="12">
                <img class="contain" src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2Foverzicht.png?alt=media&token=cf883f22-0445-48b4-b21e-b1f01a5d679f">
                
            </v-col>
         </v-row>

        <div>
                    <v-btn to="/data">Vertel meer!</v-btn>
        </div>

    </div>
    </div>
</template>
<style scoped>
    #data-visualisatie {
        background: #0f191d !important;
        width: 100%;
        height: calc(100vh - 80px);
        margin-top: 0;
    }
     h1{
        font-size: 30px;
        text-align: center;
        font-weight: 700;
        color: #fff;
        margin-top: 0;
    }

    #results-2 {
        background: #50B5F2 !important;
        width: 100%;
        height: calc(100vh - 80px);
        margin-top: 0;
        justify-content: center;
        align-items: center;
        display: flex;
    }

    .row{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    h3{
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        text-align: center;
    }
</style>