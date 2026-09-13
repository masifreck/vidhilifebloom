import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import { ALL_SERVICES, ServiceItem } from '@/lib/services-data';
import {
  HeartHandshake,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  Sparkles,
  Stethoscope,
  Activity,
  Award,
  Pill,
  Building2,
  FileCheck2,
  FileSearch,
  Truck,
  UserCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Complete 18-Service Ecosystem | VIDHI LIFEBLOOM HEALTHCARE',
  description:
    'Comprehensive directory of verified home nursing, discounted medical health cards, and institutional insurance claims forensic auditing.',
};

// Map each service id to its respective icon
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'ph-nursing': Stethoscope,
  'ph-elderly': HeartHandshake,
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

export default function ServicesHubPage() {
  const parahomeServices = ALL_SERVICES.filter((s) => s.category === 'parahome');
  const ereliantServices = ALL_SERVICES.filter((s) => s.category === 'ereliant');
  const cagServices = ALL_SERVICES.filter((s) => s.category === 'cag');

  return (
    <main className="min-h-screen bg-surface-canvas">
      <Header />

      {/* Hero Banner */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary-soft border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Full Spectrum Healthcare & Risk Solutions
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-text-headline tracking-tight max-w-4xl mx-auto">
          Our Complete Service Directory
        </h1>
        <p className="mt-4 text-sm sm:text-base text-text-body max-w-2xl mx-auto leading-relaxed">
          Explore all 18 dedicated services across clinical home assistance, health privilege memberships, and corporate forensic risk investigations.
        </p>

        {/* Quick Division Jump Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#parahome-division"
            className="px-4 py-2 rounded-xl bg-surface-card border border-surface-border text-xs font-bold text-text-headline hover:border-rose-400 hover:text-rose-600 transition flex items-center gap-1.5 shadow-xs"
          >
            <HeartHandshake className="w-3.5 h-3.5 text-rose-500" />
            <span>ParaHome Care (6)</span>
          </a>
          <a
            href="#ereliant-division"
            className="px-4 py-2 rounded-xl bg-surface-card border border-surface-border text-xs font-bold text-text-headline hover:border-brand-primary hover:text-brand-primary transition flex items-center gap-1.5 shadow-xs"
          >
            <CreditCard className="w-3.5 h-3.5 text-brand-primary" />
            <span>E-Reliant Health Membership (6)</span>
          </a>
          <a
            href="#cag-division"
            className="px-4 py-2 rounded-xl bg-surface-card border border-surface-border text-xs font-bold text-text-headline hover:border-brand-accent hover:text-brand-accent transition flex items-center gap-1.5 shadow-xs"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
            <span>CAG Corporate & Audit (6)</span>
          </a>
        </div>
      </section>

      <div className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">

        {/* ================= DIVISION 1: PARAHOME CARE ================= */}
        <section id="parahome-division" className="scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-surface-border pb-6 mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-1">
                <HeartHandshake className="w-4 h-4" />
                <span>Division 01 • Doorstep Clinical Assistance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-text-headline">
                ParaHome Care Services
              </h2>
              <p className="text-xs sm:text-sm text-text-body mt-1">
                Trained bedside nurses, compassionate elder companions, and in-home physiotherapy.
              </p>
            </div>

            <a
              href="tel:+919438010959"
              className="inline-flex items-center gap-2 text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 border border-rose-200 px-4 py-2.5 rounded-xl transition self-start sm:self-auto"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call 24/7 Nursing Desk</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parahomeServices.map((service) => {
              const Icon = iconMap[service.id] || Stethoscope;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-32 bg-surface-card rounded-2xl border border-surface-border p-6 shadow-xs flex flex-col justify-between hover:border-rose-300 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-rose-700 bg-rose-50 border border-rose-100 px-2.5 py-0.5 rounded-md">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-text-headline group-hover:text-rose-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-text-body mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <ul className="mt-4 space-y-1.5 pt-3 border-t border-surface-border/60">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="text-xs text-text-muted flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-surface-border">
                    <a
                      href="tel:+919438010959"
                      className="w-full py-2.5 px-4 rounded-xl bg-surface-canvas hover:bg-rose-600 hover:text-white text-text-headline text-xs font-bold transition flex items-center justify-center gap-1.5"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= DIVISION 2: E-RELIANT HEALTH MEMBERSHIP ================= */}
        <section id="ereliant-division" className="scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-surface-border pb-6 mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-wider mb-1">
                <CreditCard className="w-4 h-4" />
                <span>Division 02 • Subsidized Healthcare & Memberships</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-text-headline">
                E-Reliant Health Card Privileges
              </h2>
              <p className="text-xs sm:text-sm text-text-body mt-1">
                Concessions on hospital admission bills, free monthly specialist visits, labs & medicine.
              </p>
            </div>

            <Link
              href="/become-member"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary hover:text-brand-primary-hover bg-brand-primary-soft border border-brand-primary/20 px-4 py-2.5 rounded-xl transition self-start sm:self-auto"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apply For Free Card</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ereliantServices.map((service) => {
              const Icon = iconMap[service.id] || CreditCard;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-32 bg-surface-card rounded-2xl border border-surface-border p-6 shadow-xs flex flex-col justify-between hover:border-brand-primary/40 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary-soft text-brand-primary flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-brand-primary bg-sky-50 border border-sky-100 px-2.5 py-0.5 rounded-md">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-text-headline group-hover:text-brand-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-text-body mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <ul className="mt-4 space-y-1.5 pt-3 border-t border-surface-border/60">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="text-xs text-text-muted flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-surface-border">
                    <Link
                      href="/become-member"
                      className="w-full py-2.5 px-4 rounded-xl bg-surface-canvas hover:bg-brand-primary hover:text-white text-text-headline text-xs font-bold transition flex items-center justify-center gap-1.5"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= DIVISION 3: CAG CORPORATE AUDIT & CLAIMS ================= */}
        <section id="cag-division" className="scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-surface-border pb-6 mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-brand-accent font-bold text-xs uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Division 03 • Forensic Claim Inquest & Compliance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-text-headline">
                CAG Enterprise Audit & Verification
              </h2>
              <p className="text-xs sm:text-sm text-text-body mt-1">
                Serving insurance companies, TPAs, and corporate health plans with ethical discipline.
              </p>
            </div>

            <Link
              href="/contact?type=corporate"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-accent hover:text-brand-accent-hover bg-brand-accent-soft border border-brand-accent/20 px-4 py-2.5 rounded-xl transition self-start sm:self-auto"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Corporate Investigation Desk</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cagServices.map((service) => {
              const Icon = iconMap[service.id] || ShieldCheck;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-32 bg-surface-card rounded-2xl border border-surface-border p-6 shadow-xs flex flex-col justify-between hover:border-brand-accent/40 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-accent-soft text-brand-accent flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-brand-accent bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-md">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-text-headline group-hover:text-brand-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-text-body mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <ul className="mt-4 space-y-1.5 pt-3 border-t border-surface-border/60">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="text-xs text-text-muted flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-surface-border">
                    <Link
                      href="/contact?type=corporate"
                      className="w-full py-2.5 px-4 rounded-xl bg-surface-canvas hover:bg-brand-accent hover:text-white text-text-headline text-xs font-bold transition flex items-center justify-center gap-1.5"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}