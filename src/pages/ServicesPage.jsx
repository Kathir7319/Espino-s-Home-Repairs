import React from 'react';
import { Link } from 'react-router-dom';
import { 
  SquareDashedBottomCode, 
  DoorOpen, 
  Ruler, 
  Paintbrush, 
  Wrench, 
  Check, 
  Camera, 
  Phone, 
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Clock,
  HelpCircle
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/content';

const iconMap = {
  SquareDashedBottomCode,
  DoorOpen,
  Ruler,
  Paintbrush,
  Wrench,
};

export default function ServicesPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-brand-amber text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Handyman Craftsmanship &amp; Remodeling
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-brand-navy tracking-tight">
            Our Handyman Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We specialize in small-to-medium home repairs, maintenance, and light remodeling in Fuquay-Varina, NC. If it's on your home to-do list, we have you covered.
          </p>
        </div>
      </section>

      {/* Services List In Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SERVICES.map((s, index) => {
          const Icon = iconMap[s.icon] || Wrench;
          const isEven = index % 2 === 1;

          return (
            <div
              key={s.id}
              id={s.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-card overflow-hidden scroll-mt-28"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Visual Image Column */}
                <div className={`lg:col-span-5 relative min-h-[260px] lg:min-h-full ${isEven ? 'lg:order-2' : ''}`}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/70 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase tracking-wider font-semibold text-brand-amber block mb-1">
                      Fuquay-Varina Repair Service #{index + 1}
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl text-white">
                      {s.title}
                    </h3>
                  </div>

                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-brand-amber text-white flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between ${isEven ? 'lg:order-1' : ''}`}>
                  <div>
                    {/* Tagline from spec */}
                    <div className="inline-block px-3 py-1 bg-amber-50 text-brand-amber font-semibold text-xs rounded-lg mb-3">
                      {s.shortDesc}
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {s.fullDesc}
                    </p>

                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
                      Common Repairs &amp; Capabilities Included:
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                      {s.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Rate & Action Bar */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-xs">
                      <span className="text-slate-400 block">Typical Investment:</span>
                      <span className="font-heading font-bold text-brand-navy text-sm">{s.priceRange}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        to={`/quote?service=${s.id}`}
                        className="px-4 py-2.5 rounded-xl bg-brand-amber hover:bg-brand-amber-hover text-white font-heading font-bold text-xs shadow-cta transition-all flex items-center gap-1.5"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>Quote {s.title}</span>
                      </Link>

                      <a
                        href={`sms:${BUSINESS_INFO.phoneRaw}?&body=${encodeURIComponent(`Hi Mateo, I need help with ${s.title} in Fuquay-Varina:`)}`}
                        className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-bold text-xs transition-colors"
                      >
                        Text Photos
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Services FAQ & Process */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="font-heading font-extrabold text-2xl text-brand-navy">
              How We Handle Your Repairs
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Three simple steps from initial photo quote to signed-off job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-brand-amber font-heading font-extrabold text-sm flex items-center justify-center mx-auto mb-3">
                1
              </div>
              <h4 className="font-heading font-bold text-base text-brand-navy mb-1">
                Upload Photo &amp; Details
              </h4>
              <p className="text-xs text-slate-600">
                Snap photos of the problem area. Describe what's happening and your neighborhood.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-heading font-extrabold text-sm flex items-center justify-center mx-auto mb-3">
                2
              </div>
              <h4 className="font-heading font-bold text-base text-brand-navy mb-1">
                Get Rapid Upfront Price
              </h4>
              <p className="text-xs text-slate-600">
                We confirm whether standard hourly or package rates best suit the scope. Zero hidden trip fees.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-heading font-extrabold text-sm flex items-center justify-center mx-auto mb-3">
                3
              </div>
              <h4 className="font-heading font-bold text-base text-brand-navy mb-1">
                Craftsman Execution
              </h4>
              <p className="text-xs text-slate-600">
                We arrive on time, use dust containment, complete the repairs, and guarantee our labor for 1 year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 bg-brand-navy text-white rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-heading font-extrabold text-xl text-white">Have a unique home repair?</h4>
            <p className="text-xs text-slate-300 mt-1">Send us a photo—chances are we've fixed it dozens of times.</p>
          </div>
          <Link
            to="/quote"
            className="px-6 py-3 bg-brand-amber hover:bg-brand-amber-hover text-white font-heading font-bold text-sm rounded-xl shadow-cta transition-all shrink-0"
          >
            Get a Photo Quote Now
          </Link>
        </div>
      </section>

    </div>
  );
}
