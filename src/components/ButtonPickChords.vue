<template>
  <div>
    <button id="pickchords" @click="onClickPickChords" :disabled="disabled" >
      Pick chords for me
    </button>
  </div>
</template>


<script>
export default {
name: 'ButtonPickChords',
  props: ['disabled' ],
  methods: {
    onClickPickChords() {
      console.log("clicked", this.disabled)
      if (!this.disabled) {
        console.log(" not disabled")
        this.$emit('pickChordsClicked')
      }
    }
  }
}
</script>


<style lang="">  
</style>