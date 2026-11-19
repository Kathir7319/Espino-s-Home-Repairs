import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck, Camera, ArrowRight, Check } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';
import { BUSINESS_INFO, NEIGHBORHOODS } from '../data/content';

export default function ContactPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-brand-amber text-xs font-bold uppercase tracking-wider mb-4">
          <Phone className="w-3.5 h-3.5" /> Direct Contact
        </div>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-brand-navy tracking-tight">
          Contact Espino's Home Repairs
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
          We're here to help you get your home repair to-do list done right. Call, text photos, or submit an estimate request online.
        </p>
      </section>

      {/* Contact Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Phone Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-card flex flex-col justify-between group hover:border-emerald-500 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-brand-navy mb-1">
                Call Our Handymen
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Speak directly with Mateo regarding upcoming availability or urgent repairs.
              </p>
              <div className="text-xl font-heading font-extrabold text-emerald-700">
                {BUSINESS_INFO.phone}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Text Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-card flex flex-col justify-between group hover:border-blue-500 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-brand-navy mb-1">
                Text Your Photos
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Fastest way to get an answer! Send photos directly from your smartphone.
              </p>
              <div className="text-xl font-heading font-extrabold text-blue-700">
                {BUSINESS_INFO.phone}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6">
              <a
                href={`sms:${BUSINESS_INFO.phoneRaw}?&body=${encodeURIComponent(BUSINESS_INFO.smsPrompt)}`}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Text Photos: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Location & Hours Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-card flex flex-col justify-between group hover:border-brand-amber transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-brand-amber flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-brand-navy mb-1">
                Operating Hours
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Serving Fuquay-Varina, NC and South Wake County.
              </p>
              <div className="text-sm font-semibold text-slate-800 space-y-1">
                <div>Mon – Sat: 7:30 AM – 6:00 PM</div>
                <div className="text-xs text-brand-amber font-normal">Emergency weekend repair slots available</div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6">
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-amber shrink-0" />
                <span>Fuquay-Varina, NC 27526</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Embedded Quote Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>

      {/* Service Radius */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy-dark text-white rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-wider text-brand-amber font-bold flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Travel Coverage Area
              </span>
              <h3 className="font-heading font-extrabold text-3xl text-white">
                Zero Travel Fees Inside Fuquay-Varina
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Because we are locally based, we never charge travel surcharges within town borders. We also service neighboring areas with minimal standard dispatch:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs pt-2">
                {['Fuquay-Varina, NC (Primary)', 'Holly Springs, NC', 'Willow Spring, NC', 'Angier, NC', 'Southern Apex, NC', 'Garner Borders'].map((area, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 text-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                  <span className="text-slate-400">Response Guarantee:</span>
                  <span className="text-white font-bold">Under 60 Minutes</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                  <span className="text-slate-400">Accepted Payments:</span>
                  <span className="text-white font-bold">Credit/Debit, Check, Zelle, Cash</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Workmanship Warranty:</span>
                  <span className="text-emerald-400 font-bold">1-Year Full Guarantee</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
