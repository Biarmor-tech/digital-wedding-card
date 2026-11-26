import React from 'react';
import { Check, MessageCircle, Sparkles } from 'lucide-react';
import { PRICING_PACKAGES, PRICING_NOTE, WHATSAPP_NUMBER } from '../data/cards';

export default function PricingTiers() {
  const getWhatsAppLink = (pkgTitle, price) => {
    const text = `Hi Biarmor! I would like to order the ${pkgTitle} package (₹${price}) for my wedding.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const getCustomWhatsAppLink = () => {
    const text = `Hi Biarmor! I would like to discuss customising a wedding invitation based on our preferences and page requirements.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="packages" className="py-8 sm:py-12 max-w-5xl mx-auto px-2 sm:px-4">
      
      {/* Section Sub-header */}
      <div className="text-center max-w-xl mx-auto mb-8 px-2">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-6 h-[1.5px] bg-[#9d6650] rounded-full" />
          <span className="text-[10px] font-sans font-medium uppercase tracking-[0.22em] text-[#686762]">
            Transparent Pricing
          </span>
          <span className="w-6 h-[1.5px] bg-[#9d6650] rounded-full" />
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#252523] mb-2">
          Packages & Pricing
        </h2>
        <p className="text-xs sm:text-sm text-[#686762] font-light">
          Simple one-time payment for unlimited guest sharing. No subscription.
        </p>
      </div>

      {/* Grid: 1 column on mobile, 3 columns on tablet & laptop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-stretch">
        {PRICING_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 bg-white ${
              pkg.highlight 
                ? 'border-2 border-[#434839] shadow-sm relative' 
                : 'border border-[#e2ded4] hover:border-[#c8c3b5]'
            }`}
          >
            {pkg.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#434839] text-[#f6f4ee] text-[9px] font-sans font-medium tracking-wider uppercase shadow-2xs">
                Most Popular
              </div>
            )}

            <div>
              <div className="text-[9px] font-sans font-semibold tracking-wider uppercase text-[#935d48] mb-1.5">
                {pkg.badge}
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#252523] mb-0.5">
                {pkg.title}
              </h3>
              <p className="text-[11px] text-[#686762] font-medium mb-4">
                {pkg.subtitle}
              </p>

              {/* Price */}
              <div className="mb-4 pb-3 border-b border-[#ece8dd]">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-3xl font-bold text-[#252523]">
                    ₹{pkg.price}
                  </span>
                  <span className="text-[10px] text-[#686762]">/ card</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#686762] leading-relaxed mb-4 font-light">
                {pkg.desc}
              </p>

              {/* Features List */}
              <div className="space-y-2 mb-6">
                {pkg.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#252523]">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#f0ede5] text-[#434839] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span className="leading-snug text-[11px] sm:text-xs text-[#52514c]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <a
                href={getWhatsAppLink(pkg.title, pkg.price)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 px-3 rounded-md text-xs font-sans font-medium tracking-[0.15em] uppercase flex items-center justify-center gap-1.5 transition-colors shadow-xs active:scale-98 ${
                  pkg.highlight 
                    ? 'bg-[#434839] hover:bg-[#34382c] text-[#f6f4ee]' 
                    : 'bg-[#f0ede5] hover:bg-[#e5e1d7] text-[#252523] border border-[#e2ded4]'
                }`}
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* Customisation & Preference Note Box in Warm Linen */}
      <div className="mt-6 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#edeae1]/70 border border-[#e2ded4] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#e2ded4] text-[#935d48] flex items-center justify-center shrink-0 hidden sm:flex">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-[#252523] font-medium leading-relaxed">
              {PRICING_NOTE}
            </p>
            <p className="text-[11px] text-[#686762] font-light mt-0.5">
              Talk directly with our designer to customize songs, pages, colors, and layout.
            </p>
          </div>
        </div>

        <a
          href={getCustomWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 py-2 px-4 rounded-md bg-white border border-[#e2ded4] hover:bg-[#f6f4ee] text-[#252523] text-xs font-sans font-medium transition-colors shadow-2xs"
        >
          Discuss Custom Design
        </a>
      </div>

    </section>
  );
}
