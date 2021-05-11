<template>
  <section class="menus">
    <Menu :options="keys" name="Scale" />
    <Menu :options="modes" name="Mode" />
  </section>
</template>

<script>
import Menu from './Menu'
  export default {
    name: 'MenuList',
    components: {
      Menu
    },
    props: ['keys', 'modes'],
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