<template>
<div id="results-2">
    <div class="row">
        <div>
                    <h1 class="zij">Zij of wij?</h1>
                    <h3>De NOS biedt, als één van de grootste nieuwsorganisaties van Nederland, altijd en overal onafhankelijke en betrouwbare verslaggeving op het gebied van nieuws, sport en evenementen. </h3>
        </div>
        <div>
                    <v-btn to="/results-2">Vertel meer!</v-btn>
        </div>

    </div>        
</div>
   
</template>
<script>
import { gsap } from 'gsap';
import barba from '@barba/core';


export default { 


  mounted() { 
        gsap.from('.row', {opacity: 0, duration: 1.5});

  }  
} 


</script>
<style scoped>
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