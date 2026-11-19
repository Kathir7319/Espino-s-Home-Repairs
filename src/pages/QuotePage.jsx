import React from 'react';
import { Camera, CheckCircle2, ShieldCheck, Clock, MapPin, Phone, MessageSquare, AlertCircle } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';
import { BUSINESS_INFO, NEIGHBORHOODS } from '../data/content';

export default function QuotePage() {
  return (
    <div className="py-12 space-y-12">
      
      {/* Intro Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-brand-amber text-xs font-bold uppercase tracking-wider mb-3">
          <Camera className="w-3.5 h-3.5" /> Rapid Digital Estimates
        </div>
        
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-brand-navy tracking-tight">
          Get Your Online Photo Quote
        </h1>
        
        <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Skip taking an afternoon off work for an in-person site estimate. Send us your repair photos and we'll reply with an honest, upfront price.
        </p>

        {/* Benefits bar */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-700">
          <span className="flex items-center gap-1.5 font-semibold">
            <Clock className="w-4 h-4 text-brand-amber" />
            Under 60 Min Response (Mon–Sat)
          </span>
          <span className="flex items-center gap-1.5 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Guaranteed Labor Rates
          </span>
          <span className="flex items-center gap-1.5 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            Zero In-Person Obligation
          </span>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>

      {/* Helpful Photo Tips */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/80 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <h3 className="font-heading font-extrabold text-lg text-brand-navy mb-4 flex items-center gap-2">
            <Camera className="w-5 h-5 text-brand-amber" />
            Tips for Getting the Most Accurate Estimate
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">1. Take a Wide Context Shot</span>
              <p className="text-slate-500">
                Show the whole wall, doorframe, or room area so we can see clearance, height, and texture.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">2. Take a Close-Up of Damage</span>
              <p className="text-slate-500">
                Focus on the specific crack, water stain, hinge, or plumbing leak with good lighting.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">3. Mention Brand / Hardware</span>
              <p className="text-slate-500">
                If you already purchased the new faucet or ceiling fan, let us know the model in the project box!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternate Contact Methods */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-base text-brand-navy">Prefer to text or call directly?</h4>
            <p className="text-xs text-slate-500">You can also text photos straight from your phone or give us a call.</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`sms:${BUSINESS_INFO.phoneRaw}?&body=${encodeURIComponent(BUSINESS_INFO.smsPrompt)}`}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Text Us: {BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
