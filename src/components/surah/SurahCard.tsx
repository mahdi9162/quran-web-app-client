import Link from 'next/link';
import React from 'react';

type SurahCardProps = {
  id: number;
  englishName: string;
  arabicName: string;
  ayahCount: number;
  revelationType: string;
};

const SurahCard = ({ id, englishName, arabicName, ayahCount, revelationType }: SurahCardProps) => {
  return (
    <Link
      href={`/surahs/${id}`}
      className="group relative block overflow-hidden rounded-4xl border border-base-300 bg-base-100 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(15,118,110,0.1)]"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />

      <div className="relative z-10 flex items-start justify-between">
        <div className="space-y-4">
          {/* ID Badge */}
          <div className="relative flex h-10 w-10 md:h-14 md:w-14 items-center justify-center">
            <div className="absolute inset-0 rotate-45 rounded-2xl bg-primary/10 transition-transform duration-500 group-hover:rotate-90 group-hover:bg-primary/20" />
            <span className="relative text-sm md:text-base font-black text-primary">{id}</span>
          </div>

          <div>
            <h3 className="text-2xl font-bold md:font-black tracking-tight text-base-content transition-colors group-hover:text-primary">
              {englishName}
            </h3>
            <p className="mt-1 text-sm font-medium text-base-content/50 italic capitalize">
              {revelationType} • {ayahCount} Ayahs
            </p>
          </div>
        </div>

        {/* Arabic Name */}
        <div className="text-right">
          <p className="bg-linear-to-br from-primary to-secondary bg-clip-text text-3xl md:text-4xl font-bold leading-relaxed text-transparent transition-all group-hover:scale-110">
            {arabicName}
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 flex items-center justify-between">
        <div className="flex -space-x-1">
          <div className="h-1.5 w-8 rounded-full bg-primary/20 transition-all group-hover:w-12 group-hover:bg-primary" />
          <div className="h-1.5 w-2 rounded-full bg-secondary/40" />
        </div>

        <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary opacity-100 lg:opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:-translate-x-4">
          Read Surah
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default SurahCard;
