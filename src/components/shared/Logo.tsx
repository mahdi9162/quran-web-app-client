import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type LogoClass = {
  className?: string;
  pClassName?: string;
};

const Logo = ({ className, pClassName }: LogoClass) => {
  return (
    <Link href={'/'} className={`flex items-center gap-3 ${className}`}>
      <Image src="/logo.webp" className="w-10 md:w-16 h-auto" alt="Logo" width={100} height={40} />
      <p className={pClassName}>Quran Web App</p>
    </Link>
  );
};

export default Logo;
