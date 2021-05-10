import Vue from "vue";
import romanNums from './helpers/basicChordLibrary'

export const state = new Vue.observable({
  basicChords: romanNums
});
