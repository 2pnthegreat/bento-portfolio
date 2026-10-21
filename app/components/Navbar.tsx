'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiArrowDropDownLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { projects } from '@/data/projects';
import { site } from '@/data/site';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'} bg-nav-bg border-b border-border-color shadow-sm`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight text-text-main hover:opacity-80 transition-opacity z-50">
          {site.name.en.split(' ')[0]}<span className="text-accent">.</span>
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
                                key={project.slug}
                                href={project.href}
                                target={project.external ? '_blank' : undefined}
                                rel={project.external ? 'noopener noreferrer' : undefined}
                                className="block px-5 py-3 text-sm text-text-sub hover:text-text-main hover:bg-bg-color transition-colors"
                            >
                                {project.menuLabel}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <ThemeToggle />

            <Link 
                href="/#contact" 
                className="px-5 py-2 bg-accent text-on-accent text-sm font-semibold rounded-full hover:brightness-95 transition-all active:scale-95"
            >
                Contact Me
            </Link>
        </div>

        {/* Mobile menu toggle & Theme button (Mobile) */}
        <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
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
            className={`hover:text-accent-ink transition-colors ${pathname === '/' ? 'text-accent-ink' : 'text-text-main'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`hover:text-accent-ink transition-colors ${pathname === '/about' ? 'text-accent-ink' : 'text-text-main'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div className="flex flex-col gap-4">
            <span className="text-text-sub text-sm tracking-widest uppercase">My Work</span>
            {projects.map((project) => (
              <Link 
                key={project.slug} 
                href={project.href}
                target={project.external ? '_blank' : undefined}
                rel={project.external ? 'noopener noreferrer' : undefined}
                className="text-lg text-text-main hover:text-accent-ink transition-colors pl-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {project.menuLabel}
              </Link>
            ))}
          </div>
          <Link 
            href="/#contact" 
            className="mt-4 px-8 py-4 bg-accent text-on-accent font-semibold text-center rounded-full hover:brightness-95 transition-all active:scale-95"
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
