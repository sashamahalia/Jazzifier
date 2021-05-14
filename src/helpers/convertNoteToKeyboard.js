export const convertNoteToKeyboard = (note) => {
  // console.log("helper function note", note)
  let newNote = note.slice(0, -1);
  let octave = note.slice(-1)
  // console.log("***POTATO***", newNote, " SPACE ", octave);
  switch(newNote){
    //C
    case 'B#':
      newNote = 'C';
      octave = parseInt(octave) + 1;
      break;
    case 'Dbb':
      newNote = 'C';
      break;
    
    //C#
    case 'Db':
    case 'B##':
      newNote = 'C#';
      break;

    //D
    case 'Ebb':
    case 'C##':
      newNote = 'D';
      break;

    //Eb
    case 'D#':
    case 'Fbb':
      newNote = 'Eb';
      break;
    
    //E
    case 'Fb':
    case 'D##':
      newNote = 'E';
      break;

    //F
    case 'E#':
    case 'Gbb':
      newNote = 'F';
      break;
    
    //F#
    case 'Gb':
    case 'E##':
      newNote = 'F#';
      break;
    
    //G
    case 'F##':
    case 'Abb':
      newNote = 'G';
      break;

    //Ab
    case 'G#':
      newNote = 'Ab';
      break;
    
    //A
    case 'G##':
    case 'Bbb':
      newNote = 'A';
      break;
    
    //Bb
    case 'A#':
    case 'Cbb':
      newNote = 'Bb';
      break;
    
    //B
    case 'Cb':
    case 'A##':
      newNote = 'A';
      break;
  }



  return `${newNote}${octave}`;
};