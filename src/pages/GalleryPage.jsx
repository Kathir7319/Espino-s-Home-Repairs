import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Camera, ArrowRight, CheckCircle2 } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { BEFORE_AFTER_GALLERY } from '../data/content';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Drywall Repair', 'Trim & Finish Carpentry', 'Door & Window Fixes', 'Minor Plumbing'];

  const filteredItems = selectedCategory === 'All'
    ? BEFORE_AFTER_GALLERY
    : BEFORE_AFTER_GALLERY.filter((item) => item.category === selectedCategory);

  return (
    <div className="py-12 space-y-12">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-brand-amber text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Proven Workmanship
        </div>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-brand-navy tracking-tight">
          Before &amp; After Project Gallery
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Explore real home repairs completed for homeowners across Fuquay-Varina, NC. Drag each slider to inspect the precision fit, finish, and texture matching.
        </p>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid of Sliders */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <BeforeAfterSlider key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Craftsmanship Standards Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10">
          <h3 className="font-heading font-extrabold text-2xl text-brand-navy mb-4 text-center">
            Our Standard on Every Job
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-brand-amber flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-sm text-slate-900">Zero Visible Seams</h4>
              <p>We feather drywall patches across wide zones and match wall textures so repairs blend under any angle of natural Carolina sunlight.</p>
            </div>

            <div className="text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-sm text-slate-900">Tight, Copied Miters</h4>
              <p>Our trim carpentry features coped internal joints and sealed caulking that won't separate during seasonal humidity changes.</p>
            </div>

            <div className="text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-sm text-slate-900">Clean Dust Containment</h4>
              <p>We lay protective neoprene floor runners, tape plastic dust barriers, and use vacuum-assisted sanding on all indoor drywall work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-3xl mx-auto px-4 text-center">
        <div className="p-8 bg-brand-navy rounded-3xl text-white shadow-xl">
          <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
            Want Results Like These in Your Home?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mb-6">
            Take a quick photo of your damaged wall, door, or fixture and get an upfront price today.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-amber hover:bg-brand-amber-hover text-white font-heading font-bold text-sm rounded-xl shadow-cta transition-all"
          >
            <Camera className="w-4 h-4" />
            <span>Request a Photo Quote</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
