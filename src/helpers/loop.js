import Vue from "vue";
import * as Tone from 'tone';
import { synth } from './synth';
import { chords } from './chords';
// import s11 from 'sharp11';

//using synth and chords from helper functions
synth;
chords;

//mainChords syntax inspired by https://www.devbridge.com/articles/tonejs-coding-music-production-guide/
const mainChords = [
  {'time': '0:0', 'note': chords.chord1, 'duration': '1m'},
  {'time': '1:0', 'note': chords.chord2, 'duration': '1m'},
  {'time': '2:0', 'note': chords.chord3, 'duration': '1m'},
  {'time': '3:0', 'note': chords.chord4, 'duration': '1m'},
];

//this makes a one-off state store for sharing between files
export const chordState = new Vue.observable({chord: '', beat: ''});

export const chordLoop = new Tone.Part((time, value) => {
    //value.note is the array of notes in the chord, s11.identify analyzes what chord it is and returns the chord name as a string
    //conditionally renders chord name as state
    for (const chord in chords) {
      if (value.note === chords[chord]){
        chordState.chord = chords[chord];
        chordState.beat = chord;
      }
    }

    synth.triggerAttackRelease(value.note, value.duration, time);
}, mainChords).start(0);

//tells a the pattern to loop for four measures
chordLoop.loopStart = 0;
chordLoop.loopEnd = "4m";
chordLoop.loop = true;
 