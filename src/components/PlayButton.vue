<template>
  <button id="play" @click="handleClick">
    {{ `${play} ${chord}` }}
  </button>
</template>

<script>
import * as Tone from 'tone'
import { chordLoop } from '../helpers/loop'
import { synth } from '../helpers/synth'
import { bpm } from '../helpers/bpm'

  export default {
  name: 'PlayButton',
  //where state lives
  data() {
    return {
      play: 'Play',
      chord: ''
    };
  },
  methods: {
    handleClick() {
      bpm(100);
      synth;
      chordLoop;
      this.switchPlay();

    },
    //switch state between play and stop text, start and stop playback.
    switchPlay() {
      if (this.play !== 'Play') {
        this.stop()
        return this.play = 'Play';
      }
      Tone.start();
      this.start()
      return this.play = 'Stop';
    },
    stop() {
      Tone.Transport.stop();
    },
    start() {
      //The transport is the overall audio event. Starting one milisecond late is best practice for preventing audio issues
      Tone.Transport.start("+0.1");
    }
  }
}
</script>

<style" scoped>
</style>