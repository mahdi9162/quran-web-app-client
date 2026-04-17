import React from 'react';
import { getSurahById, getSurahVerses } from '@/lib/quran-api';
import { Verses } from '@/types/quran';
import SurahDetailsClient from '@/components/surah/SurahDetailsClient';


type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const Surah = async ({ params }: PageProps) => {
  const { id } = await params;

  const surah = await getSurahById(Number(id));
  const verses = await getSurahVerses(Number(id));

  const arabicVerses: Verses[] = verses.arabic.verses;
  const englishVerses: Verses[] = verses.english.verses;

  return <SurahDetailsClient surah={surah} arabicVerses={arabicVerses} englishVerses={englishVerses} />;
};

export default Surah;
