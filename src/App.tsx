/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMission } from './components/AboutMission';
import { TracksSection } from './components/TracksSection';
import { EventsSection } from './components/EventsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { OrganizersSection } from './components/OrganizersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MemberPassModal } from './components/MemberPassModal';
import { EventModal } from './components/EventModal';
import { EventItem } from './types';

function MainApp() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const handleScrollToEvents = () => {
    const el = document.getElementById('events');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-black text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors duration-300">
      {/* 3-Zone Sticky Glassmorphic Navbar with Animated Theme Toggle */}
      <Navbar onOpenJoinModal={() => setIsJoinModalOpen(true)} />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* Apple Typographic Hero Section */}
        <Hero
          onOpenJoinModal={() => setIsJoinModalOpen(true)}
          onExploreEvents={handleScrollToEvents}
        />

        {/* About & Chapter Mission */}
        <AboutMission />

        {/* Specialized Technical Tracks */}
        <TracksSection />

        {/* Editorial Events Grid & Codelabs */}
        <EventsSection onSelectEvent={(event) => setSelectedEvent(event)} />

        {/* Student Solutions & Civic Impact */}
        <ProjectsSection />

        {/* Leadership & Organizers Grid */}
        <OrganizersSection />

        {/* Campus Location, FAQ & Inquiry */}
        <ContactSection />
      </main>

      {/* Quiet Apple-Style Footer */}
      <Footer />

      {/* Interactive Apple Wallet Member Pass Generator Modal */}
      <MemberPassModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      {/* Interactive Event Detail & RSVP Pass Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
