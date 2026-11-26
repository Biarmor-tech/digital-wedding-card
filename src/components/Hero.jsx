import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-8 pb-10 sm:pt-14 sm:pb-16 px-4 sm:px-6 max-w-2xl mx-auto text-left">
      
      {/* Top Tag with terracotta line prefix (Exact InviteAtelier Screenshot) */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-8 sm:w-10 h-[1.5px] bg-[#9d6650] rounded-full" />
        <span className="text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-[#686762]">
          Digital Wedding Invitations
        </span>
      </div>

      {/* Main Headline (Exact InviteAtelier Screenshot) */}
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#252523] tracking-tight leading-[1.12] mb-5">
        An invitation <br />
        <span className="italic font-normal font-serif text-[#935d48]">
          they'll open twice
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-[#686762] text-sm sm:text-base font-light leading-relaxed mb-8 max-w-lg">
        Design it in minutes, share it as a link, and collect RSVPs in one place. No printing, no postage, no chasing replies.
      </p>

      {/* CTA Button (Exact InviteAtelier Dark Olive/Moss Button) */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
        <a
          href="#catalogue"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-sm sm:rounded-md bg-[#434839] hover:bg-[#34382c] text-[#f6f4ee] text-xs sm:text-[13px] font-sans font-medium tracking-[0.18em] uppercase transition-all shadow-xs active:scale-98"
        >
          <span>Start Creating</span>
          <ArrowRight className="w-4 h-4 opacity-90" />
        </a>

        <a
          href="#packages"
          className="inline-block text-xs sm:text-sm font-sans font-normal text-[#252523] hover:text-[#935d48] underline underline-offset-4 transition-colors"
        >
          View Examples & Pricing
        </a>
      </div>

      {/* Hairline Divider */}
      <div className="border-t border-[#e2ded4] pt-6 mt-6">
        
        {/* Trust bullet checklist (Exact InviteAtelier Screenshot) */}
        <div className="space-y-1.5 text-xs sm:text-sm text-[#686762] font-light">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9d6650]" />
            <span>One-time payment starting from ₹1,000</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9d6650]" />
            <span>No subscription</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9d6650]" />
            <span>RSVP tracking included</span>
          </div>
        </div>

      </div>

    </section>
  );
}
