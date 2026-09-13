import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Privacy Policy | VIDHI LIFEBLOOM HEALTHCARE',
  description: 'Privacy policy outlining data collection, patient medical record security, and institutional confidentiality.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-surface-canvas">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-black text-text-headline tracking-tight">Privacy Policy</h1>
        <p className="text-xs text-text-muted mt-2">Effective Date: September 2026</p>

        <div className="mt-8 space-y-8 text-sm text-text-body leading-relaxed bg-surface-card p-6 sm:p-10 rounded-2xl border border-surface-border shadow-xs">
          <section>
            <h2 className="text-lg font-bold text-text-headline mb-2">1. Information We Collect</h2>
            <p>
              We collect necessary identification and contact details (name, phone number, city, email, date of birth) when you register for a Health Membership Card, book home care, or contact our enterprise team. In home care deployments, vital health parameters and doctor prescriptions may be processed strictly for clinical coordination.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-headline mb-2">2. How Data is Utilized</h2>
            <p>
              Your personal information is used exclusively to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
              <li>Issue and validate digital healthcare membership privileges.</li>
              <li>Coordinate nurse, attendant, and medical equipment deployment.</li>
              <li>Communicate via WhatsApp, SMS, or phone for appointment confirmations and triage.</li>
              <li>Deliver formal audit conclusions to authorized corporate insurance clients.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-headline mb-2">3. Medical Confidentiality &amp; Security</h2>
            <p>
              We adhere to strict confidentiality standards. We do not sell, rent, or trade patient personal health data to unauthorized commercial third parties. Clinical records retrieved during audits (e.g. Indoor Case Papers) are handled via strict chain-of-custody protocols.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}