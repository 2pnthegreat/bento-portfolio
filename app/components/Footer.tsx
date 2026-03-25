import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-card-bg border-t border-border-color py-12 px-6 mt-20 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <Link href="/" className="text-xl font-bold tracking-tight text-text-main">
            PORT<span className="text-accent">FOLIO</span>
          </Link>
          <p className="mt-2 text-sm text-text-sub max-w-xs">
            Fullstack Developer & Low-code specialized in building scalable enterprise systems and automated workflows.
          </p>
        </div>

        <div className="grid grid-cols-2 md:flex md:flex-row gap-10 w-full md:w-auto">
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-text-main uppercase tracking-wider">Navigation</h4>
            <Link href="/" className="text-sm text-text-sub hover:text-accent transition-colors">Home</Link>
            <Link href="/about" className="text-sm text-text-sub hover:text-accent transition-colors">About</Link>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-text-main uppercase tracking-wider">Social</h4>
            <div className="flex gap-4 mt-1">
              <a href="https://github.com/2pnthegreat" target="_blank" rel="noopener noreferrer" className="text-text-sub hover:text-text-main transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kampanart-poonpanao-656772368" target="_blank" rel="noopener noreferrer" className="text-text-sub hover:text-text-main transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border-color flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-sub">
        <p>© {currentYear} Kampanart Poonpanao. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
