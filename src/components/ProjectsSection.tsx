/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HoverFeatureCards, HoverFeatureCard as HoverCardItem } from './HoverFeatureCards';

// Apple-style sleek SVG graphic illustrations for light and dark themes
const campusPulseLight = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 120' fill='none'%3E%3Crect x='10' y='15' width='220' height='90' rx='16' fill='%23F5F5F7' stroke='%23E5E5E7' stroke-width='1.5'/%3E%3Ccircle cx='45' cy='60' r='18' fill='%234285F4' fill-opacity='0.15'/%3E%3Cpath d='M45 50v20M35 60h20' stroke='%234285F4' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M80 60h30l10-18 12 36 10-24 8 12 30-6' stroke='%234285F4' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='180' cy='54' r='4' fill='%2334A853'/%3E%3C/svg%3E`;

const campusPulseDark = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 120' fill='none'%3E%3Crect x='10' y='15' width='220' height='90' rx='16' fill='%23222226' stroke='%23333338' stroke-width='1.5'/%3E%3Ccircle cx='45' cy='60' r='18' fill='%234285F4' fill-opacity='0.25'/%3E%3Cpath d='M45 50v20M35 60h20' stroke='%234285F4' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M80 60h30l10-18 12 36 10-24 8 12 30-6' stroke='%234285F4' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='180' cy='54' r='4' fill='%2334A853'/%3E%3C/svg%3E`;

const agriVisionLight = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 120' fill='none'%3E%3Crect x='10' y='15' width='220' height='90' rx='16' fill='%23F5F5F7' stroke='%23E5E5E7' stroke-width='1.5'/%3E%3Ccircle cx='60' cy='60' r='22' fill='%2334A853' fill-opacity='0.15'/%3E%3Cpath d='M50 70c0-15 10-22 20-22 0 12-8 22-20 22z' fill='%2334A853'/%3E%3Ccircle cx='130' cy='45' r='5' fill='%23FBBC05'/%3E%3Ccircle cx='170' cy='60' r='6' fill='%234285F4'/%3E%3Ccircle cx='140' cy='78' r='5' fill='%2334A853'/%3E%3Cpath d='M60 60l70-15m-70 15l80 18m-10-33l30 15m-30 15l40-15' stroke='%23A1A1A6' stroke-width='1.5' stroke-dasharray='3 3'/%3E%3C/svg%3E`;

const agriVisionDark = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 120' fill='none'%3E%3Crect x='10' y='15' width='220' height='90' rx='16' fill='%23222226' stroke='%23333338' stroke-width='1.5'/%3E%3Ccircle cx='60' cy='60' r='22' fill='%2334A853' fill-opacity='0.25'/%3E%3Cpath d='M50 70c0-15 10-22 20-22 0 12-8 22-20 22z' fill='%2334A853'/%3E%3Ccircle cx='130' cy='45' r='5' fill='%23FBBC05'/%3E%3Ccircle cx='170' cy='60' r='6' fill='%234285F4'/%3E%3Ccircle cx='140' cy='78' r='5' fill='%2334A853'/%3E%3Cpath d='M60 60l70-15m-70 15l80 18m-10-33l30 15m-30 15l40-15' stroke='%236E6E73' stroke-width='1.5' stroke-dasharray='3 3'/%3E%3C/svg%3E`;

const ecoRouteLight = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 120' fill='none'%3E%3Crect x='10' y='15' width='220' height='90' rx='16' fill='%23F5F5F7' stroke='%23E5E5E7' stroke-width='1.5'/%3E%3Cpath d='M40 75 Q70 30 120 50 T200 45' stroke='%2334A853' stroke-width='3' stroke-linecap='round' fill='none'/%3E%3Ccircle cx='40' cy='75' r='6' fill='%234285F4'/%3E%3Ccircle cx='120' cy='50' r='5' fill='%23FBBC05'/%3E%3Ccircle cx='200' cy='45' r='7' fill='%23EA4335'/%3E%3Ctext x='48' y='92' font-family='sans-serif' font-size='10' fill='%236E6E73'%3ETIU Hub%3C/text%3E%3Ctext x='170' y='68' font-family='sans-serif' font-size='10' fill='%236E6E73'%3ESector V%3C/text%3E%3C/svg%3E`;

