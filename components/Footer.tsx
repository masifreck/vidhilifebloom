'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import {
  HeartHandshake,
  CreditCard,
  ShieldCheck,
  Award,
  PhoneCall,
  Mail,
  MapPin,
  CheckCircle2,
  Clock,
  ArrowUpRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      
      {/* 1. TRUST AUTHORITY & AWARDS BANNER */}
      <div className="border-b border-slate-800/80 bg-slate-900/50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Trust Badge 1: ICICI Pru Excellence Award */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                Award of Excellence
              </span>
              <h4 className="text-xs font-semibold text-white mt-0.5">
                Superior Claims Investigation by ICICI Prudential Life
              </h4>
            </div>
          </div>

          {/* Trust Badge 2: Pan-India Audit Scale */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-brand-primary/20 text-brand-primary flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-brand-primary uppercase tracking-wider block">
                2,00,000+ Inquests Closed
              </span>
              <h4 className="text-xs font-semibold text-white mt-0.5">
                Active Forensic Field Networks across 6+ States
              </h4>
            </div>
          </div>

          {/* Trust Badge 3: Clinical & Hospital Standards */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                NABH & NABL Alignment
              </span>
              <h4 className="text-xs font-semibold text-white mt-0.5">
                Standardized Clinical Protocols & Verified Partners
              </h4>
            </div>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Company Bio & 24/7 Desk (Spans 2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <Logo className="text-white" />
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-white font-semibold">VIDHI LIFEBLOOM HEALTHCARE PRIVATE LIMITED</strong> is an integrated healthcare network unifying certified bedside nursing care, subsidized health membership privilege cards, and forensic insurance claims investigation.
            </p>

            {/* Helpline Box */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Centralized Emergency & Helplines</span>
              </div>
              <div className="text-xs text-slate-300 space-y-1">
                <div>Care Desk / WhatsApp: <strong className="text-white">+91 94380 10959 / 9776950295</strong></div>
                <div>Corporate Desk (Mumbai): <strong className="text-white">022 4972 8627</strong></div>
                <div>Email: <span className="text-brand-primary">info@ereliantsolutions.com / info@cagservices.co.in</span></div>
              </div>
            </div>
          </div>

          {/* Col 3: ParaHome Care Division */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-rose-400" />
              <span>ParaHome Care</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/services#ph-nursing" className="hover:text-white transition">24/7 Bedside ICU Nursing</Link></li>
              <li><Link href="/services#ph-elderly" className="hover:text-white transition">Elderly Daily Assistance</Link></li>
              <li><Link href="/services#ph-physio" className="hover:text-white transition">Home Physiotherapy</Link></li>
              <li><Link href="/services#ph-postop" className="hover:text-white transition">Post-Operative Wound Care</Link></li>
              <li><Link href="/services#ph-equipment" className="hover:text-white transition">Medical Equipment Rentals</Link></li>
              <li><Link href="/services#ph-doctor" className="hover:text-white transition">Doctor Home Visits</Link></li>
            </ul>
          </div>

          {/* Col 4: E-Reliant Health Membership */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-brand-primary" />
              <span>Health Card</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/become-member" className="hover:text-white transition text-brand-primary font-bold">Apply For Free Card →</Link></li>
              <li><Link href="/services#er-hospital-bill" className="hover:text-white transition">Hospitalization (IPD) Savings</Link></li>
              <li><Link href="/services#er-consultation" className="hover:text-white transition">Super Speciality Consults</Link></li>
              <li><Link href="/services#er-radiology" className="hover:text-white transition">Diagnostic Lab Concessions</Link></li>
              <li><Link href="/services#er-pharma" className="hover:text-white transition">Pharmaceutical Deliveries</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Hospital Empanelment Desk</Link></li>
            </ul>
          </div>

          {/* Col 5: CAG Corporate & Fraud Audit */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>CAG Enterprise</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/services#cag-claims-investigation" className="hover:text-white transition">Life & Accidental Inquests</Link></li>
              <li><Link href="/services#cag-claims-audit" className="hover:text-white transition">Claims Forensic Auditing</Link></li>
              <li><Link href="/services#cag-claims-verification" className="hover:text-white transition">Parameter Verification</Link></li>
              <li><Link href="/services#cag-doc-pickup" className="hover:text-white transition">Document Procurement (ICP)</Link></li>
              <li><Link href="/services#cag-hospital-audit" className="hover:text-white transition">Hospital Tariff Audits</Link></li>
              <li><Link href="/services#cag-nabh" className="hover:text-white transition">NABH Accreditation Advisory</Link></li>
            </ul>
          </div>

        </div>

        {/* 3. MULTI-REGIONAL OFFICE ADDRESSES */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-400">
          {/* Mumbai Head Office */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
            <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block">Corporate & Claims Head Office (Mumbai):</strong>
              <p className="mt-1">
                Kanchpada, Unit No. 102/A, Wing - C, Jaswanti Allied Business Centre, Off New Link Road, Malad West, Mumbai, Maharashtra 400064.
              </p>
            </div>
          </div>

          {/* Regional / Registered Office */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block">Healthcare Operations & Registered Office (Odisha):</strong>
              <p className="mt-1">
                Amlapada, Nimapara, Puri District, Odisha 752106. Care & Sathi Desk Services across Eastern Zone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM COPYRIGHT & LEGAL COMPLIANCE BAR */}
      <div className="border-t border-slate-900 bg-black/40 py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} VIDHI LIFEBLOOM HEALTHCARE PRIVATE LIMITED. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <Link href="/terms-conditions" className="hover:text-white transition">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/cancellation-policy" className="hover:text-white transition">Cancellation & Refund Policy</Link>
            <Link href="/become-member" className="hover:text-white transition text-brand-primary font-bold">Free Member Card</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}