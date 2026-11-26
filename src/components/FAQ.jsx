import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQ_DATA, WHATSAPP_NUMBER } from '../data/cards';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-8 sm:py-12 max-w-2xl mx-auto px-2">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-6 h-[1.5px] bg-[#9d6650] rounded-full" />
          <span className="text-[10px] font-sans font-medium uppercase tracking-[0.22em] text-[#686762]">
            Got Questions?
          </span>
          <span className="w-6 h-[1.5px] bg-[#9d6650] rounded-full" />
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#252523] mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-[#686762] font-light">
          Everything you need to know about our digital wedding cards.
        </p>
      </div>

      <div className="space-y-3">
        {FAQ_DATA.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-xl border border-[#e2ded4] bg-white overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-sm sm:text-base text-[#252523] hover:text-[#935d48] font-normal"
              >
                <span>{item.q}</span>
                <ChevronDown className={`w-4 h-4 text-[#9d6650] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#252523]' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-[#686762] font-light leading-relaxed border-t border-[#f0ede5] bg-[#faf8f4]">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* WhatsApp question bar */}
      <div className="mt-8 text-center">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Biarmor! I have a question about digital wedding cards.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-sans font-medium text-[#252523] hover:text-[#935d48] bg-white border border-[#e2ded4] px-4 py-2 rounded-full shadow-2xs transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
          <span>Have more questions? Ask on WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
