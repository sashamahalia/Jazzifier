<template>
  <section id="chord-select">
    <div v-for="position in positions" :key="position.beat" class="position.beat">
      <h4>{{ position.chord }}</h4>
      <v-select
        :options="chords"
        placeholder="Select chord"
        :value="position.chord"
        @input="chord => updateChord(position, chord)"
        >
        </v-select>
      </div>
  </section>
</template>

<script>
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import { selectChords, selectChordState } from '../helpers/chords'
export default {
  name: 'Dropdown',
  data() {
    return {
    }
  },
  props: ['positions', 'chords'],
  components: {
    vSelect
  },
  methods: {
    updateChord (position, newChord) {
      if (!newChord) {
        position.chord = `Chord ${position.beat}`;
        this.chordNumToNote()
        return;
      }
      position.chord = newChord;
      this.chordNumToNote();
      console.log('selected chords', selectChordState.selectedChords);
    },
    chordNumToNote() {
      selectChordState.selectedChords.splice(0, 4, selectChords(this.positions));
    }
  },
  computed: {
    options: () => this.chords
  }
}
</script>

<style lang="scss" scoped>

  #chord-select {
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

</style>