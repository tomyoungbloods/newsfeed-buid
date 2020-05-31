

            <template>
<div id="results-2">
    <div class="row">
        <h3>Zij of wij?</h3>
        <h1 class="zij">Wie is nep en op hand van de regering?</h1>
        <v-col class="pa-2 d-flex justify-end">
            <v-btn  to="/">Zij</v-btn>
        </v-col>
        <v-col class="pa-2 d-flex justify-start">
            <v-btn to="/">Wij</v-btn>
        </v-col>
            
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
        background: #50b5f2 !important;
        width: 100%;
        height: calc(100vh - 130px);
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