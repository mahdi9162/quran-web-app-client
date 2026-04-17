import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src="/logo.webp" className="w-10 md:w-16 h-auto" alt="Logo" width={100} height={40} />
    </Link>
  );
};

export default Logo;
