import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import {
  HeartPulse,
  ShieldCheck,
  CreditCard,
  Award,
  CheckCircle2,
  Building2,
  Users2,
  Sparkles,
  PhoneCall,
  ArrowRight,
  Target,
  Eye,
  FileCheck2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us & Corporate Background | VIDHI LIFEBLOOM HEALTHCARE',
  description:
    'Discover the legacy, mission, and accreditation of Vidhi Lifebloom Healthcare Private Limited. Unifying home healthcare, patient privilege cards, and forensic insurance auditing.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface-canvas">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary-soft border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-wider uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Established Trust & Institutional Integrity
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-text-headline tracking-tight max-w-4xl mx-auto leading-tight">
          Bridging Compassionate Patient Care with Institutional Risk Governance
        </h1>
        <p className="mt-5 text-sm sm:text-base lg:text-lg text-text-body max-w-3xl mx-auto leading-relaxed">
          <strong className="text-text-headline font-bold">VIDHI LIFEBLOOM HEALTHCARE PRIVATE LIMITED</strong> is an integrated healthcare organization. We bring certified clinical bedside care directly to families, deliver out-of-pocket medical savings through our privilege card memberships, and protect insurance underwriters through rigorous forensic claim investigations.
        </p>
      </section>

      {/* 2. THREE CORE PILLARS OVERVIEW */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1 */}
          <div className="bg-surface-card rounded-2xl border border-surface-border p-8 shadow-xs hover:border-rose-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold mb-6">
              <HeartPulse className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Clinical Division</span>
            <h3 className="text-xl font-bold text-text-headline mt-1">ParaHome Care</h3>
            <p className="text-xs sm:text-sm text-text-body mt-3 leading-relaxed">
              Delivering verified ICU-trained nurses, physiotherapists, and compassionate geriatric attendants directly into homes. Ensuring patient dignity and hospital-grade bedside recovery.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-surface-card rounded-2xl border border-surface-border p-8 shadow-xs hover:border-brand-primary transition-all">
            <div className="w-12 h-12 rounded-xl bg-brand-primary-soft text-brand-primary flex items-center justify-center font-bold mb-6">
              <CreditCard className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">Membership Program</span>
            <h3 className="text-xl font-bold text-text-headline mt-1">E-Reliant Solutions</h3>
            <p className="text-xs sm:text-sm text-text-body mt-3 leading-relaxed">
              Democratizing affordable healthcare through zero-cost member cards. Slashing hospital in-patient bills, pathology scans, and pharmaceutical expenses by up to 20%.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-surface-card rounded-2xl border border-surface-border p-8 shadow-xs hover:border-brand-accent transition-all">
            <div className="w-12 h-12 rounded-xl bg-brand-accent-soft text-brand-accent flex items-center justify-center font-bold mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">Corporate Division</span>
            <h3 className="text-xl font-bold text-text-headline mt-1">CAG Enterprise & Audit</h3>
            <p className="text-xs sm:text-sm text-text-body mt-3 leading-relaxed">
              Forensic insurance claim inquests, hospital infrastructure audits, and NABH consultancy across 6+ states, eliminating fraud and billing leakages for leading insurers.
            </p>
          </div>

        </div>
      </section>

      {/* 3. MISSION, VISION & ETHICAL CREED */}
      <section className="py-16 bg-surface-card border-y border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-accent uppercase tracking-wider mb-2">
                <Target className="w-4 h-4" />
                <span>Our Guiding Principles</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-text-headline tracking-tight leading-snug">
                Upholding Truth in Medical Investigations & Compassion in Patient Healing.
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-text-body leading-relaxed">
                Founded with a vision <em className="text-text-headline font-semibold">&ldquo;To remove the complete roots of the fraudster&apos;s tree,&rdquo;</em> our organization was built to protect clients&apos; legitimate business interests through truthful, informed evidence and field verification.
              </p>

              <div className="mt-6 space-y-3 text-xs sm:text-sm text-text-body">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Zero Tolerance for Healthcare Fraud:</strong> Rigorous evidence collection and authentic verification of Indoor Case Papers (ICPs).</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Patient Dignity First:</strong> Ensuring that senior citizens and post-operative patients receive tender, clinically certified care at home.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Community Financial Relief:</strong> Free card issuance to ensure families never face inflated out-of-pocket medical debt.</span>
                </div>
              </div>
            </div>

            {/* Vision & Culture Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-text-headline via-slate-900 to-slate-950 text-white shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Our Strategic Vision</h4>
                  <p className="text-xs text-slate-400">Institutional Excellence & Trust</p>
                </div>
              </div>

              <blockquote className="text-sm text-slate-300 italic leading-relaxed border-l-2 border-brand-accent pl-4">
                &ldquo;We believe that the longevity of our client partnerships is proof of the positive impact of our activities on our partners&apos; businesses and our patients&apos; lives.&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
                <div className="p-3 rounded-xl bg-white/5">
                  <div className="text-2xl font-black text-emerald-400">2,00,000+</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Claims Investigated</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5">
                  <div className="text-2xl font-black text-brand-primary">6+ States</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Active Ground Network</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. AWARDS & FORMAL RECOGNITIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-wider block mb-1">
            Proven Track Record
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-text-headline">
            Awards & Industry Accreditations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Award Card 1 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-surface-border shadow-xs flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                ICICI Prudential Life Insurance Co. Ltd.
              </span>
              <h3 className="text-lg font-bold text-text-headline mt-1">
                Award of Excellence
              </h3>
              <p className="text-xs sm:text-sm text-text-body mt-2 leading-relaxed">
                Awarded in recognition of superior performance, adherence to ethical codes of conduct, and forensic precision in claim investigation services.
              </p>
            </div>
          </div>

          {/* Award Card 2 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-surface-border shadow-xs flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <FileCheck2 className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
                NABH Quality Consultancy
              </span>
              <h3 className="text-lg font-bold text-text-headline mt-1">
                Accreditation Advisory Standards
              </h3>
              <p className="text-xs sm:text-sm text-text-body mt-2 leading-relaxed">
                Guiding healthcare facilities and hospital partners to establish Standard Operating Procedures (SOPs), clinical governance, and audit readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION STRIP */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-primary text-brand-primary-contrast flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-xl sm:text-2xl font-black">
              Ready to collaborate with Vidhi Lifebloom?
            </h3>
            <p className="text-xs sm:text-sm text-white/85 mt-1 max-w-xl">
              Connect with our medical coordinators for home recovery, apply for your free health card, or initiate a corporate investigation agreement.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/become-member"
              className="px-6 py-3 rounded-xl bg-white text-brand-primary font-bold text-xs hover:bg-white/90 transition shadow-sm"
            >
              Get Free Health Card
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-950 transition shadow-sm"
            >
              Contact Branch Offices
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}