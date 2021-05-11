<template>
  <div>
    <h5>{{ name }}</h5>
    <v-select />
  </div>
</template>

<script>
  import vSelect from 'vue-select';
  import 'vue-select/dist/vue-select.css';
  export default {
    name: 'Menu',
    props: [ 'name' ],
      components: {
      vSelect
    }
  }
</script>

<style lang="scss" scoped>

</style>