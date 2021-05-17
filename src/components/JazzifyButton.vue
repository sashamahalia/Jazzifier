<template>
  <div>
    <button id="jazzify" @click="onClickJazzify" :disabled="disabled" >
      &#127927; Jazzify! &#127927;
    </button>
  </div>
</template>


<script>
export default {
name: 'JazzifyButton',
  props: ['disabled' ],
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