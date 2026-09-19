import React, { useState, useEffect } from 'react';
import { X, Check, Compass, Sparkles, Shield, Send, Calendar, Users, Phone, Mail, User } from 'lucide-react';
import type { ExpeditionJourney, BespokePlanState } from '../types';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedExpedition?: ExpeditionJourney | null;
  bespokePlan?: BespokePlanState | null;
  estimatedPrice?: number | null;
}

export const ConciergeModal: React.FC<ConciergeModalProps> = ({
  isOpen,
  onClose,
  preselectedExpedition,
  bespokePlan,
  estimatedPrice,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [travelers, setTravelers] = useState('2');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  useEffect(() => {
    if (bespokePlan) {
      setTravelers(bespokePlan.travelers.toString());
    }
  }, [bespokePlan]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `CO-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceNumber(ref);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setSpecialRequests('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div className="glass-modal max-w-xl w-full rounded-3xl overflow-hidden border border-[#f4b942]/30 shadow-2xl relative my-auto">
        {/* Modal Top Header */}
        <div className="p-6 sm:p-8 bg-[#0f3d2e]/80 border-b border-[#f4b942]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#131313] border border-[#f4b942]/40 flex items-center justify-center">
              <Compass className="w-5 h-5 text-[#f4b942]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#f4b942] font-semibold block">
                Private Expedition Office
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl text-[#fff8ee] font-medium">
                Commission Your Odyssey
              </h3>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-full text-[#c0c8c3] hover:text-[#f4b942] hover:bg-black/30 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4 animate-fade-in">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#0f3d2e] border border-[#f4b942] flex items-center justify-center shadow-[0_0_25px_rgba(244,185,66,0.3)]">
                <Check className="w-8 h-8 text-[#f4b942]" />
              </div>
              <h4 className="font-editorial text-2xl text-[#fff8ee]">
                Your Dossier Has Been Registered
              </h4>
              <p className="text-xs sm:text-sm text-[#c0c8c3] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#f4b942]">{fullName}</strong>. Our Senior Private Concierge will prepare your confidential bespoke monograph proposal within 24 hours.
              </p>
              <div className="p-4 rounded-xl bg-black/40 border border-[#f4b942]/20 inline-block text-xs font-mono text-[#f4b942]">
                Expedition Reference: <strong className="text-white">{referenceNumber}</strong>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="btn-gold !py-2.5 !px-6 !text-xs !uppercase !tracking-wider"
                >
                  Return to Island Showcase
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Context Preview Banner */}
              {(preselectedExpedition || bespokePlan) && (
                <div className="p-3.5 rounded-xl bg-black/50 border border-[#f4b942]/30 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-[#8a938d] uppercase tracking-wider block">
                      Selected Journey
                    </span>
                    <span className="font-semibold text-[#fff8ee]">
                      {preselectedExpedition?.title || `${bespokePlan?.duration} Days • ${bespokePlan?.style}`}
                    </span>
                  </div>
                  {estimatedPrice && (
                    <span className="font-editorial text-base text-[#f4b942] font-medium">
                      ~${estimatedPrice.toLocaleString()} / guest
                    </span>
                  )}
                </div>
              )}

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#c0c8c3] flex items-center gap-1.5">
                    <User className="w-3 h-3 text-[#f4b942]" />
                    Full Name & Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord Charles Sterling"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#131313] text-[#fff8ee] text-xs py-2.5 px-3.5 rounded-xl border border-[#f6ebd9]/15 focus:border-[#f4b942] focus:outline-none placeholder:text-[#8a938d]/50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#c0c8c3] flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-[#f4b942]" />
                    Private Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="c.sterling@estates.co.uk"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#131313] text-[#fff8ee] text-xs py-2.5 px-3.5 rounded-xl border border-[#f6ebd9]/15 focus:border-[#f4b942] focus:outline-none placeholder:text-[#8a938d]/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#c0c8c3] flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-[#f4b942]" />
                    Direct Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 20 7946 0991"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#131313] text-[#fff8ee] text-xs py-2.5 px-3.5 rounded-xl border border-[#f6ebd9]/15 focus:border-[#f4b942] focus:outline-none placeholder:text-[#8a938d]/50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#c0c8c3] flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-[#f4b942]" />
                    Target Arrival Month
                  </label>
                  <select
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    aria-label="Target Arrival Month"
                    className="w-full bg-[#131313] text-[#fff8ee] text-xs py-2.5 px-3 rounded-xl border border-[#f6ebd9]/15 focus:border-[#f4b942] focus:outline-none cursor-pointer"
                  >
                    <option value="">Select Month</option>
                    <option value="November 2026">November 2026</option>
                    <option value="December 2026 (Festive)">December 2026 (Festive)</option>
                    <option value="January 2027">January 2027</option>
                    <option value="February 2027">February 2027</option>
                    <option value="March 2027">March 2027</option>
                    <option value="April 2027">April 2027</option>
                    <option value="August 2027 (Esala Perahera)">August 2027 (Esala Perahera)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#c0c8c3] flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-[#f4b942]" />
                    Party Size
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="16"
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full bg-[#131313] text-[#fff8ee] text-xs py-2.5 px-3 rounded-xl border border-[#f6ebd9]/15 focus:border-[#f4b942] focus:outline-none"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#c0c8c3] flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#f4b942]" />
                  Bespoke Requests & Aviation Needs
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Chartered scenic floatplane from Castlereagh Lake, private archaeologist for Sigiriya dawn climb, Relais & Châteaux tea bungalows only..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#131313] text-[#fff8ee] text-xs py-2.5 px-3.5 rounded-xl border border-[#f6ebd9]/15 focus:border-[#f4b942] focus:outline-none placeholder:text-[#8a938d]/50"
                />
              </div>

              {/* Submit Action */}
              <div className="pt-4 flex items-center justify-between">
                <div className="text-[10px] text-[#8a938d] flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-[#16a36a]" />
                  <span>Strict privacy guaranteed. Never shared with 3rd parties.</span>
                </div>
                <button
                  type="submit"
                  className="btn-gold !py-2.5 !px-6 !text-xs !uppercase !tracking-wider flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit Commission
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
