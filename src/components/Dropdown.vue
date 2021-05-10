<template>
  <section>
    <v-select placeholder="pick a chord" :options="options"></v-select>
    <v-select placeholder="pick a chord" :options="options"></v-select>
    <v-select placeholder="pick a chord" :options="options"></v-select>
    <v-select placeholder="pick a chord" :options="options"></v-select>
    </section>
</template>

<script>
// import romanNums from '../helpers/basicChordLibrary'
import vSelect from 'vue-select';
  export default {
    name: 'Dropdown',
    components: {
      vSelect
    },
    props: ['options']
  }
</script>

<style lang="scss" scoped>

</style>