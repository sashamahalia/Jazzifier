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

  // this was test code I used for trying to test black keys
  // I kept it in case it's useful later, but if there's a merge conflict or something
  // it's not the end of the world if it gets deleted
  // ['C#3, F#3, 'Bb3']
  // {'time': '0:0', 'note': ['C#3', 'D#3', 'F#3', 'G#3', 'Bb3'], 'duration': '1m'}
  {'time': '0:0', 'note': chords.chord1, 'duration': '1m'},
  {'time': '1:0', 'note': chords.chord2, 'duration': '1m'},
  {'time': '2:0', 'note': chords.chord3, 'duration': '1m'},
  {'time': '3:0', 'note': chords.chord4, 'duration': '1m'},
];

//this makes a one-off state store for sharing between files
export const chordState = new Vue.observable({chord: [], beat: ''});

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
 