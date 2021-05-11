<template>
  <section>
    <v-select 
      v-for="position in positions"
      :key="position.beat"
      :options="options"
      :value="position.chord"
      @input="chord => updateChord(position, chord)"
    />
  </section>
</template>

<script>
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
  name: 'Dropdown',
  data: () => ({
    chords: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'],
    positions: [
      { beat: 1, chord: '' },
      { beat: 2, chord: '' },
      { beat: 3, chord: '' },
      { beat: 4, chord: '' }
    ],
  }),
  components: {
    vSelect
  },
  methods: {
    updateChord (position, newChord) {
      position.chord = newChord;
    },
  },
  computed: {
    options: () => this.chords,
  },
};
</script>

<style scoped>
  table {
    display: table;
    width: 100%;
  }
</style>