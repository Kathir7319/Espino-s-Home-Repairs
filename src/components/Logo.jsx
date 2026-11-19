import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'horizontal', theme = 'light', className = '' }) {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#11233B';
  const subColor = isDark ? '#E2E8F0' : '#475569';
  const tagBg = isDark ? 'rgba(255, 255, 255, 0.1)' : '#F1F5F9';
  const tagBorder = isDark ? 'rgba(255, 255, 255, 0.15)' : '#E2E8F0';

  if (variant === 'mark-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
          <defs>
            <linearGradient id="markGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1B3557" />
              <stop offset="100%" stopColor="#0F1E33" />
            </linearGradient>
            <linearGradient id="amberG" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#E28723" />
            </linearGradient>
          </defs>
          <path d="M50 4 L92 22 V62 C92 84 50 98 50 98 C50 98 8 84 8 62 V22 Z" fill="url(#markGrad)" stroke="#E28723" strokeWidth="4" />
          <path d="M24 46 L50 24 L76 46" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M36 72 L64 44" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
          <circle cx="66" cy="42" r="4" fill="none" stroke="#94A3B8" strokeWidth="3" />
          <path d="M64 72 L40 48" stroke="url(#amberG)" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M34 42 L46 54 L42 58 L30 46 Z" fill="url(#amberG)" />
          <polygon points="50,47 52,53 58,53 53,57 55,63 50,59 45,63 47,57 42,53 48,53" fill="#F59E0B" />
        </svg>
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="relative mb-3">
          <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-md" fill="none">
            <defs>
              <linearGradient id="stackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1B3557" />
                <stop offset="100%" stopColor="#0F1E33" />
              </linearGradient>
            </defs>
            <path d="M50 4 L92 22 V62 C92 84 50 98 50 98 C50 98 8 84 8 62 V22 Z" fill="url(#stackGrad)" stroke="#E28723" strokeWidth="3.5" />
            <path d="M24 46 L50 24 L76 46" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M36 72 L64 44" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
            <path d="M64 72 L40 48" stroke="#E28723" strokeWidth="4.5" strokeLinecap="round" />
            <polygon points="50,47 52,53 58,53 53,57 55,63 50,59 45,63 47,57 42,53 48,53" fill="#F59E0B" />
          </svg>
        </div>
        <div className="text-2xl font-heading font-extrabold tracking-wider leading-none" style={{ color: textColor }}>
          ESPINO'S
        </div>
        <div className="text-xs font-bold tracking-[0.25em] text-brand-amber mt-1">
          HOME REPAIRS
        </div>
        <div className="mt-2 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded border" style={{ backgroundColor: tagBg, borderColor: tagBorder, color: subColor }}>
          Fuquay-Varina Handyman &amp; Remodeling
        </div>
      </div>
    );
  }

  // Default: Horizontal
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon */}
      <div className="flex-shrink-0 relative">
        <svg viewBox="0 0 100 100" className="w-11 h-11 md:w-12 md:h-12 drop-shadow-sm" fill="none">
          <defs>
            <linearGradient id="hzShield" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1B3557" />
              <stop offset="100%" stopColor="#0F1E33" />
            </linearGradient>
            <linearGradient id="hzAmber" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#E28723" />
            </linearGradient>
          </defs>
          <path d="M50 4 L92 22 V62 C92 84 50 98 50 98 C50 98 8 84 8 62 V22 Z" fill="url(#hzShield)" stroke="#E28723" strokeWidth="3.5" />
          <path d="M50 12 L84 27 V60 C84 78 50 90 50 90 C50 90 16 78 16 60 V27 Z" fill="none" stroke="#25446C" strokeWidth="1.5" strokeDasharray="2 2" />
          <path d="M24 46 L50 24 L76 46" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M50 20 L50 14" stroke="#E28723" strokeWidth="3" strokeLinecap="round" />
          <path d="M36 72 L64 44" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
          <circle cx="66" cy="42" r="4" fill="none" stroke="#94A3B8" strokeWidth="3" />
          <path d="M64 72 L40 48" stroke="url(#hzAmber)" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M34 42 L46 54 L42 58 L30 46 Z" fill="url(#hzAmber)" />
          <polygon points="50,47 52,53 58,53 53,57 55,63 50,59 45,63 47,57 42,53 48,53" fill="#F59E0B" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-heading font-extrabold text-xl md:text-2xl tracking-tight" style={{ color: textColor }}>
            ESPINO'S
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
          <span className="font-heading font-bold text-xs md:text-sm tracking-[0.2em] text-brand-amber">
            HOME REPAIRS
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] md:text-[11px] font-semibold tracking-wide" style={{ color: subColor }}>
            Fuquay-Varina Handyman &amp; Remodeling
          </span>
        </div>
      </div>
    </div>
  );
}
