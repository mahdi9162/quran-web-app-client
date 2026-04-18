import React from 'react';
import { getSurahById, getSurahVerses } from '@/lib/quran-api';
import { Verses } from '@/types/quran';
import SurahDetailsClient from '@/components/surah/SurahDetailsClient';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return Array.from({ length: 114 }, (_, i) => ({
    id: String(i + 1),
  }));
}

const Surah = async ({ params }: PageProps) => {
  const { id } = await params;
  const surahId = Number(id);

  if (isNaN(surahId) || surahId < 1 || surahId > 114) {
    notFound();
  }

  const surah = await getSurahById(surahId);
  const verses = await getSurahVerses(surahId);

  const arabicVerses: Verses[] = verses.arabic.verses;
  const englishVerses: Verses[] = verses.english.verses;

  return <SurahDetailsClient surah={surah} arabicVerses={arabicVerses} englishVerses={englishVerses} />;
};

export default Surah;
