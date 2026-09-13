'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ALL_SERVICES, ServiceItem } from '@/lib/services-data';
import {
  HeartPulse,
  CreditCard,
  ShieldCheck,
  Stethoscope,
  Activity,
  Award,
  Pill,
  Building2,
  FileCheck2,
  FileSearch,
  Truck,
  UserCheck,
  Search,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Sparkles
} from 'lucide-react';

// Map icon strings to dynamic Lucide components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'ph-nursing': Stethoscope,
  'ph-elderly': HeartPulse,
  'ph-physio': Activity,
  'ph-postop': UserCheck,
  'ph-equipment': Truck,
  'ph-doctor': Stethoscope,
  'er-hospital-bill': Building2,
  'er-consultation': Stethoscope,
  'er-radiology': Activity,
  'er-pharma': Pill,
  'er-membership': CreditCard,
  'er-marketing': Building2,
  'cag-claims-investigation': FileSearch,
  'cag-claims-audit': ShieldCheck,
  'cag-claims-verification': FileCheck2,
  'cag-doc-pickup': Truck,
  'cag-hospital-audit': Building2,
  'cag-nabh': Award,
};

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'parahome' | 'ereliant' | 'cag'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Live filter based on pill selection + search input
  const filteredServices = ALL_SERVICES.filter((srv) => {
    const matchesCategory = selectedCategory === 'all' || srv.category === selectedCategory;
    const matchesSearch =
      srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary-soft border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-wider uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Complete Service Ecosystem
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-headline tracking-tight">
          All 18 Specialized Healthcare & Audit Services
        </h2>
        <p className="mt-4 text-base sm:text-lg text-text-body">
          Explore our certified doorstep nursing, medical discount privileges, and institutional insurance claim investigations.
        </p>
      </div>

      {/* FILTER TABS & SEARCH BAR STRIP */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 p-1.5 bg-surface-card rounded-2xl border border-surface-border overflow-x-auto shadow-xs">
          {[
            { id: 'all', label: 'All Services (18)' },
            { id: 'parahome', label: 'ParaHome Care (6)' },
            { id: 'ereliant', label: 'E-Reliant Cards (6)' },
            { id: 'cag', label: 'CAG Corporate (6)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as typeof selectedCategory)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedCategory === tab.id
                  ? 'bg-brand-primary text-brand-primary-contrast shadow-sm'
                  : 'text-text-muted hover:text-text-headline hover:bg-surface-canvas'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative min-w-[280px]">
          <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search e.g. ICU, NABH, CT Scan, Nurse..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-surface-border bg-surface-card focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-headline"
          />
        </div>

      </div>

      {/* 18-SERVICES GRID (3-COLUMNS RESPONSIVE) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => {
          const Icon = iconMap[service.id] || Stethoscope;
          
          return (
            <div
              key={service.id}
              id={service.id}
              className="bg-surface-card rounded-2xl border border-surface-border p-6 shadow-xs hover:shadow-md hover:border-brand-primary/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      service.category === 'parahome'
                        ? 'bg-rose-50 text-rose-600 border border-rose-100'
                        : service.category === 'ereliant'
                        ? 'bg-sky-50 text-brand-primary border border-sky-100'
                        : 'bg-emerald-50 text-brand-accent border border-emerald-100'
                    }`}
                  >
                    {service.categoryLabel}
                  </span>
                  <span className="text-[11px] font-semibold text-text-muted bg-surface-canvas px-2.5 py-1 rounded-md border border-surface-border">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title with Icon */}
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-primary-soft text-brand-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-text-headline group-hover:text-brand-primary transition-colors leading-snug">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-text-body mt-2 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Service Features Checklist */}
                <ul className="mt-4 space-y-2 pt-4 border-t border-surface-border/60">
                  {service.features.map((feat, i) => (
                    <li key={i} className="text-xs text-text-muted flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button Strip */}
              <div className="mt-6 pt-4 border-t border-surface-border flex items-center gap-2">
                <Link
                  href={
                    service.category === 'parahome'
                      ? 'tel:+919438010959'
                      : service.category === 'ereliant'
                      ? '/become-member'
                      : '/contact?type=enterprise'
                  }
                  className="w-full py-2.5 px-4 rounded-xl bg-surface-canvas hover:bg-brand-primary hover:text-brand-primary-contrast text-text-headline text-xs font-bold transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          );
        })}
      </div>

      {/* ZERO RESULTS EMPTY STATE */}
      {filteredServices.length === 0 && (
        <div className="text-center py-16 bg-surface-card rounded-2xl border border-surface-border">
          <p className="text-text-muted text-sm">No service found matching &quot;{searchQuery}&quot;. Try another term.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-4 text-xs font-bold text-brand-primary hover:underline"
          >
            Clear filters & view all 18 services
          </button>
        </div>
      )}

      {/* FAST TRIAGE ASSISTANCE BAR */}
      <div className="mt-14 bg-gradient-to-r from-text-headline to-slate-800 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-1">
            Need Immediate Guidance?
          </span>
          <h4 className="text-lg sm:text-xl font-bold">Unsure which service meets your specific condition?</h4>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Our central care coordinators will guide you directly to the right home nurse, network hospital discount, or claim verification officer.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
          <a
            href="tel:+919438010959"
            className="px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold flex items-center justify-center gap-2 transition shadow-sm"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call 24/7 Helpline</span>
          </a>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center justify-center transition"
          >
            Branch Locations
          </Link>
        </div>
      </div>

    </section>
  );
}