import React from 'react';
import Container from '@/components/shared/Container';
import SearchClient from '@/components/search/SearchClient';
import { searchAyahs } from '@/lib/quran-api';

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { q } = await searchParams;
  const query = q?.trim() || '';

  const results = query ? await searchAyahs(query) : [];

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="space-y-8">
          <div className="space-y-3 text-center">
            <div className="inline-flex rounded-full bg-secondary/15 px-4 py-2 text-sm font-semibold text-secondary-content">
              Search Ayahs
            </div>

            <h1 className="text-3xl font-bold text-base-content md:text-5xl">Search by Translation</h1>

            <p className="mx-auto max-w-2xl text-base leading-7 text-base-content/70">
              Search Quran ayahs by English translation text and quickly jump to the relevant surah.
            </p>
          </div>

          <SearchClient initialQuery={query} initialResults={results} />
        </div>
      </Container>
    </section>
  );
};

export default SearchPage;
