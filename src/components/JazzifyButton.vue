<template>
  <div>
    <button id="jazzify" @click="onClickJazzify" >
      &#127927; Jazzify! &#127927;
    </button>
  </div>
</template>


<script>
export default {
name: 'JazzifyButton',
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