<template>
  <button @click="handleClick">
      play
  </button>
</template>


<script>
import * as Tone from 'tone'
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
        const synth = new Tone.MembraneSynth().toDestination();
      // eslint-disable-next-line no-unused-vars
        const loop = new Tone.Loop(function(time) {
          //triggered every eighth note.
          console.log(time);
          synth.triggerAttackRelease("C2", "2n");
        }, "2n").start(0);

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