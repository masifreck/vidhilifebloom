import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | VIDHI LIFEBLOOM HEALTHCARE',
  description: 'Guidelines for appointment cancellation, attendant re-allocation, and equipment return.',
};

export default function CancellationPolicyPage() {
  return (
    <main className="min-h-screen bg-surface-canvas">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-black text-text-headline tracking-tight">Cancellation &amp; Refund Policy</h1>
        <p className="text-xs text-text-muted mt-2">Effective Date: September 2026</p>

        <div className="mt-8 space-y-8 text-sm text-text-body leading-relaxed bg-surface-card p-6 sm:p-10 rounded-2xl border border-surface-border shadow-xs">
          <section>
            <h2 className="text-lg font-bold text-text-headline mb-2">1. Health Membership Cards</h2>
            <p>
              Standard digital Health Privilege Cards are issued free of cost, hence no refund charges are applicable. For any custom corporate group onboarding packages, refund requests may be initiated within 7 business days if privileges remain unutilized.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-headline mb-2">2. Bedside Home Nursing &amp; Attendants</h2>
            <p>
              If a family wishes to pause or terminate home attendant or nursing services, notice must be given at least 24 hours in advance to enable orderly staff re-allocation. In case of dissatisfaction with an assigned attendant, Vidhi Lifebloom provides free staff replacement within 24–48 hours.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-headline mb-2">3. Medical Equipment Rental Returns</h2>
            <p>
              Rented equipment (oxygen concentrators, ICU beds, monitors) may be returned upon patient recovery. Refund of refundable security deposits is processed within 3–5 working days following physical inspection and return retrieval.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}