<template>
  <button @click="handleClick">
      play
  </button>
</template>


<script>
import * as Tone from 'tone'
import { synth, chordLoop } from '../helpers/loop.js'
    export default {
    name: 'PlayButton',
    //where state lives
    data() {
      return {
        playing: false
      };
    },
    methods: {
      handleClick() {

        synth;
        chordLoop;

        if (!this.playing) {
          Tone.start();
          Tone.Transport.start();
          this.playing = true;
        } else {
          Tone.Transport.stop();
          this.playing = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>