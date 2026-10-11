/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cloud, Smartphone, Layers, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { TECH_TRACKS } from '../data/gdgData';

export const TracksSection: React.FC = () => {
  const [activeTrackId, setActiveTrackId] = useState(TECH_TRACKS[0].id);
  const activeTrack = TECH_TRACKS.find((t) => t.id === activeTrackId) || TECH_TRACKS[0];

  const getIcon = (name: string, colorClass: string) => {
    switch (name) {
      case 'Cloud':
        return <Cloud className={`w-5 h-5 ${colorClass}`} />;
      case 'Smartphone':
        return <Smartphone className={`w-5 h-5 ${colorClass}`} />;
      case 'Layers':
        return <Layers className={`w-5 h-5 ${colorClass}`} />;
      default:
        return <Globe className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  return (
    <section id="tracks" className="py-24 md:py-32 bg-white dark:bg-black relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#86868B] mb-3">
              Core Technical Curriculum
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] dark:text-white leading-tight">
              Four specialized domains. One collaborative ecosystem.
            </h2>
          </div>
          <div className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] max-w-sm">
            Curated roadmaps crafted by senior student leads in consultation with Google Developer Experts.
          </div>
        </div>

        {/* Interactive Track Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {TECH_TRACKS.map((track) => {
            const isSelected = track.id === activeTrackId;
            return (
              <button
                key={track.id}
                onClick={() => setActiveTrackId(track.id)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 relative ${
                  isSelected
                    ? 'bg-[#F5F5F7] dark:bg-[#1C1C1E] border-black/15 dark:border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] ring-1 ring-black/10 dark:ring-white/10'
                    : 'bg-white dark:bg-[#121214] border-black/[0.06] dark:border-white/[0.08] hover:bg-[#FAFAFC] dark:hover:bg-[#18181B] hover:border-black/10 dark:hover:border-white/15'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-white dark:bg-[#2C2C2E] shadow-xs">
                    {getIcon(
                      track.iconName,
                      track.accentColor === 'blue'
                        ? 'text-[#4285F4]'
                        : track.accentColor === 'green'
                        ? 'text-[#34A853]'
                        : track.accentColor === 'yellow'
                        ? 'text-[#FBBC05]'
                        : 'text-[#EA4335]'
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-[#86868B] tabular-nums">
                    {track.workshopsCount} sessions
                  </span>
                </div>
                <div className="font-semibold text-sm sm:text-[15px] text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight mb-1">
                  {track.title}
                </div>
                <div className="text-xs text-[#86868B] line-clamp-1">
                  {track.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Track Detailed Bento Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTrack.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl bg-[#F5F5F7] dark:bg-[#121214] border border-black/[0.06] dark:border-white/[0.08] p-8 sm:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Description & Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#86868B] mb-2">
                    {activeTrack.subtitle}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-white mb-4">
                    {activeTrack.title}
                  </h3>
                  <p className="text-base text-[#515154] dark:text-[#A1A1A6] leading-relaxed">
                    {activeTrack.description}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] dark:text-white mb-4">
                    Key Practical Outcomes
                  </div>
                  <div className="space-y-3">
                    {activeTrack.keyHighlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3 text-sm text-[#515154] dark:text-[#A1A1A6]">
                        <CheckCircle2 className="w-4 h-4 text-[#34A853] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Tech Stack & Cadence */}
              <div className="lg:col-span-5 bg-white dark:bg-[#1C1C1E] rounded-2xl p-6 sm:p-8 border border-black/[0.05] dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] space-y-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#86868B] mb-3">
                    Supported Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeTrack.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7] bg-[#F5F5F7] dark:bg-white/[0.08] px-3 py-1.5 rounded-lg border border-black/[0.04] dark:border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                  <div className="flex items-center justify-between text-xs text-[#6E6E73] dark:text-[#86868B] mb-2">
                    <span>Active Session Cadence</span>
                    <span className="font-semibold text-[#1D1D1F] dark:text-white">Bi-weekly Saturday Labs</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#6E6E73] dark:text-[#86868B]">
                    <span>Prerequisites</span>
                    <span className="font-semibold text-[#34A853]">Beginners Welcome</span>
                  </div>
                </div>

                <a
                  href="#events"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white dark:text-black bg-[#1D1D1F] dark:bg-white hover:bg-black dark:hover:bg-[#E5E5E7] rounded-xl transition-all hover:scale-[1.01]"
                >
                  <span>View Track Workshops</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
