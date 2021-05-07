<template>
  <div id="app">
    <NavComponent /> <p>nav should be rendering here</p>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Jazzifier"/>
    <PlayButton />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PlayButton from './components/PlayButton.vue'
import NavComponent from './components/NavComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PlayButton,
    NavComponent
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
</style>
