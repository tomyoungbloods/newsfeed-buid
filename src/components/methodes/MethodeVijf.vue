<template>
    <div id="methode-vijf">
        <h5>Zoekresultaten Google</h5>
        <!-- <v-col 
        v-for="data in dataset.Nos" 
        v-bind:key="data.total_results"
        >
        {{data.q}}
        {{data.total_results}}
        </v-col>
        <v-col 
        v-for="data in dataset.Nu" 
        v-bind:key="data.total_results"
        >
        {{data.q}}
        {{data.total_results}}
        </v-col>
        <v-col 
        v-for="data in dataset.Rtl" 
        v-bind:key="data.total_results"
        >
        {{data.q}}
        {{data.total_results}}
        </v-col>
        <v-col 
        v-for="data in dataset.Volkskrant" 
        v-bind:key="data.total_results"
        >
        {{data.q}}
        {{data.total_results}}
        </v-col>
        <v-col>
            <svg>
                <circle v-for="(item, index) in dataset"
                :key="index"
                r="40"

                />
            </svg>
        </v-col> -->
        <div>
    <svg width="960" height="375"></svg>
  </div>
        
    </div>
</template>
<script>
import * as d3 from "d3";
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
          },


      mounted () {
    let marge = { top: 10, bottom: 60, left: 10, right: 60 }
    let dataset = [this.Nos.search_information.total_results, this.Nu.search_information.total_results, this.Rtl.search_information.total_results, this.Volkskrant.search_information.total_results]

    let scaleLinear = d3.scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([0, 250])
    let svg = d3.select('svg')
    let g = svg.append('g')
      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')')
    let rectHeight = 30

    g.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', 20)
      .attr('y', function (d, i) {
        return i * rectHeight
      })
      .attr('width', function (d) {
        return scaleLinear(d)
      })
      .attr('height', rectHeight - 5)
      .attr('fill', 'lightblue')
    let xScale = d3.scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([0,250])
    let xAxis = d3.axisBottom(xScale)
      .ticks(3)
    g.append('g')
      .attr('transform', 'translate(' + 20 + ',' + (dataset.length * rectHeight) + ')')
      .call(xAxis)
  }
}
</script>





