<template lang="">
  <div class="left-key"
  :class=computedClass 
  
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
    'pressed',
    'note'
  ],
  computed: {
    computedClass(){
      let result = "";
      if (this.offset) {result += 'left-offset ';}
      //change the next line to this.pressed for functionality to work
      //left to this.keycolor for easier bugtesting
      // if (this.keycolor) {result += 'key-'+this.keycolor}
      // console.log("AVOCADO*******************", this.pressed)
      if (this.pressed && this.pressed.has(this.note)) {result += 'key-'+this.keycolor}
      
      return result;
    }
  }

}
</script>

<style lang="scss" >
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