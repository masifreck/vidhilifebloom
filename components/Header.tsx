'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import {
  HeartHandshake,
  CreditCard,
  ShieldCheck,
  ChevronDown,
  PhoneCall,
  Menu,
  X,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function Header() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesAccordion, setMobileServicesAccordion] = useState(false);
  const pathname = usePathname();

  // Close menus on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesAccordion(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-surface-card/95 backdrop-blur-md border-b border-surface-border">
      
      {/* 1. TOP EMERGENCY & REGIONAL HELPLINE TICKER */}
      <div className="bg-text-headline text-white text-[11px] sm:text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="truncate">24/7 Patient Emergency & Claims Verification Desk</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 text-[11px]">
            <a href="tel:+919438010959" className="hover:text-white flex items-center gap-1 transition">
              <PhoneCall className="w-3 h-3 text-brand-accent" />
              <span>Helpline: +91 94380 10959</span>
            </a>
            <span className="hidden md:inline text-slate-500">|</span>
            <a href="tel:02249728627" className="hidden md:flex items-center gap-1 hover:text-white transition">
              <span>Mumbai Desk: 022 4972 8627</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Logo />

        {/* Desktop / Laptop Navigation Links (> 1024px) */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-semibold text-text-headline hover:text-brand-primary transition"
          >
            Home
          </Link>

          {/* Mega-Menu Container */}
          <div
            className="relative"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
              className="flex items-center gap-1.5 text-sm font-semibold text-text-headline hover:text-brand-primary transition py-2"
              aria-expanded={megaMenuOpen}
            >
              <span>Our Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-brand-primary' : ''}`} />
            </button>

            {/* Desktop Mega-Menu Dropdown */}
            {megaMenuOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[820px] bg-surface-card rounded-2xl shadow-2xl border border-surface-border p-6 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-150">
                
                {/* Pillar 1: ParaHome Care */}
                <div className="p-3 rounded-xl bg-surface-canvas/60 border border-surface-border/50">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase mb-3">
                    <HeartHandshake className="w-4 h-4" />
                    <span>ParaHome Care</span>
                  </div>
                  <ul className="space-y-2 text-xs text-text-body">
                    <li><Link href="/services#ph-nursing" className="hover:text-brand-primary block py-0.5">24/7 Bedside Nursing</Link></li>
                    <li><Link href="/services#ph-elderly" className="hover:text-brand-primary block py-0.5">Elderly Care & Companion</Link></li>
                    <li><Link href="/services#ph-physio" className="hover:text-brand-primary block py-0.5">Home Physiotherapy</Link></li>
                    <li><Link href="/services#ph-postop" className="hover:text-brand-primary block py-0.5">Post-Surgical Wound Care</Link></li>
                    <li><Link href="/services#ph-equipment" className="hover:text-brand-primary block py-0.5">Medical Equipment Rental</Link></li>
                    <li><Link href="/services#ph-doctor" className="hover:text-brand-primary block py-0.5">Doctor Home Visits</Link></li>
                  </ul>
                </div>

                {/* Pillar 2: E-Reliant Health Membership */}
                <div className="p-3 rounded-xl bg-surface-canvas/60 border border-surface-border/50">
                  <div className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase mb-3">
                    <CreditCard className="w-4 h-4" />
                    <span>Health Card</span>
                  </div>
                  <ul className="space-y-2 text-xs text-text-body">
                    <li><Link href="/services#er-hospital-bill" className="hover:text-brand-primary block py-0.5">Hospitalization (IPD) Savings</Link></li>
                    <li><Link href="/services#er-consultation" className="hover:text-brand-primary block py-0.5">Super Speciality Visits</Link></li>
                    <li><Link href="/services#er-radiology" className="hover:text-brand-primary block py-0.5">Radiology & Pathology</Link></li>
                    <li><Link href="/services#er-pharma" className="hover:text-brand-primary block py-0.5">Pharmaceutical Services</Link></li>
                    <li><Link href="/services#er-marketing" className="hover:text-brand-primary block py-0.5">Hospital Empanelment</Link></li>
                    <li className="pt-1">
                      <Link href="/become-member" className="font-bold text-brand-primary hover:underline flex items-center gap-1">
                        <span>Free Card Registration</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Pillar 3: CAG Corporate Investigation */}
                <div className="p-3 rounded-xl bg-surface-canvas/60 border border-surface-border/50">
                  <div className="flex items-center gap-2 text-brand-accent font-bold text-xs uppercase mb-3">
                    <ShieldCheck className="w-4 h-4" />
                    <span>CAG Enterprise</span>
                  </div>
                  <ul className="space-y-2 text-xs text-text-body">
                    <li><Link href="/services#cag-claims-investigation" className="hover:text-brand-primary block py-0.5">Claims Investigation</Link></li>
                    <li><Link href="/services#cag-claims-audit" className="hover:text-brand-primary block py-0.5">Claims Forensic Auditing</Link></li>
                    <li><Link href="/services#cag-claims-verification" className="hover:text-brand-primary block py-0.5">Parameter Verification</Link></li>
                    <li><Link href="/services#cag-doc-pickup" className="hover:text-brand-primary block py-0.5">Document Procurement</Link></li>
                    <li><Link href="/services#cag-hospital-audit" className="hover:text-brand-primary block py-0.5">Hospital Infrastructure Audit</Link></li>
                    <li><Link href="/services#cag-nabh" className="hover:text-brand-primary block py-0.5">NABH Consultancy</Link></li>
                  </ul>
                </div>

              </div>
            )}
          </div>

          <Link
            href="/services"
            className="text-sm font-semibold text-text-headline hover:text-brand-primary transition"
          >
            All 18 Services
          </Link>

          <Link
            href="/about"
            className="text-sm font-semibold text-text-headline hover:text-brand-primary transition"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="text-sm font-semibold text-text-headline hover:text-brand-primary transition"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/become-member"
            className="px-4 py-2.5 rounded-xl border border-surface-border hover:border-brand-primary text-text-headline hover:text-brand-primary text-xs font-bold transition"
          >
            Member Login
          </Link>
          <Link
            href="/become-member"
            className="px-5 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-brand-primary-contrast text-xs font-bold transition shadow-sm flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get Health Card</span>
          </Link>
        </div>

        {/* Mobile / Tablet Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/become-member"
            className="px-3 py-1.5 rounded-lg bg-brand-primary text-brand-primary-contrast text-[11px] font-bold sm:hidden"
          >
            Free Card
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-headline hover:bg-surface-canvas rounded-lg transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 3. MOBILE & TABLET EXPANDABLE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-card border-b border-surface-border px-4 py-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="space-y-3 text-sm font-semibold text-text-headline">
            
            <Link
              href="/"
              className="block p-2 rounded-lg hover:bg-surface-canvas"
            >
              Home
            </Link>

            {/* Services Accordion for Mobile */}
            <div className="border-y border-surface-border/60 py-2">
              <button
                onClick={() => setMobileServicesAccordion(!mobileServicesAccordion)}
                className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-surface-canvas text-left font-bold"
              >
                <span>Services (All 3 Divisions)</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesAccordion ? 'rotate-180 text-brand-primary' : ''}`} />
              </button>

              {mobileServicesAccordion && (
                <div className="pl-4 pr-2 pt-2 pb-1 space-y-4 text-xs font-normal">
                  {/* Division 1 */}
                  <div>
                    <span className="font-bold text-rose-600 block mb-1">ParaHome Care:</span>
                    <ul className="space-y-1.5 pl-2 text-text-body">
                      <li><Link href="/services#ph-nursing" className="block py-0.5">24/7 Bedside Nursing</Link></li>
                      <li><Link href="/services#ph-elderly" className="block py-0.5">Elderly Care & Companion</Link></li>
                      <li><Link href="/services#ph-physio" className="block py-0.5">Physiotherapy at Home</Link></li>
                      <li><Link href="/services#ph-equipment" className="block py-0.5">Medical Equipment</Link></li>
                    </ul>
                  </div>

                  {/* Division 2 */}
                  <div>
                    <span className="font-bold text-brand-primary block mb-1">E-Reliant Health Membership:</span>
                    <ul className="space-y-1.5 pl-2 text-text-body">
                      <li><Link href="/services#er-hospital-bill" className="block py-0.5">Hospitalization (IPD) Savings</Link></li>
                      <li><Link href="/services#er-consultation" className="block py-0.5">Super Speciality Visits</Link></li>
                      <li><Link href="/services#er-radiology" className="block py-0.5">Radiology / Pathology</Link></li>
                      <li><Link href="/services#er-pharma" className="block py-0.5">Pharmacy Services</Link></li>
                    </ul>
                  </div>

                  {/* Division 3 */}
                  <div>
                    <span className="font-bold text-brand-accent block mb-1">CAG Enterprise & Audit:</span>
                    <ul className="space-y-1.5 pl-2 text-text-body">
                      <li><Link href="/services#cag-claims-investigation" className="block py-0.5">Claims Investigation</Link></li>
                      <li><Link href="/services#cag-claims-audit" className="block py-0.5">Forensic Auditing</Link></li>
                      <li><Link href="/services#cag-nabh" className="block py-0.5">NABH Consultancy</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/services"
              className="block p-2 rounded-lg hover:bg-surface-canvas text-brand-primary font-bold"
            >
              Browse All 18 Services
            </Link>

            <Link
              href="/about"
              className="block p-2 rounded-lg hover:bg-surface-canvas"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="block p-2 rounded-lg hover:bg-surface-canvas"
            >
              Contact & Branch Offices
            </Link>

            {/* Mobile Action Buttons */}
            <div className="pt-4 grid grid-cols-2 gap-3">
              <Link
                href="/become-member"
                className="py-3 px-4 rounded-xl border border-surface-border text-center text-xs font-bold"
              >
                Member Login
              </Link>
              <Link
                href="/become-member"
                className="py-3 px-4 rounded-xl bg-brand-primary text-brand-primary-contrast text-center text-xs font-bold shadow"
              >
                Apply Free Card
              </Link>
            </div>

            {/* Urgent Phone Bar */}
            <div className="pt-2">
              <a
                href="tel:+919438010959"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold flex items-center justify-center gap-2 border border-emerald-200"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Care Helpline: 9438010959</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}