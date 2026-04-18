import { SearchResult, Surah } from '@/types/quran';

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
    cache: 'force-cache',
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

export async function searchAyahs(query: string): Promise<SearchResult[]> {
  if (!query.trim()) return [];

  const res = await fetch(`${BASE_URL}/api/search?q=${encodeURIComponent(query)}`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to search ayahs');

  const result = await res.json();
  return result.data;
}
