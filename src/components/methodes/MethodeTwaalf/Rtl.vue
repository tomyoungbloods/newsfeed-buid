<template>
  <div id="rtl-wrapper">
      <p>RTL</p>
    <svg width="auto" height="auto" viewBox="0 0 100 100">
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


  </div>
</template>

<script>
import { hierarchy, pack } from 'd3-hierarchy'
import * as d3 from "d3";
import RtlGoogleFb from '../../data-fb/RtlFb'
import RtlGoogleSite from '../../data-site/RtlGoogleSite'
import RtlGoogleTwitter from '../../data-twitter/RtlTwitter'

export default {
  data() {
    return {
      flowers: [
		  {
          name: "Facebook",
          amount: RtlGoogleFb.search_information.total_results,
          color: '#4267b2'
          },
          {
          name: "Eigen Site",
          amount: RtlGoogleSite.search_information.total_results,
          color: '#1f2544'
          },
          {
          name: "Twitter",
          amount: RtlGoogleTwitter.search_information.total_results,
          color: '#35a7d7'
          },
        //   {
        //   name: VolkskrantGoogleTwitter.search_parameters.q,
        //   amount: VolkskrantGoogleTwitter.search_information.total_results,
        //   color: '#008bc3'
        //   },
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
        .size([100, 100])
        .padding(10)(rootHierarchy)
    }
  }
}
</script>

<style scoped>


svg {
  display: block;
  margin: 0 auto;
}

 p {
    margin-bottom: -36px !important;
    font-weight: 700;
    padding-top: 20px;
    font-size: 10px;
}


.flower {
  transition: transform 0.2s ease-in-out;
  text-anchor: middle;
  font-size: 6px;
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
