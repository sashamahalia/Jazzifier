// import { ChordType } from "@tonaljs/tonal";

// export const getChords = () => {
//   const funChords = ChordType.all().filter(chord => chord.aliases[0].length >= 3);
//   // returns the first of the abbreviations for the chord as a string
//   return funChords.map(chord => chord.aliases[0]);
// }

// // gets all extensions that start with a minor symbol or dim
// const minorExtensions = getChords().filter(chord => (chord.charAt(0) === 'm' && !chord.startsWith('maj')) || chord.startsWith('dim'));
// console.log('minor', minorExtensions);

// // gets all other extensions
// const majorExtensions = getChords().filter(chord => !minorExtensions.includes(chord));
// console.log('major', majorExtensions);

// // Refactor to use randomChord method in App, by making the chord in this.chords[randomNumber] a variable based on method argument.
// const randomJazzChord = (chordArray) => {
//   const min = Math.ceil(0);
//   const max = Math.floor(chordArray.length - 1);
//   const randomNumber = Math.floor(Math.random() * (max - min) + min);

//   return chordArray[randomNumber];
// };

// // Builds arrays of all compatable chords based on chord mode, and outputs a random chord extension.
// const chordChange = (chordName, chordMode) => {
//   if (chordMode === 'Major') {
//     return `${chordName}${randomJazzChord(majorExtensions)}`
//   }

//   if (chordMode === 'Minor') {
//     return `${chordName}${randomJazzChord(minorExtensions)}`
//   }
// };

// console.log('chord change', chordChange('C', 'Minor'));
