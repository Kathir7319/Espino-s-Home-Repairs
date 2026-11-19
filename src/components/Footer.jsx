import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_INFO, SERVICES, NEIGHBORHOODS } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <Logo variant="horizontal" theme="dark" />
            </Link>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              For years, Espino's Home Repairs has served our community through direct neighbor referrals. We combine high-quality craftsmanship with an honest, upfront pricing approach to tackle your home to-do list.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Licensed &amp; Insured in NC
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                <Heart className="w-4 h-4 text-brand-amber" />
                Family Owned &amp; Operated
              </span>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Handyman Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services#${s.id}`}
                    className="text-slate-400 hover:text-brand-amber transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-brand-amber transition-colors"></span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-brand-amber font-semibold hover:underline inline-flex items-center gap-1 mt-1 text-xs">
                  All Services &amp; Punch Lists <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">Transparent Rates</Link>
              </li>
              <li>
                <Link to="/quote" className="text-brand-amber font-semibold hover:underline transition-colors">Request Photo Quote</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-white transition-colors">Before &amp; After Gallery</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Our Craftsmen</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-start gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white group-hover:text-emerald-400">Call Us</div>
                    <div className="text-xs text-slate-400">{BUSINESS_INFO.phone}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`sms:${BUSINESS_INFO.phoneRaw}?&body=${encodeURIComponent(BUSINESS_INFO.smsPrompt)}`}
                  className="flex items-start gap-2.5 text-slate-300 hover:text-blue-400 transition-colors group"
                >
                  <MessageSquare className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white group-hover:text-blue-400">Text Photos</div>
                    <div className="text-xs text-slate-400">{BUSINESS_INFO.phone}</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400 text-xs">
                <MapPin className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
                <span>Fuquay-Varina, NC 27526 &amp; surrounding neighborhoods</span>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400 text-xs">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.hours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Serving Fuquay-Varina Communities list */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-500">
          <div className="text-slate-400 font-semibold mb-2">
            Local Neighborhoods We Regularly Service in Fuquay-Varina:
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {NEIGHBORHOODS.map((n, i) => (
              <span key={i} className="hover:text-slate-300 transition-colors">
                {n}{i < NEIGHBORHOODS.length - 1 ? ' •' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar with Required Spec Text */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          {/* Exact required copy from section 7 of document */}
          <p className="font-medium">
            © 2026 Espino's Home Repairs. Serving Fuquay-Varina, NC and surrounding areas. Locally owned and operated.
          </p>

          <div className="flex items-center gap-6 text-slate-500">
            <span>Honest Craftsmanship</span>
            <span>•</span>
            <span>Transparent Rates</span>
            <span>•</span>
            <Link to="/quote" className="text-brand-amber hover:underline">Get a Photo Quote</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
