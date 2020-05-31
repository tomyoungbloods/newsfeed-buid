<template>
  <div id="nu-wrapper">

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
import NuGoogleFb from '../../data-fb/NuFb'
import NuGoogleSite from '../../data-site/NuGoogleSite'
import NuGoogleTwitter from '../../data-twitter/NuTwitter'

export default {
  data() {
    return {
      flowers: [
		{
          name: "Deelactie",
          amount: 5,
          color: '#4267b2'
          },
          {
          name: "Like",
          amount: 11,
          color: '#1f2544'
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
  font-size: 4px !important;
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
/* 
#nu-wrapper {
  animation: createBox 1s infinite;
  animation-direction:alternate
}
@keyframes createBox {
  0% {
    transform: scale(1.0);
  }
  100% {
    transform: scale(1.05);
  }
} */

p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70%;
    color: #fff;
    font-size: 18px;
    text-align: center;
}
</style>

