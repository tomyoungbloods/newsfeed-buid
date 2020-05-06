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
      {icon: 'mdi-newspaper-variant-multiple', title: 'Methode 2', link: '/methode-2'},
      {icon: 'mdi-chart-scatter-plot', title: 'Methode 3', link: '/methode-3'},
      {icon: 'mdi-ab-testing', title: 'Methodes 4', link: '/methode-4'}
    ],
        
    }),
    
}
</script>

    