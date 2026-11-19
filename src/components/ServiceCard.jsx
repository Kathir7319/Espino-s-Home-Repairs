import React from 'react';
import { Link } from 'react-router-dom';
import { 
  SquareDashedBottomCode, 
  DoorOpen, 
  Ruler, 
  Paintbrush, 
  Wrench, 
  Check, 
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';

const iconMap = {
  SquareDashedBottomCode,
  DoorOpen,
  Ruler,
  Paintbrush,
  Wrench,
};

export default function ServiceCard({ service, detailed = false }) {
  const IconComponent = iconMap[service.icon] || Wrench;

  return (
    <div 
      id={service.id}
      className="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col h-full group scroll-mt-28"
    >
      {/* Image Banner */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent"></div>
        
        {/* Floating Icon */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-brand-amber text-white flex items-center justify-center shadow-md">
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-heading font-extrabold text-xl text-white tracking-wide">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Short description from spec */}
          <p className="text-sm font-semibold text-brand-navy mb-3">
            {service.shortDesc}
          </p>

          {detailed && (
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              {service.fullDesc}
            </p>
          )}

          {/* Capabilities Checklist */}
          <div className="space-y-2 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Common Repairs Handled:
            </span>
            <ul className="space-y-1.5">
              {service.capabilities.map((cap, i) => (
                <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-amber" />
            <span>{service.commonTime}</span>
          </div>

          <Link
            to={`/quote?service=${service.id}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-brand-amber hover:text-brand-amber-hover group-hover:translate-x-0.5 transition-transform"
          >
            <span>Quote this</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
