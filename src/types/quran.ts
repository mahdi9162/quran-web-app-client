export type Surah = {
  id: number;
  name: string;
  transliteration: string;
  translation: string;
  total_verses: number;
  type: string;
};

export type Verses = {
  id: number;
  text: string;
  translation: string;
  transliteration?: string;
};
