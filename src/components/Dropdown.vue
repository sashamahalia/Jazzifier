<template>
  <div id="app">
      <v-select 
        v-for="position in positions"
        :options="chords"
        placeholder="Select chord"
        :key="position.beat"
        :value="position.chord"
        @input="chord => updateChord(position, chord)"
        >
        </v-select>
  </div>
</template>

<script>
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
export default {
  name: 'Dropdown',
  data() {
    return {
      chords: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'],
      positions: [
        { beat: 1, chord: '' },
        { beat: 2, chord: '' },
        { beat: 3, chord: '' },
        { beat: 4, chord: '' },
      ],
    }
  },
  components: {
    vSelect
  },
  methods: {
  updateChord (position, newChord) {
    console.log(newChord);
    position.chord = newChord;
    console.log(this.positions);
  },
  },
  computed: {
    options: () => this.chords,
  }
}
</script>

<style lang="scss" scoped>

</style>