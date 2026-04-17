'use client';

import { useMemo, useState } from 'react';
import { Surah } from '@/types/quran';
import SurahCard from './SurahCard';

type SurahsListProps = {
  surahs: Surah[];
};

const ITEMS_PER_PAGE = 12;

const SurahsList = ({ surahs }: SurahsListProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(surahs.length / ITEMS_PER_PAGE);

  const paginatedSurahs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return surahs.slice(start, end);
  }, [currentPage, surahs]);

  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {paginatedSurahs.map((surah) => (
          <SurahCard
            key={surah.id}
            id={surah.id}
            englishName={surah.transliteration}
            arabicName={surah.name}
            ayahCount={surah.total_verses}
            revelationType={surah.type}
          />
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <button className="btn btn-outline btn-sm" onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage === 1}>
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`btn btn-sm ${currentPage === page ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}

        <button className="btn btn-outline btn-sm" onClick={() => setCurrentPage((prev) => prev + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SurahsList;
