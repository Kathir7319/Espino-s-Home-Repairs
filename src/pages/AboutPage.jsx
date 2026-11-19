import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Award, MapPin, Users, CheckCircle2, Clock, Phone, MessageSquare, Camera } from 'lucide-react';
import Logo from '../components/Logo';
import { BUSINESS_INFO, NEIGHBORHOODS } from '../data/content';

export default function AboutPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-brand-amber text-xs font-bold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 text-brand-amber" /> Locally Owned &amp; Operated
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-brand-navy tracking-tight">
            About Espino's Home Repairs
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            For years, Espino's Home Repairs has served Fuquay-Varina through direct neighbor referrals. We combine high-quality craftsmanship with an honest, upfront pricing approach to tackle your home to-do list.
          </p>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-heading font-extrabold text-3xl text-brand-navy">
              Fuquay-Varina's Word-of-Mouth Secret – Now Online
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              When we started Espino's Home Repairs, we didn't have billboards or expensive marketing campaigns. We simply focused on doing outstanding work for our next-door neighbors in Bentwinds and South Lakes. When one neighbor had an impossible drywall texture to match or a troublesome sticking front door, they told their friends on community groups and HOA forums.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              We recognized a huge frustration in our community: homeowners had small to medium repairs that big remodeling contractors considered "too small," while random handymen frequently failed to show up, overcharged, or left a mess.
            </p>

            <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 text-xs text-amber-950 font-medium">
              "We treat your house with the exact same care and cleanliness we would demand in our own family home."
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>1-Year Craftsmanship Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Markup on Store Materials</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Neoprene Floor &amp; Dust Containment</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct Owner Communication</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
              <Logo variant="stacked" theme="dark" className="mb-6" />
              
              <div className="space-y-4 text-xs text-slate-300 border-t border-slate-800 pt-6">
                <div className="flex items-center justify-between">
                  <span>Based in:</span>
                  <span className="font-bold text-white">Fuquay-Varina, NC</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Business Focus:</span>
                  <span className="font-bold text-white">Small to Medium Punch List Repairs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Standard Hourly:</span>
                  <span className="font-bold text-brand-amber">$75 / Hour (2-hr min)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Half-Day Block:</span>
                  <span className="font-bold text-brand-amber">$270 (4 Dedicated Hours)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Service Areas:</span>
                  <span className="font-bold text-white">Fuquay, Holly Springs, Willow Spring</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-bold text-white">Licensed &amp; Insured</span>
                </div>
                <Link
                  to="/quote"
                  className="px-4 py-2 bg-brand-amber hover:bg-brand-amber-hover text-white text-xs font-bold rounded-xl shadow-md transition-all"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Serving Local Neighborhoods */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-card">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-1.5 text-brand-amber text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4" /> Service Territory
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-brand-navy">
              Proudly Serving Our Fuquay-Varina Neighbors
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              We live and work right here in South Wake County. Here are some of the local subdivisions and neighborhoods where our vans are frequently spotted:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
            {NEIGHBORHOODS.map((nh, i) => (
              <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-amber shrink-0"></span>
                <span className="font-medium truncate">{nh}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact Bar */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-brand-navy to-brand-navy-light text-white rounded-3xl p-8 sm:p-10 shadow-xl">
          <h3 className="font-heading font-extrabold text-2xl mb-2">Ready to Speak With Mateo &amp; Marco?</h3>
          <p className="text-slate-300 text-xs sm:text-sm mb-6 max-w-md mx-auto">
            Give us a call or text your repair photos anytime during business hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 font-bold text-xs rounded-xl text-white shadow-sm transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={`sms:${BUSINESS_INFO.phoneRaw}?&body=${encodeURIComponent(BUSINESS_INFO.smsPrompt)}`}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 font-bold text-xs rounded-xl text-white shadow-sm transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Text: {BUSINESS_INFO.phone}</span>
            </a>
            <Link
              to="/quote"
              className="px-6 py-3 bg-brand-amber hover:bg-brand-amber-hover font-bold text-xs rounded-xl text-white shadow-cta transition-all flex items-center gap-2"
            >
              <Camera className="w-4 h-4" />
              <span>Get Photo Quote</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
