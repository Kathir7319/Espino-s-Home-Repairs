import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Camera, Menu, X, ShieldCheck, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_INFO } from '../data/content';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Rates & Packages', path: '/pricing' },
    { name: 'Get Photo Quote', path: '/quote', highlight: true },
    { name: 'Before & After', path: '/gallery' },
    { name: 'Our Story', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Notification Bar (Local Fuquay-Varina announcement) */}
      <div className="bg-brand-navy-dark text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-brand-amber font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              Serving Fuquay-Varina &amp; South Wake County, NC
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:inline text-slate-300">Direct Neighbor Referrals &amp; Upfront Pricing</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-slate-400" /> Mon–Sat: 7:30 AM – 6:00 PM
            </span>
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" /> 1-Year Craftsmanship Guarantee
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full bg-white transition-all duration-200 ${scrolled ? 'shadow-md py-2.5' : 'border-b border-slate-200 py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="group focus:outline-none focus:ring-2 focus:ring-brand-amber rounded-lg">
            <Logo variant="horizontal" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-brand-amber bg-amber-50 font-bold'
                      : link.highlight
                      ? 'text-brand-navy bg-slate-100 hover:bg-slate-200 font-bold'
                      : 'text-slate-700 hover:text-brand-navy hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Buttons - As specified in the spec */}
          <div className="hidden md:flex items-center gap-2 xl:gap-3">
            {/* Primary CTA Button: Call: [Insert Phone Number] */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm transition-all active:scale-[0.98]"
              title={`Call ${BUSINESS_INFO.name}`}
            >
              <Phone className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>

            {/* Secondary CTA Button: Text: [Insert Phone Number] */}
            <a
              href={`sms:${BUSINESS_INFO.phoneRaw}?&body=${encodeURIComponent(BUSINESS_INFO.smsPrompt)}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all active:scale-[0.98]"
              title={`Text ${BUSINESS_INFO.name}`}
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>Text: {BUSINESS_INFO.phone}</span>
            </a>

            {/* Get Photo Quote Button */}
            <Link
              to="/quote"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs xl:text-sm font-bold bg-brand-amber hover:bg-brand-amber-hover text-white shadow-cta transition-all active:scale-[0.98]"
            >
              <Camera className="w-4 h-4 shrink-0" />
              <span>Photo Quote</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/quote"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold bg-brand-amber text-white rounded-lg shadow-sm"
            >
              <Camera className="w-3.5 h-3.5" />
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-amber"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 pt-1 pb-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-sm text-center"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                Call: {BUSINESS_INFO.phone}
              </a>
              <a
                href={`sms:${BUSINESS_INFO.phoneRaw}?&body=${encodeURIComponent(BUSINESS_INFO.smsPrompt)}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-blue-600 text-white font-bold text-xs rounded-xl shadow-sm text-center"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                Text: {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                      isActive
                        ? 'text-brand-amber bg-amber-50 font-bold'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100">
              <div className="text-xs text-slate-500 flex items-center gap-1.5 mb-2">
                <MapPin className="w-3.5 h-3.5 text-brand-amber" />
                <span>Fuquay-Varina, NC &amp; Surrounding Areas</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Word-of-mouth neighbor trusted • 1-Year Craftsmanship Guarantee
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
