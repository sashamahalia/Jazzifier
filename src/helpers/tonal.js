import { ChordType } from "@tonaljs/tonal";
import s11 from 'sharp11'

export const getChords = () => {
  // Gets all chords from tonal ChordType that are 4 or 5 notes long, and don't include 11th or 13th intervals (which don't fit on the two octave keyboard).
  const funChords = ChordType.all().filter(chord => (chord.intervals.length > 3 && chord.intervals.length < 6) && (!chord.aliases[0].includes('11') && (!chord.aliases[0].includes('13'))));
  // Returns an array of tonal chord objects
  return funChords;
};

// Gets all extensions that are minor, diminished, or suspended
const minorExtensions = getChords().filter(chord => (chord.quality !== 'Major') && (chord.quality !== 'Augmented'));
  // Returns the first of the abrivations for the chord as a string
const minorStrings = minorExtensions.map(chord => chord.aliases[0]);
console.log(minorStrings);

// Gets all chords that are major, augmented or suspended.
const majorExtensions = getChords().filter(chord => (chord.quality !== 'Minor') && (chord.quality !== 'Diminished'));
const majorStrings = majorExtensions.map(chord => chord.aliases[0]);
const chordsInC = majorStrings.map(chord => `C${chord}`)
const allChords = chordsInC.map(chord => s11.chord.create(chord, 3));
console.log(allChords);
// console.log('3 note chords', allChords.filter(chord => chord.chord.length < 4))


const randomJazzChord = (chordArray) => {
  const min = Math.ceil(0);
  const max = Math.floor(chordArray.length - 1);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  
  return chordArray[randomNumber];
};

// Builds arrays of all compatable chords based on chord mode, and outputs a random chord extension.
export const chordChange = (chordMode) => {
  if (chordMode === 'Major') {
    return randomJazzChord(majorStrings);
  }

  if (chordMode === 'Minor') {
    return randomJazzChord(minorStrings);
  }
};