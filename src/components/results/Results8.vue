<template>
  <div>
    <p class="center">Hoe komt dat?</p>
    <nos></nos>
    <Nu></Nu>
    <rtl></rtl>
    <Volkskrant></Volkskrant>
    

  </div>
</template>
<script>
import Nos from "../methodes/MethodeTien/Nos"
import Rtl from "../methodes/MethodeTien/Rtl"
import Volkskrant from "../methodes/MethodeTien/Volkskrant"
import Nu from "../methodes/MethodeTien/Nu"

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
