<template>
  <section class="menus">
    <Menu :disabled="disabled" :chord-loop="chordLoop" :scale="scale" :options="keys" type="key" name="Key" />
    <Menu :disabled="disabled" :chord-loop="chordLoop" :scale="scale" :options="modes" type="mode" name="Mode" />
  </section>
</template>

<script>
import Menu from './Menu'
export default {
  name: 'MenuList',
  components: {
    Menu
  },
  props: ['keys', 'modes', 'scale', 'chordLoop', 'disabled'],
  watch: {
    passValue() {
      this.$emit('v-select', this.select)
    }
  }
}
</script>

<style lang="scss" scoped>

.menus {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  
}

</style>