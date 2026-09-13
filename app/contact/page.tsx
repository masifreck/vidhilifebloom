'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Send,
  Building2,
  HeartHandshake,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ExternalLink
} from 'lucide-react';

type Department = 'homecare' | 'healthcard' | 'corporate';

export default function ContactPage() {
  const [department, setDepartment] = useState<Department>('homecare');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const deptLabel =
      department === 'homecare'
        ? 'ParaHome Care Desk'
        : department === 'healthcard'
        ? 'E-Reliant Card Desk'
        : 'CAG Corporate Audit Desk';

    const targetNumber = department === 'corporate' ? '919438010959' : '919438010959';

    const formattedMessage = encodeURIComponent(
      `*DIRECT INQUIRY - VIDHI LIFEBLOOM*\n` +
      `------------------------------------\n` +
      `• *Department:* ${deptLabel}\n` +
      `• *Name:* ${fullName}\n` +
      `• *Phone:* ${phone}\n` +
      `• *Email:* ${email || 'Not provided'}\n` +
      `• *City / Region:* ${city}\n` +
      `• *Message / Requirement:* ${message}\n` +
      `------------------------------------\n` +
      `Please connect with me regarding this inquiry.`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${targetNumber}?text=${formattedMessage}`, '_blank');
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-surface-canvas">
      <Header />

      {/* Hero Header */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary-soft border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" /> 24/7 Multi-Regional Support
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-text-headline tracking-tight">
          Connect With Our Specialized Desks
        </h1>
        <p className="mt-3 text-sm sm:text-base text-text-body max-w-2xl mx-auto">
          Whether you need emergency bedside nursing, card membership verification, or corporate forensic claim inquests, our direct branch lines are ready to assist.
        </p>
      </section>

      {/* Main Contact Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT: Branch Addresses & Direct Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Quick Emergency Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-text-headline to-slate-800 text-white shadow-md">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                24/7 Patient Emergency Helpline
              </div>
              <div className="text-xl sm:text-2xl font-black mt-1">
                +91 94380 10959 / 9776950295
              </div>
              <p className="text-xs text-slate-300 mt-2">
                Available around the clock for home ICU nurse deployment, oxygen concentrators, and acute triage.
              </p>
            </div>

            {/* Branch 1: Mumbai Corporate Headquarters */}
            <div className="bg-surface-card border border-surface-border rounded-2xl p-6 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full uppercase bg-brand-accent-soft text-brand-accent border border-brand-accent/20">
                  Head Office (CAG Enterprise)
                </span>
                <span className="text-xs text-text-muted">Mumbai, MH</span>
              </div>

              <h3 className="font-bold text-base text-text-headline">
                Corporate Claims & Investigation HQ
              </h3>

              <div className="mt-4 space-y-2.5 text-xs text-text-body">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <span>
                    Kanchpada, Unit No. 102/A, Wing - C, Jaswanti Allied Business Centre, Off New Link Road, Beside Khwaish Residency, Malad West, Mumbai, Maharashtra 400064.
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-brand-accent shrink-0" />
                  <a href="tel:02249728627" className="font-semibold text-text-headline hover:text-brand-primary">
                    022 4972 8627
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                  <a href="mailto:info@cagservices.co.in" className="text-brand-primary hover:underline">
                    info@cagservices.co.in
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-text-muted">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Mon – Sat: 9:30 AM – 6:30 PM (Sunday Closed)</span>
                </div>
              </div>
            </div>

            {/* Branch 2: Odisha Regional Healthcare & Sathi Desk */}
            <div className="bg-surface-card border border-surface-border rounded-2xl p-6 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full uppercase bg-brand-primary-soft text-brand-primary border border-brand-primary/20">
                  Regional Operations
                </span>
                <span className="text-xs text-text-muted">Eastern Zone</span>
              </div>

              <h3 className="font-bold text-base text-text-headline">
                Healthcare Services & Sathi Desk
              </h3>

              <div className="mt-4 space-y-2.5 text-xs text-text-body">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span>
                    Amlapada, Nimapara, Puri District, Odisha 752106. (Coordinating Bhubaneswar, Cuttack & Regional Network).
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-brand-primary shrink-0" />
                  <a href="tel:+919438010959" className="font-semibold text-text-headline hover:text-brand-primary">
                    9438010959 / 9776950295
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-primary shrink-0" />
                  <a href="mailto:info@ereliantsolutions.com" className="text-brand-primary hover:underline">
                    info@ereliantsolutions.com / ereliant.sathi@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-text-muted">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Mon – Sat: 6:00 AM – 10:00 PM</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Interactive Department Triage Form (7 cols) */}
          <div className="lg:col-span-7 bg-surface-card border border-surface-border rounded-3xl p-6 sm:p-10 shadow-sm">
            
            {/* Department Selection Tabs */}
            <div className="mb-8">
              <span className="text-xs font-bold text-text-muted uppercase tracking-wider block mb-2">
                1. Select Department
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 bg-surface-canvas rounded-2xl border border-surface-border">
                <button
                  type="button"
                  onClick={() => setDepartment('homecare')}
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl text-xs font-bold transition-all ${
                    department === 'homecare'
                      ? 'bg-brand-primary text-brand-primary-contrast shadow-xs'
                      : 'text-text-muted hover:text-text-headline'
                  }`}
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>ParaHome Care</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDepartment('healthcard')}
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl text-xs font-bold transition-all ${
                    department === 'healthcard'
                      ? 'bg-brand-primary text-brand-primary-contrast shadow-xs'
                      : 'text-text-muted hover:text-text-headline'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Health Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDepartment('corporate')}
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl text-xs font-bold transition-all ${
                    department === 'corporate'
                      ? 'bg-brand-primary text-brand-primary-contrast shadow-xs'
                      : 'text-text-muted hover:text-text-headline'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Corporate Audit</span>
                </button>
              </div>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-text-headline">Inquiry Transmitted!</h3>
                <p className="text-sm text-text-body max-w-md mx-auto">
                  Thank you, <strong className="text-text-headline">{fullName}</strong>. Opening WhatsApp to hand your request directly to our coordinator desk...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider block mb-1">
                    2. Your Details & Requirements
                  </span>
                  <h3 className="text-lg font-bold text-text-headline">
                    {department === 'homecare'
                      ? 'Request Bedside Nursing or Home Recovery'
                      : department === 'healthcard'
                      ? 'Health Card Privileges & Hospital Em-panelment'
                      : 'Corporate Claims Inquest & Forensic Audit Inquiries'}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text-headline">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alok Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-surface-border bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-headline"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text-headline">Phone / WhatsApp Number *</label>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text-headline">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-surface-border bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-headline"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text-headline">Your City / State *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai, Bhubaneswar, Delhi"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-surface-border bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-headline"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-text-headline">Message / Specific Requirement *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder={
                      department === 'homecare'
                        ? 'Describe patient condition (e.g., patient needs 24/7 tracheostomy nurse and oxygen bed in Mumbai)...'
                        : department === 'healthcard'
                        ? 'Inquire about member hospital discounts, registration, or clinic tie-ups...'
                        : 'Mention claim investigation parameters, volume of settled files, or NABH advisory scope...'
                    }
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-surface-border bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-headline resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-brand-primary-contrast font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Dedicated Desk</span>
                </button>

                <p className="text-[11px] text-center text-text-muted">
                  Direct connection via our centralized coordinator routing. Privacy protected.
                </p>
              </form>
            )}

          </div>

        </div>
      </section>
    </main>
  );
}