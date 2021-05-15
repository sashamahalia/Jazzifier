<template>
  <section id="chord-select">
    <div v-for="position in positions" :key="position.beat" class="position.beat">
      <h4 :class="beatId(position.beat)">{{ capitalizedNumeral(position) }}</h4>
      <v-select
        :disabled="disabled"
        :clearable="false"
        :options="chords"
        placeholder="Select chord"
        :value="position.chord"
        @input="chord => updateChord(position, chord)"
        >
        </v-select>
        <v-select :clearable="false" :disabled="disabled" @input="chordLoop.dispose()" :options="modes" :placeholder="position.mode" :value="position.mode" v-model="position.mode"/>
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
  props: ['positions', 'chords', 'chordLoop', 'modes', 'scale', 'disabled', 'beat', 'chordNames'],
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
    },
    beatId(position) {
      // console.log(position);
      if (position === this.beat) {
        return "highlighted";
      }
      // return `beat${position} BEAT: ${this.beat}`;
      return "";
      
    },

    capitalizedNumeral(position) {
      // console.log("APRICOT*****",position);

      if (position.chord.includes("Ch")) {
        return position.chord;
      }

      if (position.mode === "Minor" || position.mode.includes("dim")) {
      return position.chord.toLowerCase();
      }

      return position.chord;
    }
  },
  computed: {
    options: () => {this.chords},

    
    
  }
}
</script>

<style lang="scss" scoped>

  .highlighted {
    background-color: white;
    border: 2px solid $darker-purple;
    border-radius: 1em;

  }

  #chord-select {
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

</style>