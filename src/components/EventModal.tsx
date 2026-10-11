/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Calendar, Clock, MapPin, Users, CheckCircle2, Ticket, Share2, ArrowRight } from 'lucide-react';
import { EventItem } from '../types';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [hasRsvpd, setHasRsvpd] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!event) return null;

  const handleRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName || !rsvpEmail) return;
    setHasRsvpd(true);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-white dark:bg-[#18181A] rounded-3xl shadow-2xl border border-black/[0.08] dark:border-white/10 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col text-[#1D1D1F] dark:text-white"
      >
        {/* Header Visual Bar with Authentic Event Banner */}
        <div className="relative p-6 sm:p-8 bg-[#1D1D1F] text-white overflow-hidden shrink-0 min-h-[180px] flex flex-col justify-end">
          {/* Authentic Banner Photo */}
          {(event.bannerUrl || event.imageUrl) && (
            <div className="absolute inset-0 z-0">
              <img
                src={event.bannerUrl || event.imageUrl}
                alt={event.title}
                className="w-full h-full object-cover object-center brightness-[0.55]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/40" />
            </div>
          )}

          {/* Subtle Google Colors Flare */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#4285F4]/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#EA4335]/20 blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close event modal"
            className="absolute top-5 right-5 p-2 rounded-full text-white/80 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 hover:text-white transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 space-y-2 pr-8">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/70">
              <span>{event.category}</span>
              <span>·</span>
              <span className="text-[#FBBC05] font-semibold">{event.type}</span>
              <span>·</span>
              <span>{event.status}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-sm">
              {event.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-xs text-white/80 pt-2">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 opacity-70" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 opacity-70" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 opacity-70" />
                <span>{event.attendeesCount} / {event.maxSeats} Confirmed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Venue Info */}
          <div className="bg-[#F5F5F7] dark:bg-[#252528] rounded-2xl p-4 flex items-center gap-3 text-xs sm:text-sm text-[#1D1D1F] dark:text-white">
            <MapPin className="w-4 h-4 text-[#EA4335] shrink-0" />
            <div>
              <span className="font-semibold">Venue: </span>
              <span className="text-[#515154] dark:text-[#D1D1D6]">{event.venue}</span>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#86868B] mb-2">
              Overview & Objectives
            </h4>
            <p className="text-sm sm:text-[15px] text-[#515154] dark:text-[#D1D1D6] leading-relaxed">
              {event.fullDesc}
            </p>
          </div>

          {/* Speakers with Authentic Photos */}
          {event.speakers.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#86868B] mb-3">
                Featured Speakers & Mentors
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {event.speakers.map((speaker) => (
                  <div
                    key={speaker.name}
                    className="p-3.5 rounded-xl border border-black/[0.06] dark:border-white/10 bg-[#FAFAFC] dark:bg-[#202024] flex items-center gap-3"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#1D1D1F] dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xs shrink-0 overflow-hidden border border-black/10 dark:border-white/10">
                      {speaker.avatarUrl ? (
                        <img
                          src={speaker.avatarUrl}
                          alt={speaker.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.currentTarget as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        speaker.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-[#1D1D1F] dark:text-white truncate">
                        {speaker.name}
                      </div>
                      <div className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] truncate">
                        {speaker.role} {speaker.company ? `· ${speaker.company}` : ''}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Agenda Timeline */}
          {event.agenda.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#86868B] mb-3">
                Event Schedule
              </h4>
              <div className="space-y-2.5">
                {event.agenda.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-3 rounded-xl bg-[#FAFAFC] dark:bg-[#202024] border border-black/[0.04] dark:border-white/[0.06] text-xs"
                  >
                    <span className="font-mono font-medium text-[#1D1D1F] dark:text-white whitespace-nowrap shrink-0 w-20">
                      {item.time}
                    </span>
                    <div className="flex-1">
                      <div className="font-semibold text-[#1D1D1F] dark:text-white">{item.title}</div>
                      {item.speaker && (
                        <div className="text-[#86868B] text-[11px] mt-0.5">{item.speaker}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* RSVP Card */}
          <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
            {hasRsvpd ? (
              <div className="p-6 rounded-2xl bg-[#EBF5EE] dark:bg-[#122A1A] border border-[#34A853]/20 dark:border-[#34A853]/40 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#34A853] text-white flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#1D1D1F] dark:text-white">
                  Seat Confirmed for {event.title}!
                </h4>
                <p className="text-xs text-[#515154] dark:text-[#A1A1A6]">
                  A calendar invite and digital entry badge have been dispatched to {rsvpEmail}. See you at Techno India University!
                </p>
              </div>
            ) : (
              <div className="bg-[#F5F5F7] dark:bg-[#202024] rounded-2xl p-6 border border-transparent dark:border-white/[0.06]">
                <div className="flex items-center gap-2 mb-3">
                  <Ticket className="w-4 h-4 text-[#4285F4]" />
                  <h4 className="text-sm font-semibold text-[#1D1D1F] dark:text-white">
                    Reserve Your Seat (Free of charge)
                  </h4>
                </div>
                <form onSubmit={handleRsvp} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={rsvpName}
                      onChange={(e) => setRsvpName(e.target.value)}
                      className="px-3 py-2 text-xs bg-white dark:bg-[#2B2B30] rounded-lg border border-black/[0.08] dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 dark:focus:ring-white/20 text-[#1D1D1F] dark:text-white placeholder:text-[#86868B]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Student Email Address"
                      value={rsvpEmail}
                      onChange={(e) => setRsvpEmail(e.target.value)}
                      className="px-3 py-2 text-xs bg-white dark:bg-[#2B2B30] rounded-lg border border-black/[0.08] dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 dark:focus:ring-white/20 text-[#1D1D1F] dark:text-white placeholder:text-[#86868B]"
                    />
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="submit"
                      className="flex-1 py-2.5 px-4 text-xs font-semibold text-white dark:text-black bg-[#1D1D1F] dark:bg-white hover:bg-black dark:hover:bg-[#E5E5E7] rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                      <span>Complete Free RSVP</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleShare}
                      className="p-2.5 rounded-lg bg-white dark:bg-[#2B2B30] border border-black/[0.08] dark:border-white/10 text-[#1D1D1F] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                      title="Share link"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                  {copiedLink && (
                    <div className="text-[11px] text-[#34A853] text-center">
                      Event page URL copied to clipboard!
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
