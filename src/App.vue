<template>
  <div id="app">
    <HelloWorld msg="Jazzifier"/>
    <PlayButton />
    <h2 id="chord-name"></h2>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PlayButton from './components/PlayButton.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PlayButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
    margin: 20px;
    background-color: purple;
    color: white;
  }
</style>
