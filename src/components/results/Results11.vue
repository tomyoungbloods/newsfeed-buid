<template>
<div id="results-2">
    <div class="row">
        <h3>Wie heeft de meeste volgers?</h3>
        <h1 class="zij">NU.nl heeft een stuk meer volgers dan NOS. Hoe komt het dan dat de voetstap van NOS toch vele male groter is dan die van NU.nl</h1>
            <v-btn to="/results-12">Laat mij dat zien!</v-btn>
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
        background: #110e1f !important;
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