// import { Scale } from "tonal";

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

export const mapToChords = num => {

  const valueMap = {
    I: 'C',
    II: 'Dm',
    III: 'Em',
    IV: 'F',
    V: 'G',
    VI: 'Am',
    VII: 'Bdim',
    default: 'C'
  }
 return (valueMap[num] || valueMap['default']);
};

// export const mapToChords = (position, key) => {

//   const notes = Scale.notes(`${root} minor`)


//   let majOrMin = ''
//   if (position.mode = 'Major') {
//     majOrMin = 'M';
//   }
//   if (position.mode = 'Minor') {
//     majOrMin = 'm';
//   }

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


// Needs more defensive code, could break if default value of chord ie 'Chord 1' rather than roman numeral was still selected.
export const selectChords = positions => {
    return positions.map(position => {
      const newPosition = {...position};
      newPosition.chord = mapToChords(position.chord);
      return newPosition.chord;
  })
};