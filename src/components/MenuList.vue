<template>
  <section class="menus">
    <Menu name="Scale" />
    <Menu name="Mode" />
  </section>
</template>

<script>
import Menu from './Menu'
  export default {
    name: 'MenuList',
    components: {
      Menu
    }
  }
</script>

<style lang="scss" scoped>

.menus {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

</style>