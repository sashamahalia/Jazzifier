import { Scale } from "@tonaljs/tonal";


export const mapToChords = (position, root, mode) => {

  const notes = Scale.get(`${root} ${mode.toLowerCase()}`).notes

  let keyMode = '';
  if (mode === 'Major') {
    keyMode = 'M';
  }
  if (mode === 'Minor') {
    keyMode = 'm';
  }

  let majOrMin = ''
  if (position.mode === 'Major') {
    majOrMin = 'M';
  }
  if (position.mode === 'Minor') {
    majOrMin = 'm';
  }

  const valueMap = {
    I: `${notes[0]}${majOrMin}`,
    II: `${notes[1]}${majOrMin}`,
    III: `${notes[2]}${majOrMin}`,
    IV: `${notes[3]}${majOrMin}`,
    V: `${notes[4]}${majOrMin}`,
    VI: `${notes[5]}${majOrMin}`,
    VII: `${notes[6]}${majOrMin}`,
    default: `${notes[0]}${keyMode}`,
  }
  // console.log(valueMap[position.chord]);
 return (valueMap[position.chord] || valueMap['default']);
};

// Needs more defensive code, could break if default value of chord ie 'Chord 1' rather than roman numeral was still selected.
export const selectChords = (positions, key, mode) => {
    return positions.map(position => {
      const newPosition = {...position};
      newPosition.chord = mapToChords(position, key, mode);
      return newPosition.chord;
  })
};