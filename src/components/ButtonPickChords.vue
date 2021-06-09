<template>
  <div>
    <button id="pickchords" @click="onSelectPickChords" @keypress="onSelectPickChords" :disabled="disabled" >
      Pick chords for me
    </button>
  </div>
</template>


<script>
export default {
name: 'ButtonPickChords',
  props: ['disabled' ],
  methods: {
    onSelectPickChords() {
      if (!this.disabled) {
        this.$emit('pickChordsClicked')
      }
    }
  }
}
</script>


<style lang="">  
</style>