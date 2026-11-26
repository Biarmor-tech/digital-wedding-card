import React from 'react';
import { HOW_IT_WORKS, WHATSAPP_NUMBER } from '../data/cards';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-white border-y border-[#e2d9cb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-biarmor-gold">
            Effortless Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-biarmor-navy mt-1 mb-3">
            How It Works in 4 Simple Steps
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light">
            From design selection to sharing with your wedding guests in under 24 hours.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS.map((step, index) => (
            <div 
              key={index}
              className="relative p-6 rounded-2xl bg-[#faf8f5] border border-[#e8e2d5] flex flex-col justify-between group hover:border-biarmor-gold hover:shadow-luxury transition-all duration-300"
            >
              <div>
                {/* Step Number */}
                <div className="font-serif text-3xl font-bold text-biarmor-gold mb-3">
                  {step.step}
                </div>
                
                {/* Step Title */}
                <h3 className="font-serif text-lg font-semibold text-biarmor-navy mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Progress Indicator line */}
              <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-400">
                <span>Step {index + 1} of 4</span>
                <span className="w-2 h-2 rounded-full bg-biarmor-navy/20 group-hover:bg-biarmor-navy transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Banner Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-biarmor-navy text-white text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-luxury">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-medium text-white mb-1">
              Have a special custom theme in mind?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300">
              Share your wedding card ideas, reference images or invitation text on WhatsApp.
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Biarmor! I have a custom wedding invitation idea. Let's discuss!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-semibold transition-transform active:scale-95 shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat With Us</span>
          </a>
        </div>

      </div>
    </section>
  );
}
