import { ChordType } from "@tonaljs/tonal";

export const getChords = () => {
  const funChords = ChordType.all().filter(chord => chord.aliases[0].length >= 3);
  // returns the first of the abrivations for the chord as a string
  return funChords.map(chord => chord.aliases[0]);
}

// gets all extensions that start with a major symbol
const majorExtensions = getChords().filter(chord => chord.charAt(0) === 'M' || chord.startsWith('maj'));
console.log('major', majorExtensions)
// gets all extensions that start with a minor symbol
const minorExtensions = getChords().filter(chord => chord.charAt(0) === 'm' && !chord.startsWith('maj'));
console.log('minor', minorExtensions);

// starts with neither
// My plan is to add the neither chords for both major and minor chords but not sure if that's sound from a music theory perspective
const neither = getChords().filter(chord => !majorExtensions.includes(chord) && !minorExtensions.includes(chord));
console.log('neither', neither);

// Refactor to use randomChord method in App, by making the chord in this.chords[randomNumber] a variable based on method argument.
const randomJazzChord = (chordArray) => {
  const min = Math.ceil(0);
  const max = Math.floor(chordArray.length - 1);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  
  return chordArray[randomNumber];
};

// Builds arrays of all compatable chords based on chord mode, and outputs a random chord extension.
const chordChange = (chordName, chordMode) => {
  if (chordMode === 'Major') {
    const majCompatable = majorExtensions.concat(neither);
    return `${chordName}${randomJazzChord(majCompatable)}`
  }

  if (chordMode === 'Minor') {
    const minCompatable = minorExtensions.concat(neither);
    return `${chordName}${randomJazzChord(minCompatable)}`
  }
};

console.log('chord change', chordChange('C', 'Minor'));