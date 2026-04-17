import { Surah } from '@/types/quran';

const BASE_URL = process.env.QURAN_API_BASE_URL;

// Get All
export async function getAllSurahs(): Promise<Surah[]> {
  const res = await fetch(`${BASE_URL}/api/surahs`, {
    cache: 'force-cache',
  });

  if (!res.ok) throw new Error('Failed to fetch surahs');

  const result = await res.json();
  return result.data;
}

// Specific Surah
export async function getSurahById(id: number): Promise<Surah> {
  const res = await fetch(`${BASE_URL}/api/surahs/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error('Failed to fetch surah');

  const result = await res.json();
  return result.data;
}

// Specific verses
export async function getSurahVerses(id: number) {
  const res = await fetch(`${BASE_URL}/api/surahs/${id}/verses`, {
    cache: 'force-cache',
  });
  if (!res.ok) throw new Error('Failed to fetch surah verses');

  const result = await res.json();
  return result.data;
}

export async function searchSurahs(query: string): Promise<Surah[]> {
  const surahs = await getAllSurahs();

  const normalizedQuery = query.toLowerCase().trim();

  return surahs.filter(
    (surah) =>
      surah.name.includes(query) ||
      surah.transliteration.toLowerCase().includes(normalizedQuery) ||
      surah.translation.toLowerCase().includes(normalizedQuery),
  );
}
