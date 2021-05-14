import { ChordType } from "@tonaljs/tonal";

export const getChords = () => {
  const funChords = ChordType.all().filter(chord => chord.aliases[0].length >= 3);

  return funChords.map(chord => chord.aliases[0]);
}
