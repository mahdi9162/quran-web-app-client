import Link from 'next/link';
import React from 'react';
import Container from '../shared/Container';
import SurahCard from '../shared/SurahCard';
import { getAllSurahs } from '@/lib/quran-api';

const FeaturedSurahs = async () => {
  // api call
  const surahs = await getAllSurahs();

  const featuredSurahs = surahs.slice(0, 6);

  return (
    <section className="relative my-20 lg:my-30 px-3 lg:px-0">
      {/* Background glow */}
      <div className="absolute right-0 top-0 -z-10 h-64 w-64 bg-primary/5 blur-[100px]" />

      <Container>
        <div className="space-y-12">
          {/* Section Header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-secondary-content ring-1 ring-secondary/20">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                Featured Surahs
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-base-content">
                  Begin your <span className="text-primary">Journey</span>
                </h2>
                <p className="max-w-2xl text-sm text-base-content/80">
                  Dive into the most frequently read surahs. Start with these essentials or explore the full Quranic list.
                </p>
              </div>
            </div>

            <div className="hidden lg:block">
              <Link href="/surahs" className="group flex items-center gap-3 font-bold text-primary transition-all hover:gap-5">
                View All Surahs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Grid Layout - More breathing space */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredSurahs.map((surah) => (
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

          {/* Mobile View All Button - visible only on small screens */}
          <div className="text-center lg:hidden">
            <Link href="/surahs" className="btn btn-primary btn-outline btn-wide rounded-2xl font-bold">
              View All Surahs
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedSurahs;
