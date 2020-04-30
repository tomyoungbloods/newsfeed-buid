<template>
  <v-app class="myFont">
    <Navbar :key="$route.fullPath"/>
    <v-container>
          <router-view class="px-4"></router-view>
    </v-container>
    <BottomBar :key="$route.fullPath"/>     
  </v-app>
        
</template>
<style scoped>
@import "./assets/css/style.css";

</style>

<script>
import Navbar from './components/menu/Navbar'
import BottomBar from './components/menu/BottomBar'
export default {
  name: 'App',
  components: {
    Navbar,
    BottomBar
  },
 
}


</script>

