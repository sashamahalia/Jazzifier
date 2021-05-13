<template>
  <section class="menus">
    <Menu :scale="scale" :options="keys" type="key" name="Key" />
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