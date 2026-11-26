import React from 'react';
import { COMPANY_NAME, WHATSAPP_NUMBER } from '../data/cards';

export default function Footer() {
  return (
    <footer className="border-t border-[#e2ded4] bg-[#f6f4ee] py-10 mt-12 text-center text-xs text-[#686762]">
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        
        {/* Brand Name */}
        <div className="font-serif text-base font-normal tracking-wide text-[#252523]">
          {COMPANY_NAME}
        </div>

        <p className="max-w-sm mx-auto text-[#686762] font-light leading-relaxed">
          Digital wedding invitations that open like the real thing. Complete with music, Google Maps, RSVP, and unforgettable animations.
        </p>

        <div className="flex items-center justify-center gap-6 text-[#686762] pt-2 font-medium font-sans">
          <a href="#catalogue" className="hover:text-[#252523] transition-colors">
            Catalogue
          </a>
          <span>·</span>
          <a href="#packages" className="hover:text-[#252523] transition-colors">
            Pricing
          </a>
          <span>·</span>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Biarmor! I would like to order an invitation.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#252523] transition-colors"
          >
            WhatsApp
          </a>
        </div>

        <div className="text-[11px] text-[#8a8882] pt-4 border-t border-[#e2ded4]">
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
