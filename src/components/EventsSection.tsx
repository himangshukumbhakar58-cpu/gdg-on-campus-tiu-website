/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Users, ArrowUpRight, Search, Clock, Tag, Sparkles, Layers, RotateCw } from 'lucide-react';
import { EventItem } from '../types';
import { EVENTS, EVENT_GALLERY_ITEMS } from '../data/gdgData';
import { CircularGallery } from './CircularGallery';

interface EventsSectionProps {
  onSelectEvent: (event: EventItem) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onSelectEvent }) => {
  const [viewMode, setViewMode] = useState<'gallery' | 'bento'>('gallery');
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Gatherings' },
    { id: 'Conference', label: 'Conferences' },
    { id: 'Challenge', label: 'Challenges' },
    { id: 'Workshop', label: 'Workshops' },
    { id: 'Bootcamp', label: 'Bootcamps' },
  ];

  const filteredEvents = EVENTS.filter((event) => {
    const matchesFilter = filter === 'all' || event.category === filter;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="events" className="py-24 md:py-32 bg-[#FAFAFC] dark:bg-black relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-[#4285F4] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Official Summits & Gatherings
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] dark:text-white leading-tight">
              Where TIU engineers build, compete, and connect.
            </h2>
          </div>
          <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] max-w-sm">
            From 24-hour hackathons to focused deep dives on the latest Google tooling. Official event photographs and interactive 3D archives.
          </p>
        </div>

        {/* View Mode Switcher: 3D Circular Gallery vs Bento Schedule Cards */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1 p-1 bg-[#EBEBED] dark:bg-[#1C1C1E] rounded-xl border border-black/[0.04] dark:border-white/[0.06] self-start">
            <button
              onClick={() => setViewMode('gallery')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                viewMode === 'gallery'
                  ? 'bg-white dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-white shadow-xs font-semibold'
                  : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white'
              }`}
            >
              <RotateCw className="w-3.5 h-3.5 text-[#4285F4]" />
              3D Circular Gallery
            </button>
            <button
              onClick={() => setViewMode('bento')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                viewMode === 'bento'
                  ? 'bg-white dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-white shadow-xs font-semibold'
                  : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#34A853]" />
              Schedule & RSVPs ({EVENTS.length})
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs text-[#86868B]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
              12 Official Photographs & Moments
            </span>
          </div>
        </div>

        {/* Main Content Area: AnimatePresence between views */}
        <AnimatePresence mode="wait">
          {viewMode === 'gallery' ? (
            <motion.div
              key="gallery-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Cinematic 3D Circular Gallery Container */}
              <div className="rounded-3xl bg-[#09090B] border border-black/10 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.7)] overflow-hidden relative">
                {/* Visual Top Bar in Canvas Frame */}
                <div className="px-6 py-4 flex items-center justify-between border-b border-white/10 bg-white/[0.02] backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs text-white/80 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
                    <span className="tracking-wide uppercase text-[11px] text-white/70">
                      WebGL 3D Cylinder Orbit · Inertia Physics
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 text-[11px] text-white/50">
                    <span>← Drag horizontally or use arrow keys →</span>
                    <span>•</span>
                    <span>Scroll wheel enabled</span>
                  </div>
                </div>

                {/* The 3D WebGL Circular Gallery Canvas */}
                <div className="w-full h-[460px] sm:h-[540px] md:h-[600px] relative">
                  <CircularGallery
                    items={EVENT_GALLERY_ITEMS}
                    bend={3}
                    textColor="#FFFFFF"
                    borderRadius={0.06}
                    font="bold 28px Figtree"
                    scrollSpeed={2.2}
                    scrollEase={0.06}
                  />

                  {/* Gradient vignetting for seamless depth */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#09090B] to-transparent z-10" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#09090B] to-transparent z-10" />
                </div>

                {/* Bottom Bar with Event Quick Action Chips */}
                <div className="p-4 sm:p-5 border-t border-white/10 bg-black/40 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-white/70 flex items-center gap-2">
                    <span className="text-[#FBBC05] font-semibold">Quick View Details:</span>
                    <span>Select an event to inspect its schedule and RSVP pass</span>
                  </div>

                  {/* Event quick chips */}
                  <div className="flex flex-wrap items-center gap-2">
                    {EVENTS.map((ev) => (
                      <button
                        key={ev.id}
                        onClick={() => onSelectEvent(ev)}
                        className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-medium transition-all hover:scale-105 active:scale-95"
                      >
                        {ev.title.split(' ')[0]} {ev.title.split(' ')[1] || ''} →
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Toggle Callout */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-[#141416] border border-black/[0.06] dark:border-white/[0.08] text-xs">
                <span className="text-[#6E6E73] dark:text-[#A1A1A6]">
                  Looking for full agendas, speaker details, and RSVP counts?
                </span>
                <button
                  onClick={() => setViewMode('bento')}
                  className="font-semibold text-[#1D1D1F] dark:text-white hover:underline flex items-center gap-1"
                >
                  Switch to Bento Schedule Grid →
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="bento-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Filter Bar & Search: Apple-Style Segmented Control */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-2">
                {/* Interactive filter tabs */}
                <div className="flex items-center gap-1 p-1 bg-[#EBEBED] dark:bg-[#1C1C1E] rounded-xl overflow-x-auto scrollbar-none border border-transparent dark:border-white/[0.06]">
                  {filterTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setFilter(tab.id)}
                      className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                        filter === tab.id
                          ? 'bg-white dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-white shadow-xs font-semibold'
                          : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Search box */}
                <div className="relative min-w-[240px]">
                  <Search className="w-4 h-4 text-[#86868B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by topic, speaker..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-[#1C1C1E] rounded-xl border border-black/[0.08] dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 dark:focus:ring-white/20 text-[#1D1D1F] dark:text-white placeholder:text-[#86868B]"
                  />
                </div>
              </div>

              {/* Apple App Store Editorial Style Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                {filteredEvents.map((event, idx) => {
                  const isFeatured = idx === 0;

                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => onSelectEvent(event)}
                      className={`group cursor-pointer rounded-3xl bg-white dark:bg-[#18181A] border border-black/[0.06] dark:border-white/[0.08] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.7)] transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between ${
                        isFeatured ? 'lg:col-span-8' : 'lg:col-span-4'
                      }`}
                    >
                      {/* Visual Editorial Graphic Header with Real Event Photography */}
                      <div
                        className={`relative p-6 sm:p-8 overflow-hidden flex flex-col justify-between ${
                          isFeatured
                            ? 'min-h-[260px] sm:min-h-[320px] bg-[#1D1D1F] text-white'
                            : 'min-h-[220px] sm:min-h-[240px] bg-[#1D1D1F] text-white'
                        }`}
                      >
                        {/* Real Official Event Photo Backdrop */}
                        {event.imageUrl ? (
                          <div className="absolute inset-0 z-0">
                            <img
                              src={event.imageUrl}
                              alt={event.title}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.75] dark:brightness-[0.65]"
                              loading="lazy"
                            />
                            {/* Smooth Cinematic Contrast Gradients */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60" />
                            <div className={`absolute inset-0 mix-blend-color opacity-30 ${
                              event.accentColor === 'blue'
                                ? 'bg-[#4285F4]'
                                : event.accentColor === 'red'
                                ? 'bg-[#EA4335]'
                                : event.accentColor === 'yellow'
                                ? 'bg-[#FBBC05]'
                                : 'bg-[#34A853]'
                            }`} />
                          </div>
                        ) : (
                          <div className="absolute inset-0 opacity-20 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                              <circle cx="350" cy="50" r="120" fill="#4285F4" filter="blur(40px)" />
                              <circle cx="280" cy="220" r="90" fill="#EA4335" filter="blur(50px)" />
                            </svg>
                          </div>
                        )}

                        {/* Top Metadata Row */}
                        <div className="relative z-10 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-2 text-xs font-medium">
                            <span className="text-white/90 drop-shadow-sm font-semibold">
                              {event.category}
                            </span>
                            <span aria-hidden="true" className="text-white/50">·</span>
                            <span className="text-[#FBBC05] font-semibold drop-shadow-sm">
                              {event.status}
                            </span>
                          </div>

                          <div className="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white group-hover:scale-110 transition-transform">
                            <ArrowUpRight className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        {/* Middle Title */}
                        <div className="relative z-10 my-auto py-4">
                          <h3
                            className={`font-bold tracking-tight leading-tight ${
                              isFeatured ? 'text-2xl sm:text-4xl text-white' : 'text-xl sm:text-2xl text-[#1D1D1F] dark:text-white'
                            }`}
                          >
                            {event.title}
                          </h3>
                        </div>

                        {/* Bottom Meta in Header */}
                        <div className="relative z-10 flex items-center gap-3 text-xs">
                          <div className={`flex items-center gap-1.5 ${isFeatured ? 'text-white/80' : 'text-[#515154] dark:text-white/80'}`}>
                            <Calendar className="w-3.5 h-3.5 opacity-70" />
                            <span>{event.date}</span>
                          </div>
                          <span aria-hidden="true" className={isFeatured ? 'text-white/30' : 'text-black/20 dark:text-white/20'}>·</span>
                          <div className={`flex items-center gap-1.5 ${isFeatured ? 'text-white/80' : 'text-[#515154] dark:text-white/80'}`}>
                            <Clock className="w-3.5 h-3.5 opacity-70" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Body / Description & Details */}
                      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                        <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed line-clamp-3">
                          {event.shortDesc}
                        </p>

                        <div className="space-y-3 pt-2 border-t border-black/[0.05] dark:border-white/[0.06]">
                          <div className="flex items-center gap-2 text-xs text-[#515154] dark:text-[#A1A1A6]">
                            <MapPin className="w-3.5 h-3.5 text-[#86868B] shrink-0" />
                            <span className="truncate">{event.venue}</span>
                          </div>

                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-1.5 text-[#6E6E73] dark:text-[#86868B]">
                              <Users className="w-3.5 h-3.5 text-[#86868B]" />
                              <span className="tabular-nums font-mono">{event.attendeesCount} / {event.maxSeats} RSVPs</span>
                            </div>
                            <span className="text-[11px] font-semibold text-[#1D1D1F] dark:text-white group-hover:underline">
                              View Schedule & RSVP →
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {filteredEvents.length === 0 && (
                <div className="text-center py-16 bg-white dark:bg-[#18181A] rounded-2xl border border-black/[0.06] dark:border-white/[0.08] p-8">
                  <Tag className="w-8 h-8 text-[#86868B] mx-auto mb-3" />
                  <h4 className="text-base font-semibold text-[#1D1D1F] dark:text-white mb-1">No events found</h4>
                  <p className="text-xs text-[#86868B]">Try selecting a different category or clearing your search term.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EventsSection;
