<template>
<div id="results-4">
    <div class="row">
        <h1 class="zij">Maar, kunnen we tegenwoordig wel zeggen dat nieuws objectief is?</h1>
        <div class="trump">
            <iframe width="240" height="100%" src="https://www.youtube.com/embed/Vqpzk-qGxMU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="jort">
            <video width="240" height="100%" controls>
                <source src="https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/video%2FScreen%20Recording%202020-05-30%20at%2015.20.48.mp4?alt=media&token=2f4d4e3f-f0ab-4903-9f3d-0bf4382d41f0#t=0.1" type="video/mp4">
            </video>
        </div>
        <div>
            <p class="caption center">Niet alleen jij en ik als individu houdt zich bezig met deze vraag. Trump lijkt er van overtuigd dat de media onbetrouwbaar is en spreekt zich regelmatig uit over fake news. In Nederland horen we ook steeds vaker dat geluid. In het fragment hier boven spreekt een burger zich ook uit over bureaus als de CBP</p>
            <div class="center">
                 <v-btn to="/results-5">Laat mij dat zien</v-btn>
            </div>
            
        </div>      
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
        font-size: 16px;
        text-align: center;
        font-weight: 700;
        color: #fff;
        margin-top: 0;
    }

    #results-4 {

        background-image: url("https://firebasestorage.googleapis.com/v0/b/nieuwslandschap.appspot.com/o/news%2FMask%20Group%201%403x.png?alt=media&token=92e40fe8-344f-4e43-b03a-77ccec7fc18f");
        width: 100%;
        min-height: calc(100vh - 80px);
        margin-top: 0;
        justify-content: center;
        align-items: center;
        display: flex;
        background-size: cover;
        color: #fff;
        padding-top: 40px;
    }

    .row{
        display: flex;
        justify-content: center;
    }

    .jort {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    margin-bottom: 20px;
}

.trump {
    display: flex;
    width: 100%;
    margin-left: 20px;
}

p{
    font-weight: 700;
    display: inline-block;
    margin-bottom: 20px !important;
}


</style>