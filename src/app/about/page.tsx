import Container from '@/components/shared/Container';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const coreValues = [
  {
    title: "Purpose",
    desc: "To provide a responsive and distraction-free Quran reading platform that feels modern, simple, and easy to use on all devices."
  },
  {
    title: "Core Features",
    desc: "Browse all surahs, read ayahs with translation, and search by keywords with fully personalized font and size controls."
  },
  {
    title: "Experience",
    desc: "Reading settings are saved locally, ensuring your preferred Arabic font and sizes remain available every time you return."
  }
];

const features = [
  { title: "Complete Surah Listing", desc: "Browse all 114 surahs with Arabic and transliterated names in a clean layout." },
  { title: "Detailed Ayah Reading", desc: "Read Arabic ayahs together with English translation in a structured interface." },
  { title: "Powerful Search", desc: "Search ayahs by translation text to quickly find verses related to specific themes." },
  { title: "Personalized Reading", desc: "Customize Arabic font style, font size, and translation size based on preference." }
];

const AboutPage = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      {/* Background Decorative Glow */}
      <div className="absolute -right-20 top-0 -z-10 h-80 w-80 bg-primary/5 blur-[120px]" />
      
      <Container>
        {/* 1. Hero Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary ring-1 ring-primary/20">
              About This Project
            </span>

            <div className="space-y-5">
              <h1 className="text-3xl font-black leading-[1.1] text-base-content md:text-5xl lg:text-6xl">
                Clarity and Focus for your <span className="text-primary">Quranic Journey</span>
              </h1>

              <p className="max-w-xl text-sm md:text-lg leading-relaxed text-base-content/70">
                This application is designed to make spiritual reading more comfortable and personalized. 
                Experience a distraction-free interface built for the modern digital age.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/surahs" className="btn btn-primary md:btn-lg rounded-2xl px-8 shadow-lg shadow-primary/20">
                Explore Surahs
              </Link>
              <Link href="/search" className="btn btn-outline btn-primary md:btn-lg rounded-2xl px-8">
                Search Ayahs
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-linear-to-tr from-primary/10 to-secondary/10 blur-2xl transition-all group-hover:scale-105" />
            <div className="relative h-80 w-full overflow-hidden rounded-4xl border border-base-300 bg-base-100 shadow-2xl md:h-112.5">
              <Image src="/about-quran.webp" alt="Quran reading" fill className="object-cover transition-transform duration-700 group-hover:scale-110" priority />
            </div>
          </div>
        </div>

        {/* 2. Core Values */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {coreValues.map((item, idx) => (
            <div key={idx} className="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
              <h2 className="text-xl font-black text-primary uppercase tracking-tighter">{item.title}</h2>
              <p className="mt-4 md:leading-relaxed text-base-content/70">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 3. Features Section */}
        <div className="mt-24 rounded-[2.5rem] border border-base-300 bg-base-100/50 p-8 backdrop-blur-sm md:p-16">
          <div className="mb-12 text-center space-y-3">
            <h2 className="text-3xl font-bold text-base-content md:text-5xl uppercase tracking-tighter">What this app offers</h2>
            <div className="mx-auto h-1.5 w-20 rounded-full bg-primary/20" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, idx) => (
              <div key={idx} className="group rounded-2xl bg-base-200/50 p-6 border border-transparent transition-all hover:border-primary/20 hover:bg-base-100">
                <h3 className="text-lg font-bold text-base-content transition-colors group-hover:text-primary">{feature.title}</h3>
                <p className="mt-2 text-sm md:leading-7 text-base-content/60">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Bottom CTA */}
        <div className="mt-24 relative overflow-hidden rounded-[3rem] bg-primary p-10 text-center text-primary-content shadow-2xl shadow-primary/30 md:p-20">
          {/*  overlay effect */}
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl font-bold md:text-5xl tracking-tight">Built to make Quran reading simple</h2>
            <p className="mx-auto max-w-2xl md:text-lg opacity-80">
              Focusing on readability and accessibility. Every detail is polished to ensure your reading experience remains smooth and intuitive.
            </p>
            <div className="pt-4">
               <Link href="/surahs" className="btn bg-white text-primary hover:bg-base-200 border-none md:btn-lg rounded-2xl py-6 px-12 font-bold transition-transform hover:scale-105">
                Start Reading Now
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPage;