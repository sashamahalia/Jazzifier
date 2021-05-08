import * as Tone from 'tone';

export const bpm = num => {
  return Tone.Transport.bpm.value = num;
}