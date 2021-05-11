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
export default {
  name: 'Dropdown',
  data() {
    return {
      chords: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
    }
  },
  props: ['positions'],
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

  #chord-select {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

</style>