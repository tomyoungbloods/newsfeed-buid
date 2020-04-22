<template>
  <v-app class="myFont">
    <Navbar></Navbar>
    <v-container>
          <router-view class="px-4"></router-view>
    </v-container>
    <BottomBar></BottomBar>     
  </v-app>
        
</template>
<style scoped>
@import "./assets/css/style.css";

</style>

<script>
import Navbar from './components/Navbar'
import BottomBar from './components/BottomBar'
export default {
  name: 'App',
  components: {
    Navbar,
    BottomBar
  },
 
}


</script>

