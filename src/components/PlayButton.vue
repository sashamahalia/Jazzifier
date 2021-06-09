<template>
  <div>
    <!-- <h2>{{ currentChord }}</h2> -->
    <button id="play" @click="handlePlaySelect" @keypress="handlePlaySelect">
      {{ play }}
    </button>
    <!-- <h3>{{ currentBeat }}</h3> -->
  </div>
</template>

<script>
import * as Tone from 'tone'
import { bpm } from '../helpers/bpm'

  export default {
  name: 'PlayButton',
  //where state lives
  data() {
    return {
      play: 'Play'
    };
  },
  props: ['selectedChords', 'chordLoop', 'disabled'],
  methods: {
    handlePlaySelect() {
      this.$emit('change');
      bpm(100);
      this.chordLoop;
      this.chordLoop.loopStart = 0;
      this.chordLoop.loopEnd = "4m";
      this.chordLoop.loop = true;
      this.switchPlay();

    },
    //switch state between play and stop text, start and stop playback.
    switchPlay() {
      if (this.play !== 'Play') {
        this.stop();
        return this.play = 'Play';
      }
      Tone.start();
      this.start()
      return this.play = 'Stop';
    },
    stop() {
      this.chordLoop.stop();
      Tone.Transport.stop();
    },
    start() {
      //The transport is the overall audio event. Starting one milisecond late is best practice for preventing audio issues
      Tone.Transport.start("+0.1");
    }
  }
}
</script>

<style scoped>
</style>