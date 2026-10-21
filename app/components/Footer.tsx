import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { site } from '@/data/site';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-card-bg border-t border-border-color py-12 px-6 mt-20 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <Link href="/" className="text-xl font-bold tracking-tight text-text-main">
            {site.name.en.split(' ')[0]}<span className="text-accent">.</span>
          </Link>
          <p className="mt-2 text-sm text-text-sub max-w-xs">
            {site.tagline}
          </p>
        </div>

        <div className="grid grid-cols-2 md:flex md:flex-row gap-10 w-full md:w-auto">
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-text-main uppercase tracking-wider">Navigation</h4>
            <Link href="/" className="text-sm text-text-sub hover:text-accent-ink transition-colors">Home</Link>
            <Link href="/about" className="text-sm text-text-sub hover:text-accent-ink transition-colors">About</Link>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-text-main uppercase tracking-wider">Social</h4>
            <div className="flex gap-4 mt-1">
              <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="text-text-sub hover:text-text-main transition-colors">
                <FaGithub size={20} />
              </a>
              <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-sub hover:text-text-main transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border-color flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-sub">
        <p>© {currentYear} {site.name.en}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
