import s11 from 'sharp11';

const selectChords = ['Emaj7#11', 'Gm6', 'F/C', 'C'];

const chordArray = selectChords.map(chord => s11.chord.create(chord));
console.log(chordArray);

//chordArray is an array of Sharp 11 chord objects which have bunch of info
//including the letter names of each note in the chord which is what we're returning
//Added a '3' to make the notes readable by Tone, but it's not a perfect solution and sometime leads to weird results
const chordNotes = chordArray.map(chordInfo => chordInfo.chord.map(note => {
  return `${note.letter}3`
}));

export const chords = {
  chord1: chordNotes[0],
  chord2: chordNotes[1],
  chord3: chordNotes[2],
  chord4: chordNotes[3]
};