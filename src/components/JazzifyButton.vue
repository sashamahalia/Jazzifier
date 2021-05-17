<template>
  <div>
    <button id="jazzify" @click="onClickJazzify" :disabled="disabled" >
      &#127927; Jazzify! &#127927;
    </button>
    <DancingNotes />
  </div>
</template>


<script>
import DancingNotes from './DancingNotes'
export default {
name: 'JazzifyButton',
  props: ['disabled' ],
  name: 'JazzifyButton',
  components: {
    DancingNotes
  },
  methods: {
    onClickJazzify() {
      
      // console.log("jazzify clicked")
      this.$emit('jazzifyClicked')
    }
  }
}
</script>


<style lang="">  
</style>