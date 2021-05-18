<template lang="">
  <div id="app">
    <NavComponent />
    <br>
    <br>
    <h3 class="heading">About Jazzifier</h3>
    <p class="about-paragraph">Jazzifier is a music theory app that takes simple chord structures and makes them spicier.</p>

    <h3>Ok cool, how do I use it?</h3>

    <p class="about-paragraph">First pick a key and mode. We start in the key of C major by default, but you can change it to any major or minor key.
      Then either pick some chords from the droplist, or if you're feeling indecisive, click "Pick chords for me".
      You can listen to your basic chords be played at this point, hear them on a synthesizer of your choice, and see them light up on the piano. But these chords aren't spicy! Click the jazzify button to see and hear your chords tranformed into beautiful jazz chords.
      Once you're done listening, you can stop play and click on any of the chords' names to see just that chord displayed so you can see how to play it yourself. </p>


    <h3>What are chords?</h3>

    <p class="about-paragraph">Melodic music uses notes as building blocks to create beautiful songs. When you play one note at a time, that's called a melody. When you play more than one note at a time, these are called chords. Like painters using different colors to create art, musical composers use different chords to make music sound happy, sad, tense, or discordant.</p>

    <p class="about-paragraph">When you listen to a lot of music, you might notice that some songs feel similar to each other, even if their melodies are completely different. One reason for this might be that they use similar chord structures. <a href="https://www.youtube.com/watch?v=5pidokakU4I"> Check out the Four Chord Song by Axis of Awesome for an example of what this means.</a> So if you're looking to spice up your chords to stand out from the crowd, you've found the right place!
    </p>

    <h3>What are chord extensions?</h3>

    <p class="about-paragraph">As you play around with the jazzify button, you'll notice chords have names like 'Fm9' or 'Edim7'. What do those numbers mean? A basic three note chord is a triad.
      Chord extensions refer to stacking intervals above a triad for more colour and emotion.
      Even though there are only 7 notes in a conventional (diatonic) scale, numbers like 9 or 13 in chords refer to playing notes an octave above the root note of the chord.
      So even though the '9' in a C major 9 chord is a 'D' note which is a '2' in the C major scale, we call it a 9 to show that the 'D' is played an octave higher.
      Extended  - and sometime unconventional - chords are crucial to jazz, gospel, neo-soul, deep house, and of course the pinnacle of musical genres: lofi beats to study/relax to.
      
      If you want know more about musical intervals and how the relate to not only chords but every sound we hear, check out <a href="https://www.youtube.com/watch?v=Wx_kugSemfY&ab_channel=ANDREWHUANG">Andrew Huang's excellent video</a> on the harmonic series.</p>


    <h3>We support Egg Eggerson</h3>
    <br>
    <br>
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
    margin: 2em auto;
    max-width: 45em;
    font-size: 1em;
    font-family: 'PT Sans', sans-serif;
  }
</style>