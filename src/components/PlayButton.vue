<template>
  <button @click="handleClick">
    {{ play }}
  </button>
</template>

<script>
import * as Tone from 'tone'
  export default {
  name: 'PlayButton',
  data() {
    return {
      play: 'Play'
    };
  },
  methods: {
    handleClick() {
      const synth = new Tone.PolySynth(Tone.Synth).toDestination();
      this.switchPlay()
      synth.triggerAttackRelease(["C4", "f4", "B4", "D4"], 2);
    },
    switchPlay() {
      if (this.play !== 'Play') {
        return this.play = 'Play'
      }
      return this.play = 'Stop'
    }
  }
}
</script>

<style lang="scss">
  
</style>