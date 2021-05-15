import { Scale } from "@tonaljs/tonal";
import s11 from 'sharp11'

export const mapToChords = (position, root, mode) => {

  const notes = Scale.get(`${root} ${mode.toLowerCase()}`).notes

  let keyMode = '';
  if (mode === 'Major') {
    keyMode = 'M';
  }
  if (mode === 'Minor') {
    keyMode = 'm';
  }

  let chordMode = position.mode;
  if (position.mode === 'Major') {
    chordMode = 'M';
  }
  if (position.mode === 'Minor') {
    chordMode = 'm';
  }

  const valueMap = {
    I: `${notes[0]}${chordMode}`,
    II: `${notes[1]}${chordMode}`,
    III: `${notes[2]}${chordMode}`,
    IV: `${notes[3]}${chordMode}`,
    V: `${notes[4]}${chordMode}`,
    VI: `${notes[5]}${chordMode}`,
    VII: `${notes[6]}${chordMode}`,
    default: `${notes[0]}${keyMode}`,
  }
  // console.log(valueMap[position.chord]);
 return (valueMap[position.chord] || valueMap['default']);
};

export const selectChords = (positions, key, mode) => {
    return positions.map(position => {
      const newPosition = {...position};
      newPosition.chord = mapToChords(position, key, mode);
      return newPosition.chord;
  })
};

export const getChordName = (array) => {
  return s11.identifyArray(array);
}