// import * as Tone from 'tone';

// export let synth = new Tone.PolySynth(Tone.Synth, {
//   oscillator : {
//     type : "sawtooth",
//     detune: 3,
//     portamento: 0.5,
//     volume: -15
//   }
// }).toDestination();

// const fmFilter = new Tone.AutoFilter({
//   frequency: 30,
//   depth: 0,
//   baseFrequency: 200
// });

// export const fmSynth = new Tone.PolySynth(Tone.FMSynth, {
//   volume: -10,
//   harmonicity: 1,
//   modulationIndex: 10,
//   oscillator : {
//       type: "sine"
//   }}).connect(fmFilter).toDestination();

//   const amFilter = new Tone.AutoFilter({
//     frequency: 30,
//     depth: 0,
//     baseFrequency: 200
//   });

//   export const amSynth = new Tone.PolySynth(Tone.AMSynth, {
//     harmonicity: 1,
//     modulationIndex: 5,
//     portamento: 2,
//     volume: -15,
//     detune: 3,
//     oscillator : {
//         type: "square"
//   }}).connect(amFilter).toDestination();


//   // Multisampled piano, thanks to https://github.com/ledlamp/piano-sounds
//   export const piano = new Tone.Sampler({
//     volume: -10,
//     urls: {
//       C1: 'c1.mp3',
//       C2: 'c2.mp3',
//       C3: 'c3.mp3',
//       D3: 'd3.mp3',
//       E3: 'e3.mp3',
//       F3: 'f3.mp3',
//       G3: 'g3.mp3',
//       A3: 'a3.mp3',
//       B3: 'b3.mp3',
//       C4: 'c4.mp3',
//       D4: 'd4.mp3',
//       E4: 'e4.mp3',
//       F4: 'f4.mp3',
//       G4: 'g4.mp3',
//       A4: 'a4.mp3',
//       B4: 'b4.mp3'
//     },
//     baseUrl: 'https://ledlamp.github.io/piano-sounds/GreatAndSoftPiano/',
//   }).toDestination();

//   export const harp = new Tone.Sampler({
//     urls: {
//       C1: 'c0.mp3',
//       C2: 'c1.mp3',
//       C3: 'c2.mp3',
//       D3: 'd2.mp3',
//       E3: 'e2.mp3',
//       F3: 'f2.mp3',
//       G3: 'g2.mp3',
//       A3: 'a2.mp3',
//       B3: 'b2.mp3',
//       C4: 'c3.mp3',
//       D4: 'd3.mp3',
//       E4: 'e3.mp3',
//       F4: 'f3.mp3',
//       G4: 'g3.mp3',
//       A4: 'a3.mp3',
//       B4: 'b3.mp3'
//     },
//     baseUrl: 'https://ledlamp.github.io/piano-sounds/Harp/',
//   }).toDestination();