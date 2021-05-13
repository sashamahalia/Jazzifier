import { Scale } from "tonal";

// const root = 'C'
// const mode = 'Minor'

// const positions = [
//   { beat: 1, chord: 'VI' },
//   { beat: 2, chord: 'IV' },
//   { beat: 3, chord: 'V' },
//   { beat: 4, chord: 'I' },
// ];

// const mapToChords =  (numeral, root, mode) => {
//   const notes = Scale.notes(`${root} ${mode.toLowerCase()}`)

//   let circleOfFifths = [];

//   if (mode === 'Major') {
//     circleOfFifths = ['M', 'm', 'm', 'M', 'M', 'm', 'dim'];
//   }
//   if (mode === 'Minor') {
//     circleOfFifths = ['m', 'dim', 'M', 'm', 'm', 'M', 'M'];
//   }

//   const valueMap = {
//     I: ``,
//     II: ``,
//     III: ``,
//     IV: ``,
//     V: ``,
//     VI: ``,
//     VII: `$`,
//     default: ``,
//   }
//   return (valueMap[numeral] || valueMap['default']);
// }

// export const mapToChords = num => {

//   const valueMap = {
//     I: 'C',
//     II: 'Dm',
//     III: 'Em',
//     IV: 'F',
//     V: 'G',
//     VI: 'Am',
//     VII: 'Bdim',
//     default: 'C'
//   }
//  return (valueMap[num] || valueMap['default']);
// };

export const mapToChords = (position, root, mode) => {

  const notes = Scale.notes(`${root} ${mode.toLowerCase()}`)

  let keyMode = '';
  if (mode === 'Major') {
    keyMode = 'M';
  }
  if (mode === 'Minor') {
    keyMode = 'm';
  }

  console.log(keyMode);


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
 return (valueMap[position.chord] || valueMap['default']);
};

// Needs more defensive code, could break if default value of chord ie 'Chord 1' rather than roman numeral was still selected.
export const selectChords = (positions, key, mode) => {
    return positions.map(position => {
      const newPosition = {...position};
      newPosition.chord = mapToChords(position.chord, key, mode);
      return newPosition.chord;
  })
};