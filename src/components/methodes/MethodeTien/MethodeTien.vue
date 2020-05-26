<template>
  <div>
     <h5>Samenvatting Zoekresultaten Google</h5>
    <p>Waar komen de zoekresultaten vandaan?</p>
    <nos></nos>
    <Nu></Nu>
    <rtl></rtl>
    <Volkskrant></Volkskrant>
    

  </div>
</template>
<script>
import * as Twitter from "../../../twitter.js" 
import Nos from "./Nos"
import Rtl from "./Rtl"
import Volkskrant from "./Volkskrant"
import Nu from "./Nu"

export default {
    name: 'MethodeElf',
    components: {
    Nos,
    Rtl,
    Volkskrant,
    Nu
  }
  
}
  
</script>
<style scoped>

div#nos-wrapper, div#rtl-wrapper, div#nu-wrapper, div#volkskrant-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #e61e14;
    color: #fff;
    border-radius: 600px;
    margin-bottom: 20px;
}

div#volkskrant-wrapper {
    max-width: 110px;
    height: 110px;
    background: #008bc3;
}

div#nos-wrapper {
  margin-top: 60px;
}
div#nu-wrapper {
    height: 250px;
    width: 250px;
    background: #110e1f;
}

div#rtl-wrapper {
    max-width: 178px;
    height: 178px;
    background: #2a84aa;
}
</style>
