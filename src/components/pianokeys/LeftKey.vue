<template lang="">
  <div class="left-key"
  :class="{'left-offset': offset, 'press-style': pressed}"  
  
  >
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'LeftKey',
  props: [
    'offset',
    'keycolor',
    'pressed'
  ],
  
}
</script>

<style lang="scss">
.left-key {
  z-index: 1;
  padding: $accidental-width * 1.25;
  height: $accidental-width * 6;

  background-color: white;
  border: 1px solid $darkest-purple;
  // clip-path: polygon(0 0, 50% 0, 50% 50%, 100% 50%, 100% 100%, 0 100%);
} 

.left-offset {
  margin: 0 0 0 $accidental-width * -1
  // background-color: purple;

}

.press-style {
  background-color: orange;
}
</style>