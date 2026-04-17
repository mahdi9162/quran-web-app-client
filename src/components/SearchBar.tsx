'use client';

import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    setQuery('');
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="flex items-center gap-2 rounded-xl border border-base-300 bg-base-100 px-3 py-2 shadow-sm focus-within:border-primary">
        <Search size={18} className="text-base-content/50" />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search verses..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-base-content/50"
        />

        <button type="submit" className="btn btn-ghost btn-sm btn-circle text-primary hover:bg-primary/10" aria-label="Search">
          <Search size={18} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
