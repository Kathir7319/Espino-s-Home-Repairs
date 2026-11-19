import React, { useState } from 'react';
import { Sparkles, MapPin, Clock } from 'lucide-react';

export default function BeforeAfterSlider({ item }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min((x / rect.width) * 100, 95));
    setSliderPosition(percent);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card flex flex-col h-full">
      {/* Slider Viewport */}
      <div
        className="relative h-64 sm:h-72 w-full select-none overflow-hidden cursor-ew-resize bg-slate-100"
        onMouseMove={(e) => {
          if (isDragging || e.buttons === 1) handleSliderMove(e);
        }}
        onTouchMove={handleSliderMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* AFTER Image (Full width background) */}
        <img
          src={item.afterImage}
          alt={`After: ${item.title}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
          {item.afterLabel || 'AFTER'}
        </div>

        {/* BEFORE Image (Clipped by slider position) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={item.beforeImage}
            alt={`Before: ${item.title}`}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
            {item.beforeLabel || 'BEFORE'}
          </div>
        </div>

        {/* Drag Handle Bar */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize z-20 flex items-center justify-center"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="w-8 h-8 rounded-full bg-white text-brand-navy shadow-lg border border-slate-300 flex items-center justify-center text-xs font-bold pointer-events-none">
            ⇄
          </div>
        </div>
      </div>

      {/* Details Box */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-brand-amber font-semibold mb-1">
            <span>{item.category}</span>
            <span className="flex items-center gap-1 text-slate-500">
              <Clock className="w-3 h-3 text-slate-400" /> {item.timeSpent}
            </span>
          </div>

          <h4 className="font-heading font-extrabold text-base text-brand-navy mb-2">
            {item.title}
          </h4>

          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            {item.description}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500">
          <MapPin className="w-3 h-3 text-brand-amber shrink-0" />
          <span>{item.location}</span>
        </div>
      </div>
    </div>
  );
}
