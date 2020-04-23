<template>
    <div id="methode-drie">
            <v-row class=" pb-12"> 

                 <v-btn 
                    v-for="item in methode"
                    :key="item.bron"
                    
                    v-bind:style="{height: item.punten + 'px', width: item.punten + 'px',}" :class="item.bron" 
                    class="bubble"
                    
                    
                    >
                        {{item.bron}}
                    </v-btn>
               
            </v-row>
    </div>
</template>



<script>
export default {
     data: () => ({
    methode: [
        { bron: 'HVNL', punten: 55, color: '#453292;'},
        { bron: 'AD', punten: 100, color: '#453292;'}, 
        { bron: 'CNN', punten: 40, color: '#453292;'}, 
        { bron: 'RTL', punten: 190, color: '#453292;'}, 
        { bron: 'NRC', punten: 100, color: '#453292;'},
        { bron: 'BBC', punten: 110, color: '#453292;'},
        { bron: 'NOS', punten: 200, color: '#453292;'},
        { bron: 'TELEGRAAF', punten: 160, color: '#453292;'},
        { bron: 'VOLKSKRANT', punten: 180, color: '#453292;'},
        { bron: 'NU', punten: 175, color: '#453292;'}, 
        { bron: 'GUARDIAN', punten: 120, color: '#453292;'},
        { bron: 'REUTERS', punten: 40, color: '#453292;'}, 
        
        
      
      
    ]
    })
}
</script>
<style scoped>

button.bubble.v-btn.v-btn--contained.theme--light.v-size--default {
    color: #fff;
}

.HVNL {
    background-color: #50b5f2 !important;
}

.AD {
    background-color: #d10a10 !important;
}

.CNN {
    background-color: #e30000 !important;
}

.NRC {
    background-color: #d30910 !important;
}

.BBC {
    background-color: #eee !important;
    color: #555 !important;
}

.TELEGRAAF {
    background-color: #27509A !important;
}


.VOLKSKRANT {
    background-color: #008bc3 !important;
}

.NU {
    background-color: #1f2544 !important;
}

.REUTERS {
    background-color: #ff8000 !important;
}

.GUARDIAN {
    background-color: #fff !important;
    color: #555 !important;
}

.v-btn:not(.v-btn--text):not(.v-btn--outlined):hover:before {
    opacity: 0;
}

.RTL {
    background-color: #35a7d7 !important;
}

.NOS {
    background-color: #e61e14 !important;
}



</style>