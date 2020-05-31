<template>
  <div>
    <h1 class="center">Wat is de waarde van deze interacties?</h1>
    <p class="center"><span>Gemiddelde deler:</span></p>
    <nos></nos>
  </div>
</template>
<script>
import Nos from "./Results14/Nos"
import Nu from "./Results14/Nu"

export default {
    name: 'MethodeElf',
    components: {
    Nos,
    Nu
  }
  
}
  
</script>
<style scoped>

/* div#nos-wrapper, div#rtl-wrapper, div#nu-wrapper, div#volkskrant-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #e61e14;
    color: #fff;
    border-radius: 600px;
    margin-bottom: 20px;
} */

div#nu-wrapper {
    width: 324px;
    height: 324px;
    background: #110e1f;
}

div#nos-wrapper {
    width: 324px;
    height: 324px;
}


h1{
        font-size: 20px;
        text-align: center;
        font-weight: 700;
        color: #110e1f;
        margin-top: 0;
    }
</style>
