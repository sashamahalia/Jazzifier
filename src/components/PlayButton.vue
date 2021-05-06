import * as Tone from 'tone'

<template>
  <button :disabled="!isLoaded" @click="handleClick">
      Play
    </button>
</template>

<script>
export default {
  name: 'PlayButton'
}
</script>

<style lang="scss">
  
</style>