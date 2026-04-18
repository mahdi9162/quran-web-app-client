import React from 'react';
import Container from '../shared/Container';
import Link from 'next/link';
import Image from 'next/image';
import { Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="mt-10 mb-20 lg:mb-20">
      <Container>
        <div className="rounded-4xl border border-base-300 bg-base-100 px-3 py-8 shadow-lg md:p-14">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div className="space-y-7">
              <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Read • Search • Personalize
              </div>

              <div className="space-y-4">
                <h1 className="text-2xl font-bold leading-tight text-base-content md:text-4xl lg:text-5xl">
                  Read the Quran with
                  <span className="block text-primary">clarity & comfort</span>
                </h1>

                <p className="max-w-xl text-sm text-base-content/70 md:text-lg md:leading-7">
                  Explore all surahs, search verses instantly, and customize your reading experience with a modern distraction-free
                  interface.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/surahs" className="btn btn-primary px-7">
                  Browse Surahs
                </Link>

                <Link href="/search" className="btn btn-outline btn-secondary px-7">
                  Quick Search
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-6">
              {/* Card */}
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm md:aspect-auto md:h-80">
                <Image src="/hero-quran.webp" alt="Quran Reading Experience" fill priority className="object-cover" />
                {/* Subtle Dark Overlay for focus */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Badge */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-xl bg-base-100/90 p-3 shadow-md backdrop-blur-sm border border-base-200">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-bold text-base-content/80 uppercase tracking-tight">Personalized Reading Interface</span>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center rounded-2xl border border-base-300 bg-base-100 p-6 text-center transition-colors hover:border-primary/20">
                  <span className="text-3xl font-bold text-primary md:text-4xl">114</span>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-base-content/50">Surahs</p>
                </div>

                <div className="flex flex-col items-center justify-center rounded-2xl border border-base-300 bg-base-100 p-6 text-center transition-colors hover:border-primary/20">
                  <span className="text-3xl font-bold text-primary md:text-4xl">6,236</span>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-base-content/50">Ayahs</p>
                </div>
              </div>

              {/* Feature Card  */}
              <div className="rounded-2xl border border-base-300 bg-base-200/50 p-4 flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Shield />
                </div>
                <p className="text-xs font-medium leading-tight text-base-content/70">
                  Settings and preferences are <strong>automatically saved</strong> for your next visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
