<template>
    <div id="view-methode-vier">
        <v-row class="no-padding">
            <v-col class="no-padding">    
              <sport></sport>
              <politiek></politiek>
              <koningshuis></koningshuis>
              <klimaat></klimaat>
            </v-col>
        </v-row>
        </div>
</template>


<script>
import sport from './methodes/methodeVier/sport'
import politiek from './methodes/methodeVier/politiek'
import koningshuis from './methodes/methodeVier/koningshuis'
import klimaat from './methodes/methodeVier/klimaat'

export default {
    name: 'view-methode-vier',
    components: {
    sport,
    politiek,
    koningshuis,
    klimaat
  }
}

// import db from './firebaseInit'
// import firebase, { storage } from 'firebase'
// export default {
//    data(){
//         return{
//             methode4: [],
//             nos: []
//         }
//     },

//     created(){
//         db.collection('methode4').get().then(querySnapshot => {
//             querySnapshot.forEach(doc => {
//                 const data = {
//                 'naam' : doc.data().naam,    
//                 'leeftijd' : doc.data().leeftijd,
//                 'sport' : doc.data().sport,
//                 'klimaat' : doc.data().klimaat,
//                 'politiek' : doc.data().politiek,
//                 'koningshuis' : doc.data().koningshuis,
//                 }
//                 this.methode4.push(data)
//             })
//         })
//     }, 
//     computed:{
//         klimaatFilterNos: function() {
//             return this.methode4.filter(function(item) {
//                 const data = item.sport == "NOS"
                
//                 return data
//         })
//         },
//         klimaatFilterVolkskrant: function() {
//             return this.methode4.filter(function(item) {
//                 const data = item.sport == "VOLKSKRANT"

//                 return data
//         })
//         },
//          klimaatFilterNu: function() {
//             return this.methode4.filter(function(item) {
//                 const data = item.sport == "NU.NL"

//                 return data
//         })
//         },
//         klimaatFilterRtl: function() {
//             return this.methode4.filter(function(item) {
//                 const data = item.sport == "RTL"

//                 return data
//         })
//         }
//     } 


// }
   
//         db.collection('methode4').get().then(querySnapshot => {
//             querySnapshot.forEach(doc =>{
//                 next(vm => {
//                     vm.naam = doc.data().naam
//                     vm.leeftijd = doc.data().leeftijd
//                     vm.sport = doc.data().sport
//                     vm.klimaat = doc.data().klimaat
//                     vm.politiek = doc.data().politiek
//                     vm.koningshuis = doc.data().koningshuis
//                 })
//             })
//         })
//     },
// }
</script>