const ecoRouteDark = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 120' fill='none'%3E%3Crect x='10' y='15' width='220' height='90' rx='16' fill='%23222226' stroke='%23333338' stroke-width='1.5'/%3E%3Cpath d='M40 75 Q70 30 120 50 T200 45' stroke='%2334A853' stroke-width='3' stroke-linecap='round' fill='none'/%3E%3Ccircle cx='40' cy='75' r='6' fill='%234285F4'/%3E%3Ccircle cx='120' cy='50' r='5' fill='%23FBBC05'/%3E%3Ccircle cx='200' cy='45' r='7' fill='%23EA4335'/%3E%3Ctext x='48' y='92' font-family='sans-serif' font-size='10' fill='%23A1A1A6'%3ETIU Hub%3C/text%3E%3Ctext x='170' y='68' font-family='sans-serif' font-size='10' fill='%23A1A1A6'%3ESector V%3C/text%3E%3C/svg%3E`;

const hackSphereLight = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 120' fill='none'%3E%3Crect x='10' y='15' width='220' height='90' rx='16' fill='%23F5F5F7' stroke='%23E5E5E7' stroke-width='1.5'/%3E%3Crect x='30' y='32' width='180' height='56' rx='8' fill='%23FFFFFF' stroke='%23E5E5E7'/%3E%3Ccircle cx='44' cy='44' r='3' fill='%23EA4335'/%3E%3Ccircle cx='54' cy='44' r='3' fill='%23FBBC05'/%3E%3Ccircle cx='64' cy='44' r='3' fill='%2334A853'/%3E%3Cpath d='M44 64l12 10-12 10m18 0h16' stroke='%231D1D1F' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E`;

const hackSphereDark = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 120' fill='none'%3E%3Crect x='10' y='15' width='220' height='90' rx='16' fill='%23222226' stroke='%23333338' stroke-width='1.5'/%3E%3Crect x='30' y='32' width='180' height='56' rx='8' fill='%23141416' stroke='%23333338'/%3E%3Ccircle cx='44' cy='44' r='3' fill='%23EA4335'/%3E%3Ccircle cx='54' cy='44' r='3' fill='%23FBBC05'/%3E%3Ccircle cx='64' cy='44' r='3' fill='%2334A853'/%3E%3Cpath d='M44 64l12 10-12 10m18 0h16' stroke='%23F5F5F7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E`;

const vertexAgentLight = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 120' fill='none'%3E%3Crect x='10' y='15' width='220' height='90' rx='16' fill='%23F5F5F7' stroke='%23E5E5E7' stroke-width='1.5'/%3E%3Cpath d='M120 30l40 25v30l-40 25-40-25v-30z' stroke='%234285F4' stroke-width='2' fill='%234285F4' fill-opacity='0.1'/%3E%3Ccircle cx='120' cy='70' r='10' fill='%234285F4'/%3E%3Cpath d='M120 45v15m25 15h-15m-15 0H100' stroke='%23FBBC05' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E`;

const vertexAgentDark = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 120' fill='none'%3E%3Crect x='10' y='15' width='220' height='90' rx='16' fill='%23222226' stroke='%23333338' stroke-width='1.5'/%3E%3Cpath d='M120 30l40 25v30l-40 25-40-25v-30z' stroke='%234285F4' stroke-width='2' fill='%234285F4' fill-opacity='0.2'/%3E%3Ccircle cx='120' cy='70' r='10' fill='%234285F4'/%3E%3Cpath d='M120 45v15m25 15h-15m-15 0H100' stroke='%23FBBC05' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E`;

