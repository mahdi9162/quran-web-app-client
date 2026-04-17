import React from 'react';
import Container from './Container';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="rounded-4xl border border-base-300 bg-base-100 p-8 shadow-lg md:p-14">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div className="space-y-7">
              <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Read • Search • Personalize
              </div>

              <div className="space-y-4">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-base-content ">
                  Read the Quran with
                  <span className="block text-primary">clarity & comfort</span>
                </h1>

                <p className="max-w-xl text-sm md:leading-8 text-base-content/70 md:text-lg">
                  Explore all surahs, search verses instantly, and customize your reading experience with a modern distraction-free
                  interface.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/surah/1" className="btn btn-primary px-7">
                  Browse Surahs
                </Link>

                <Link href="/search" className="btn btn-outline btn-secondary px-7">
                  Quick Search
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-base-300 bg-base-200 p-6 text-center">
                <h3 className="text-3xl font-bold text-primary">114</h3>
                <p className="mt-2 text-sm text-base-content/70">Surahs</p>
              </div>

              <div className="rounded-3xl border border-base-300 bg-base-100 p-6 text-center">
                <h3 className="text-3xl font-bold text-primary">6,236</h3>
                <p className="mt-2 text-sm text-base-content/70">Ayahs</p>
              </div>

              <div className="col-span-2 rounded-3xl border border-base-300 bg-base-100 p-6">
                <h3 className="text-xl font-semibold text-primary">Personalized Reading</h3>
                <p className="mt-2 text-sm md:leading-7 text-base-content/70">
                  Adjust fonts, sizes, and themes for a more comfortable reading session.
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
