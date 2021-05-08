import * as Tone from 'tone';

export let synth = new Tone.PolySynth(Tone.Synth, {
  oscillator : {
    type : "sawtooth",
    detune: 3,
    portamento: 0.5
  }
}).toDestination();