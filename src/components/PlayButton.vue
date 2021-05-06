<template>
  <button @click="handleClick">
    Play
  </button>
</template>

<script>
import * as Tone from 'tone'
  export default {
  name: 'PlayButton',
  methods: {
    handleClick() {
      const synth = new Tone.Synth().toDestination();
      synth.triggerAttackRelease("C4", "8n");
    }
  }
}
</script>

<style lang="scss">
  
</style>