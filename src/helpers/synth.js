import * as Tone from 'tone';

export let synth = new Tone.PolySynth(Tone.Synth, {
  oscillator : {
    type : "sawtooth",
    detune: 3,
    portamento: 0.5,
    volume: -15
  }
}).toDestination();

const fmFilter = new Tone.AutoFilter({
  frequency: 30,
  depth: 0,
  baseFrequency: 200
});

export const fmSynth = new Tone.PolySynth(Tone.FMSynth, {
  volume: -10,
  harmonicity: 1,
  modulationIndex: 10,
  oscillator : {
      type: "sine"
  }}).connect(fmFilter).toDestination();

  const amFilter = new Tone.AutoFilter({
    frequency: 30,
    depth: 0,
    baseFrequency: 200
  });

  export const amSynth = new Tone.PolySynth(Tone.AMSynth, {
    harmonicity: 1,
    modulationIndex: 5,
    portamento: 2,
    volume: -15,
    detune: 3,
    oscillator : {
        type: "square"
  }}).connect(amFilter).toDestination();
