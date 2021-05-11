<template>
  <div :class="name">
    <h5>{{ name }}</h5>
    <v-select :options="options" :placeholder="placeholder"/>
  </div>
</template>

<script>
  import vSelect from 'vue-select';
  import 'vue-select/dist/vue-select.css';
  export default {
    name: 'Menu',
    props: [ 'name', 'placeholder', 'options' ],
      components: {
      vSelect
    }
  }
</script>

<style lang="scss" scoped>

</style>