'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HeartHandshake,
  CreditCard,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Building2,
  Calculator,
  UserCheck
} from 'lucide-react';

export default function HeroSection() {
  const [audience, setAudience] = useState<'individual' | 'corporate'>('individual');
  const [billAmount, setBillAmount] = useState<number>(35000);

  // Approximate 18% savings on total medical/diagnostic expenses with the health card
  const estimatedSavings = Math.round(billAmount * 0.18);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-surface-border">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-brand-primary-soft/60 via-brand-accent-soft/30 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. TOP LIVE STATUS PILL */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-surface-border shadow-xs text-xs font-medium text-text-headline">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-text-muted">Live Desk:</span>
            <span className="font-semibold text-emerald-600">Home Care Staff & Audit Teams On-Duty</span>
          </div>
        </div>

        {/* 2. DUAL-AUDIENCE SWITCHER (B2C vs B2B) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-surface-card border border-surface-border rounded-2xl shadow-xs">
            <button
              onClick={() => setAudience('individual')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                audience === 'individual'
                  ? 'bg-brand-primary text-brand-primary-contrast shadow-sm'
                  : 'text-text-muted hover:text-text-headline'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span>For Individuals & Families</span>
            </button>

            <button
              onClick={() => setAudience('corporate')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                audience === 'corporate'
                  ? 'bg-brand-primary text-brand-primary-contrast shadow-sm'
                  : 'text-text-muted hover:text-text-headline'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>For Insurers & Corporates</span>
            </button>
          </div>
        </div>

        {/* 3. MAIN HERO CONTENT (DYNAMIC BASED ON TOGGLE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Headings and CTAs (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {audience === 'individual' ? (
              <>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Doorstep Clinical Care + Privilege Savings</span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-text-headline tracking-tight leading-[1.15]">
                  Compassionate Home Care &{' '}
                  <span className="text-brand-primary">Healthcare Discounts</span> You Can Rely On.
                </h1>
                <p className="mt-5 text-base sm:text-lg text-text-body max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Certified ICU nurses, elderly companions, and physiotherapy at your doorstep — backed by the 
                  <strong className="text-text-headline font-semibold"> Free E-Reliant Health Membership Card</strong> for up to 20% off hospital, diagnostic, and pharmacy bills.
                </p>

                {/* Bullet Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-xs sm:text-sm text-text-headline max-w-lg mx-auto lg:mx-0">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Background-Verified Bedside Nurses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Free Super-Specialist Consults</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Up to 20% Off Labs & Pharmacy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Same-Day ICU Equipment Rental</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/become-member"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-brand-primary-contrast font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Get Free Health Card</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="tel:+919438010959"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-surface-card hover:bg-surface-canvas border border-surface-border text-text-headline font-bold text-sm transition-all flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-brand-accent" />
                    <span>Book Home Care Nurse</span>
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent uppercase tracking-wider mb-3">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>CAG Risk Intelligence & Audit Division</span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-text-headline tracking-tight leading-[1.15]">
                  Insurance Claim Inquest &{' '}
                  <span className="text-brand-accent">Forensic Medical Auditing</span>.
                </h1>
                <p className="mt-5 text-base sm:text-lg text-text-body max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Protecting insurance companies, TPAs, and corporate health plans. Over 2,00,000+ Life and Health claims investigated with ethical discipline and field networks across 6+ states.
                </p>

                {/* Corporate Trust Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-xs sm:text-sm text-text-headline max-w-lg mx-auto lg:mx-0">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Settled File Re-Audits & Leakage Check</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Ground ICP & Hospital Record Pickup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Hospital Infrastructure & Tariff Audits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>NABH Compliance & Clinical SOPs</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/contact?type=enterprise"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-brand-primary-contrast font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Claim Investigation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="tel:02249728627"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-surface-card hover:bg-surface-canvas border border-surface-border text-text-headline font-bold text-sm transition-all flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-brand-primary" />
                    <span>Speak to Mumbai Corporate Desk</span>
                  </a>
                </div>
              </>
            )}
          </div>

          {/* RIGHT COLUMN: Interactive Card / Widget (5 cols) */}
          <div className="lg:col-span-5">
            {audience === 'individual' ? (
              /* INTERACTIVE SAVINGS CALCULATOR & CARD PREVIEW */
              <div className="bg-surface-card border border-surface-border rounded-3xl p-6 sm:p-8 shadow-lg relative">
                
                {/* Visual Privilege Card Header */}
                <div className="p-5 rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-800 to-brand-primary text-white shadow-md relative overflow-hidden mb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-slate-300 block">VIDHI LIFEBLOOM</span>
                      <span className="text-sm font-bold tracking-tight">HEALTH PRIVILEGE CARD</span>
                    </div>
                    <CreditCard className="w-6 h-6 text-emerald-300" />
                  </div>

                  <div className="my-5 font-mono text-sm tracking-widest text-slate-300">
                    VLH • 8492 • 4920 • CARD
                  </div>

                  <div className="flex justify-between items-end text-[11px] text-slate-300">
                    <div>
                      <span className="text-[9px] uppercase block text-slate-400">Cardholder</span>
                      <span className="font-semibold text-white">LIFETIME MEMBER</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] uppercase block text-slate-400">Discount Tier</span>
                      <span className="font-bold text-emerald-400">UP TO 20% OFF</span>
                    </div>
                  </div>
                </div>

                {/* Savings Slider Widget */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-text-headline flex items-center gap-1.5 uppercase tracking-wide">
                      <Calculator className="w-3.5 h-3.5 text-brand-primary" />
                      <span>Instant Savings Estimator</span>
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      Save ~18%
                    </span>
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-surface-canvas border border-surface-border">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-xs text-text-muted">Estimated Medical/Lab Expense:</span>
                      <span className="text-base font-extrabold text-text-headline">
                        ₹{billAmount.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <input
                      type="range"
                      min="5000"
                      max="150000"
                      step="5000"
                      value={billAmount}
                      onChange={(e) => setBillAmount(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                    />

                    <div className="flex justify-between text-[10px] text-text-muted mt-1">
                      <span>₹5,000</span>
                      <span>₹75,000</span>
                      <span>₹1,50,000</span>
                    </div>

                    <div className="mt-4 pt-3 border-t border-surface-border flex justify-between items-center">
                      <span className="text-xs font-medium text-text-headline">Estimated Cash Savings:</span>
                      <span className="text-lg font-black text-emerald-600">
                        ~₹{estimatedSavings.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href="/become-member"
                    className="block w-full py-3 px-4 rounded-xl bg-brand-primary text-brand-primary-contrast font-bold text-xs hover:bg-brand-primary-hover transition text-center shadow-xs"
                  >
                    Apply for 100% Free Member Card →
                  </Link>
                  <p className="text-[10px] text-text-muted mt-2">Zero registration fees • Lifelong family validity</p>
                </div>

              </div>
            ) : (
              /* CORPORATE PROOF & STATS WIDGET */
              <div className="bg-surface-card border border-surface-border rounded-3xl p-6 sm:p-8 shadow-lg">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent-soft text-brand-accent flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-text-headline">CAG Verification Track Record</h3>
                    <p className="text-xs text-text-muted">Established in April 2014</p>
                  </div>
                </div>

                {/* 4 Corporate Metric Boxes */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-surface-canvas border border-surface-border text-center">
                    <div className="text-2xl font-black text-brand-accent">2,00,000+</div>
                    <div className="text-xs font-semibold text-text-headline mt-1">Death/Life Claims</div>
                    <div className="text-[10px] text-text-muted mt-0.5">Inquested & verified</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-canvas border border-surface-border text-center">
                    <div className="text-2xl font-black text-brand-primary">25,000+</div>
                    <div className="text-xs font-semibold text-text-headline mt-1">Health Claims</div>
                    <div className="text-[10px] text-text-muted mt-0.5">Audited for leakage</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-canvas border border-surface-border text-center">
                    <div className="text-2xl font-black text-text-headline">6+ States</div>
                    <div className="text-xs font-semibold text-text-headline mt-1">Field Network</div>
                    <div className="text-[10px] text-text-muted mt-0.5">Ground investigation</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-canvas border border-surface-border text-center">
                    <div className="text-2xl font-black text-emerald-600">10+ Years</div>
                    <div className="text-xs font-semibold text-text-headline mt-1">Ethical Trust</div>
                    <div className="text-[10px] text-text-muted mt-0.5">Since FY 2014-15</div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs leading-relaxed">
                  <strong>ICICI Prudential Award of Excellence</strong> winner for superior performance in claim investigation services.
                </div>

                <Link
                  href="/contact?type=enterprise"
                  className="mt-6 block w-full py-3 px-4 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-brand-primary-contrast font-bold text-xs transition text-center shadow-xs"
                >
                  Initiate Corporate Tie-up & Claim Audit Desk →
                </Link>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}