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
      this.$emit('jazzifyClicked');
      this.animate();
    },
    animate() {
      // Animation syntax adapated from https://stackoverflow.com/questions/48652941/vue-click-animation-without-settimeout/51212606
      this.animated = true;
    }
  }
}
</script>


<style lang="scss">

.jazzify {
    background: linear-gradient(192deg, #691048, #ff76ca);
    background-size: 400% 400%;

    -webkit-animation: jazzify 4s ease 1;
    -moz-animation: jazzify 4s ease 1;
    animation: jazzify 4s ease 1;
}

@-webkit-keyframes jazzify {
    0%{background-position:84% 0%; transform: scale(0.95);}
    50%{background-position:17% 100%}
    100%{background-position:84% 0%}
}
@-moz-keyframes jazzify {
    0%{background-position:84% 0%; transform: scale(0.95);}
    50%{background-position:17% 100%}
    100%{background-position:84% 0%}
}
@keyframes jazzify {
    0%{background-position:84% 0%; transform: scale(0.95);}
    50%{background-position:17% 100%}
    100%{background-position:84% 0%}
}

</style>