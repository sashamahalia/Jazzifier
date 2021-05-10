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
  padding: 1em;
  height: 5em;
  background-color: blue;
  clip-path: polygon(50% 0, 100% 0, 100% 50%, 50% 50%);
}  
</style>