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

export type SearchResult = {
  id: number;
  surahId: number;
  surahName: string;
  surahArabicName: string;
  ayahNumber: number;
  translation: string;
  arabicText: string;
};

