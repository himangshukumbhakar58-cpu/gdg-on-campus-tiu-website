/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Check, Copy, Sparkles, QrCode, Shield } from 'lucide-react';
import { MemberPassData } from '../types';

interface MemberPassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MemberPassModal: React.FC<MemberPassModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'pass'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('Computer Science & Engineering');
  const [year, setYear] = useState('3rd Year');
  const [track, setTrack] = useState('AI & Google Cloud');
  const [copied, setCopied] = useState(false);

  const [passData, setPassData] = useState<MemberPassData | null>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const randomSerial = Math.floor(1000 + Math.random() * 9000);
    const newPass: MemberPassData = {
      fullName: name.trim(),
      email: email.trim(),
      department,
      year,
      track,
      memberId: `TIU-GDG-2026-${randomSerial}`,
      joinedDate: 'October 2026'
    };

    setPassData(newPass);
    setStep('pass');
  };

  const copyMemberId = () => {
    if (!passData) return;
    navigator.clipboard.writeText(passData.memberId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

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

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-lg bg-white dark:bg-[#1C1C1E] rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-black/[0.08] dark:border-white/10 p-6 sm:p-8 z-10 overflow-hidden text-[#1D1D1F] dark:text-white"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-white hover:bg-[#F5F5F7] dark:hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#4285F4] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Chapter Membership</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
                Claim Your Digital Member Pass
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6] mt-1">
                Get an official digital Apple Wallet-style membership token for GDG on Campus at Techno India University.
              </p>
            </div>

            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7] mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sourav Sengupta"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F5F5F7] dark:bg-[#2C2C2E] rounded-xl border border-black/[0.06] dark:border-white/10 focus:bg-white dark:focus:bg-[#3A3A3C] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 dark:focus:ring-white/20 transition-all text-[#1D1D1F] dark:text-white placeholder:text-[#86868B]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7] mb-1.5">
                  Student Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.name@technoindiaeducation.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F5F5F7] dark:bg-[#2C2C2E] rounded-xl border border-black/[0.06] dark:border-white/10 focus:bg-white dark:focus:bg-[#3A3A3C] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 dark:focus:ring-white/20 transition-all text-[#1D1D1F] dark:text-white placeholder:text-[#86868B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7] mb-1.5">
                    Department
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs bg-[#F5F5F7] dark:bg-[#2C2C2E] rounded-xl border border-black/[0.06] dark:border-white/10 focus:bg-white dark:focus:bg-[#3A3A3C] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 dark:focus:ring-white/20 transition-all text-[#1D1D1F] dark:text-white"
                  >
                    <option value="Computer Science & Engineering">CSE (Core)</option>
                    <option value="AI & Machine Learning">CSE (AI & ML)</option>
                    <option value="Data Science & Big Data">CSE (Data Science)</option>
                    <option value="Information Technology">IT</option>
                    <option value="Electronics & Communication">ECE</option>
                    <option value="Master of Computer Applications">MCA</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7] mb-1.5">
                    Academic Year
                  </label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs bg-[#F5F5F7] dark:bg-[#2C2C2E] rounded-xl border border-black/[0.06] dark:border-white/10 focus:bg-white dark:focus:bg-[#3A3A3C] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 dark:focus:ring-white/20 transition-all text-[#1D1D1F] dark:text-white"
                  >
                    <option value="1st Year">1st Year (Freshman)</option>
                    <option value="2nd Year">2nd Year (Sophomore)</option>
                    <option value="3rd Year">3rd Year (Junior)</option>
                    <option value="4th Year">4th Year (Senior)</option>
                    <option value="Postgraduate">Postgraduate</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7] mb-1.5">
                  Primary Interest Track
                </label>
                <select
                  value={track}
                  onChange={(e) => setTrack(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs bg-[#F5F5F7] dark:bg-[#2C2C2E] rounded-xl border border-black/[0.06] dark:border-white/10 focus:bg-white dark:focus:bg-[#3A3A3C] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 dark:focus:ring-white/20 transition-all text-[#1D1D1F] dark:text-white"
                >
                  <option value="AI & Google Cloud">AI & Google Cloud</option>
                  <option value="Android & Jetpack Compose">Android & Jetpack Compose</option>
                  <option value="Flutter & Cross-Platform">Flutter & Cross-Platform</option>
                  <option value="Web Standards & Open Source">Web Standards & Open Source</option>
                </select>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-semibold text-white dark:text-black bg-[#1D1D1F] dark:bg-white hover:bg-black dark:hover:bg-[#E5E5E7] rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] shadow-sm flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#FBBC05]" />
                  <span>Generate Pass & Join Community</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#86868B]">
                Membership is 100% free and open to all Techno India University students.
              </p>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-[#34A853]/10 text-[#34A853] flex items-center justify-center mx-auto mb-2">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
                Welcome to GDG on Campus TIU!
              </h3>
              <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6]">
                Your pass has been generated and verified. Present this token at campus workshops.
              </p>
            </div>

            {/* Apple Wallet Style Card */}
            <div className="relative rounded-3xl p-6 sm:p-7 text-white shadow-2xl overflow-hidden bg-gradient-to-br from-[#1C1C1E] via-[#2A2A2E] to-[#121214] border border-white/10">
              {/* Subtle Google Colors Aura on the Card */}
              <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-[#4285F4]/20 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-36 h-36 rounded-full bg-[#34A853]/20 blur-3xl pointer-events-none" />

              {/* Card Header */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="flex items-center space-x-0.5 text-sm font-bold">
                    <span className="text-[#EA4335]">&lt;</span>
                    <span className="text-[#4285F4]">/</span>
                    <span className="text-[#34A853]">&gt;</span>
                  </span>
                  <div>
                    <div className="text-xs font-semibold tracking-tight leading-none">
                      GDG on Campus
                    </div>
                    <div className="text-[10px] text-white/60 leading-none mt-1">
                      Techno India University
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-wider text-white/50 font-mono">
                    Member ID
                  </div>
                  <div className="text-xs font-mono font-bold tracking-wider text-[#FBBC05]">
                    {passData?.memberId}
                  </div>
                </div>
              </div>

              {/* Card Middle: Member Name & Track */}
              <div className="relative z-10 space-y-3 mb-6">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50">
                    Member Name
                  </div>
                  <div className="text-xl font-bold tracking-tight text-white">
                    {passData?.fullName}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/50">
                      Track
                    </div>
                    <div className="text-xs font-medium text-white/90">
                      {passData?.track}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/50">
                      Department / Year
                    </div>
                    <div className="text-xs font-medium text-white/90 truncate">
                      {passData?.year} · {passData?.department.split(' ')[0]}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: QR Code Mock & Verification */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] text-white/60 font-mono">
                  <Shield className="w-3.5 h-3.5 text-[#34A853]" />
                  <span>KOLKATA CHAPTER · 2026</span>
                </div>

                {/* Micro SVG QR pattern */}
                <div className="w-8 h-8 bg-white p-1 rounded-md flex items-center justify-center">
                  <QrCode className="w-full h-full text-black" />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={copyMemberId}
                className="flex-1 py-2.5 px-3 text-xs font-semibold rounded-xl border border-black/10 dark:border-white/10 hover:bg-[#F5F5F7] dark:hover:bg-white/[0.08] transition-colors flex items-center justify-center gap-1.5 text-[#1D1D1F] dark:text-white"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#34A853]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied ID' : 'Copy Member ID'}</span>
              </button>

              <button
                onClick={() => {
                  setStep('form');
                }}
                className="py-2.5 px-3 text-xs font-medium rounded-xl text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white transition-colors"
              >
                Edit Details
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
