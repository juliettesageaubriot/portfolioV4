export interface SliderProps {
  opacity: number;
  vertical: number;
  fontSize: number;
  // J'ai rajouté un nouveau type, comme ça tu définis pour chaque mot si tu veux le gradient ou pas
  words: SliderWord[];
}

export interface SliderWord {
  label: string,
  gradient: boolean
}