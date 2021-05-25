import { ChordType } from "@tonaljs/tonal";

export const getChords = () => {
  const funChords = ChordType.all().filter(chord => (chord.intervals.length > 3 && chord.intervals.length < 6) && (!chord.aliases[0].includes('11') && (!chord.aliases[0].includes('11'))));
  return funChords;
}
console.log('get chords', getChords());

// gets all extensions that are minor, diminished, or suspended
const minorExtensions = getChords().filter(chord => (chord.quality !== 'Major') && (chord.quality !== 'Augmented'));
const minorStrings = minorExtensions.map(chord => chord.aliases[0]);
  // returns the first of the abrivations for the chord as a string
console.log('minor', minorStrings);

// funChords.map(chord => chord.aliases[0]);

// gets all chords that are major, augmented or suspended.
const majorExtensions = getChords().filter(chord => (chord.quality !== 'Minor') && (chord.quality !== 'Diminished'));
const majorStrings = majorExtensions.map(chord => chord.aliases[0]);

console.log('major', majorStrings);

// const randomJazzChord = (chordArray) => {
//   const min = Math.ceil(0);
//   const max = Math.floor(chordArray.length - 1);
//   const randomNumber = Math.floor(Math.random() * (max - min) + min);
  
//   return chordArray[randomNumber];
// };

// // Builds arrays of all compatable chords based on chord mode, and outputs a random chord extension.
// const chordChange = (chordName, chordMode) => {
//   if (chordMode === 'Major') {
//     return `${chordName}${randomJazzChord(majorStrings)}`
//   }

//   if (chordMode === 'Minor') {
//     return `${chordName}${randomJazzChord(minorStrings)}`
//   }
// };