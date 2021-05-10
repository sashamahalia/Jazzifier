<template lang="">
  <div class="left-key" :class="offset ? 'left-offset' : '' ">
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'LeftKey',
  props: [
    'offset'
  ]
}
</script>

<style lang="scss">
.left-key {
  z-index: 1;
  padding: 1em;
  height: 5em;
  background-color: orange;
  border: 1px solid;
  // clip-path: polygon(0 0, 50% 0, 50% 50%, 100% 50%, 100% 100%, 0 100%);
} 

.left-offset {
  margin: 0 0 0 $accidental-width * -1
  // background-color: purple;

}
</style>