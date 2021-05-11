<template>
  <div id="app">
    <ul>
      <li v-for="position in positions" :key="position.beat">{{ position.beat }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Iterate',
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
    }
    
  }
</script>

<style lang="scss" scoped>

</style>