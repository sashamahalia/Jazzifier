<template>
  <section>
    <ul id="example-1">
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>
      <div v-for="position in positions" :key="position.beat">
        <p>hi</p>
        <v-select
          :options="options"
          :value="position.chord"
        />
    </div>
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
  data() { 
    return {
      chords: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'],
      positions: [
        { beat: 1, chord: '' },
        { beat: 2, chord: '' },
        { beat: 3, chord: '' },
        { beat: 4, chord: '' },
      ],
      parentMessage: 'Parent',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  },
  methods: {
    updateChord (position, newChord) {
      position.chord = newChord;
    },
  },
  computed: {
    options: () => this.chords,
  }
}
</script>

<style lang="scss" scoped>

</style>