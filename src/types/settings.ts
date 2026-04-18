export type ReadingSettings = {
  arabicFont: string;
  arabicFontSize: number;
  translationFontSize: number;
};

export const defaultReadingSettings: ReadingSettings = {
  arabicFont: 'amiri',
  arabicFontSize: 36,
  translationFontSize: 18,
};
