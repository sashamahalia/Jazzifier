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
        <v-select @input="chordLoop.dispose()" :options="modes" :placeholder="position.mode" :value="position.mode" v-model="position.mode"/>
      </div>
  </section>
</template>

<script>
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
export default {
  name: 'Dropdown',
  data() {
    return {
    }
  },
  props: ['positions', 'chords', 'chordLoop', 'modes', 'scale'],
  components: {
    vSelect
  },
  methods: {
    updateChord (position, newChord) {
      // Dispose the chord loop before every time it's updated
      this.chordLoop.dispose();
      if (!newChord) {
        position.chord = `Chord ${position.beat}`;
        return;
      }
      position.chord = newChord;
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