import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function StickyMobileBar() {
  const handleCall = () => {
    window.location.href = `tel:${BUSINESS_INFO.phoneRaw}`;
  };

  const handleText = () => {
    const encoded = encodeURIComponent(BUSINESS_INFO.smsPrompt);
    window.location.href = `sms:${BUSINESS_INFO.phoneRaw}?&body=${encoded}`;
  };

  return (
    <aside 
      aria-label="Quick Contact Bar" 
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-brand-navy-dark/95 backdrop-blur-md border-t border-slate-700/60 p-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-2xl transition-transform duration-300"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* Left Button (Green / Phone Icon) */}
        <button
          onClick={handleCall}
          className="flex items-center justify-center gap-1.5 py-3 px-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.97] text-white font-heading font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-emerald-950/40 transition-all"
        >
          <Phone className="w-4 h-4 fill-current shrink-0" />
          <span className="truncate">Call: {BUSINESS_INFO.phone}</span>
        </button>

        {/* Right Button (Blue / Bubble Icon) */}
        <button
          onClick={handleText}
          className="flex items-center justify-center gap-1.5 py-3 px-2.5 bg-blue-600 hover:bg-blue-700 active:scale-[0.97] text-white font-heading font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-950/40 transition-all"
        >
          <MessageSquare className="w-4 h-4 fill-current shrink-0" />
          <span className="truncate">Text: {BUSINESS_INFO.phone}</span>
        </button>
      </div>
    </aside>
  );
}
