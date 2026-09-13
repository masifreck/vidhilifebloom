'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Send, PhoneCall, Sparkles } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [department, setDepartment] = useState('Home Care Bedside Nursing');
  const [patientCity, setPatientCity] = useState('');
  const [applicantName, setApplicantName] = useState('');

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(
      `*DIRECT INQUIRY - VIDHI LIFEBLOOM*\n` +
      `------------------------------------\n` +
      `• *Name:* ${applicantName || 'Not specified'}\n` +
      `• *City:* ${patientCity || 'Not specified'}\n` +
      `• *Requirement:* ${department}\n` +
      `------------------------------------\n` +
      `Hello, I would like immediate assistance regarding this service.`
    );
    window.open(`https://wa.me/918543804575?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pop-up Box */}
      {isOpen && (
        <div className="mb-4 w-[310px] sm:w-80 bg-surface-card rounded-2xl shadow-2xl border border-surface-border overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-emerald-600 p-4 text-white">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-200 animate-pulse" />
                <span className="font-bold text-xs uppercase tracking-wider">Vidhi Lifebloom Desk</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition p-1"
                aria-label="Close desk"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-emerald-100 mt-1">
              Direct assistance across Home Care, Health Cards & Claims
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleStartChat} className="p-4 space-y-3">
            <div>
              <label className="text-[11px] font-bold text-text-headline block mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rajesh Mohanty"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-surface-border bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-emerald-500 text-text-headline"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-text-headline block mb-1">
                Your City / Location
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Bhubaneswar / Mumbai"
                value={patientCity}
                onChange={(e) => setPatientCity(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-surface-border bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-emerald-500 text-text-headline"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-text-headline block mb-1">
                Select Service
              </label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-surface-border bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-emerald-500 text-text-headline"
              >
                <option>Home Care Bedside Nursing (ICU/Attendant)</option>
                <option>Elderly Companion & Assisted Living</option>
                <option>Free Health Privilege Card Registration</option>
                <option>Hospitalization (IPD) Bill Discounts</option>
                <option>Diagnostic / Pathology Savings</option>
                <option>Corporate Claims Investigation / Forensic Audit</option>
                <option>NABH Accreditation Consultancy</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Connect on WhatsApp</span>
            </button>

            <div className="pt-2 border-t border-surface-border flex items-center justify-between text-[10px] text-text-muted">
              <span>Emergency triage desk</span>
              <a href="tel:+919438010959" className="text-emerald-700 font-bold hover:underline">
                Call: 9438010959
              </a>
            </div>
          </form>

        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        aria-label="Open 24/7 Helpline Desk"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-white animate-pulse" />
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}