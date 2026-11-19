import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  HelpCircle, 
  Receipt, 
  DollarSign,
  AlertCircle,
  ThumbsUp,
  Camera
} from 'lucide-react';
import RateCalculator from '../components/RateCalculator';
import { PRICING_RATES, FAQS, BUSINESS_INFO } from '../data/content';

export default function PricingPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Honest Upfront Rates
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-brand-navy tracking-tight">
            Straightforward, Transparent Rates
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            No hidden fees, no unexpected travel charges, and no surprise markups. We keep our pricing simple so you know exactly what to expect.
          </p>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-10">
          {PRICING_RATES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-white border-2 border-brand-amber shadow-2xl scale-100 md:-translate-y-2'
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
                  to={`/quote?package=${pkg.id}`}
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

        {/* Note from spec callout */}
        <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center text-sm text-amber-950 shadow-sm">
          <div className="flex items-center justify-center gap-2 font-bold mb-1">
            <Receipt className="w-4 h-4 text-brand-amber" />
            <span>Important Note on Materials</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            Materials are billed separately at direct store receipt cost, or can be provided by the homeowner ahead of time. We never mark up the price of paint, lumber, fittings, or hardware.
          </p>
        </div>
      </section>

      {/* Interactive Rate Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RateCalculator />
      </section>

      {/* Pricing Comparison Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-card overflow-hidden">
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <h3 className="font-heading font-extrabold text-xl text-brand-navy">
              Package Feature Comparison
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Choose the right tier for your home maintenance list.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/70 border-b border-slate-200 text-slate-700 font-bold">
                <tr>
                  <th className="p-4">Package Scope</th>
                  <th className="p-4 text-center">Hourly ($75/hr)</th>
                  <th className="p-4 text-center bg-amber-50 text-amber-950">Half-Day ($270)</th>
                  <th className="p-4 text-center">Full-Day ($520)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-4 font-semibold">Minimum Commitment</td>
                  <td className="p-4 text-center">2 Hours ($150)</td>
                  <td className="p-4 text-center bg-amber-50/50 font-bold text-brand-amber">4 Hours Dedicated</td>
                  <td className="p-4 text-center">8 Hours Dedicated</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Multiple Punch-List Tasks</td>
                  <td className="p-4 text-center">1 to 2 small tasks</td>
                  <td className="p-4 text-center bg-amber-50/50">3 to 6 medium tasks</td>
                  <td className="p-4 text-center">8 to 15 assorted tasks</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Travel Fees in Fuquay-Varina</td>
                  <td className="p-4 text-center text-emerald-600 font-bold">$0 Free</td>
                  <td className="p-4 text-center bg-amber-50/50 text-emerald-600 font-bold">$0 Free</td>
                  <td className="p-4 text-center text-emerald-600 font-bold">$0 Free</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Tools &amp; Dust Containment</td>
                  <td className="p-4 text-center">Included</td>
                  <td className="p-4 text-center bg-amber-50/50">Included</td>
                  <td className="p-4 text-center">Included</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Debris Haul &amp; Cleanup</td>
                  <td className="p-4 text-center">Included</td>
                  <td className="p-4 text-center bg-amber-50/50">Included</td>
                  <td className="p-4 text-center">Included</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">1-Year Labor Guarantee</td>
                  <td className="p-4 text-center text-emerald-600">✓ Yes</td>
                  <td className="p-4 text-center bg-amber-50/50 text-emerald-600 font-bold">✓ Yes</td>
                  <td className="p-4 text-center text-emerald-600">✓ Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="font-heading font-extrabold text-2xl text-brand-navy">
            Frequently Asked Pricing Questions
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Clear answers so you always know what to expect.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h4 className="font-heading font-bold text-base text-brand-navy flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-brand-amber shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 pl-7 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Direct CTA */}
      <section className="max-w-3xl mx-auto px-4 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl">
          <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
            Have Photos of What You Need Done?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mb-6 max-w-lg mx-auto">
            Send us 2-3 photos right now. We will review them and tell you exactly how many hours it takes before you spend a single dollar.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-amber hover:bg-brand-amber-hover text-white font-heading font-bold text-sm rounded-xl shadow-cta transition-all"
          >
            <Camera className="w-4 h-4" />
            <span>Send Photos for a Rapid Quote</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
