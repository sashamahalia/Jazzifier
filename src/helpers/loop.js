import * as Tone from 'tone';
import s11 from 'sharp11';

export let synth = new Tone.PolySynth(Tone.Synth, {
  oscillator : {
    type : "sawtooth",
    detune: 3,
    portamento: 0.5
  }
}).toDestination();

export const chords = {
  chord1: ["C3", "E4", "G4", "A4"],
  chord2: ["D3", "F4", "A4", "B4"],
  chord3: ["E3", "G4", "B4", "C4"],
  chord4: ["F3", "A4", "C4", "E4"]
};


//mainChords syntax inspired by https://www.devbridge.com/articles/tonejs-coding-music-production-guide/
const mainChords = [
  {'time': '0:0', 'note': chords.chord1, 'duration': '1m'},
  {'time': '1:0', 'note': chords.chord2, 'duration': '1m'},
  {'time': '2:0', 'note': chords.chord3, 'duration': '1m'},
  {'time': '3:0', 'note': chords.chord4, 'duration': '1m'},
];

export const chordLoop = new Tone.Part((time, value) => {
  //value.note is the array of notes in the chord, s11.identify analyzes what chord it is and returns the chord name as a string
    document.getElementById("chord-name").innerHTML = s11.chord.identify(...value.note);
    if (value.note === chords.chord1) { console.log(1) }
    synth.triggerAttackRelease(value.note, value.duration, time);
}, mainChords).start(0);

//tells a the pattern to loop for four measures
chordLoop.loopStart = 0;
chordLoop.loopEnd = "4m";
chordLoop.loop = true;

export const bpm = num => {
  return Tone.Transport.bpm.value = num;
}
 