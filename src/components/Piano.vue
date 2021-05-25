<template lang="">
  <div>   
    <div class="keys">
      <LeftKey note="C3" keycolor=red :pressed=currentPressedKeys />
      <MiddleKey note="C#3" keycolor=red :pressed=currentPressedKeys />
      <LeftKey note="D3" keycolor=orange offset=true :pressed=currentPressedKeys />
      <MiddleKey note="Eb3" keycolor=yellow :pressed=currentPressedKeys />
      <LeftKey note="E3" keycolor=yellow offset=true :pressed=currentPressedKeys />
      <LeftKey note="F3" keycolor=green :pressed=currentPressedKeys />
      <MiddleKey note="F#3" keycolor=green :pressed=currentPressedKeys />
      <LeftKey note="G3" keycolor=blue offset=true :pressed=currentPressedKeys />
      <MiddleKey note="Ab3" keycolor=blue :pressed=currentPressedKeys />
      <LeftKey note="A3" keycolor=indigo offset=true :pressed=currentPressedKeys />
      <MiddleKey note="Bb3" keycolor=violet :pressed=currentPressedKeys  />
      <LeftKey note="B3" keycolor=violet offset=true :pressed=currentPressedKeys />
      <LeftKey note="C4" keycolor=red :pressed=currentPressedKeys />
      <MiddleKey note="C#4" keycolor=red :pressed=currentPressedKeys />
      <LeftKey note="D4" keycolor=orange offset=true :pressed=currentPressedKeys />
      <MiddleKey note="Eb4" keycolor=yellow :pressed=currentPressedKeys />
      <LeftKey note="E4" keycolor=yellow offset=true :pressed=currentPressedKeys />
      <LeftKey note="F4" keycolor=green  :pressed=currentPressedKeys />
      <MiddleKey note="F#4" keycolor=green :pressed=currentPressedKeys  />
      <LeftKey note="G4" keycolor=blue offset=true :pressed=currentPressedKeys />
      <MiddleKey note="Ab4" keycolor=blue :pressed=currentPressedKeys  />
      <LeftKey note="A4" keycolor=indigo offset=true :pressed=currentPressedKeys />
      <MiddleKey note="Bb4" keycolor=violet :pressed=currentPressedKeys  />
      <LeftKey note="B4" keycolor=violet offset=true :pressed=currentPressedKeys />
    </div>
  </div>
</template>
<script>
//components
import LeftKey from './pianokeys/LeftKey';
import MiddleKey from './pianokeys/MiddleKey';

export default {
  name: 'Piano',
  props: 
    {'chord': Array}
      // 'chord'    
  ,
  components: {
    LeftKey,
    MiddleKey
  },
  computed: {
    currentPressedKeys() {
      return new Set(this.chord);

    }
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