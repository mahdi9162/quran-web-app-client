'use client';

import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { Surah, Verses } from '@/types/quran';

type SurahDetailsClientProps = {
  surah: Surah;
  arabicVerses: Verses[];
  englishVerses: Verses[];
};

const INITIAL_COUNT = 15;
const LOAD_MORE_COUNT = 15;

const SurahDetailsClient = ({ surah, arabicVerses, englishVerses }: SurahDetailsClientProps) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleArabicVerses = useMemo(() => {
    return arabicVerses.slice(0, visibleCount);
  }, [arabicVerses, visibleCount]);

  const hasMore = visibleCount < arabicVerses.length;

  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="space-y-6 md:space-y-8">
          {/* header */}
          <div className="rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm md:p-8">
            <div className="mb-4">
              <Link href="/surahs" className="btn btn-ghost btn-sm -ml-2">
                ← Back to Surahs
              </Link>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-base-content md:text-5xl">
                  {surah.id}. {surah.transliteration}
                </h1>

                <h2 className="text-3xl font-semibold text-primary md:text-4xl font-arabic">{surah.name}</h2>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3">
                <span className="badge badge-primary badge-lg">{surah.total_verses} Ayahs</span>
                <span className="badge badge-outline badge-lg capitalize">{surah.type}</span>
                {surah.translation && <span className="badge badge-outline badge-lg">{surah.translation}</span>}
              </div>
            </div>
          </div>

          {/* verses */}
          <div className="space-y-4 md:space-y-5">
            {visibleArabicVerses.map((ayah, index) => (
              <article
                key={ayah.id || index}
                className="rounded-3xl border border-base-300 bg-base-100 p-4 shadow-sm transition-shadow hover:shadow-md md:p-6"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="badge badge-secondary badge-md md:badge-lg">Ayah {ayah.id || index + 1}</span>
                  </div>

                  <p className="text-right text-2xl leading-loose text-base-content md:text-4xl font-arabic">{ayah.text}</p>

                  <div className="border-t border-base-300 pt-4">
                    <p className="text-sm md:leading-8 text-base-content/80 md:text-lg">{englishVerses[index]?.translation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* load more */}
          {hasMore && (
            <div className="flex justify-center pt-2">
              <button onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_COUNT)} className="btn btn-primary px-8">
                Load More Ayahs
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SurahDetailsClient;
