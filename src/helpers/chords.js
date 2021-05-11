import s11 from 'sharp11';

// const positions = [
//   { beat: 1, chord: 'I' },
//   { beat: 2, chord: 'VI' },
//   { beat: 3, chord: 'IV' },
//   { beat: 4, chord: 'VII' },
// ];

const mapToChords = num => {

  const valueMap = {
    I: 'C',
    II: 'D',
    III: 'E',
    IV: 'F',
    V: 'G',
    VI: 'A',
    VII: 'B',
    default: 'C'
  }
 return (valueMap[num] || valueMap['default']);
};

// Needs more defensive code, could break if default value of chord ie 'Chord 1' rather than roman numeral was still selected.
export const selectChords = positions => {
    return positions.map(position => {
      const newPosition = {...position}
      console.log('new position', newPosition);
      position.chord = mapToChords(position.chord);
      return position.chord;
  })
};

export let selectedChords = [];
console.log(selectedChords);


const chordArray = selectedChords.map(chord => s11.chord.create(chord, 3));
console.log(chordArray);

//chordArray is an array of Sharp 11 chord objects which have bunch of info
//including the letter names of each note in the chord and it's octave which is what we're returning
const chordNotes = chordArray.map(chordInfo => chordInfo.chord.map(note => {
  return `${note.letter}${note.octave}`
}));

export const chords = {
  chord1: chordNotes[0],
  chord2: chordNotes[1],
  chord3: chordNotes[2],
  chord4: chordNotes[3]
};