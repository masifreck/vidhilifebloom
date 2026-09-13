'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import {
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  User,
  Mail,
  MapPin,
  Calendar,
  Send,
  Building2,
  HeartPulse
} from 'lucide-react';

export default function BecomeMemberPage() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [dob, setDob] = useState('');
  const [servicePreference, setServicePreference] = useState('Free Health Privilege Card');
  const [familyMembers, setFamilyMembers] = useState('1 (Self)');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Generate formatted WhatsApp message
    const message = encodeURIComponent(
      `*NEW HEALTH CARD REGISTRATION - VIDHI LIFEBLOOM*\n` +
      `------------------------------------\n` +
      `• *Name:* ${fullName}\n` +
      `• *Phone:* ${phone}\n` +
      `• *City:* ${city}\n` +
      `• *Date of Birth:* ${dob || 'Not provided'}\n` +
      `• *Primary Need:* ${servicePreference}\n` +
      `• *Family Coverage:* ${familyMembers}\n` +
      `------------------------------------\n` +
      `Please issue my digital health membership card.`
    );

    // Open WhatsApp directly with care team
    setTimeout(() => {
      window.open(`https://wa.me/919438010959?text=${message}`, '_blank');
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-surface-canvas">
      <Header />

      {/* Hero Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary-soft border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" /> 100% Free Lifetime Membership
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-text-headline tracking-tight">
          Apply For Your Vidhi Lifebloom Health Card
        </h1>
        <p className="mt-3 text-sm sm:text-base text-text-body max-w-2xl mx-auto">
          Card registration is completely free of charge. Unlock up to 20% concessions on hospital admissions, super-specialist consultations, diagnostic scans, and at-home nursing.
        </p>
      </section>

      {/* Main Form & Interactive Card Preview */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Live Interactive Digital Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Digital Card Preview */}
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-tr from-slate-950 via-slate-900 to-brand-primary text-white shadow-2xl border border-slate-800 relative overflow-hidden">
              {/* Background watermark icon */}
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                <HeartPulse className="w-64 h-64 text-white" />
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-slate-300 block">
                    VIDHI LIFEBLOOM HEALTHCARE
                  </span>
                  <span className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    HEALTH PRIVILEGE CARD
                  </span>
                </div>
                <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <CreditCard className="w-5 h-5 text-emerald-400" />
                </div>
              </div>

              {/* Dynamic Cardholder Name */}
              <div className="relative z-10 my-8">
                <span className="text-[9px] uppercase tracking-widest text-slate-400 block mb-1">
                  Cardholder Name
                </span>
                <div className="font-mono text-lg sm:text-xl font-bold tracking-wider text-emerald-300 truncate">
                  {fullName ? fullName.toUpperCase() : 'YOUR NAME HERE'}
                </div>
                <div className="font-mono text-xs tracking-widest text-slate-400 mt-2">
                  VLH • 8492 • {phone ? phone.slice(-4) : '••••'} • 2026
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="relative z-10 pt-4 border-t border-white/15 flex justify-between items-end text-xs">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 block">Location</span>
                  <span className="font-semibold text-white truncate max-w-[120px] block">
                    {city || 'Pan-India'}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 block">Status</span>
                  <span className="font-bold text-emerald-400">FREE LIFETIME</span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 block">Benefit</span>
                  <span className="font-bold text-amber-300">UP TO 20% OFF</span>
                </div>
              </div>
            </div>

            {/* Quick Benefits Checklist */}
            <div className="bg-surface-card border border-surface-border rounded-2xl p-6 shadow-xs">
              <h4 className="text-sm font-bold text-text-headline mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Guaranteed Membership Privileges:
              </h4>
              <ul className="space-y-2.5 text-xs text-text-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Up to 10%–20% waiver on total in-patient (IPD) hospital billing.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Free monthly super-specialist consultations (cardiology, ortho, neuro).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Concessions on MRI, CT scans, ultrasound, and blood tests.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Priority booking for certified 24/7 home ICU nurses and caregivers.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* RIGHT: Registration Form (7 cols) */}
          <div className="lg:col-span-7 bg-surface-card border border-surface-border rounded-3xl p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-text-headline">Registration Submitted Successfully!</h3>
                <p className="text-sm text-text-muted max-w-md mx-auto">
                  Thank you, <strong className="text-text-headline">{fullName}</strong>. Opening WhatsApp to connect directly with your dedicated membership desk...
                </p>
                <div className="pt-4">
                  <a
                    href="tel:+919438010959"
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary hover:underline"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Emergency? Call Helpline: +91 94380 10959</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-text-headline">Member Information</h3>
                  <p className="text-xs text-text-muted mt-1">
                    Fill out your details to receive your instant digital privilege card.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text-headline flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-brand-primary" /> Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Mohanty"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-surface-border bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-headline"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text-headline flex items-center gap-1.5">
                      <PhoneCall className="w-3.5 h-3.5 text-brand-primary" /> Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-surface-border bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-headline"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* City */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text-headline flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-primary" /> City / District *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bhubaneswar / Mumbai"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-surface-border bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-headline"
                    />
                  </div>

                  {/* Date of Birth */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text-headline flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-primary" /> Date of Birth
                    </label>
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-surface-border bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-headline"
                    />
                  </div>

                  {/* Family Coverage */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text-headline flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-brand-primary" /> Family Coverage
                    </label>
                    <select
                      value={familyMembers}
                      onChange={(e) => setFamilyMembers(e.target.value)}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-surface-border bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-headline"
                    >
                      <option>1 (Self Only)</option>
                      <option>2 (Self + Spouse)</option>
                      <option>3 to 4 (Family + Children)</option>
                      <option>5+ (Joint Family + Parents)</option>
                    </select>
                  </div>
                </div>

                {/* Primary Healthcare Interest */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-text-headline block">
                    Primary Service Needed:
                  </label>
                  <select
                    value={servicePreference}
                    onChange={(e) => setServicePreference(e.target.value)}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-surface-border bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-headline"
                  >
                    <option>Free Health Privilege Card (Hospital/Lab Discounts)</option>
                    <option>Bedside ICU / Home Care Nursing Setup</option>
                    <option>Elderly Care Companion & Assisted Living</option>
                    <option>Home Physiotherapy Sessions</option>
                    <option>Corporate Claims Investigation / Forensic Audit</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-brand-primary-contrast font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Generate Free Digital Card & Submit</span>
                </button>

                <p className="text-[11px] text-center text-text-muted">
                  By clicking submit, your registration request will be dispatched directly to our care coordination team for instant card activation.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}