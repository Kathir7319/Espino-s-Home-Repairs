import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  Camera, 
  Menu, 
  X, 
  ShieldCheck, 
  MapPin, 
  Clock,
  Home,
  Wrench,
  DollarSign,
  Sparkles,
  Users,
  ChevronRight
} from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_INFO } from '../data/content';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll shadow and sticky styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clean, single-word desktop navigation links that comfortably fit within page width
  const desktopNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Rates', path: '/pricing' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Mobile drawer links
  const mobileNavLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Wrench },
    { name: 'Pricing & Rates', path: '/pricing', icon: DollarSign },
    { name: 'Request Photo Quote', path: '/quote', icon: Camera, highlight: true },
    { name: 'Before & After Gallery', path: '/gallery', icon: Sparkles },
    { name: 'About Our Craftsmen', path: '/about', icon: Users },
    { name: 'Contact & Service Area', path: '/contact', icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-40 w-full font-sans transition-all duration-200">
      
      {/* 1. TOP UTILITY ANNOUNCEMENT BAR */}
      <div className="bg-brand-navy-dark text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Left: Location & Local Trust */}
          <div className="flex items-center gap-2 truncate">
            <span className="flex items-center gap-1.5 text-brand-amber font-semibold text-[11px] sm:text-xs whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-brand-amber shrink-0" />
              <span>Fuquay-Varina &amp; South Wake County, NC</span>
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:inline text-slate-300 text-xs whitespace-nowrap">
              Direct Neighbor Referrals &amp; Upfront Pricing
            </span>
          </div>

          {/* Right: Guarantee & Hours */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs shrink-0 whitespace-nowrap">
            <span className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Mon–Sat: 7:30 AM – 6:00 PM</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>1-Year Labor Guarantee</span>
            </span>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav 
        className={`w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
          scrolled 
            ? 'shadow-lg border-b border-slate-200/90 py-2.5' 
            : 'border-b border-slate-200 py-3.5'
        }`}
      >
        {/* Strictly matches the max-w-7xl page container width */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo (Aligned with left page margin) */}
            <Link 
              to="/" 
              className="shrink-0 group focus:outline-none focus:ring-2 focus:ring-brand-amber rounded-xl p-0.5"
              aria-label="Espino's Home Repairs Homepage"
            >
              <Logo variant="horizontal" />
            </Link>

            {/* Desktop Navigation Links (Centered, single-line, fits comfortably inside container) */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {desktopNavLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-xs xl:text-sm font-semibold rounded-xl whitespace-nowrap transition-all duration-150 ${
                      isActive
                        ? 'text-brand-amber bg-amber-50 font-bold shadow-sm'
                        : 'text-slate-700 hover:text-brand-navy hover:bg-slate-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTAs (Call, Text Us, Photo Quote - Fits perfectly within max-w-7xl container) */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
              
              {/* Primary CTA: Call Now */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="h-10 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow transition-all whitespace-nowrap active:scale-[0.98]"
                title={`Call ${BUSINESS_INFO.name}`}
              >
                <Phone className="w-3.5 h-3.5 fill-current shrink-0" />
                <span>Call: {BUSINESS_INFO.phone}</span>
              </a>

              {/* Secondary CTA: Text Us */}
              <a
                href={`sms:${BUSINESS_INFO.phoneRaw}?&body=${encodeURIComponent(BUSINESS_INFO.smsPrompt)}`}
                className="h-10 hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow transition-all whitespace-nowrap active:scale-[0.98]"
                title={`Text ${BUSINESS_INFO.name}`}
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current shrink-0" />
                <span>Text Us</span>
              </a>

              {/* Action Button: Photo Quote (Aligned with right page margin) */}
              <Link
                to="/quote"
                className="h-10 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs xl:text-sm font-extrabold bg-brand-amber hover:bg-brand-amber-hover text-white shadow-cta hover:shadow-lg transition-all whitespace-nowrap active:scale-[0.98]"
              >
                <Camera className="w-4 h-4 shrink-0" />
                <span>Photo Quote</span>
              </Link>
            </div>

            {/* Tablet & Mobile Right Action Cluster */}
            <div className="flex lg:hidden items-center gap-2">
              
              {/* Call button on mobile / tablet */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="h-9 hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-sm whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call</span>
              </a>

              {/* Quick Quote Button */}
              <Link
                to="/quote"
                className="h-9 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-extrabold bg-brand-amber text-white rounded-xl shadow-sm hover:bg-brand-amber-hover transition-colors whitespace-nowrap"
              >
                <Camera className="w-3.5 h-3.5 shrink-0" />
                <span>Quote</span>
              </Link>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="h-9 w-9 flex items-center justify-center rounded-xl text-slate-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-amber border border-slate-200 transition-colors"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-brand-navy" /> : <Menu className="w-5 h-5 text-brand-navy" />}
              </button>

            </div>

          </div>
        </div>

        {/* 3. MOBILE & TABLET SLIDE-OVER DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 sm:px-6 pt-4 pb-8 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
            
            {/* Quick Action Top Cards (Call & Text per spec) */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-all whitespace-nowrap"
              >
                <Phone className="w-4 h-4 fill-current shrink-0" />
                <span className="truncate">Call: {BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={`sms:${BUSINESS_INFO.phoneRaw}?&body=${encodeURIComponent(BUSINESS_INFO.smsPrompt)}`}
                className="flex items-center justify-center gap-2 py-3 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-all whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                <span className="truncate">Text: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Nav Links with Icons */}
            <div className="space-y-1 pt-2">
              {mobileNavLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                        isActive
                          ? 'text-brand-amber bg-amber-50 font-extrabold border-l-4 border-brand-amber'
                          : link.highlight
                          ? 'text-brand-navy bg-amber-50/60 hover:bg-amber-100 text-brand-amber font-extrabold'
                          : 'text-slate-800 hover:bg-slate-50'
                      }`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${link.highlight ? 'text-brand-amber' : 'text-slate-500'}`} />
                      <span>{link.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </NavLink>
                );
              })}
            </div>

            {/* Bottom Info Banner */}
            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <MapPin className="w-4 h-4 text-brand-amber shrink-0" />
                <span>Fuquay-Varina, NC (Serving South Wake County)</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>1-Year Craftsmanship Guarantee on All Labor</span>
              </div>
            </div>

          </div>
        )}

      </nav>
    </header>
  );
}
