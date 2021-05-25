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
      if (!this.disabled) {
        this.$emit('pickChordsClicked')
      }
    }
  }
}
</script>


<style lang="">  
</style>