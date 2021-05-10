<template lang="">
  <div class="key">
    <span></span>
  </div>
</template>
<script>
export default {
  name: 'LeftKey'
  
}
</script>
<style lang="scss">
.key {
  padding: 2em;
  background-color: orange;
  clip-path: polygon(0 0, 50% 0, 50% 50%, 100% 50%, 100% 100%, 0 100%);

}  
</style>