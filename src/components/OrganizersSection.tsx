/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { ORGANIZERS } from '../data/gdgData';

export const OrganizersSection: React.FC = () => {
  const [, setHoveredOrganizerId] = useState<string | null>(null);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const getAccentGradient = (color: string) => {
    switch (color) {
      case 'blue':
        return 'from-[#4285F4]/15 to-[#4285F4]/05 text-[#4285F4] border-[#4285F4]/30 dark:border-[#4285F4]/40';
      case 'red':
        return 'from-[#EA4335]/15 to-[#EA4335]/05 text-[#EA4335] border-[#EA4335]/30 dark:border-[#EA4335]/40';
      case 'yellow':
        return 'from-[#FBBC05]/20 to-[#FBBC05]/05 text-[#B27B00] dark:text-[#FBBC05] border-[#FBBC05]/40 dark:border-[#FBBC05]/50';
      default:
        return 'from-[#34A853]/15 to-[#34A853]/05 text-[#34A853] border-[#34A853]/30 dark:border-[#34A853]/40';
    }
  };

  return (
    <section id="organizers" className="py-24 md:py-32 bg-[#F5F5F7] dark:bg-[#0D0D0E] border-t border-black/[0.04] dark:border-white/[0.06] relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#86868B] mb-3">
            Core Leadership Team
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] dark:text-white leading-tight mb-4">
            Curated by students, for students.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] dark:text-[#A1A1A6] font-normal leading-relaxed">
            The GDG on Campus core team at Techno India University manages codelabs, logistics, partnerships, and technical mentorship across Salt Lake Sector V.
          </p>
        </div>

        {/* Organizers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ORGANIZERS.map((organizer, idx) => {
            return (
              <motion.div
                key={organizer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredOrganizerId(organizer.id)}
                onMouseLeave={() => setHoveredOrganizerId(null)}
                className="bg-white dark:bg-[#18181A] rounded-3xl p-7 border border-black/[0.05] dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.7)] transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between group"
              >
                <div>
                  {/* Top Avatar Lockup */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative">
                      {/* Stylized Apple-like Avatar Container with Authentic Photo */}
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getAccentGradient(
                          organizer.accentColor
                        )} border overflow-hidden flex items-center justify-center font-bold text-lg font-mono transition-transform duration-300 group-hover:scale-105 shadow-inner`}
                      >
                        {organizer.avatarUrl ? (
                          <img
                            src={organizer.avatarUrl}
                            alt={organizer.name}
                            className="w-full h-full object-cover rounded-2xl"
                            loading="lazy"
                            onError={(e) => {
                              // If image fails, revert to styled initials
                              (e.currentTarget as HTMLElement).style.display = 'none';
                            }}
                          />
                        ) : (
                          getInitials(organizer.name)
                        )}
                      </div>
                      {/* Subtle Google Color Accent Pill Marker */}
                      <div
                        className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-[#18181A] ${
                          organizer.accentColor === 'blue'
                            ? 'bg-[#4285F4]'
                            : organizer.accentColor === 'red'
                            ? 'bg-[#EA4335]'
                            : organizer.accentColor === 'yellow'
                            ? 'bg-[#FBBC05]'
                            : 'bg-[#34A853]'
                        }`}
                      />
                    </div>

                    {/* Social Affordances */}
                    <div className="flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                      {organizer.github && (
                        <a
                          href={organizer.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${organizer.name} GitHub`}
                          className="p-2 rounded-lg text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white hover:bg-[#F5F5F7] dark:hover:bg-white/[0.08] transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {organizer.linkedin && (
                        <a
                          href={organizer.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${organizer.name} LinkedIn`}
                          className="p-2 rounded-lg text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#0A66C2] hover:bg-[#F5F5F7] dark:hover:bg-white/[0.08] transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {organizer.twitter && (
                        <a
                          href={organizer.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${organizer.name} Twitter/X`}
                          className="p-2 rounded-lg text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white hover:bg-[#F5F5F7] dark:hover:bg-white/[0.08] transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
                      {organizer.name}
                    </h3>
                    {organizer.domain && (
                      <span className="text-[10px] font-mono tracking-tight px-2 py-0.5 rounded-md bg-[#F5F5F7] dark:bg-white/10 text-[#6E6E73] dark:text-[#A1A1A6] whitespace-nowrap">
                        {organizer.domain}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] mb-1">
                    {organizer.role}
                  </div>
                  <div className="text-xs font-medium text-[#86868B] mb-4">
                    {organizer.focusArea}
                  </div>

                  <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
                    {organizer.bio}
                  </p>
                </div>

                {/* Micro footer inside card */}
                <div className="mt-6 pt-4 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#86868B]">
                  <span>Techno India University</span>
                  <span className="font-mono text-[11px] text-[#1D1D1F] dark:text-white">2026 Core</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Lead Application Callout */}
        <div className="mt-12 bg-white dark:bg-[#18181A] rounded-2xl p-8 border border-black/[0.06] dark:border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#F5F5F7] dark:bg-white/[0.06] text-[#1D1D1F] dark:text-white">
              <Sparkles className="w-6 h-6 text-[#4285F4]" />
            </div>
            <div>
              <div className="font-semibold text-base text-[#1D1D1F] dark:text-white">
                Interested in joining the GDG on Campus organizing team?
              </div>
              <div className="text-xs text-[#6E6E73] dark:text-[#A1A1A6]">
                Core team applications for track mentors, design leads, and event coordinators open each academic semester.
              </div>
            </div>
          </div>
          <a
            href="mailto:gdg.tiu.kolkata@gmail.com?subject=GDG%20Core%20Team%20Application%20Inquiry"
            className="px-5 py-2.5 text-xs font-medium text-[#1D1D1F] dark:text-white bg-[#F5F5F7] dark:bg-[#252528] hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black rounded-full transition-all whitespace-nowrap shrink-0"
          >
            Inquire About Open Roles
          </a>
        </div>
      </div>
    </section>
  );
};
