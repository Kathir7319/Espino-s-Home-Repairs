import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Star, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  Award,
  ThumbsUp
} from 'lucide-react';
import QuoteForm from '../components/QuoteForm';
import ServiceCard from '../components/ServiceCard';
import RateCalculator from '../components/RateCalculator';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { BUSINESS_INFO, SERVICES, PRICING_RATES, TESTIMONIALS, BEFORE_AFTER_GALLERY } from '../data/content';

export default function HomePage() {
  const scrollToQuote = () => {
    const el = document.getElementById('photo-quote-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const el = document.getElementById('services-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 sm:space-y-28">
      
      {/* 3. HERO SECTION (Above the Fold) */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-white via-slate-50 to-[#F8F9FA]">
        {/* Subtle decorative background crafts grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#11233B_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-brand-amber text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Fuquay-Varina, NC Handyman &amp; Remodeling</span>
              </div>

              {/* Main Headline - Exact from spec */}
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.12]">
                Fuquay-Varina's Trusted Word-of-Mouth Handyman – <span className="text-brand-amber underline decoration-amber-300/60 decoration-wavy decoration-2">Now Online.</span>
              </h1>

              {/* Subheadline - Exact from spec */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                For years, Espino's Home Repairs has served our community through direct neighbor referrals. We combine high-quality craftsmanship with an honest, upfront pricing approach to tackle your home to-do list.
              </p>

              {/* Primary Action Buttons - Exact from spec */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                {/* Button 1 (Primary Accent): Get a Photo Quote [Scrolls down to Form] */}
                <button
                  onClick={scrollToQuote}
                  className="px-7 py-4 rounded-xl font-heading font-extrabold text-base bg-brand-amber hover:bg-brand-amber-hover text-white shadow-cta hover:shadow-lg transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]"
                >
                  <Camera className="w-5 h-5" />
                  <span>Get a Photo Quote</span>
                </button>

                {/* Button 2 (Outline): View Services & Rates [Scrolls down to Services] */}
                <button
                  onClick={scrollToServices}
                  className="px-7 py-4 rounded-xl font-heading font-extrabold text-base bg-white hover:bg-slate-50 text-brand-navy border-2 border-slate-300 hover:border-brand-navy shadow-sm transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <span>View Services &amp; Rates</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quick direct contact & trust indicators */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>1-Year Craftsmanship Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>5.0 Star Neighbor Rating</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                  <Clock className="w-4 h-4 text-brand-amber" />
                  <span>Rapid Same-Day Photo Quotes</span>
                </div>
              </div>

            </div>

            {/* Right Visual / Hero Card Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main craftsman card visual */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                    alt="Espino's Home Repairs craftsman at work in Fuquay-Varina"
                    className="w-full h-80 sm:h-96 object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/40 to-transparent"></div>
                  
                  {/* Floating Testimonial Pill */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-slate-100 max-w-[220px]">
                    <div className="flex items-center gap-1 text-amber-500 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-[11px] text-slate-700 font-medium leading-tight">
                      "Flawless drywall texture matching in South Lakes!"
                    </p>
                    <span className="text-[10px] text-slate-400 font-bold block mt-1">
                      — Sarah M., Neighbor
                    </span>
                  </div>

                  {/* Bottom Card Summary */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-100 text-brand-amber flex items-center justify-center font-bold">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-heading font-extrabold text-sm text-brand-navy">
                            Skip the Site Visit
                          </div>
                          <div className="text-xs text-slate-500">
                            Upload repair photos for a rapid quote
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={scrollToQuote}
                        className="p-2 rounded-xl bg-brand-amber text-white hover:bg-brand-amber-hover transition-colors"
                        title="Upload photos"
                      >
                        <Camera className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>

                {/* Decorative glow */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-amber/15 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 4. OUR SERVICES SECTION */}
      <section id="services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-brand-amber" />
            Fuquay-Varina Handyman Specialties
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy">
            Our Services
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-medium">
            We specialize in small-to-medium home repairs, maintenance, and light remodeling. If it's on your home to-do list, we have you covered.
          </p>
        </div>

        {/* 5 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} detailed={true} />
          ))}

          {/* 6th Card: Custom Punch List Package Card */}
          <div className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white rounded-2xl p-6 shadow-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 text-brand-amber flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-white mb-2">
                Have a Mixed Punch List?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Got a sticky door, a running toilet, a few drywall holes, and a curtain rod to hang all at once? Book a Half-Day or Full-Day package and let us knock it all out in one visit.
              </p>
              <ul className="text-xs text-slate-200 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>No separate trip charges for mixed punch lists</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Priority scheduling for half &amp; full days</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Materials billed at cost with zero markup</span>
                </li>
              </ul>
            </div>

            <Link
              to="/pricing"
              className="w-full py-3 px-4 rounded-xl bg-brand-amber hover:bg-brand-amber-hover font-heading font-bold text-xs text-white text-center shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Package Rates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-heading font-bold text-sm text-brand-amber hover:text-brand-amber-hover underline underline-offset-4"
          >
            <span>View Full Services Breakdown &amp; Repair Checklists</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


      {/* 5. STRAIGHTFORWARD, TRANSPARENT RATES */}
      <section className="bg-slate-100/70 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              100% Upfront Pricing
            </div>
            
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy">
              Straightforward, Transparent Rates
            </h2>
            
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              No hidden fees, no unexpected travel charges, and no surprise markups. We keep our pricing simple so you know exactly what to expect.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
            {PRICING_RATES.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.popular
                    ? 'bg-white border-2 border-brand-amber shadow-xl scale-100 md:-translate-y-2'
                    : 'bg-white border border-slate-200 shadow-card'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-amber text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      {pkg.minimum}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl text-brand-navy mb-2">
                    {pkg.title}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="font-heading font-extrabold text-4xl sm:text-5xl text-brand-navy">
                      {pkg.rate}
                    </span>
                    <span className="text-sm font-semibold text-slate-500">
                      {pkg.unit}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                    {pkg.bestFor}
                  </p>

                  <div className="space-y-2.5 border-t border-slate-100 pt-6 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      What's Included:
                    </span>
                    {pkg.highlights.map((h, i) => (
                      <div key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to="/quote"
                    className={`w-full py-3.5 px-4 rounded-xl font-heading font-bold text-sm text-center transition-all flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? 'bg-brand-amber hover:bg-brand-amber-hover text-white shadow-cta'
                        : 'bg-slate-100 hover:bg-brand-navy hover:text-white text-slate-800'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Note from spec */}
          <div className="max-w-2xl mx-auto bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 text-center text-xs text-amber-900 font-medium">
            <strong>Materials Policy:</strong> Materials are billed separately at direct store receipt cost, or can be provided by the homeowner ahead of time.
          </div>

          {/* Interactive Punch List Calculator */}
          <div className="mt-14">
            <RateCalculator />
          </div>

        </div>
      </section>


      {/* BEFORE / AFTER VISUAL SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-amber" />
              Real Local Craftsmanship
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy">
              See the Difference in Fuquay Homes
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Drag the interactive sliders to inspect our seamless drywall patches, trim woodwork, and clean fixture replacements.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 font-heading font-bold text-sm text-brand-amber hover:text-brand-amber-hover self-start md:self-auto"
          >
            <span>Browse Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BEFORE_AFTER_GALLERY.slice(0, 2).map((item) => (
            <BeforeAfterSlider key={item.id} item={item} />
          ))}
        </div>
      </section>


      {/* 6. QUOTE INTAKE FORM SECTION */}
      <section id="photo-quote-section" className="relative scroll-mt-24">
        {/* Background highlight container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>


      {/* LOCAL NEIGHBOR REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-brand-amber text-xs font-bold uppercase tracking-wider mb-2">
            <ThumbsUp className="w-3.5 h-3.5" />
            Neighbor Recommendations
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy">
            Built on Neighbor Referrals
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Read what your neighbors in Bentwinds, South Lakes, and Partin Place say about our craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-heading font-bold text-sm text-brand-navy">{t.name}</div>
                <div className="text-xs text-brand-amber font-semibold flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" />
                  <span>{t.neighborhood}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Service: {t.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* FINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-gradient-to-r from-brand-navy-dark via-brand-navy to-brand-navy-light rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber/20 text-brand-amber text-xs font-bold uppercase tracking-wider mb-4">
              <Clock className="w-3.5 h-3.5" /> Rapid Estimates Today
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4 leading-tight">
              Ready to Cross Those Repairs Off Your To-Do List?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-8 leading-relaxed">
              Don't wait weeks for an oversized contractor or deal with unreturned calls. Send us photos of your repair or give us a call right now.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToQuote}
                className="px-6 py-3.5 rounded-xl font-heading font-bold text-sm bg-brand-amber hover:bg-brand-amber-hover text-white shadow-cta transition-all flex items-center gap-2"
              >
                <Camera className="w-4 h-4" />
                <span>Get Your Photo Quote</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-6 py-3.5 rounded-xl font-heading font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`sms:${BUSINESS_INFO.phoneRaw}?&body=${encodeURIComponent(BUSINESS_INFO.smsPrompt)}`}
                className="px-6 py-3.5 rounded-xl font-heading font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span>Text Photos</span>
              </a>
            </div>
          </div>

          {/* Background art */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
            <svg viewBox="0 0 100 100" className="w-96 h-96" fill="white">
              <path d="M50 4 L92 22 V62 C92 84 50 98 50 98 C50 98 8 84 8 62 V22 Z" />
            </svg>
          </div>
        </div>
      </section>

    </div>
  );
}
