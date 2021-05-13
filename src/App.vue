<template>
  <div id="app">
    <NavComponent />
    <div class="synth-menu">
      <h4>Synth type</h4>
      <v-select :options="synthTones" v-model="synthTone" name="Instrument" class="instrument"/>
    </div>
    <Piano :chord=chord />
    <ChordSelector />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Jazzifier"/> -->
    <div class="flexbox">
      <PlayButton :chord-loop="chordLoop" :selected-chords="selectChords" :chord="chord" :beat="beat"/>
      <JazzifyButton :chord="chord" @jazzifyClicked="onJazzifyChildClick" />
    </div>
    <div class="dropdowns">
      <MenuList :keys="keys" :modes="modes" :scale="scale"/>
      <Dropdown :positions="positions" :chords="chords"/>
    </div>
  </div>
</template>

<script>
//vue stuff
import vSelect from 'vue-select'
//components
import PlayButton from './components/PlayButton.vue'
import NavComponent from './components/NavComponent.vue'
import Piano from './components/Piano.vue'
import ChordSelector from './components/ChordSelector.vue'
import Dropdown from './components/Dropdown.vue'
import JazzifyButton from './components/JazzifyButton'
import MenuList from './components/MenuList.vue'
//helpers
import { chordState } from './helpers/loop'
import { synth, fmSynth, amSynth } from './helpers/synth'
import { selectChords } from './helpers/chords'
//libraries
import * as Tone from 'tone'
import s11 from 'sharp11';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    PlayButton,
    NavComponent,
    Piano,
    ChordSelector,
    Dropdown,
    JazzifyButton,
    vSelect,
    MenuList
  },
  data() {
    return {
      positions: [
        { beat: 1, chord: 'Chord 1' },
        { beat: 2, chord: 'Chord 2' },
        { beat: 3, chord: 'Chord 3' },
        { beat: 4, chord: 'Chord 4' },
      ],
      chords: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'],
      keys: ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'],
      modes: ['Major', 'Minor'],
      scale: {key: '', mode: ''},
      beat: this.currentBeat,
      chord: this.currentChord,
      synthTones: ['basic synth', 'metallic', 'dark'],
      synthTone: 'basic synth'
    }
  },
  computed: {
    currentBeat() {
      return chordState.beat
    },
    currentChord() {
      return chordState.chord
    },
    mapToChords(num) {

      const valueMap = {
        I: 'C',
        II: 'Dm',
        III: 'Em',
        IV: 'F',
        V: 'G',
        VI: 'Am',
        VII: 'Bdim',
        default: 'C'
      }
      return (valueMap[num] || valueMap['default']);
    },
    selectChords() {
      const chordArray = selectChords(this.positions).map(chord => s11.chord.create(chord, 3));

      return chordArray.map(chordInfo => chordInfo.chord.map(note => {
        return `${note.letter}${note.octave}`
      }));
    },
    chordLoop() {
      let synthTone = ''

      if (this.synthTone === 'basic synth') {
        synthTone = synth;
      } else if (this.synthTone === 'metallic') {
        synthTone = fmSynth;
      } else if (this.synthTone === 'dark') {
        synthTone = amSynth;
      }

      console.log('synth tone', synthTone)

      const loop = new Tone.Part((time, value) => {

      //value.note is the array of notes in the chord, s11.identify analyzes what chord it is and returns the chord name as a string
      //conditionally renders chord name as state
          this.chord = value.note;
      synthTone.triggerAttackRelease(value.note, value.duration, time);
    }, [
      {'time': '0:0', 'note': this.selectChords[0], 'duration': '1m'},
      {'time': '1:0', 'note': this.selectChords[1], 'duration': '1m'},
      {'time': '2:0', 'note': this.selectChords[2], 'duration': '1m'},
      {'time': '3:0', 'note': this.selectChords[3], 'duration': '1m'},
    ]).start(0)
    return loop;
    }
  },

  methods: {
    onJazzifyChildClick() {
      console.log("fully jazzified")
      this.chordLoop.dispose()
      for (let position of this.positions) {
        // console.log(position.chord);
        position.chord="II"
      }
    }
  }
}
</script>

<style lang="scss">  

  .flexbox {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
  }

  button {
    padding: .75em;
    background-color: $darker-purple;
    color: white; 
    border-radius: 1em;
    border: none; 
  }

  button:hover {
    background-color: white;
    color: $darker-purple;
  }

  #app {
    @import url('https://fonts.googleapis.com/css2?family=Julee&family=PT+Sans&display=swap');
    font-family: 'Julee', cursive;
    /* font-family: 'PT Sans', sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 5.5em;
    background-color: $light-pink;
  }

  .dropdowns {
    display: flex;
    align-self: flex-end;
    justify-content: center;

  }

  .instrument {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .synth-menu {
    margin-right: 21em;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
