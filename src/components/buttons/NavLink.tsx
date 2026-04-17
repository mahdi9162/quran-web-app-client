'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`transition-colors duration-200 font-medium px-2 py-1 rounded-md ${
        isActive ? 'text-primary bg-secondary/30' : 'text-base-content/80 hover:text-primary'
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
