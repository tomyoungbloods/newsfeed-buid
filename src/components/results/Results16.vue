<template>
<div id="results-2">
    <div class="row">
        <h3>Zij of wij?</h3>
        <h2 class="zij center">Nu je gezien hebt hoe de verschillende bronnen groot gemaakt worden.<br><br>En je van te voren gezien hebt dat de media 'Fake' genoemd wordt en op de hand van de regering zou zijn. Mag ik jou dan deze vraag stellen?</h2>
        <v-btn to="/results-17">Yes</v-btn>
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
        background:  #50b5f2 !important;
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
    h2{
        font-size: 20px;
        font-weight: 700;
        color: #fff;
    }
</style>