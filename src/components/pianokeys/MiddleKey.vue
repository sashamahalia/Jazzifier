<template lang="">
  <div class="middlekey">
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'MiddleKey'  
}
</script>

<style lang="scss">
.middlekey {
  z-index: 2;
  padding: $accidental-width;
  height: $accidental-width * 2.5;

  background-color: $darker-purple;
  margin: 0 0 0 $accidental-width * -1;
  // clip-path: polygon(50% 0, 100% 0, 100% 50%, 50% 50%);
}  
</style>
