<template>
  <div>
    <p class="center">Om te kijken waar wij ons nieuws vandaan halen is er eerst gekeken naar welke bron de grootste voetstap online heeft. </p>
    <svg width="300" height="400">
      <g
        class="flower"
        v-for="flower in layoutData.children"
        :key="flower.data.name"
        :style="{
          transform: `translate(${flower.x}px, ${flower.y}px)`
        }"
      >
        <circle class="flower__circle" :r="flower.r" :fill="flower.data.color"></circle>
        <text class="flower__label">{{ flower.data.name }}</text>
      </g>
    </svg>
    <div class="center">
        <v-btn to="/results-8">Waardoor komt dat?</v-btn>
    </div>
</div>
    
</template>

<script>
import { hierarchy, pack } from 'd3-hierarchy'
import * as d3 from "d3";
import NosGoogle from '../data/NosGoogle'
import NuGoogle from '../data/NuGoogle'
import RtlGoogle from '../data/RtlGoogle'
import VolkskrantGoogle from '../data/VolkskrantGoogle'

export default {
  data() {
    return {
      flowers: [
          {
          name: NosGoogle.search_parameters.q,
          amount: NosGoogle.search_information.total_results,
          color: '#e61e14'
          },
          {
          name: NuGoogle.search_parameters.q,
          amount: NuGoogle.search_information.total_results,
          color: '#1f2544'
          },
          {
          name: RtlGoogle.search_parameters.q,
          amount: RtlGoogle.search_information.total_results,
          color: '#35a7d7'
          },
          {
          name: VolkskrantGoogle.search_parameters.q,
          amount: VolkskrantGoogle.search_information.total_results,
          color: '#008bc3'
          },
      ]
    }
  },

  computed: {
    transformedFlowerData() {
      return {
        name: 'Top Level',
        children: this.flowers.map(flower => ({
          ...flower,
          size: flower.amount,
          parent: 'Top Level'
        }))
      }
    },

    layoutData() {
      // Generate a D3 hierarchy
      const rootHierarchy = hierarchy(this.transformedFlowerData)
        .sum(d => d.size)
        .sort((a, b) => {
          return b.value - a.value
        })

      // Pack the circles inside the viewbox
      return pack()
        .size([300, 400])
        .padding(10)(rootHierarchy)
    }
  }
}
</script>

<style scoped>
body {
  font: 16px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
}

svg {
  display: block;
  margin: 0 auto;
}

.flower {
  transition: transform 0.2s ease-in-out;
  text-anchor: middle;
  font-size: 10px;
}

.flower__circle {
  transition: r 0.2s ease-in-out;
}

.flower__label {
  fill: #fff;
  font-weight: bold;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.controls {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.control {
  display: inline-flex;
  flex-direction: column;
  margin: 0 4px;
}

.control label {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 4px;
}

.control input {
  display: block;
  font: inherit;
  width: 100px;
}

.control input {
    font-size: 10px !important;
}
</style>
