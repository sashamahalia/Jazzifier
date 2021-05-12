<template lang="">
  <div id="app">
    <NavComponent />
    <h4>Page not found</h4>
    <p class="about-paragraph">Whatever you're searching for isn't here. <a href="/">Go back</a>
      </p>
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
<style lang="scss">
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