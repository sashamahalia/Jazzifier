import * as Tone from 'tone'
import s11 from 'sharp11'

const synth = new Tone.PolySynth(Tone.Synth).toDestination();

const chord1 = ["C3", "E4", "G4", "A4"];
const chord2 = ["D3", "F4", "A4", "B4"];
const chord3 = ["E3", "G4", "B4", "C4"];
const chord4 = ["F3", "A4", "C4", "E4"];


//mainChords syntax inspired by https://www.devbridge.com/articles/tonejs-coding-music-production-guide/
const mainChords = [
  {'time': '0:0', 'note': chord3, 'duration': '1m'},
  {'time': '1:0', 'note': chord4, 'duration': '1m'},
  {'time': '2:0', 'note': chord2, 'duration': '1m'},
  {'time': '3:0', 'note': chord1, 'duration': '1m'},
];

export const loop = new Tone.Part((time, value) => {
  //value.note is the array of notes in the chord, s11.identify analysis what chord it is and returns the chord name as a string
    console.log(s11.chord.identify(...value.note));
    synth.triggerAttackRelease(value.note, value.duration, time);
}, mainChords).start(0);

//tells a the pattern to loop for four measures
loop.loopStart = 0
loop.loopEnd = "4m";
loop.loop = true;

 