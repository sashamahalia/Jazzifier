import s11 from 'sharp11'

const addOctave = note => `${note}3`

const createScale = (note, scaleName) => {
  const key = addOctave(note);
  s11.create(key, scaleName);
}