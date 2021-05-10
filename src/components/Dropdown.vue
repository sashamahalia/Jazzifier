<template>
  <section>
      <v-select class="chord1" @input="$emit('input', $event)" v-model="selected" placeholder="pick a chord" :options="['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']"></v-select>
      <v-select class="chord2" @input="$emit('input', $event)" v-model="selected" placeholder="pick a chord" :options="['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']"></v-select>
      <v-select class="chord3" @input="$emit('input', $event)" v-model="selected" placeholder="pick a chord" :options="['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']"></v-select>
      <v-select class="chord4" @input="$emit('input', $event)" v-model="selected" placeholder="pick a chord" :options="['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']"></v-select>
    </section>
</template>

<script>
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
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