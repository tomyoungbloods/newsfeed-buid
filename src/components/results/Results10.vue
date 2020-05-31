<template>
  <div>
    <h1 class="center">Wie heeft de meeste volgers</h1>
    <Nu></Nu>
    <nos></nos>
    

  </div>
</template>
<script>
import Nos from "./Results10/Nos"
import Nu from "./Results10/Nu"

export default {
    name: 'MethodeElf',
    components: {
    Nos,
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

div#nu-wrapper {
    width: 324px;
    height: 324px;
    background: #110e1f;
}

div#nos-wrapper {
    width: 275px;
    height: 275px;
}

div#rtl-wrapper {
    max-width: 178px;
    height: 178px;
    background: #2a84aa;
}

h1{
        font-size: 20px;
        text-align: center;
        font-weight: 700;
        color: #110e1f;
        margin-top: 0;
    }
</style>
