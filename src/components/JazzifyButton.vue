<template>
  <div>
    <button id="jazzify" @click="handleClick" >
      ***Jazzify***
    </button>
  </div>
</template>


<script>
export default {
//@click="handleClick"
name: 'JazzifyButton',
  //where state lives
  data() {
    return {
      play: 'Play',
      chord: this.currentChord
    };
  },
  props: [],
  computed: {},
  methods: {
    handleClick() {
      console.log("potato")

    }
  }
}
</script>
<style lang="">
  
</style>