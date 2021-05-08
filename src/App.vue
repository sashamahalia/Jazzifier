<template>
  <div id="app">
    <NavComponent />
    <Piano />
    <ChordSelector />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Jazzifier"/> -->
    <PlayButton />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PlayButton from './components/PlayButton.vue'
import NavComponent from './components/NavComponent.vue'
import Piano from './components/Piano.vue'
import ChordSelector from './components/ChordSelector.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    PlayButton,
    NavComponent,
    Piano,
    ChordSelector
  }
}
</script>

<style lang="scss">  
  /* lang="scss" */

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
