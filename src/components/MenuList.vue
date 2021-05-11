<template>
  <section class="menus">
    <Menu @select="passValue" :scale="scale" :options="keys" type="key" name="Key" />
    <Menu @select="passValue" :scale="scale" :options="modes" type="mode" name="Mode" />
  </section>
</template>

<script>
import Menu from './Menu'
export default {
  name: 'MenuList',
  components: {
    Menu
  },
  props: ['keys', 'modes', 'scale'],
  watch: {
    passValue() {
      // this.$emit('v-select', this.select)
      console.log('hi');
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