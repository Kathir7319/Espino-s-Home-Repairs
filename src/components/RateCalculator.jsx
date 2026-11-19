import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Check, ArrowRight, Sparkles, HelpCircle, ShieldCheck } from 'lucide-react';

const PUNCH_ITEMS = [
  { id: 'drywall-small', name: 'Patch 1-2 small drywall holes & sand', hours: 1.5 },
  { id: 'door-align', name: 'Plane & align 1 sticky door', hours: 1.0 },
  { id: 'faucet-swap', name: 'Replace kitchen or bath faucet', hours: 1.5 },
  { id: 'toilet-fix', name: 'Repair running toilet / replace valve', hours: 1.0 },
  { id: 'trim-room', name: 'Install baseboards in 1 room', hours: 3.5 },
  { id: 'paint-accent', name: 'Paint 1 accent wall (two coats)', hours: 2.5 },
  { id: 'lockset-install', name: 'Install smart deadbolt & door handle', hours: 1.0 },
  { id: 'weatherstrip', name: 'Weatherstrip 2 exterior drafty doors', hours: 1.5 },
  { id: 'hardware-fixtures', name: 'Hang 2 mirrors, blinds, or fixtures', hours: 1.0 },
];

export default function RateCalculator() {
  const [selectedItems, setSelectedItems] = useState(['drywall-small', 'door-align']);

  const toggleItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalHours = selectedItems.reduce((acc, id) => {
    const item = PUNCH_ITEMS.find((p) => p.id === id);
    return acc + (item ? item.hours : 0);
  }, 0);

  // Recommendations:
  // <= 2.5 hours: Hourly (minimum 2 hours @ $75 = $150)
  // 3 to 5 hours: Half-Day Package ($270 for 4 hours)
  // > 5 hours: Full-Day Overhaul ($520 for 8 hours)
  let recommendedPackage = '';
  let estimatedCost = 0;
  let savings = '';

  if (totalHours <= 2.0) {
    recommendedPackage = 'Standard Hourly (2-Hr Minimum)';
    estimatedCost = 150;
    savings = 'Standard 2-hr booking';
  } else if (totalHours <= 3.0) {
    recommendedPackage = 'Standard Hourly Rate (approx. 3 hrs)';
    estimatedCost = 225;
    savings = '$75 / hr rate';
  } else if (totalHours <= 5.5) {
    recommendedPackage = 'Half-Day Package (4 Hours)';
    estimatedCost = 270;
    savings = 'Saves up to $67 vs hourly rate!';
  } else {
    recommendedPackage = 'Full-Day Overhaul Package (8 Hours)';
    estimatedCost = 520;
    savings = 'Saves over $80 vs hourly rate!';
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-2 text-brand-amber font-bold text-xs uppercase tracking-wider">
        <Calculator className="w-4 h-4" />
        Interactive Punch List Estimator
      </div>
      
      <h3 className="font-heading font-extrabold text-2xl text-brand-navy mb-2">
        Estimate Your Repair Project in Seconds
      </h3>
      
      <p className="text-sm text-slate-600 mb-6">
        Select common items from your to-do list below to see estimated hours and our recommended cost-effective package.
      </p>

      {/* Grid of Punch Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-8">
        {PUNCH_ITEMS.map((item) => {
          const isSelected = selectedItems.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleItem(item.id)}
              className={`flex items-start gap-2.5 p-3 rounded-xl border text-left text-xs transition-all ${
                isSelected
                  ? 'bg-amber-50/80 border-brand-amber text-brand-navy font-semibold shadow-sm'
                  : 'bg-slate-50/60 border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              <div
                className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                  isSelected ? 'bg-brand-amber border-brand-amber text-white' : 'border-slate-300 bg-white'
                }`}
              >
                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
              <div className="flex-1">
                <div>{item.name}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">~{item.hours} hr{item.hours > 1 ? 's' : ''}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Estimate Outcome Box */}
      <div className="bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl p-6 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">
        <div className="text-left">
          <div className="text-xs uppercase tracking-wider font-semibold text-brand-amber mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Recommended Solution:
          </div>
          <div className="font-heading font-extrabold text-xl sm:text-2xl text-white">
            {recommendedPackage}
          </div>
          <div className="text-xs text-slate-300 mt-1 flex flex-wrap items-center gap-2">
            <span>Estimated labor: <strong>~{totalHours.toFixed(1)} Hours</strong></span>
            <span>•</span>
            <span className="text-emerald-400 font-medium">{savings}</span>
          </div>
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-5 shrink-0 pt-3 md:pt-0 border-t border-white/10 md:border-0">
          <div className="text-left md:text-right">
            <div className="text-xs text-slate-400 font-medium">Est. Labor Total</div>
            <div className="font-heading font-extrabold text-3xl text-brand-amber">
              ${estimatedCost}
            </div>
          </div>

          <Link
            to="/quote"
            className="px-5 py-3 rounded-xl font-heading font-bold text-sm bg-brand-amber hover:bg-brand-amber-hover text-white shadow-cta hover:shadow-lg transition-all flex items-center gap-1.5 shrink-0 active:scale-[0.98]"
          >
            <span>Lock In Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          Materials are billed separately at direct cost with no markup.
        </span>
        <span>Fuquay-Varina local guarantee</span>
      </div>
    </div>
  );
}
