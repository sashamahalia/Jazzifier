// import s11 from 'sharp11';
import Vue from 'vue'

const mapToChords = num => {

  const valueMap = {
    I: 'C',
    II: 'Dm',
    III: 'Em',
    IV: 'F',
    V: 'G',
    VI: 'Am',
    VII: 'Bdim',
    default: 'C'
  }
 return (valueMap[num] || valueMap['default']);
};

// Needs more defensive code, could break if default value of chord ie 'Chord 1' rather than roman numeral was still selected.
export const selectChords = positions => {
    return positions.map(position => {
      const newPosition = {...position};
      console.log(position)
      newPosition.chord = mapToChords(position.chord);
      console.log(newPosition.chord);
      return newPosition.chord;
  })
};

export const selectChordState = new Vue.observable({
  selectedChords: ['Gm7', 'Ab', 'Bdim', 'F'],
  chords: {
    chord1: '',
    chord2: '',
    chord3: '',
    chord4: ''
  } 
});

// const chordArray = selectChordState.selectedChords.map(chord => s11.chord.create(chord, 3));

//chordArray is an array of Sharp 11 chord objects which have bunch of info
//including the letter names of each note in the chord and it's octave which is what we're returning
// const chordNotes = chordArray.map(chordInfo => chordInfo.chord.map(note => {
//   return `${note.letter}${note.octave}`
// }));