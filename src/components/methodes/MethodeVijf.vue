<template>
    <div id="methode-vijf">
        <h5>Zoekresultaten Google</h5>
        <v-col 
        v-for="data in Nos" 
        v-bind:key="data.total_results"
        >
        {{data.q}}
        {{data.total_results}}
        </v-col>
        <v-col 
        v-for="data in Nu" 
        v-bind:key="data.total_results"
        >
        {{data.q}}
        {{data.total_results}}
        </v-col>
        <v-col 
        v-for="data in Rtl" 
        v-bind:key="data.total_results"
        >
        {{data.q}}
        {{data.total_results}}
        </v-col>
        <v-col 
        v-for="data in Volkskrant" 
        v-bind:key="data.total_results"
        >
        {{data.q}}
        {{data.total_results}}
        </v-col>
    </div>
</template>
<script>
import NosGoogle from '../data/NosGoogle'
import NuGoogle from '../data/NuGoogle'
import RtlGoogle from '../data/RtlGoogle'
import VolkskrantGoogle from '../data/VolkskrantGoogle'

export default{
          data(){
              return{
                  Nos: NosGoogle,
                  Nu: NuGoogle,
                  Rtl: RtlGoogle,
                  Volkskrant: VolkskrantGoogle
              }
          }
      } 
</script>




