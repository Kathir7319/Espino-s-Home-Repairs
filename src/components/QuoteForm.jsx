import React, { useState, useRef } from 'react';
import { Camera, Upload, X, CheckCircle, AlertCircle, Phone, MessageSquare, ShieldCheck, Clock, FileImage } from 'lucide-react';
import { BUSINESS_INFO, NEIGHBORHOODS } from '../data/content';

export default function QuoteForm({ compact = false }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    projectDescription: '',
  });

  const [files, setFiles] = useState([]);
  const [fileErrors, setFileErrors] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState('');
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleNeighborhoodSelect = (nh) => {
    setFormData((prev) => ({
      ...prev,
      address: prev.address ? `${prev.address}, ${nh}` : nh,
    }));
  };

  const handleFileChange = (newFiles) => {
    setFileErrors('');
    const validFiles = [];
    const MAX_FILES = 3;
    const MAX_SIZE = 10 * 1024 * 1024; // 10MB

    const incoming = Array.from(newFiles);
    if (files.length + incoming.length > MAX_FILES) {
      setFileErrors(`Maximum 3 photos allowed. You currently have ${files.length} selected.`);
      return;
    }

    for (const file of incoming) {
      if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type.toLowerCase())) {
        setFileErrors(`Only JPG and PNG images are accepted. File "${file.name}" was skipped.`);
        continue;
      }
      if (file.size > MAX_SIZE) {
        setFileErrors(`File "${file.name}" exceeds 10MB limit.`);
        continue;
      }

      // Generate preview URL
      const preview = URL.createObjectURL(file);
      validFiles.push({ file, preview, name: file.name, size: (file.size / (1024 * 1024)).toFixed(1) });
    }

    setFiles((prev) => [...prev, ...validFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].preview);
      updated.splice(index, 1);
      return updated;
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files);
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      errors.phone = 'Phone Number is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.address.trim()) errors.address = 'Street Address or Neighborhood is required';
    if (!formData.projectDescription.trim()) errors.projectDescription = 'Project description is required';
    if (files.length === 0) errors.files = 'Please attach at least 1 photo of the area needing repair (Max 3 files)';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate real network submission
    setTimeout(() => {
      const generatedId = `EHR-${Math.floor(1000 + Math.random() * 9000)}`;
      setQuoteId(generatedId);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      address: '',
      projectDescription: '',
    });
    setFiles([]);
    setFormErrors({});
    setFileErrors('');
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-card border border-emerald-200 p-8 text-center max-w-2xl mx-auto animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10" />
        </div>
        
        <span className="inline-block px-3 py-1 bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider rounded-full mb-3">
          Quote Request #{quoteId}
        </span>

        <h3 className="font-heading font-extrabold text-2xl text-brand-navy mb-2">
          Photo Quote Received!
        </h3>
        
        <p className="text-slate-600 mb-6 text-sm leading-relaxed max-w-lg mx-auto">
          Thank you, <strong className="text-slate-900">{formData.fullName}</strong>! Mateo &amp; Marco will inspect your photos of <span className="italic">"{formData.projectDescription.slice(0, 50)}..."</span> and send an honest, upfront estimate to <strong className="text-slate-900">{formData.phone}</strong> shortly.
        </p>

        {/* Quick Review Summary */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-2 mb-6">
          <div className="flex justify-between text-slate-600">
            <span>Location:</span>
            <span className="font-semibold text-slate-800">{formData.address}</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Photos Uploaded:</span>
            <span className="font-semibold text-slate-800">{files.length} Photo{files.length > 1 ? 's' : ''} Attached</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Average Response:</span>
            <span className="font-semibold text-emerald-600">Under 60 Minutes (Mon–Sat)</span>
          </div>
        </div>

        {/* Quick action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <a
            href={`sms:${BUSINESS_INFO.phoneRaw}?&body=${encodeURIComponent(`Hi Mateo! I just submitted Photo Quote #${quoteId} for ${formData.fullName} in ${formData.address}. Looking forward to your estimate!`)}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            Send Direct SMS Confirmation
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all"
          >
            <Phone className="w-4 h-4" />
            Call: {BUSINESS_INFO.phone}
          </a>
        </div>

        <button
          onClick={resetForm}
          className="text-xs text-slate-400 hover:text-slate-600 underline font-medium mt-2"
        >
          Submit another repair request
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl shadow-card border border-slate-200 overflow-hidden ${compact ? 'p-6 sm:p-8' : 'p-6 sm:p-10'}`}>
      
      {/* Header per spec */}
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-brand-amber text-xs font-bold uppercase tracking-wider mb-3">
          <Camera className="w-3.5 h-3.5" />
          Rapid Estimator
        </div>
        
        {/* Form Title */}
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy tracking-tight">
          Request a Quick Handyman Quote
        </h2>

        {/* Form Subtitle */}
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
          Save time! Skip the initial site visit by sending us photos of your repair needs for a rapid, accurate estimate.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
        
        {/* Row 1: Full Name & Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Field 1: Full Name (Text Input, Required) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="e.g. John Doe"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-amber transition-all ${
                formErrors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white hover:border-slate-400'
              }`}
            />
            {formErrors.fullName && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {formErrors.fullName}
              </p>
            )}
          </div>

          {/* Field 2: Phone Number (Tel Input, Required) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="e.g. (919) 555-0123"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-amber transition-all ${
                formErrors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white hover:border-slate-400'
              }`}
            />
            {formErrors.phone && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Email & Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Field 3: Email Address (Email Input, Optional) */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Email Address
              </label>
              <span className="text-[11px] text-slate-400 font-medium">(Optional)</span>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g. j.doe@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white hover:border-slate-400 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-amber transition-all"
            />
          </div>

          {/* Field 4: Street Address / Neighborhood in Fuquay-Varina (Text Input, Required) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Street Address / Neighborhood in Fuquay-Varina <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="e.g. 412 South Lakes Dr or Bentwinds"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-amber transition-all ${
                formErrors.address ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white hover:border-slate-400'
              }`}
            />
            {formErrors.address && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {formErrors.address}
              </p>
            )}
          </div>
        </div>

        {/* Neighborhood Suggestion Pills */}
        <div>
          <span className="text-[11px] text-slate-500 font-medium block mb-1.5">
            Quick Select Common Neighborhoods:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {['South Lakes', 'Bentwinds', 'Ballentine', 'Partin Place', 'Sunset Bluffs', 'Downtown Fuquay'].map((nh) => (
              <button
                type="button"
                key={nh}
                onClick={() => handleNeighborhoodSelect(nh)}
                className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 hover:bg-amber-100 hover:text-amber-900 text-slate-600 border border-slate-200 transition-colors"
              >
                + {nh}
              </button>
            ))}
          </div>
        </div>

        {/* Field 5: Describe Your Project (Text Area, Required) */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Describe Your Project <span className="text-red-500">*</span>
          </label>
          <textarea
            name="projectDescription"
            rows="3"
            value={formData.projectDescription}
            onChange={handleInputChange}
            placeholder="e.g., Need drywall patch in hallway and kitchen faucet replaced"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-amber transition-all resize-y ${
              formErrors.projectDescription ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white hover:border-slate-400'
            }`}
          />
          {formErrors.projectDescription && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {formErrors.projectDescription}
            </p>
          )}
        </div>

        {/* Field 6: Upload Photos of the Repair (File Upload Input, Required - Accepts JPG, PNG. Max 3 files, up to 10MB each) */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Take or upload photos of the area needing repair <span className="text-red-500">*</span>
            </label>
            <span className="text-[11px] text-slate-500 font-medium">Max 3 files, up to 10MB each (JPG, PNG)</span>
          </div>

          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`cursor-pointer border-2 border-dashed rounded-2xl p-6 text-center transition-all ${
              formErrors.files
                ? 'border-red-400 bg-red-50/30'
                : 'border-slate-300 bg-slate-50/60 hover:bg-amber-50/40 hover:border-brand-amber'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".jpg,.jpeg,.png,image/jpeg,image/png"
              multiple
              onChange={(e) => handleFileChange(e.target.files)}
              className="hidden"
            />
            
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-brand-amber flex items-center justify-center">
                <Upload className="w-6 h-6" />
              </div>
              <div className="text-sm font-semibold text-slate-800">
                <span className="text-brand-amber hover:underline">Click to browse</span> or drag and drop photos here
              </div>
              <p className="text-xs text-slate-500">
                Tip: Step back for one full-view shot and take one close-up of the damage
              </p>
            </div>
          </div>

          {fileErrors && (
            <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {fileErrors}
            </p>
          )}

          {formErrors.files && (
            <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {formErrors.files}
            </p>
          )}

          {/* Previews */}
          {files.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-3">
              {files.map((item, idx) => (
                <div key={idx} className="relative group rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-square">
                  <img
                    src={item.preview}
                    alt={`Repair preview ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(idx);
                      }}
                      className="p-1.5 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-md"
                      title="Remove Photo"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="absolute bottom-1 left-1 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded backdrop-blur-sm">
                    {item.size} MB
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Privacy & Guarantee note */}
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Your information is strictly private. We never share contacts or spam your inbox.</span>
        </div>

        {/* Submit Button per spec: Send Photo Quote Request */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 rounded-xl font-heading font-extrabold text-base text-white bg-brand-amber hover:bg-brand-amber-hover active:scale-[0.99] shadow-cta transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Analyzing Photos &amp; Preparing Estimate...</span>
            </>
          ) : (
            <>
              <Camera className="w-5 h-5" />
              <span>Send Photo Quote Request</span>
            </>
          )}
        </button>

      </form>
    </div>
  );
}
