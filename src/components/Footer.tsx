/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { CHAPTER_INFO } from '../data/gdgData';
import { BlurText } from './BlurText';
import { Strands } from './Strands';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAFAFC] dark:bg-black border-t border-black/[0.06] dark:border-white/[0.08] text-[#515154] dark:text-[#A1A1A6] text-xs pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Address */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 font-semibold text-sm text-[#1D1D1F] dark:text-white">
              <span className="flex items-center space-x-0.5 text-base font-bold">
                <span className="text-[#EA4335]">&lt;</span>
                <span className="text-[#4285F4]">/</span>
                <span className="text-[#34A853]">&gt;</span>
              </span>
              <span>GDG on Campus · Techno India University</span>
            </div>
            <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] max-w-sm leading-relaxed">
              Kolkata&apos;s premier student developer collective. Cultivating software craft, open-source contribution, and local impact across Salt Lake Sector V.
            </p>
            <div className="text-[11px] text-[#86868B]">
              EM-4, Sector V, Bidhannagar, Kolkata, West Bengal 700091
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="font-semibold text-[#1D1D1F] dark:text-white text-xs uppercase tracking-wider">
                Explore
              </div>
              <ul className="space-y-1.5 text-xs">
                <li><a href="#about" className="hover:text-[#1D1D1F] dark:hover:text-white transition-colors">Mission & Values</a></li>
                <li><a href="#tracks" className="hover:text-[#1D1D1F] dark:hover:text-white transition-colors">Technical Tracks</a></li>
                <li><a href="#events" className="hover:text-[#1D1D1F] dark:hover:text-white transition-colors">DEVX Summit 2026</a></li>
                <li><a href="#projects" className="hover:text-[#1D1D1F] dark:hover:text-white transition-colors">Student Projects</a></li>
                <li><a href="#organizers" className="hover:text-[#1D1D1F] dark:hover:text-white transition-colors">Core Leadership</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-[#1D1D1F] dark:text-white text-xs uppercase tracking-wider">
                Resources
              </div>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <a
                    href={CHAPTER_INFO.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#1D1D1F] dark:hover:text-white transition-colors"
                  >
                    <span>Community Portal</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </li>
                <li><a href="https://developers.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1D1D1F] dark:hover:text-white transition-colors">Google Developers</a></li>
                <li><a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1D1D1F] dark:hover:text-white transition-colors">Google Cloud Platform</a></li>
                <li><a href="https://flutter.dev" target="_blank" rel="noopener noreferrer" className="hover:text-[#1D1D1F] dark:hover:text-white transition-colors">Flutter Dev</a></li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-semibold text-[#1D1D1F] dark:text-white text-xs uppercase tracking-wider">
              Community Channels
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-white dark:bg-[#1C1C1E] border border-black/[0.06] dark:border-white/[0.08] hover:bg-[#F5F5F7] dark:hover:bg-white/[0.06] text-[#1D1D1F] dark:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white dark:bg-[#1C1C1E] border border-black/[0.06] dark:border-white/[0.08] hover:bg-[#F5F5F7] dark:hover:bg-white/[0.06] text-[#1D1D1F] dark:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X"
                className="p-2 rounded-lg bg-white dark:bg-[#1C1C1E] border border-black/[0.06] dark:border-white/[0.08] hover:bg-[#F5F5F7] dark:hover:bg-white/[0.06] text-[#1D1D1F] dark:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            <div className="text-[11px] text-[#86868B] pt-1">
              Direct Contact: <a href={`mailto:${CHAPTER_INFO.email}`} className="text-[#1D1D1F] dark:text-white underline">{CHAPTER_INFO.email}</a>
            </div>
          </div>
        </div>

        {/* Official Google Disclaimer & Copyright */}
        <div className="pt-8 border-t border-black/[0.06] dark:border-white/[0.08] space-y-4">
          <p className="text-[11px] text-[#86868B] leading-relaxed max-w-4xl">
            Disclaimer: Google Developer Groups on Campus (GDG on Campus) is an independent program; activities and the opinions expressed here should in no way be linked to Google, the corporation. To learn more about the global program, visit <a href="https://developers.google.com/community/gdg" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1D1D1F] dark:hover:text-white">developers.google.com/community/gdg</a>.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[#86868B]">
            <div>
              © 2026 Google Developer Groups on Campus · Techno India University, Kolkata. All rights reserved.
            </div>
            <div className="flex items-center gap-1">
              <span>Crafted with Apple-style precision for TIU developers</span>
            </div>
          </div>
        </div>

        {/* Grand Finale: Strands WebGL Wave & Blur-Driven Brand Design at the End of the Footer */}
        <div className="pt-20 pb-14 border-t border-black/[0.06] dark:border-white/[0.08] text-center overflow-hidden relative min-h-[340px] flex items-center justify-center rounded-3xl bg-black/[0.015] dark:bg-white/[0.02]">
          {/* WebGL Animated Strands Wave Canvas */}
          <div className="absolute inset-0 pointer-events-none opacity-85 dark:opacity-90">
            <Strands
              colors={['#4285F4', '#EA4335', '#FBBC05', '#34A853']}
              count={5}
              speed={0.4}
              amplitude={0.95}
              waviness={1.2}
              thickness={0.8}
              glow={2.8}
              intensity={0.7}
              saturation={1.6}
              scale={1.4}
              className="w-full h-full"
            />
          </div>

          {/* Subtle Ambient Google Colors Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-36 bg-[#4285F4]/08 dark:bg-[#4285F4]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-center space-y-4 px-4">
            <div className="flex items-center space-x-1 text-2xl font-bold select-none drop-shadow-xs">
              <span className="text-[#EA4335]">&lt;</span>
              <span className="text-[#4285F4]">/</span>
              <span className="text-[#34A853]">&gt;</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05] ml-1.5 self-center shadow-xs" />
            </div>

            <BlurText
              text="Google Developer Groups on Campus"
              delay={70}
              direction="bottom"
              stepDuration={0.32}
              as="div"
              className="justify-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#1D1D1F] dark:text-white select-none drop-shadow-sm"
            />

            <BlurText
              text="Techno India University · Kolkata"
              delay={120}
              direction="bottom"
              stepDuration={0.28}
              as="div"
              className="justify-center text-xs sm:text-sm md:text-base font-medium tracking-tight text-[#6E6E73] dark:text-[#A1A1A6]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
