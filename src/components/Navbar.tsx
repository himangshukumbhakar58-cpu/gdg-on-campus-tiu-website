/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenJoinModal: () => void;
  onOpenEventModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Events', href: '#events' },
    { label: 'Projects', href: '#projects' },
    { label: 'Organizers', href: '#organizers' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-nav shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
            : 'bg-[#FAFAFC]/80 dark:bg-black/80 backdrop-blur-md border-b border-black/[0.04] dark:border-white/[0.06]'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8 transition-all duration-300">
          {/* Zone 1: Brand Wordmark (Single clean element) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-[14px] sm:text-[15px] font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] whitespace-nowrap shrink-0 group select-none"
          >
            {/* Google Developer 4-Color Bracket Emblem */}
            <span className="flex items-center space-x-0.5 text-base font-bold transition-transform duration-300 group-hover:scale-105">
              <span className="text-[#EA4335]">&lt;</span>
              <span className="text-[#4285F4]">/</span>
              <span className="text-[#34A853]">&gt;</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05] ml-0.5 self-center inline-block" />
            </span>
            <span>
              GDG on Campus <span className="text-[#86868B] font-normal">·</span> TIU Kolkata
            </span>
          </a>

          {/* Zone 2: Single-line Text Nav Links with Apple-style subtle hover interaction */}
          <nav className="hidden md:flex items-center gap-1.5 text-[13px] font-medium text-[#515154] dark:text-[#A1A1A6]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 px-3.5 py-1.5 rounded-full hover:text-[#1D1D1F] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all duration-200 active:scale-95"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Interactive Theme Toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Light/Dark Mode Toggle with spring morphing animation */}
            <ThemeToggle />

            <button
              onClick={onOpenJoinModal}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2 text-[13px] font-medium text-white dark:text-black bg-[#1D1D1F] dark:bg-white hover:bg-black dark:hover:bg-[#E5E5E7] rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_2px_12px_rgba(0,0,0,0.12)] whitespace-nowrap shrink-0"
            >
              <span>Join Chapter</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] rounded-full transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-[#1C1C1E]/95 backdrop-blur-xl border-b border-black/[0.08] dark:border-white/[0.08] px-5 py-4 space-y-3 transition-all duration-300">
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] py-2 px-3 rounded-lg hover:bg-[#F5F5F7] dark:hover:bg-white/[0.06] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium text-white dark:text-black bg-[#1D1D1F] dark:bg-white rounded-full hover:bg-black dark:hover:bg-[#E5E5E7] transition-all"
              >
                <span>Join Chapter</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
