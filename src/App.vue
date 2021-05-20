<template>
  <div id="app">
    <NavComponent />
    <div class="leftalign">
      <div class="synth-menu">
        <h4>Instrument:</h4>
        <v-select :clearable="false" :disabled="disabled" :options="synthTones" :value="synthTone"
        @input="instrument => updateInstrument(instrument)" name="Instrument" class="instrument"/>
      </div>
    </div>
    <Piano :chord=chord />
    <div class="flexbox">
      <PlayButton @change="onPlayButtonClick" :disabled="disabled" :chord-loop="chordLoop" :selected-chords="selectChords" :chord="chord" :beat="beat"/>
      <ButtonPickChords @pickChordsClicked="onPickChordsChildClick" :disabled="disabled" />
      <JazzifyButton :chord="chord" @jazzifyClicked="onJazzifyChildClick" :disabled="disabled" />
    </div>
    <div class="keymenu">
    <MenuList :disabled="disabled" :chord-loop="chordLoop" :keys="keys" :modes="modes" :scale="scale"/>
    </div>
    <div class="dropdowns">
      <Dropdown @chord-toggle="onChordToggle" :select-chords="selectChords" :chord-names="getChordNames" :beat="beat" :disabled="disabled" :chord-loop="chordLoop" :positions="positions" :chords="chords" :modes="modes" :scale="scale" :chord="chord" />
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
import Dropdown from './components/Dropdown.vue'
import JazzifyButton from './components/JazzifyButton'
import MenuList from './components/MenuList.vue'
import ButtonPickChords from './components/ButtonPickChords'
//helpers
import { selectChords } from './helpers/chords'
import { convertNoteToKeyboard } from './helpers/convertNoteToKeyboard'
//libraries
import * as Tone from 'tone'
import s11 from 'sharp11';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    ButtonPickChords,
    PlayButton,
    NavComponent,
    Piano,
    Dropdown,
    JazzifyButton,
    vSelect,
    MenuList
  },
  data() {
    return {
      positions: [
        { beat: 1, chord: 'Chord 1', mode: 'Major' },
        { beat: 2, chord: 'Chord 2', mode: 'Major' },
        { beat: 3, chord: 'Chord 3', mode: 'Major' },
        { beat: 4, chord: 'Chord 4', mode: 'Major' },
      ],
      chords: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'],
      keys: ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'],
      modes: ['Major', 'Minor'],
      scale: {key: 'C', mode: 'Major'},
      beat: this.currentBeat,
      chord: this.currentChord,
      synthTones: ['piano', 'basic synth', 'fm wah', 'square', 'harp'],
      synthTone: 'piano',
      disabled: false

    }
  },
  computed: {

    selectChords() {
      const chordArray = selectChords(this.positions, this.scale.key, this.scale.mode).map(chord => s11.chord.create(chord, 3));
      const coverted = chordArray.map(chordInfo => chordInfo.chord.map(note => {
        return `${note.name}${note.octave}`
      }));
      return this.convertNotes(coverted);
    },

    getChordNames() {
      return selectChords(this.positions, this.scale.key, this.scale.mode);
    },

    getInstrument() {
      let tone = ''

      if (this.synthTone === 'piano') {
        tone = this.piano();
      } else if (this.synthTone === 'basic synth') {
        tone = this.synth();
      } else if (this.synthTone === 'fm wah') {
        tone = this.fmSynth();
      } else if (this.synthTone === 'square') {
        tone = this.amSynth();
      } else if (this.synthTone === 'harp') {
        tone = this.harp();
      }
      return tone;
    },

    chordLoop() {

      let tone = this.getInstrument;

      const loop = new Tone.Part((time, value) => {

      //value.note is the array of notes in the chord, renders as chord state
      //renders the current loop position into the musical beat state (ie 1, 2, 3, 4)
      this.chord = value.note;
      this.beat = Number(value.time[0]) + 1;

      tone.triggerAttackRelease(value.note, value.duration, time);
    }, [
      {'time': '0:0', 'note': this.selectChords[0], 'duration': '1m'},
      {'time': '1:0', 'note': this.selectChords[1], 'duration': '1m'},
      {'time': '2:0', 'note': this.selectChords[2], 'duration': '1m'},
      {'time': '3:0', 'note': this.selectChords[3], 'duration': '1m'},
    ]).start(0);

    return loop;
    },
    disablePlay() {
      let result = true;
      for (const position of this.positions) {
        if (!this.chords.find(position.chord)) {
          result = false;
        }
      }
      // console.log("POTATO*********",result);
      return result;
    }
  },
  watch: {
    // synthTone()  {
    //   this.chordLoop.dispose();
    // }
  },

  methods: {
    randomChord() {
      const min = Math.ceil(0);
      const max = Math.floor(this.chords.length);
      const randomNumber = Math.floor(Math.random() * (max - min) + min);
      
      return this.chords[randomNumber];
      // return this.chords.length;
      // return "chordchanged";
    },

    onPickChordsChildClick() {
      // console.log("fully picked chords")
      this.chordLoop.dispose()
      for (let position of this.positions) {
        // console.log(position.chord);
        position.chord=this.randomChord()
      }
    },

    jazzifyChord(position) {
      let newPosition = position;
      //this code correctly sets to major/minor
      //but it doesn't play well with the library that interprets the data
      //it just interprets lowercase values as C major by default
      const modeNum = Math.random();
      if (modeNum < .16) {
        newPosition.mode = "dim";
      } else if (modeNum >= .16 && modeNum <= .25) {
        newPosition.mode = "aug";
      } else if (modeNum > .25 && modeNum <= .62) {
        newPosition.mode = "M";
      } else {
        newPosition.mode = "m";
      }

      if (newPosition.mode == "M" || newPosition.mode == "m") {
        const majorNum = Math.random();
        if (majorNum < .8) {
          newPosition.mode += "7";
        } else {
          newPosition.mode += "9";
        }
      } else {
        const seventhNum = Math.random();
        if (seventhNum < .3) {
          newPosition.mode += "7";
        } else if (seventhNum > .9) {
          newPosition.mode += "9";
        }
      }


      // console.log("POTATO*************", newPosition.chord, newPosition.mode);
      // if (Math.random() < .25) {
      //   chord += "dim";
      // }

      // if (Math.random() < .25) {
      //   chord += "9";
      // }
      return newPosition;
    },

    onJazzifyChildClick() {
      // console.log("fully jazzified")
      this.chordLoop.dispose()
      for (let position of this.positions) {
        // console.log(position.chord);
        // position.chord="II"
        position = this.jazzifyChord(position);
      }
    },
    onPlayButtonClick() {
      if (!this.disabled) {
        return this.disabled = true;
      }
      return this.disabled = false;
    },
    convertNotes(allChords) {
      // runs convertNoteToKeyboard function on each chord in array, which changes double flats or double sharps into keyboard readble notes.
      const convertedChords = allChords.map(chord => chord.map(note => {return convertNoteToKeyboard(note)}))
      return convertedChords;
    },
    onChordToggle(position, index) {
      this.beat = position.beat;
      return this.chord = this.selectChords[index];
    },
    updateInstrument(instrument) {
      this.chordLoop.dispose();
      this.synthTone = instrument;
    },
    piano() {
      // Multisampled piano, thanks to https://github.com/ledlamp/piano-sounds
      return new Tone.Sampler({
        volume: -15,
        urls: {
          C1: 'c1.mp3',
          C2: 'c2.mp3',
          C3: 'c3.mp3',
          D3: 'd3.mp3',
          E3: 'e3.mp3',
          F3: 'f3.mp3',
          G3: 'g3.mp3',
          A3: 'a3.mp3',
          B3: 'b3.mp3',
          C4: 'c4.mp3',
          D4: 'd4.mp3',
          E4: 'e4.mp3',
          F4: 'f4.mp3',
          G4: 'g4.mp3',
          A4: 'a4.mp3',
          B4: 'b4.mp3'
        },
        baseUrl: 'https://ledlamp.github.io/piano-sounds/GreatAndSoftPiano/',
      }).toDestination();
    },
    synth() {
      return  new Tone.PolySynth(Tone.Synth, {
        oscillator : {
        type : "sawtooth",
        detune: 3,
        portamento: 0.5,
        volume: -30
        }
      }).toDestination();
    },
      fmSynth() {
        const fmFilter = new Tone.AutoFilter({
        frequency: 30,
        depth: 0,
        baseFrequency: 200
      });

      return new Tone.PolySynth(Tone.FMSynth, {
        volume: -30,
        harmonicity: 1,
        modulationIndex: 10,
        oscillator : {
            type: "sine"
      }}).connect(fmFilter).toDestination();
    },
    amSynth() {
          const amFilter = new Tone.AutoFilter({
        frequency: 30,
        depth: 0,
        baseFrequency: 200
      });

      return new Tone.PolySynth(Tone.AMSynth, {
        harmonicity: 1,
        modulationIndex: 5,
        portamento: 2,
        volume: -30,
        detune: 3,
        oscillator : {
            type: "square"
      }}).connect(amFilter).toDestination();
    },
    harp() {
      return new Tone.Sampler({
        volume: -5,
        urls: {
          C1: 'c0.mp3',
          C2: 'c1.mp3',
          C3: 'c2.mp3',
          D3: 'd2.mp3',
          E3: 'e2.mp3',
          F3: 'f2.mp3',
          G3: 'g2.mp3',
          A3: 'a2.mp3',
          B3: 'b2.mp3',
          C4: 'c3.mp3',
          D4: 'd3.mp3',
          E4: 'e3.mp3',
          F4: 'f3.mp3',
          G4: 'g3.mp3',
          A4: 'a3.mp3',
          B4: 'b3.mp3'
        },
        baseUrl: 'https://ledlamp.github.io/piano-sounds/Harp/',
      }).toDestination();
    }
    
  }
}
</script>

<style lang="scss" scoped>  

  /* button styles are in globals.scss */


  #app {
    @import url('https://fonts.googleapis.com/css2?family=Julee&family=PT+Sans&display=swap');
    /*font-family: 'Julee', cursive;*/
    font-family: 'PT Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: auto;
    margin-top: 5.5em;

    background-color: $light-pink;
    max-width: 530px;
  }

  .flexbox {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    margin: 2em;
  }

  .dropdowns {
    padding-bottom: 3em;
  }

  .synth-menu {
    min-width: 10em;
  }

  .leftalign {
    margin: 2em;
    display: flex;
    justify-content: flex-start;
  }
</style>
