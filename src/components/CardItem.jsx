import React, { useState } from 'react';
import { ExternalLink, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/cards';

export default function CardItem({ card }) {
  const [imgError, setImgError] = useState(false);

  const getWhatsAppOrderUrl = () => {
    const text = `Hi Biarmor! I saw the "${card.title}" (${card.type}) invitation on your catalogue website (${card.url}). I would like to order the ${card.tier || 'invitation'} (₹${card.price || '1,000'}).`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="flex flex-col bg-white rounded-xl sm:rounded-2xl border border-[#e2ded4] overflow-hidden p-2 sm:p-2.5 md:p-3 transition-all duration-200 hover:border-[#c8c3b5] hover:shadow-sm">
      
      {/* Thumbnail Frame: Warm stone background, 100% full image */}
      <a 
        href={card.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-lg sm:rounded-xl overflow-hidden bg-[#f0ede5] flex items-center justify-center cursor-pointer block border border-[#e5e1d7] p-1"
        title={`Open ${card.title} in new tab`}
      >
        {/* Floating Price Pill (Warm Linen & Charcoal) */}
        <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 z-10 px-1.5 sm:px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-xs border border-[#e2ded4] shadow-2xs text-right pointer-events-none">
          <div className="text-[7px] sm:text-[8px] font-sans font-medium text-[#686762] leading-tight">
            {card.tier}
          </div>
          <div className="text-[8px] sm:text-[9.5px] font-bold text-[#252523] leading-tight">
            ₹{card.price}
          </div>
        </div>

        {/* FULL Thumbnail without cropping */}
        {!imgError && card.thumbnail ? (
          <img 
            src={card.thumbnail} 
            alt={card.title} 
            className="w-full h-full object-contain rounded-md transition-transform duration-200 group-hover:scale-102"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Clean Minimal Fallback */
          <div className="w-full h-full rounded-md p-2 flex flex-col items-center justify-center text-center bg-[#434839] text-white">
            <span className="font-serif text-xs sm:text-sm font-normal text-[#f6f4ee]">
              {card.title}
            </span>
            <span className="text-[7px] sm:text-[8px] text-[#cfcac0] uppercase tracking-widest mt-0.5 font-sans">
              {card.type}
            </span>
          </div>
        )}

        {/* Subtle hover icon on desktop/laptop */}
        <div className="hidden sm:flex absolute inset-0 bg-[#252523]/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg sm:rounded-xl items-center justify-center">
          <span className="p-1.5 rounded-full bg-white/90 text-[#252523] shadow-xs">
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </div>
      </a>

      {/* Card Info Below Thumbnail */}
      <div className="pt-2 sm:pt-2.5 pb-0.5 px-0.5 flex-1 flex flex-col justify-between">
        <div className="mb-2">
          {/* Category Tag in Terracotta */}
          <div className="text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold text-[#935d48] truncate font-sans">
            {card.type}
          </div>

          {/* Couple Names in Classical Serif */}
          <h3 className="font-serif text-xs sm:text-sm md:text-base font-normal text-[#252523] leading-snug truncate mt-0.5">
            {card.title}
          </h3>

          {/* Subtitle / Details */}
          <p className="text-[10px] sm:text-[11px] text-[#686762] font-light truncate mt-0.5 font-sans">
            {card.subtitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-1.5 pt-1">
          {/* Button 1: View Invitation (Olive/Moss button) */}
          <a
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[30px] sm:min-h-[34px] py-1 px-2 rounded-md bg-[#434839] hover:bg-[#34382c] text-[#f6f4ee] text-[10px] sm:text-[11px] font-sans font-medium tracking-wide uppercase text-center flex items-center justify-center gap-1 transition-colors active:scale-98 shadow-xs"
          >
            <span>View invitation</span>
            <ExternalLink className="w-3 h-3 opacity-80 shrink-0" />
          </a>

          {/* Button 2: Order on WhatsApp (Darker Rich Forest WhatsApp Green) */}
          <a
            href={getWhatsAppOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[30px] sm:min-h-[34px] py-1 px-2 rounded-md bg-[#1b6b42] hover:bg-[#155434] text-white text-[10px] sm:text-[11px] font-sans font-medium text-center flex items-center justify-center gap-1 transition-colors active:scale-98 shadow-xs"
          >
            <MessageCircle className="w-3 h-3 fill-white shrink-0" />
            <span className="truncate">Order on WhatsApp</span>
          </a>
        </div>

      </div>

    </div>
  );
}
