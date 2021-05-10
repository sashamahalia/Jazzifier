<template lang="">
  <div>   
    <p>Piano goes here potato</p>
    <div class="keys">
      <LeftKey keycolor=red  pressed=true />
      <MiddleKey />
      <LeftKey offset=true keycolor=orange pressed=true />
      <MiddleKey />
      <LeftKey offset=true keycolor=yellow pressed=true />
      <MiddleKey />
      <LeftKey offset=true keycolor=green pressed=true />
      <LeftKey  />
      <LeftKey  />    
    </div>
  </div>
</template>
<script>
import LeftKey from './pianokeys/LeftKey';
import MiddleKey from './pianokeys/MiddleKey';
export default {
  name: 'Piano',
  components: {
    LeftKey,
    MiddleKey
  }
  
}
</script>
<style lang="scss">
.keys {
  // width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
}
  
</style>