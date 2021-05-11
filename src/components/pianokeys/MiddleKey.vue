<template lang="">
  <div class="middlekey"
  :class=computedClass

  >
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'MiddleKey',
  props: [
    'keycolor',
    'pressed',
    'note'
  ],  
  computed: {
    computedClass(){
      let result = "";
      // console.log("APRICOT***********************", this.note)
      // console.log("RUTABAGA***********************", this.pressed[0])
      if (this.pressed && this.pressed.has(this.note)) {result += 'key-'+this.keycolor}
      return result;
      
    }
  }
}
</script>

<style lang="scss">
.middlekey {
  z-index: 2;
  padding: $accidental-width;
  height: $accidental-width * 2.5;

  background-color: $darkest-purple;
  margin: 0 0 0 $accidental-width * -1;
  border-radius:0 0 $accidental-width*.2 $accidental-width*.2;
  // clip-path: polygon(50% 0, 100% 0, 100% 50%, 50% 50%);
}  

.key-red {
  background-color: $key-red;
}

.key-orange {
  background-color: $key-orange;
}

.key-yellow {
  background-color: $key-yellow;
}

.key-green {
  background-color: $key-green;
}

.key-blue {
  background-color: $key-blue;
}

.key-indigo {
  background-color: $key-indigo;
}

.key-violet {
  background-color: $key-violet;
}
</style>
