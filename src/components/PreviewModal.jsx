import React, { useState } from 'react';
import { X, ExternalLink, MessageCircle, Smartphone, Volume2, ShieldCheck, RefreshCw } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/cards';

export default function PreviewModal({ card, onClose }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  if (!card) return null;

  const getWhatsAppOrderUrl = () => {
    const text = `Hi Biarmor! I am previewing the "${card.title}" (${card.type}) invitation (${card.url}). I love this design and want to order it for our wedding.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-biarmor-navy/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      {/* Click outside to close backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#e2d9cb] overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-stone-200 bg-[#faf8f5] flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-biarmor-navy text-white flex items-center justify-center shrink-0 font-serif font-bold text-sm">
              {card.monogram || 'B'}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-biarmor-navy truncate">
                  {card.title}
                </h3>
                <span className="hidden sm:inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 shrink-0">
                  {card.type}
                </span>
              </div>
              <p className="text-xs text-stone-500 truncate">
                {card.subtitle} · Live Mobile Preview
              </p>
            </div>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2">
            <a
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-100 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Fullscreen</span>
            </a>

            <a
              href={getWhatsAppOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold shadow-sm transition-all active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Order on WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors ml-1"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Device Frame & Details */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-stone-100/70 flex flex-col lg:flex-row items-center justify-center gap-6">
          
          {/* Mobile Phone Mockup Frame */}
          <div className="relative w-full max-w-[340px] sm:max-w-[375px] h-[580px] sm:h-[620px] rounded-[44px] bg-[#111827] p-3 shadow-2xl border-4 border-stone-700 flex flex-col shrink-0">
            
            {/* iPhone Dynamic Island / Speaker */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-stone-900 ml-auto mr-2" />
            </div>

            {/* Screen Container */}
            <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-stone-900 border border-stone-800">
              
              {/* Loading State Spinner */}
              {!iframeLoaded && !iframeError && (
                <div className="absolute inset-0 bg-[#faf8f5] z-10 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-10 h-10 border-3 border-biarmor-navy border-t-biarmor-lime rounded-full animate-spin mb-4" />
                  <p className="font-serif text-lg font-medium text-biarmor-navy">Loading Live Invitation</p>
                  <p className="text-xs text-stone-500 mt-1 max-w-[200px]">Connecting to {card.title}...</p>
                </div>
              )}

              {/* Live Iframe */}
              <iframe
                src={card.url}
                title={`${card.title} Live Preview`}
                className="w-full h-full border-0 bg-white"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                onLoad={() => setIframeLoaded(true)}
                onError={() => setIframeError(true)}
              />

              {/* Audio & Interaction Hint Pill at Bottom */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] font-medium flex items-center gap-1.5 shadow-md pointer-events-none">
                <Volume2 className="w-3 h-3 text-amber-300" />
                <span>Tap inside to interact & play music</span>
              </div>

            </div>

            {/* Bottom Home Indicator */}
            <div className="w-32 h-1 bg-stone-600 rounded-full mx-auto mt-2 mb-0.5" />
          </div>

          {/* Right Side: Design Details & Ordering Benefits */}
          <div className="w-full max-w-md flex flex-col justify-between self-stretch bg-white p-5 sm:p-6 rounded-2xl border border-stone-200">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Biarmor Design</span>
              </div>

              <h4 className="font-serif text-2xl text-biarmor-navy font-semibold mb-2">
                {card.title}
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                {card.description}
              </p>

              {/* Pricing Box */}
              <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e2d9cb] mb-5">
                <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
                  Pricing for this design
                </div>
                <div className="flex items-baseline gap-3">
                  <div className="text-lg font-bold text-biarmor-navy">
                    {card.priceWithoutSong}
                    <span className="text-xs font-normal text-stone-500 ml-1">without song</span>
                  </div>
                  <span className="text-stone-300">|</span>
                  <div className="text-lg font-bold text-emerald-700">
                    {card.priceWithSong}
                    <span className="text-xs font-normal text-stone-500 ml-1">with custom song</span>
                  </div>
                </div>
              </div>

              {/* Features Included */}
              <div className="space-y-2 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Features Included:
                </p>
                {card.features?.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-biarmor-navy" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons in Modal */}
            <div className="space-y-2.5 pt-4 border-t border-stone-100">
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order This Design on WhatsApp</span>
              </a>

              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Fullscreen Browser Tab</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
