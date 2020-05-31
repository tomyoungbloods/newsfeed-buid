<template>
<div id="results-2">
    <div class="row">
        <h3>Wat maakt de NOS groot?</h3>
        <h1 class="zij">Gemiddeld heeft de NOS 50% meer interactie op een tweet dan NU.nl <br><br>  Daarboven op hebben ze ook nog eens aanzienlijk minder volgers</h1>
            <v-btn to="/results-14">Hmm, vertel verder!</v-btn>
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
        background: #FB0218 !important;
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
    h3{
        text-decoration: line-through;
        font-size: 12px;
        color: #fff;
        font-weight: 600;
    }
</style>