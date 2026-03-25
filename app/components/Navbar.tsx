'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiArrowDropDownLine, RiSunLine, RiMoonLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Theme initialization
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const projects = [
    { name: 'Sukreep POS (SaaS)', path: 'https://sukreep.com' },
    { name: 'E-Procurement', path: '/projects/e-procurement' },
    { name: 'Fixed Asset Management', path: '/projects/fix-asset' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'} bg-nav-bg border-b border-border-color shadow-sm`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight text-text-main hover:opacity-80 transition-opacity z-50">
          PORT<span className="text-accent">FOLIO</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
            <Link 
                href="/"
                className={`nav-link ${pathname === '/' ? 'active' : ''}`}
            >
                Home
            </Link>
            
            <Link 
                href="/about"
                className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
            >
                About
            </Link>

            {/* Dropdown for Work */}
            <div className="relative group">
                <button className="nav-link flex items-center gap-1 cursor-pointer outline-none">
                    Work <RiArrowDropDownLine className="text-xl group-hover:rotate-180 transition-transform duration-300" />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-card-bg border border-border-color rounded-2xl shadow-xl overflow-hidden py-2">
                        {projects.map((project) => (
                            <Link 
                                key={project.path}
                                href={project.path}
                                className="block px-5 py-3 text-sm text-text-sub hover:text-text-main hover:bg-bg-color transition-colors"
                            >
                                {project.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-bg-color text-text-sub hover:text-text-main transition-colors"
                aria-label="Toggle Theme"
            >
                {theme === 'light' ? <RiMoonLine size={20} /> : <RiSunLine size={20} />}
            </button>

            <Link 
                href="/#contact" 
                className="px-5 py-2 bg-text-main text-bg-color text-sm font-medium rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 active:scale-95 shadow-sm"
            >
                Contact Me
            </Link>
        </div>

        {/* Mobile menu toggle & Theme button (Mobile) */}
        <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-bg-color text-text-sub hover:text-text-main transition-colors"
                aria-label="Toggle Theme"
            >
                {theme === 'light' ? <RiMoonLine size={20} /> : <RiSunLine size={20} />}
            </button>
            <button 
                className="text-text-main p-1 z-50 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Mobile Menu"
            >
                {isMenuOpen ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
            </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 bg-nav-bg z-40 flex flex-col pt-24 px-8 transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'}`}>
        <div className="flex flex-col gap-6 text-2xl font-semibold">
          <Link 
            href="/" 
            className={`hover:text-accent transition-colors ${pathname === '/' ? 'text-accent' : 'text-text-main'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`hover:text-accent transition-colors ${pathname === '/about' ? 'text-accent' : 'text-text-main'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div className="flex flex-col gap-4">
            <span className="text-text-sub text-sm tracking-widest uppercase">My Work</span>
            {projects.map((project) => (
              <Link 
                key={project.path} 
                href={project.path}
                className="text-lg text-text-main hover:text-accent transition-colors pl-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {project.name}
              </Link>
            ))}
          </div>
          <Link 
            href="/#contact" 
            className="mt-4 px-8 py-4 bg-text-main text-bg-color text-center rounded-2xl hover:opacity-90 transition-all shadow-lg active:scale-95"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
