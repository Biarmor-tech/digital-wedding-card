import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/cards';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Biarmor! I saw your digital wedding cards and want to order one.")}`;

  return (
    <header className="sticky top-0 z-40 bg-[#f6f4ee]/95 backdrop-blur-md border-b border-[#e2ded4] transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Brand Name in exact InviteAtelier serif style */}
          <a href="#" className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#252523] hover:opacity-85 transition-opacity">
            Biarmor
          </a>

          {/* Right Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 text-[#252523] hover:text-[#935d48] focus:outline-none transition-colors"
            aria-label="Toggle Navigation"
          >
            {isOpen ? (
              <X className="w-5 h-5 stroke-[1.5]" />
            ) : (
              <Menu className="w-5 h-5 stroke-[1.5]" />
            )}
          </button>

        </div>
      </div>

      {/* Slide-down Menu Drawer */}
      {isOpen && (
        <div className="border-b border-[#e2ded4] bg-[#fcfbf9]/98 backdrop-blur-md px-5 py-6 space-y-4 shadow-sm animate-fadeIn">
          <nav className="flex flex-col space-y-3 font-serif text-base text-[#252523]">
            <a 
              href="#catalogue" 
              onClick={() => setIsOpen(false)}
              className="py-1.5 border-b border-[#ece8dd] flex items-center justify-between hover:text-[#935d48] transition-colors"
            >
              <span>Invitation Catalogue</span>
              <span className="text-xs font-sans text-[#686762] bg-[#ece8dd] px-2.5 py-0.5 rounded-full">9 Designs</span>
            </a>
            <a 
              href="#packages" 
              onClick={() => setIsOpen(false)}
              className="py-1.5 border-b border-[#ece8dd] flex items-center justify-between hover:text-[#935d48] transition-colors"
            >
              <span>Pricing & Packages</span>
              <span className="text-xs font-sans text-[#252523] bg-[#ece8dd] px-2 py-0.5 rounded-full font-medium">From ₹1,000</span>
            </a>
            <a 
              href="#faq" 
              onClick={() => setIsOpen(false)}
              className="py-1.5 border-b border-[#ece8dd] hover:text-[#935d48] transition-colors"
            >
              Frequently Asked Questions
            </a>
          </nav>

          <div className="pt-2">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#434839] hover:bg-[#34382c] text-[#f6f4ee] text-xs font-sans font-medium tracking-[0.18em] uppercase transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
