<template>
<v-col class="logged-in">
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
      {icon: 'mdi-newspaper-plus', title: 'Nieuw Bericht', link: '/new-news'},
      {icon: 'mdi-email-newsletter', title: 'Bewerk Bericht', link: '/news'},
    ],
        
    }),
    
}
</script>

    