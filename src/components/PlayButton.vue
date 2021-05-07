<template>
  <button @click="handleClick">
    {{ play }}
  </button>
</template>

<script>
import * as Tone from 'tone'
  export default {
  name: 'PlayButton',
  //where state lives
  data() {
    return {
      play: 'Play'
    };
  },
  methods: {
    handleClick() {
      const synth = new Tone.PolySynth(Tone.Synth).toDestination();
      this.switchPlay();
      // eslint-disable-next-line no-unused-vars
      const loop = new Tone.Loop(time => {
        synth.triggerAttackRelease("C2", "8n", time);
      }, "4n").start(0);

      Tone.Transport.bpm.value = 60
    },
    switchPlay() {
      if (this.play !== 'Play') {
        this.stop()
        return this.play = 'Play'
      }
      this.start()
      return this.play = 'Stop'
    },
    stop() {
      Tone.Transport.stop()
    },
    start() {
      Tone.Transport.start();
    }
  }
}
</script>

<style lang="scss">
  
</style>