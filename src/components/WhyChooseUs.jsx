import React from 'react';
import { Music, MapPin, Smartphone, HeartHandshake, Zap, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <Music className="w-6 h-6 text-amber-700" />,
      title: "Custom Background Music",
      desc: "Set the emotional tone with your favourite romantic melody, prayer hymn, or instrumental song that plays as guests open your card."
    },
    {
      icon: <MapPin className="w-6 h-6 text-emerald-700" />,
      title: "One-Tap Google Maps Direction",
      desc: "Guests will never get lost asking for directions. A single tap launches Google Maps navigation straight to your church, hall, or venue."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-700" />,
      title: "Superfast 24h Turnaround",
      desc: "Running short on time? We prepare and deliver your interactive preview in 24 hours so you can start inviting guests immediately."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-purple-700" />,
      title: "1-Click WhatsApp Sharing",
      desc: "Send high-converting, gorgeous link previews with couple photos directly to individual WhatsApp chats, family groups, and social feeds."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-rose-700" />,
      title: "Interactive RSVP Tracking",
      desc: "Know who is attending ahead of time. Receive instant RSVP confirmations sent straight to your WhatsApp."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-700" />,
      title: "Eco-Friendly & Unlimited",
      desc: "Zero printing delays, zero postage waste. Share with 50 or 5,000 guests worldwide without extra cost."
    }
  ];

  return (
    <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6">
      
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-widest font-semibold text-biarmor-gold">
          The Modern Advantage
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-biarmor-navy mt-1 mb-3">
          Why Digital Wedding Cards?
        </h2>
        <p className="text-stone-600 text-sm sm:text-base font-light">
          Compared to old-fashioned paper cards or boring static PDFs, Biarmor digital invitations provide a truly royal experience.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <div 
            key={i}
            className="p-6 rounded-2xl bg-white border border-[#e2d9cb] hover:border-biarmor-gold shadow-sm hover:shadow-luxury transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#faf8f5] border border-[#e8e2d5] flex items-center justify-center mb-4">
              {b.icon}
            </div>
            <h3 className="font-serif text-lg font-semibold text-biarmor-navy mb-2">
              {b.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {b.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
