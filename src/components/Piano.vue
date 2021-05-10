<template lang="">
  <div>
    <p>Piano goes here potato</p>
    <div class="keys">
      <LeftKey />
      <LeftKey />
      <LeftKey />
      <LeftKey />
      <LeftKey />
    </div>
  </div>
</template>
<script>
import LeftKey from './pianokeys/LeftKey';
export default {
  name: 'Piano',
  components: {
    LeftKey
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