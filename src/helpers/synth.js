import * as Tone from 'tone';

export let synth = new Tone.PolySynth(Tone.Synth, {
  oscillator : {
    type : "sawtooth",
    detune: 3,
    portamento: 0.5,
    volume: -15
  }
}).toDestination();

export const fmSynth = new Tone.PolySynth(Tone.FMSynth, {
  "harmonicity": 15,
  "modulationIndex": 20,
  "oscillator" : {
      "type": "sine"
  }}).toDestination();

  export const amSynth = new Tone.PolySynth(Tone.AMSynth, {
    "harmonicity": 0.5,
    "modulationIndex": 20,
    "detune": 3,
    "volume": -3,
    "oscillator" : {
        "type": "sine"
    }}).toDestination();

