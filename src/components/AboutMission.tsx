/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HoverExpand, HoverExpandItem } from './HoverExpand';

// SVG artworks designed for the expandable rows with rich Google colors and dark gradients
const peerLearningBg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400' fill='none'%3E%3Crect width='1200' height='400' fill='%23121826'/%3E%3Ccircle cx='900' cy='150' r='250' fill='%234285F4' fill-opacity='0.25' filter='blur(60px)'/%3E%3Ccircle cx='300' cy='300' r='200' fill='%2334A853' fill-opacity='0.15' filter='blur(80px)'/%3E%3Cpath d='M0 320 Q300 200 600 260 T1200 180' stroke='rgba(255,255,255,0.08)' stroke-width='2' fill='none'/%3E%3Cpath d='M0 240 Q400 120 800 220 T1200 120' stroke='rgba(66,133,244,0.18)' stroke-width='2' fill='none'/%3E%3Ccircle cx='600' cy='260' r='6' fill='%234285F4'/%3E%3Ccircle cx='800' cy='220' r='5' fill='%2334A853'/%3E%3Ctext x='80' y='140' font-family='sans-serif' font-size='32' font-weight='bold' fill='rgba(255,255,255,0.12)'%3EPEER LEARNING // COMMUNITY%3C/text%3E%3C/svg%3E`;

const engineeringBg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400' fill='none'%3E%3Crect width='1200' height='400' fill='%231C1415'/%3E%3Ccircle cx='850' cy='180' r='240' fill='%23EA4335' fill-opacity='0.25' filter='blur(60px)'/%3E%3Ccircle cx='200' cy='100' r='180' fill='%23FBBC05' fill-opacity='0.12' filter='blur(70px)'/%3E%3Cpath d='M100 80h400v240H100z' stroke='rgba(255,255,255,0.06)' stroke-width='1.5' fill='none'/%3E%3Cpath d='M140 120h120m-120 30h200m-200 30h80m-80 30h160' stroke='rgba(234,67,53,0.3)' stroke-width='2.5' stroke-linecap='round'/%3E%3Cpath d='M650 300l150-180 120 100 180-140' stroke='rgba(255,255,255,0.1)' stroke-width='2' fill='none'/%3E%3Ctext x='80' y='140' font-family='sans-serif' font-size='32' font-weight='bold' fill='rgba(255,255,255,0.12)'%3EPRODUCTION ARCHITECTURE%3C/text%3E%3C/svg%3E`;

const civicSolutionsBg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400' fill='none'%3E%3Crect width='1200' height='400' fill='%230F1A14'/%3E%3Ccircle cx='950' cy='200' r='260' fill='%2334A853' fill-opacity='0.25' filter='blur(70px)'/%3E%3Ccircle cx='400' cy='100' r='180' fill='%234285F4' fill-opacity='0.12' filter='blur(70px)'/%3E%3Cpath d='M0 380 L200 240 L350 310 L550 180 L750 260 L950 140 L1200 280' stroke='rgba(52,168,83,0.3)' stroke-width='2.5' fill='none'/%3E%3Ccircle cx='550' cy='180' r='7' fill='%2334A853'/%3E%3Ccircle cx='950' cy='140' r='7' fill='%23FBBC05'/%3E%3Ctext x='80' y='140' font-family='sans-serif' font-size='32' font-weight='bold' fill='rgba(255,255,255,0.12)'%3EKOLKATA CIVIC IMPACT%3C/text%3E%3C/svg%3E`;

const googleEcosystemBg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400' fill='none'%3E%3Crect width='1200' height='400' fill='%231B1812'/%3E%3Ccircle cx='800' cy='150' r='250' fill='%23FBBC05' fill-opacity='0.22' filter='blur(70px)'/%3E%3Ccircle cx='350' cy='280' r='200' fill='%234285F4' fill-opacity='0.18' filter='blur(70px)'/%3E%3Cpath d='M500 200l60-80 60 80-60 80z' stroke='%23FBBC05' stroke-width='2' fill='none' opacity='0.3'/%3E%3Cpath d='M650 200l60-80 60 80-60 80z' stroke='%234285F4' stroke-width='2' fill='none' opacity='0.3'/%3E%3Cpath d='M800 200l60-80 60 80-60 80z' stroke='%2334A853' stroke-width='2' fill='none' opacity='0.3'/%3E%3Ctext x='80' y='140' font-family='sans-serif' font-size='32' font-weight='bold' fill='rgba(255,255,255,0.12)'%3EGOOGLE CLOUD & GDE NETWORK%3C/text%3E%3C/svg%3E`;

export const AboutMission: React.FC = () => {
  const hoverExpandItems: HoverExpandItem[] = [
    {
      label: "Peer-to-Peer Learning",
      sublabel: "COMMUNITY · SECTOR V",
      description: "Organic student codelabs, architecture reviews, and zero-gatekeeping study jams.",
      image: peerLearningBg,
      imageAlt: "Peer-to-peer learning environment at Techno India University",
    },
    {
      label: "Real-World Engineering",
      sublabel: "SYSTEMS · CI/CD",
      description: "Transitioning beyond tutorial hell into robust software design, automated testing, and cloud-native resilience.",
      image: engineeringBg,
      imageAlt: "Real-world software engineering practice",
    },
    {
      label: "Community & Civic Solutions",
      sublabel: "IMPACT · BENGAL",
      description: "Engineering agricultural disease diagnostics and low-emission transit navigators for Kolkata and West Bengal.",
      image: civicSolutionsBg,
      imageAlt: "Local civic and community software solutions",
    },
    {
      label: "Google Ecosystem Access",
      sublabel: "OFFICIAL · 2026",
      description: "Direct bridge to Google Developer Experts (GDEs), Google Cloud student credits, and global Solution Challenge mentorship.",
      image: googleEcosystemBg,
      imageAlt: "Google Developer Groups global network connection",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#F5F5F7] dark:bg-[#0D0D0E] border-y border-black/[0.04] dark:border-white/[0.06] relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#86868B] mb-3">
            About The Chapter
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] dark:text-white leading-tight mb-6">
            A peer-to-peer learning environment to build solutions for local businesses and communities.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] dark:text-[#A1A1A6] font-normal leading-relaxed">
            Google Developer Groups on Campus at Techno India University is a university-based community group supported by Google Developers. Located at the heart of Salt Lake Sector V — Kolkata&apos;s primary technology hub — we bridge academic learning with enterprise-grade engineering practice.
          </p>
        </div>

        {/* HoverExpand Animated Rows Component */}
        <div className="rounded-3xl overflow-hidden bg-white dark:bg-[#18181A] border border-black/[0.06] dark:border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
          <HoverExpand
            items={hoverExpandItems}
            collapsedHeight={72}
            expandedHeight={300}
          />
        </div>

        {/* Quote / Vision Card */}
        <div className="mt-12 bg-white dark:bg-[#18181A] rounded-2xl p-8 sm:p-10 border border-black/[0.05] dark:border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-[#86868B] uppercase tracking-wide">
              Chapter Manifesto
            </div>
            <div className="text-lg sm:text-xl font-medium text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
              &ldquo;No gatekeeping. No prerequisites. Pure curiosity and collaborative build sprints.&rdquo;
            </div>
          </div>
          <div className="text-xs text-[#86868B] whitespace-nowrap shrink-0">
            Founded 2021 · Techno India University, Kolkata
          </div>
        </div>
      </div>
    </section>
  );
};
