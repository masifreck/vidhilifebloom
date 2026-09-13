import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | VIDHI LIFEBLOOM HEALTHCARE',
  description: 'Terms of service for Vidhi Lifebloom Healthcare Private Limited clinical home care, card memberships, and corporate audit services.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-surface-canvas">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-black text-text-headline tracking-tight">Terms &amp; Conditions</h1>
        <p className="text-xs text-text-muted mt-2">Last Updated: September 2026</p>

        <div className="mt-8 space-y-8 text-sm text-text-body leading-relaxed bg-surface-card p-6 sm:p-10 rounded-2xl border border-surface-border shadow-xs">
          <section>
            <h2 className="text-lg font-bold text-text-headline mb-2">1. Operating Entity &amp; Scope</h2>
            <p>
              These Terms govern the use of all services offered by <strong>VIDHI LIFEBLOOM HEALTHCARE PRIVATE LIMITED</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), encompassing our three operational verticals: ParaHome Care (bedside clinical assistance), E-Reliant Solutions (health privilege discount cards), and CAG Enterprise Services (insurance claim forensic auditing).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-headline mb-2">2. Clinical &amp; Home Care Services (ParaHome Care)</h2>
            <p>
              Home nursing attendants, caregivers, and physiotherapists are deployed under verified clinical protocols. While our staff are certified, home care does not substitute an Intensive Care Unit of an accredited hospital in acute life-threatening emergencies. Patients requiring emergency stabilization must be transitioned immediately to an empaneled medical institution.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-headline mb-2">3. Health Privilege Card (E-Reliant Solutions)</h2>
            <p>
              The Vidhi Lifebloom / E-Reliant Health Membership Card is a discount and privilege facilitation program, not an insurance policy. Concessions on hospital in-patient billing (IPD), diagnostics, consultations, and pharmacy are provided through negotiated agreements with partner hospitals and clinics, subject to network availability. Card registration is provided free of charge unless upgraded to specialized corporate packages.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-headline mb-2">4. Corporate Investigation &amp; Forensic Auditing (CAG Services)</h2>
            <p>
              Institutional audits, claim verifications, and document retrievals are carried out strictly within legal, ethical, and regulatory guidelines established by insurance authorities and relevant state laws. Reports generated represent impartial, evidence-based findings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-headline mb-2">5. Governing Law &amp; Jurisdiction</h2>
            <p>
              Any dispute arising from these services shall be subject to the exclusive jurisdiction of the competent courts in Mumbai (Corporate Desk) or Odisha (Registered Operations), India.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}