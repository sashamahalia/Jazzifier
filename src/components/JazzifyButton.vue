<template>
  <div>
    <button id="jazzify" :class="{'jazzify': animated}" @animationend="animated = false" @click="onClickJazzify" :disabled="disabled" >
      &#127927; Jazzify! &#127927;
    </button>
  </div>
</template>


<script>
export default {
  name: 'JazzifyButton',
  data() {
    return {
      animated: false
    }
  },
  props: ['disabled' ],
  methods: {
    onClickJazzify() {
      
      // console.log("jazzify clicked")
      this.$emit('jazzifyClicked')
      this.animate();
    },
    animate() {
      this.animated = true;
    }
  }
}
</script>


<style lang="scss">

.jazzify {
  animation: jazzify 1.5s ease-in-out both 1;
  animation-timing-function: linear;
}

@keyframes jazzify {
  0% {background-color: $darkest-purple; transform: scale(0.9)}
  20% {background-color: $medium-purple; }
  40% {background-color: $pink; }
  60% {background-color: $light-pink; }
  80% {background-color: $medium-purple;}
  100% {background-color: $darkest-purple; }
  
}

</style>