<template lang="">
  <div id="app">
    <NavComponent />
    <h4>About page</h4>
    <p class="about-paragraph">Jazzifier is a music theory app that takes simple chord structures and makes them spicier.</p>

    <h4>What are chords?</h4>

    <p class="about-paragraph">Melodic music uses notes as building blocks to create beautiful songs. When you play one note at a time, that's called a melody. When you play more than one note at a time, these are called chords. Like painters using different colors to create art, musical composers use different chords to make music sound happy, sad, tense, or discordant.</p>

    <p class="about-paragraph">When you listen to a lot of music, you might notice that some songs feel similar to each other, even if their melodies are completely different. One reason for this might be that they use similar chord structures. <a href="https://www.youtube.com/watch?v=5pidokakU4I">Check out the Four Chord Song by Axis of Awesome for an example of what this means.</a> So if you're looking to spice up your chords to stand out from the crowd, you've found the right place!
    </p>
    <h4>We support Egg Eggerson</h4>
  </div>
</template>
<script>
import NavComponent from './components/NavComponent.vue'

export default {
  name: 'About',
  components: {
    NavComponent,
  }
}
</script>
<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Julee&family=PT+Sans&display=swap');


  #app {
    font-family: 'Julee', cursive;
    /* font-family: 'PT Sans', sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 5.5em;
    background-color: $light-pink;
  }

  .about-paragraph {
    font-size: .75em;
    font-family: 'PT Sans', sans-serif;
  }
</style>