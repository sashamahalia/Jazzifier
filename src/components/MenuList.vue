<template>
  <section class="menus">
    <Menu :chord-loop="chordLoop" :scale="scale" :options="keys" type="key" name="Key" />
    <Menu :chord-loop="chordLoop" :scale="scale" :options="modes" type="mode" name="Mode" />
  </section>
</template>

<script>
import Menu from './Menu'
export default {
  name: 'MenuList',
  components: {
    Menu
  },
  props: ['keys', 'modes', 'scale', 'chordLoop'],
  watch: {
    passValue() {
      this.$emit('v-select', this.select)
    }
  }
}
</script>

<style lang="scss" scoped>

.menus {
  margin-right: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

</style>