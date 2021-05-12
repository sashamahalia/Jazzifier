<template>
  <div>
    <button id="jazzify" @click="onClickJazzify" >
      ***Jazzify***
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