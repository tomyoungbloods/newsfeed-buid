<template>
<v-row>
          <v-btn
          v-for="item in menuItems"
          :key="item.title"
          class="flex-column"
          height="70px"
          router
          :to="item.link"
          >
            <span>{{item.title}}</span>
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>

</v-row>

 
</template>
<script>
 
export default {
    data: () => ({

    menuItems: [
      {icon: 'mdi-home', title: 'Nieuws', link: '/'},
      {icon: 'mdi-newspaper-variant-multiple', title: 'Resultaten', link: '/results-1'},
      {icon: 'mdi-chart-scatter-plot', title: 'Visualisatie', link: '/data-start'},
    ],
        
    }),
    
}
</script>


    