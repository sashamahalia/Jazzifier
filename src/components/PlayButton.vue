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
      if (synth) { synth.dispose(); }
      // const synth = new Tone.PolySynth(Tone.Synth).toDestination();
      this.switchPlay();

      const synth = new Tone.Synth().toDestination();
      // eslint-disable-next-line no-unused-vars
      // const chordPart = new Tone.Part((time, chord )=> {
      //   synth.triggerAttackRelease(chord, "1m", time);
      // }, [[0, ["C3", "G3", "B3", "C4"]], ["0:2", ["D3", "A3", "C3", "D4"]], ["0:3", ["G4", "B4", "D5", "F5"]], ["0:4", ["G5", "B5", "D6", "F6"]]]).start(0);


      const chordPart = new Tone.Part((time, chord )=> {
              synth.triggerAttackRelease(chord, "1m", time);
            }, [[0, "C3"], ["0:2", "D3"], ["0:3", "G4"], ["0:4", "G5"]]).start(0);

      chordPart.loop = true;
      chordPart.loopEnd = "1m";
      Tone.Transport.bpm.value = 90;
    },
    //switch state between play and stop text, start and stop playback.
    switchPlay() {
      if (this.play !== 'Play') {
        this.stop()
        return this.play = 'Play';
      }
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