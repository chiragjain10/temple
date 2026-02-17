import React from 'react';
import { Calendar, Star, Users, Music, Heart, Sparkles } from 'lucide-react';

const PanchKalyan = ({ language = 'en' }) => {
  const content = {
    en: {
      title: "Panch Kalyan Mahotsav 2026",
      subtitle: "Witness the Grandest Spiritual Celebration of the Decade",
      status: "Coming Soon | 2026",
      description: "Join us for the auspicious Panch Kalyan Pratishtha Mahotsav at Shri Digambar Jain Atishay Kshetra Pateriyaji. A 5-day divine journey celebrating the five auspicious events in the life of a Tirthankara.",
      events: [
        {
          title: "Garbha Kalyanak",
          meaning: "Conception",
          desc: "Celebrating the descent of the soul into the mother's womb, marking the beginning of a divine journey.",
          icon: <Sparkles className="w-6 h-6" />
        },
        {
          title: "Janma Kalyanak",
          meaning: "Birth",
          desc: "The grand celebration of the Tirthankara's birth, featuring the majestic Janmabhisheka on Mount Meru.",
          icon: <Star className="w-6 h-6" />
        },
        {
          title: "Tapa Kalyanak",
          meaning: "Renunciation",
          desc: "The path of renunciation where the Lord gives up worldly possessions to seek the ultimate truth.",
          icon: <Heart className="w-6 h-6" />
        },
        {
          title: "Gyan Kalyanak",
          meaning: "Omniscience",
          desc: "Attainment of Kevala Jnana (Absolute Knowledge) and the divine preaching (Samavasarana).",
          icon: <Music className="w-6 h-6" /> // Symbolizing divine sound
        },
        {
          title: "Moksha Kalyanak",
          meaning: "Liberation",
          desc: "The final liberation of the soul from the cycle of birth and death, attaining eternal bliss.",
          icon: <Users className="w-6 h-6" /> // Symbolizing devotees witnessing
        }
      ],
      cta: "Join the Divine Celebration",
      ctaDesc: "Be a part of history. Contribute and participate in this meritorious event.",
      contactBtn: "Contact Committee"
    },
    hi: {
      title: "पंचकल्याणक महोत्सव 2026",
      subtitle: "दशक के सबसे भव्य आध्यात्मिक उत्सव के साक्षी बनें",
      status: "शीघ्र आ रहा है | 2026",
      description: "श्री दिगम्बर जैन अतिशय क्षेत्र पटेरियाजी में आयोजित होने वाले भव्य पंचकल्याणक प्रतिष्ठा महोत्सव में शामिल हों। तीर्थंकर के जीवन की पांच मंगलमय घटनाओं का उत्सव मनाने वाली 5 दिवसीय दिव्य यात्रा।",
      events: [
        {
          title: "गर्भ कल्याणक",
          meaning: "गर्भावतरण",
          desc: "माता के गर्भ में आत्मा के अवतरण का उत्सव, जो एक दिव्य यात्रा की शुरुआत का प्रतीक है।",
          icon: <Sparkles className="w-6 h-6" />
        },
        {
          title: "जन्म कल्याणक",
          meaning: "जन्मोत्सव",
          desc: "तीर्थंकर के जन्म का भव्य उत्सव, जिसमें सुमेरु पर्वत पर भव्य जन्माभिषेक शामिल है।",
          icon: <Star className="w-6 h-6" />
        },
        {
          title: "तप कल्याणक",
          meaning: "दीक्षा",
          desc: "त्याग का मार्ग जहां प्रभु परम सत्य की खोज के लिए सांसारिक वैभव का त्याग करते हैं।",
          icon: <Heart className="w-6 h-6" />
        },
        {
          title: "ज्ञान कल्याणक",
          meaning: "केवलज्ञान",
          desc: "केवल ज्ञान की प्राप्ति और दिव्य उपदेश (समवशरण) की रचना।",
          icon: <Music className="w-6 h-6" />
        },
        {
          title: "मोक्ष कल्याणक",
          meaning: "निर्वाण",
          desc: "जन्म और मृत्यु के चक्र से आत्मा की अंतिम मुक्ति और शाश्वत सुख की प्राप्ति।",
          icon: <Users className="w-6 h-6" />
        }
      ],
      cta: "इस दिव्य उत्सव में शामिल हों",
      ctaDesc: "इतिहास का हिस्सा बनें। इस पुण्य कार्य में सहयोग करें और भाग लें।",
      contactBtn: "समिति से संपर्क करें"
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-[#fffcf7] pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none"></div>

      {/* Hero Section */}
      <div className="max-w-site mx-auto text-center mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#d97706] to-[#b45309] text-white rounded-full text-sm font-bold tracking-widest uppercase mb-8 shadow-lg animate-pulse">
          <Calendar size={16} />
          {t.status}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-cinzel font-black text-[#5c2415] mb-6 drop-shadow-sm leading-tight">
          {t.title}
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[2px] w-16 md:w-32 bg-[#d97706]"></div>
            <div className="text-3xl text-[#d97706]">❖</div>
            <div className="h-[2px] w-16 md:w-32 bg-[#d97706]"></div>
        </div>

        <p className="text-xl md:text-2xl text-[#5c2415] font-playfair max-w-3xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
        <p className="mt-6 text-[#78350f] text-lg max-w-2xl mx-auto">
          {t.description}
        </p>
      </div>

      {/* Events Timeline/Grid */}
      <div className="max-w-site mx-auto relative z-10 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {t.events.map((event, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (Desktop) */}
              {index < 4 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-[#fed7aa] -z-10"></div>
              )}
              
              <div className="bg-white p-6 rounded-lg border border-[#fed7aa] shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#fff7ed] to-[#fed7aa] rounded-full flex items-center justify-center text-[#d97706] mb-4 shadow-inner group-hover:scale-110 transition-transform duration-500 border-2 border-white">
                  {event.icon}
                </div>
                
                <h3 className="text-lg font-cinzel font-bold text-[#5c2415] mb-1">
                  {event.title}
                </h3>
                <span className="text-xs font-bold text-[#d97706] uppercase tracking-wider mb-3 block">
                  {event.meaning}
                </span>
                
                <p className="text-sm text-[#57534e] leading-relaxed">
                  {event.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-gradient-to-br from-[#5c2415] to-[#431407] p-10 md:p-16 rounded-2xl shadow-2xl relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#d97706] opacity-10 rounded-full -ml-24 -mb-24"></div>

          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-[#fff7ed] mb-4">
            {t.cta}
          </h2>
          <p className="text-[#fed7aa] text-lg mb-8 font-playfair">
            {t.ctaDesc}
          </p>
          
          <button className="px-10 py-4 bg-gradient-to-r from-[#d97706] to-[#b45309] text-white font-cinzel font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(217,119,6,0.6)] transition-all duration-300 transform hover:scale-105 border border-[#fbbf24]/30">
            {t.contactBtn}
          </button>
        </div>
      </div>

    </div>
  );
};

export default PanchKalyan;