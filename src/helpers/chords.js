import s11 from 'sharp11';

const selectChords = ['CM7', 'G7', 'Am9', 'Bdim7'];

const chordArray = selectChords.map(chord => s11.chord.create(chord, 3));
console.log(chordArray);

//chordArray is an array of Sharp 11 chord objects which have bunch of info
//including the letter names of each note in the chord which is what we're returning
//Added a '3' to make the notes readable by Tone, but it's not a perfect solution and sometime leads to weird results
const chordNotes = chordArray.map(chordInfo => chordInfo.chord.map(note => {
  return `${note.letter}${note.octave}`
}));

export const chords = {
  chord1: chordNotes[0],
  chord2: chordNotes[1],
  chord3: chordNotes[2],
  chord4: chordNotes[3]
};