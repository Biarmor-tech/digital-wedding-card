import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/cards';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Biarmor! I saw your digital wedding cards catalogue and want to order one.")}`;

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-5 right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Order on WhatsApp"
        title="Order on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
      </a>
    </aside>
  );
}
