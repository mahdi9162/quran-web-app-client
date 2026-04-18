'use client';

import React from 'react';
import Container from './Container';
import Logo from './Logo';
import NavLink from '../buttons/NavLink';

const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>

      <li>
        <NavLink href="/search">Search</NavLink>
      </li>

      <li>
        <NavLink href="/surahs">Read Quran</NavLink>
      </li>

      <li>
        <NavLink href="/about">About</NavLink>
      </li>
    </>
  );

  return (
    <Container>
      <div className="sticky top-0 z-50 border-b border-base-300 bg-base-100/90 backdrop-blur-md px-3">
        <div className="navbar px-0 min-h-16">
          {/* left */}
          <div className="navbar-start gap-2">
            {/* mobile dropdown */}
            <div className="dropdown lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>

              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-56 rounded-box bg-base-100 p-3 shadow-xl z-100">
                {nav}
              </ul>
            </div>

            {/* brand */}
            <div className="flex items-center gap-3 text-xl md:text-2xl font-bold tracking-tight">
              <Logo />
              <p>Quran Web App</p>
            </div>
          </div>

          {/* center desktop nav */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-3 px-1">{nav}</ul>
          </div>

          {/* right */}
          <div className="navbar-end">
            {/* settings button */}
            <label htmlFor="settings-drawer" className="btn btn-primary">
              Settings
            </label>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
