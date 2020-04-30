<template>
<v-col>
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

</v-col>

 
</template>
<script>
 
export default {
    data: () => ({

    menuItems: [
      {icon: 'mdi-home', title: 'Nieuws', link: '/'},
      {icon: 'mdi-newspaper', title: 'Methode 1', link: '/methode-1'},
      {icon: 'mdi-newspaper-variant-multiple', title: 'Methode 2', link: '/methode-2'},
      {icon: 'mdi-chart-scatter-plot', title: 'Method3', link: '/methode-3'}
    ],
        
    }),
    
}
</script>

    