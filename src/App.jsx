import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PricingTiers from './components/PricingTiers';
import CardItem from './components/CardItem';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { CARDS_DATA, CATEGORIES } from './data/cards';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCards = useMemo(() => {
    return CARDS_DATA.filter((card) => {
      if (selectedCategory === 'all') return true;
      return card.category?.includes(selectedCategory);
    });
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f4ee] text-[#252523] font-sans selection:bg-[#935d48] selection:text-white antialiased">
      
      {/* InviteAtelier Header (Brand Serif + Clean Hamburger) */}
      <Navbar />

      {/* InviteAtelier Hero Section */}
      <Hero />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl mx-auto px-2.5 sm:px-4 md:px-6 w-full">
        
        {/* Packages Section (Scroll, Basic, Static) */}
        <PricingTiers />

        {/* Hairline Section Divider */}
        <div className="my-8 sm:my-10 border-t border-[#e2ded4] max-w-5xl mx-auto" />

        {/* Catalogue Section */}
        <section id="catalogue" className="pb-10 sm:pb-14 pt-1 max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-6 px-2">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-[#9d6650] rounded-full" />
              <span className="text-[10px] font-sans font-medium uppercase tracking-[0.22em] text-[#686762]">
                Portfolio Showcase
              </span>
              <span className="w-6 h-[1.5px] bg-[#9d6650] rounded-full" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#252523] mb-2">
              Our Recent Works
            </h2>
            <p className="text-xs sm:text-sm text-[#686762] font-light leading-relaxed">
              Every invitation is designed from scratch. Static designs ₹1,000 · Basic animations ₹1,500 · Scroll animations ₹2,500. Tap any design to see it live.
            </p>
          </div>

          {/* Minimal Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-3 mb-4 px-1 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium whitespace-nowrap transition-all duration-200 shrink-0 font-sans ${
                    isActive
                      ? 'bg-[#434839] text-[#f6f4ee] shadow-2xs'
                      : 'bg-white text-[#686762] border border-[#e2ded4] hover:bg-[#edeae1] hover:text-[#252523]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Cards Count */}
          <div className="text-[10px] sm:text-[11px] text-[#8a8882] text-center mb-4 font-sans">
            Showing {filteredCards.length} designs
          </div>

          {/* Responsive Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-4">
            {filteredCards.map((card) => (
              <CardItem key={card.id} card={card} />
            ))}
          </div>

        </section>

        {/* Hairline Section Divider */}
        <div className="my-8 sm:my-10 border-t border-[#e2ded4] max-w-5xl mx-auto" />

        {/* FAQ Section */}
        <FAQ />

      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

    </div>
  );
}
