'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiArrowDropDownLine, RiSunLine, RiMoonLine } from 'react-icons/ri';

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('light');

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
        <Link href="/" className="text-xl font-bold tracking-tight text-text-main hover:opacity-80 transition-opacity">
          PORT<span className="text-accent">FOLIO</span>
        </Link>
        
        <div className="flex gap-8 items-center">
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
      </div>
    </nav>
  );
};

export default Navbar;
