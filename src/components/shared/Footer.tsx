import Link from 'next/link';
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-primary text-primary-content px-4 py-10">
      <aside className="space-y-3">
        <div className="flex items-center justify-center">
          <Logo className="flex flex-col text-2xl md:text-3xl font-bold" />
        </div>

        <div className="space-y-1 text-center">
          <p className="max-w-md text-sm text-primary-content/80">
            A clean and personalized Quran reading experience with surah browsing, ayah search, and customizable reading settings.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
          <Link href="/" className="link link-hover">
            Home
          </Link>
          <Link href="/surahs" className="link link-hover">
            Read Quran
          </Link>
          <Link href="/search" className="link link-hover">
            Search
          </Link>
          <Link href="/about" className="link link-hover">
            About
          </Link>
        </div>

        <p className="text-sm text-primary-content/80">Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