const openHealthLight = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 120' fill='none'%3E%3Crect x='10' y='15' width='220' height='90' rx='16' fill='%23F5F5F7' stroke='%23E5E5E7' stroke-width='1.5'/%3E%3Ccircle cx='120' cy='60' r='24' fill='%23EA4335' fill-opacity='0.15'/%3E%3Cpath d='M120 48v24m-12-12h24' stroke='%23EA4335' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M60 60h30m60 0h30' stroke='%23A1A1A6' stroke-width='1.5' stroke-dasharray='2 2'/%3E%3C/svg%3E`;

const openHealthDark = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 120' fill='none'%3E%3Crect x='10' y='15' width='220' height='90' rx='16' fill='%23222226' stroke='%23333338' stroke-width='1.5'/%3E%3Ccircle cx='120' cy='60' r='24' fill='%23EA4335' fill-opacity='0.25'/%3E%3Cpath d='M120 48v24m-12-12h24' stroke='%23EA4335' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M60 60h30m60 0h30' stroke='%236E6E73' stroke-width='1.5' stroke-dasharray='2 2'/%3E%3C/svg%3E`;

export const ProjectsSection: React.FC = () => {
  const projectCards: HoverCardItem[] = [
    {
      name: "CampusPulse Companion",
      description: "Real-time campus transit tracker, lecture room changes, and peer study group sync powered by Flutter & Firebase Cloud Messaging.",
      tag: "Mobile & Real-Time",
      stats: "2,400+ Active Students",
      href: "#events",
      imgLight: campusPulseLight,
      img: campusPulseDark,
      fadeBottom: true,
    },
    {
      name: "AgriVision Bengal AI",
      description: "Offline-first pest and blight diagnostic PWA utilizing Gemini 2.5 Vision and TensorFlow Lite models for local West Bengal farmers.",
      tag: "Vision AI · UN SDG 2",
      stats: "94.2% Diagnostic Accuracy",
      href: "#events",
      imgLight: agriVisionLight,
      img: agriVisionDark,
      fadeBottom: true,
    },
    {
      name: "EcoRoute Kolkata",
      description: "Low-emission urban router calculating green commute corridors through Sector V by analyzing real-time e-buses and metro feeders.",
      tag: "Smart Transit · SDG 11",
      stats: "18.4% Average CO2 Saved",
      href: "#contact",
      imgLight: ecoRouteLight,
      img: ecoRouteDark,
      fadeBottom: true,
    },
    {
      name: "DevX HackSphere",
      description: "Collaborative peer review and automated prober environment built for DEVX SUMMIT 2026. Live leaderboard and automated git test suites.",
      tag: "Summit Platform",
      stats: "Launching Nov 2026",
      soon: true,
      imgLight: hackSphereLight,
      img: hackSphereDark,
      fadeBottom: true,
    },
    {
      name: "Vertex Agent Studio",
      description: "Experimental student sandbox to orchestrate autonomous multimodal reasoning agents on Google Cloud Run and Vertex AI SDK.",
      tag: "GenAI Labs",
      stats: "Private Alpha",
      soon: true,
      imgLight: vertexAgentLight,
      img: vertexAgentDark,
      fadeBottom: true,
    },
    {
      name: "OpenHealth Donor Net",
      description: "Decentralized voluntary blood donor network linking Kolkata hospital blood banks with certified Techno India University donors in emergencies.",
      tag: "Civic Impact",
      stats: "480+ Registered Donors",
      href: "#contact",
      imgLight: openHealthLight,
      img: openHealthDark,
      fadeBottom: true,
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-white dark:bg-black relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#86868B] mb-3">
              Campus Innovation & Engineering
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] dark:text-white leading-tight">
              Production solutions built for Kolkata and beyond.
            </h2>
          </div>
          <div className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] max-w-sm">
            Interactive student initiatives engineered with Google technologies. Hover or tap each card to explore architecture details.
          </div>
        </div>

        {/* Integrated HoverFeatureCards Component with layered spring reveal */}
        <div className="w-full">
          <HoverFeatureCards items={projectCards} />
        </div>
      </div>
    </section>
  );
};
