<template lang="">
  <div>   
    <div>
      <p>Debug time!</p>
    </div>
    <div class="keys">
      <LeftKey keycolor=red />
      <MiddleKey />
      <LeftKey keycolor=orange offset=true />
      <MiddleKey />
      <LeftKey keycolor=yellow offset=true />
      <LeftKey keycolor=green />
      <MiddleKey />
      <LeftKey keycolor=blue offset=true />
      <MiddleKey />
      <LeftKey keycolor=indigo offset=true />
      <MiddleKey />
      <LeftKey keycolor=violet offset=true />
      <LeftKey keycolor=red />
      <MiddleKey />
      <LeftKey keycolor=orange offset=true />
      <MiddleKey />
      <LeftKey keycolor=yellow offset=true />
      <LeftKey keycolor=green />
      <MiddleKey />
      <LeftKey keycolor=blue offset=true />
      <MiddleKey />
      <LeftKey keycolor=indigo offset=true />
      <MiddleKey />
      <LeftKey keycolor=violet offset=true />
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