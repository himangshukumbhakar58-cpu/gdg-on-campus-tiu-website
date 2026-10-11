/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { CHAPTER_INFO } from '../data/gdgData';
import { BlurText } from './BlurText';

interface HeroProps {
  onOpenJoinModal: () => void;
  onExploreEvents: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal, onExploreEvents }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Apple-style Subtle Ambient Gradient Mesh using Google Colors */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10 overflow-hidden">
        {/* Soft Blue aura */}
        <div className="absolute -top-20 left-[15%] w-[450px] h-[450px] rounded-full bg-[#4285F4]/10 dark:bg-[#4285F4]/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        {/* Soft Red aura */}
        <div className="absolute top-10 right-[15%] w-[420px] h-[420px] rounded-full bg-[#EA4335]/08 dark:bg-[#EA4335]/15 blur-[130px] mix-blend-multiply dark:mix-blend-screen" />
        {/* Soft Yellow aura */}
        <div className="absolute top-40 left-[35%] w-[380px] h-[380px] rounded-full bg-[#FBBC05]/10 dark:bg-[#FBBC05]/20 blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
        {/* Soft Green aura */}
        <div className="absolute top-20 right-[30%] w-[400px] h-[400px] rounded-full bg-[#34A853]/08 dark:bg-[#34A853]/15 blur-[130px] mix-blend-multiply dark:mix-blend-screen" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Chapter Kicker: Animated via BlurText */}
        <div className="mb-6 flex justify-center">
          <BlurText
            text="Google Developer Groups on Campus · Techno India University, Kolkata"
            delay={50}
            direction="top"
            stepDuration={0.3}
            as="div"
            className="justify-center text-xs md:text-sm font-semibold tracking-wide uppercase text-[#6E6E73] dark:text-[#A1A1A6]"
          />
        </div>

        {/* Massive Apple-Style Headline: Keyframe-based BlurText Animation */}
        <div className="mb-8 flex justify-center">
          <BlurText
            text="Empowering Developers at Techno India University"
            delay={90}
            direction="top"
            stepDuration={0.35}
            as="h1"
            className="justify-center text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-[-0.035em] text-[#1D1D1F] dark:text-white leading-[1.06] max-w-5xl mx-auto"
          />
        </div>

        {/* Airy Subheadline: Animated via BlurText */}
        <div className="mb-10 flex justify-center">
          <BlurText
            text="A premier student-led developer ecosystem bridging academic curiosity with real-world software engineering across Artificial Intelligence, Cloud Infrastructure, Android, and Open Source."
            delay={35}
            direction="bottom"
            stepDuration={0.25}
            as="p"
            className="justify-center text-lg sm:text-xl md:text-[21px] text-[#6E6E73] dark:text-[#A1A1A6] font-normal leading-relaxed max-w-3xl mx-auto"
          />
        </div>

        {/* Primary Call-to-Actions */}
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16"
        >
          <button
            onClick={onExploreEvents}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-white dark:text-black bg-[#1D1D1F] dark:bg-white hover:bg-black dark:hover:bg-[#E5E5E7] rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_20px_rgba(0,0,0,0.12)] group"
          >
            <span>Explore Events</span>
            <ArrowRight className="w-4 h-4 text-white/80 dark:text-black/80 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-[#1D1D1F] dark:text-white bg-white dark:bg-[#1C1C1E] hover:bg-[#F5F5F7] dark:hover:bg-[#2C2C2E] border border-black/[0.08] dark:border-white/10 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm group"
          >
            <Sparkles className="w-4 h-4 text-[#4285F4]" />
            <span>Generate Member Pass</span>
          </button>
        </motion.div>

        {/* High-End Apple Editorial Feature Card Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.85, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-left"
        >
          {/* Card Google Accents Subtle Top Border Gradient */}
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#4285F4]/40 via-[#EA4335]/40 via-[#FBBC05]/40 via-[#34A853]/40 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-black/[0.06] dark:divide-white/[0.08]">
            {/* Stat 1 */}
            <div className="pt-4 md:pt-0 md:px-4 first:pl-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] tabular-nums mb-1">
                {CHAPTER_INFO.metrics.membersCount.toLocaleString()}+
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#6E6E73] dark:text-[#A1A1A6]">
                Community Members
              </div>
              <div className="text-[11px] text-[#86868B] mt-0.5">
                TIU Engineering & CS
              </div>
            </div>

            {/* Stat 2 */}
            <div className="pt-4 md:pt-0 md:px-4">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] tabular-nums mb-1">
                {CHAPTER_INFO.metrics.workshopsDelivered}+
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#6E6E73] dark:text-[#A1A1A6]">
                Hands-on Workshops
              </div>
              <div className="text-[11px] text-[#86868B] mt-0.5">
                Cloud, AI, Android & Web
              </div>
            </div>

            {/* Stat 3 */}
            <div className="pt-4 md:pt-0 md:px-4">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] tabular-nums mb-1">
                {CHAPTER_INFO.metrics.projectsBuilt}+
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#6E6E73] dark:text-[#A1A1A6]">
                Production Projects
              </div>
              <div className="text-[11px] text-[#86868B] mt-0.5">
                Open Source & UN SDGs
              </div>
            </div>

            {/* Stat 4 */}
            <div className="pt-4 md:pt-0 md:px-4 last:pr-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] tabular-nums mb-1">
                {CHAPTER_INFO.metrics.hackathonsHosted}
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#6E6E73] dark:text-[#A1A1A6]">
                Summits & Hackathons
              </div>
              <div className="text-[11px] text-[#86868B] mt-0.5">
                Including DEVX 2026
              </div>
            </div>
          </div>

          {/* Trust Banner Bar below metrics */}
          <div className="mt-8 pt-6 border-t border-black/[0.04] dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs text-[#86868B]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#34A853]" />
              <span className="text-[#6E6E73] dark:text-[#A1A1A6]">Official Google Developer Groups on Campus program Chapter</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#6E6E73] dark:text-[#A1A1A6]">Salt Lake Sector V, Kolkata</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-[11px] text-[#6E6E73] dark:text-[#A1A1A6]">{CHAPTER_INFO.coordinates}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
