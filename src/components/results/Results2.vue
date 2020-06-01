<template>
<div id="results-2">
    <div class="row">
        <h1 class="zij">Uit de peiling blijkt dat de ene nieuwsbron betrouwbaarder wordt geacht dan de ander, benieuwd naar het resultaat?</h1>
            <v-btn to="/results-3">Laat mij dat zien</v-btn>
    </div>        
</div>
   
</template>
<script>
import { gsap } from 'gsap';
import barba from '@barba/core';


export default { 


  mounted() { 
        gsap.from('.zij', {opacity: 0, duration: 1.5});

  }  
} 


</script>
<style scoped>
    h1{
        font-size: 20px;
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
    }
</style>