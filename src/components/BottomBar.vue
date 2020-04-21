<template>
 <v-bottom-navigation
        dark
        fixed
        height="80px"
      >
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

      </v-bottom-navigation>

</template>

<script>
    // import firebase from 'firebase';
export default {
    name: 'bottombar',

    data: () => ({
    menuItems: [
      {icon: 'mdi-home', title: 'Nieuws', link: '/'},
      {icon: 'mdi-email', title: 'Methode 1', link: '/n'},
      {icon: 'mdi-calendar', title: 'Methode 2', link: '/s'},
      {icon: 'mdi-delete', title: 'Methode 3', link: '/methode-3'}
    ]
})
}
 
</script>