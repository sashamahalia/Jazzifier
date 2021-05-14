<template>
  <div :class="name">
    <h5>{{ name }}</h5>
    <v-select :disabled="disabled" :clearable="false" :options="options" @input="chordLoop.dispose()" :placeholder="scale[type]" :value="scale[type]" v-model="scale[type]"/>
  </div>
</template>

<script>
  import vSelect from 'vue-select';
  import 'vue-select/dist/vue-select.css';
  export default {
    name: 'Menu',
    props: [ 'name', 'options', 'scale', 'type', 'chordLoop', 'disabled' ],
      components: {
      vSelect
    }
  }
</script>

<style lang="scss" scoped>
</style>