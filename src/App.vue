<template>
  <div id="app">
    <HelloWorld msg="Jazzifier"/>
    <PlayButtonTest />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PlayButtonTest from './components/PlayButtonTest.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PlayButtonTest
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
