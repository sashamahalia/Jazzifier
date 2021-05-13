const mapToChords = num => {

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

// Needs more defensive code, could break if default value of chord ie 'Chord 1' rather than roman numeral was still selected.
export const selectChords = positions => {
    return positions.map(position => {
      const newPosition = {...position};
      newPosition.chord = mapToChords(position.chord);
      return newPosition.chord;
  })
};