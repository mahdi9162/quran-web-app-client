'use client';

import React, { FormEvent, useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SearchResult } from '@/types/quran';
import { arabicFontFamilies } from '@/lib/fonts';
import { useReadingSettings } from '@/context/settings-context';

type SearchClientProps = {
  initialQuery: string;
  initialResults: SearchResult[];
};

const highlightText = (text: string, query: string) => {
  if (!query) return text;

  const parts = text.split(new RegExp(`(${query})`, 'gi'));

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} className="rounded bg-primary/20 px-1">
        {part}
      </span>
    ) : (
      part
    ),
  );
};

const SearchClient = ({ initialQuery, initialResults }: SearchClientProps) => {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);

  const { settings } = useReadingSettings();
  const selectedArabicFontFamily = arabicFontFamilies[settings.arabicFont as keyof typeof arabicFontFamilies];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3 rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
          <Search size={20} className="text-base-content/50" />

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by translation text..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-base-content/50 md:text-base"
          />

          <button type="submit" className="btn btn-primary btn-sm md:btn-md">
            Search
          </button>
        </div>
      </form>

      {initialQuery ? (
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-base-content/70 md:text-base">
              Showing results for <span className="font-semibold text-base-content">&quot;{initialQuery}&quot;</span>
            </p>

            <p className="text-sm text-base-content/70">
              {initialResults.length} result
              {initialResults.length !== 1 ? 's' : ''}
            </p>
          </div>

          {initialResults.length > 0 ? (
            <div className="space-y-4">
              {initialResults.map((result) => (
                <Link
                  key={`${result.surahId}-${result.ayahNumber}-${result.id}`}
                  href={`/surahs/${result.surahId}`}
                  className="block rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-base-content">{result.surahName}</h3>
                        <p className="text-lg font-semibold text-primary">{result.surahArabicName}</p>
                      </div>

                      <span className="badge badge-outline">Ayah {result.ayahNumber}</span>
                    </div>

                    <p
                      className="text-right leading-loose text-base-content"
                      style={{
                        fontSize: `${settings.arabicFontSize}px`,
                        fontFamily: selectedArabicFontFamily,
                      }}
                    >
                      {highlightText(result.arabicText, query)}
                    </p>

                    <div className="border-t border-base-300 pt-4">
                      <p className="leading-8 text-base-content/80" style={{ fontSize: `${settings.translationFontSize}px` }}>
                        {highlightText(result.translation, query)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-base-300 bg-base-100 p-10 text-center">
              <h3 className="text-xl font-semibold text-base-content">No ayahs found</h3>
              <p className="mt-2 text-base-content/70">Try a different keyword from the English translation.</p>
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-base-300 bg-base-100 p-10 text-center">
          <h3 className="text-xl font-semibold text-base-content">Start searching</h3>
          <p className="mt-2 text-base-content/70">Search words like mercy, guidance, patience, prayer, or believers.</p>
        </div>
      )}
    </div>
  );
};

export default SearchClient;
