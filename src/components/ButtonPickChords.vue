<template>
  <div>
    <button id="pickchords" @click="onClickPickChords" >
      Pick chords for me
    </button>
  </div>
</template>


<script>
export default {
name: 'ButtonPickChords',
  methods: {
    onClickPickChords() {
      
      // console.log("pick chords clicked")
      this.$emit('pickChordsClicked')
    }
  }
}
</script>


<style lang="">  
</style>