import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      {/* Dynamic Emblem */}
      <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent p-0.5 shadow-sm group-hover:scale-105 transition-transform duration-200 shrink-0">
        <div className="w-full h-full bg-surface-card rounded-[10px] sm:rounded-[14px] flex items-center justify-center">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            className="w-5 h-5 sm:w-6 sm:h-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Medical Cross */}
            <path
              d="M16 6V26M6 16H26"
              stroke="var(--color-brand-primary)"
              strokeWidth="2.75"
              strokeLinecap="round"
            />
            {/* Lifebloom Petal / Heartbeat Accent */}
            <path
              d="M10 20C12 24 20 24 22 20M12 12C14 8 18 8 20 12"
              stroke="var(--color-brand-accent)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Core Spark */}
            <circle cx="16" cy="16" r="2.5" fill="var(--color-brand-accent)" />
          </svg>
        </div>
      </div>

      {/* Corporate Identity */}
      <div className="flex flex-col text-left">
        <span className="font-black text-sm sm:text-base lg:text-lg tracking-tight text-text-headline group-hover:text-brand-primary transition-colors leading-tight">
          VIDHI LIFEBLOOM
        </span>
        <span className="text-[9px] sm:text-[10px] font-bold tracking-wider sm:tracking-widest text-brand-accent uppercase leading-tight">
          Healthcare Pvt. Ltd.
        </span>
      </div>
    </Link>
  );
}