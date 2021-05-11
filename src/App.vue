<template>
  <div id="app">
    <NavComponent />
    <Piano :chord=currentChord />
    <ChordSelector />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Jazzifier"/> -->

    <div class="flexbox">
      <PlayButton :chord="chord" :beat="beat"/>
      <JazzifyButton />
    </div>
    <Menu name="Scale"/>
    <Menu name="Mode"/>
    <Menu name="Instrument"/>
    <Dropdown :positions="positions" :beat="beat" :chords="chords"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PlayButton from './components/PlayButton.vue'
import NavComponent from './components/NavComponent.vue'
import Piano from './components/Piano.vue'
import ChordSelector from './components/ChordSelector.vue'
import Dropdown from './components/Dropdown.vue'
import { chordState } from './helpers/loop'
import JazzifyButton from './components/JazzifyButton'
import Menu from './components/Menu.vue'


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
    Menu
  },
  data() {
    return {
      positions: [
        { beat: 1, chord: 'Chord 1' },
        { beat: 2, chord: 'Chord 2' },
        { beat: 3, chord: 'Chord 3' },
        { beat: 4, chord: 'Chord 4' },
      ],
      chords: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
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
</style>
