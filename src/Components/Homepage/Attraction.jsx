import React from 'react';
import { Sparkles, Map, Landmark, ScrollText, Users, MoveRight } from 'lucide-react';

const AttractionsSection = ({ language }) => {
  // 1. Content Object - Spiritual Narratives
  const attractionsContent = {
    en: {
      sectionTitle: "Divine Attractions",
      sectionSubtitle: "Sacred Landmarks & Spiritual Wonders",
      items: [
        {
          id: 1,
          title: "Lord Tripharni Parshvanath",
          description: "A breathtakingly beautiful and miraculous idol. On a single pedestal, three magnificent 7-foot tall idols of Lord Parshvanath are seated in the Padmasana posture, radiating eternal peace.",
          tag: "Main Idol",
          icon: <Sparkles size={20} />
        },
        {
          id: 2,
          title: "Parikrama Statues",
          description: "The sacred circumambulation path houses the divine idols of Sahastrafarni Parshvanath and Lord Mahaveer, inviting devotees to deep meditation.",
          tag: "Sanctum",
          icon: <Landmark size={20} />
        },
        {
          id: 3,
          title: "The Legend of Cotton Trade",
          description: "The temple's miraculous history tells of its construction being funded by the proceeds of a single day's cotton trade, a testament to divine grace.",
          tag: "Miracle",
          icon: <ScrollText size={20} />
        },
        {
          id: 4,
          title: "Kshetrapal Baba",
          description: "Located to the right of the main entrance, the shrine of Kshetrapal Baba stands as the guardian deity of this holy land.",
          tag: "Guardian",
          icon: <Map size={20} />
        },
        {
          id: 5,
          title: "Manastambha & Kirtistambha",
          description: "The majestic Column of Humility (Manastambha) stands in the East, while the Column of Glory (Kirtistambha) graces the Northern direction.",
          tag: "Architecture",
          icon: <Landmark size={20} />
        },
        {
          id: 6,
          title: "Sant Bhavan & Samadhi Sthal",
          description: "The Eastern side houses the Sant Bhavan. The Kshetra also marks the sacred Samadhi Sthal of the mother of Upadhyay Shri Gupti Sagar Ji Maharaj.",
          tag: "Heritage",
          icon: <Users size={20} />
        }
      ],
      cta: "Plan Your Visit"
    },
    hi: {
      sectionTitle: "क्षेत्र के आकर्षण",
      sectionSubtitle: "पावन स्थल एवं आध्यात्मिक केंद्र",
      items: [
        {
          id: 1,
          title: "भगवान त्रिफर्णी पार्श्वनाथ",
          description: "भगवान त्रिफर्णी पार्श्वनाथ की प्रतिमा अति मनोज्ञ एवं अतिशयकारी है। एक ही वेदी पर भगवान पार्श्वनाथ की लगभग 7 फुट ऊँची तीन पद्मासन प्रतिमायें सुशोभित हैं।",
          tag: "मुख्य प्रतिमा",
          icon: <Sparkles size={20} />
        },
        {
          id: 2,
          title: "परिक्रमा की प्रतिमायें",
          description: "मंदिर की परिक्रमा में सहस्त्रफर्णी पार्श्वनाथ एवं भगवान महावीर की प्रतिमायें विराजमान हैं, जो भक्तों को भाव-विभोर कर देती हैं।",
          tag: "गर्भगृह",
          icon: <Landmark size={20} />
        },
        {
          id: 3,
          title: "कपास व्यापार का अतिशय",
          description: "क्षेत्र का एक बड़ा अतिशय यह है कि इस विशाल जिनालय का निर्माण मात्र एक दिन की रूई (कपास) के व्यापार से प्राप्त लाभ से हुआ था।",
          tag: "अतिशय",
          icon: <ScrollText size={20} />
        },
        {
          id: 4,
          title: "क्षेत्रपाल बाबा",
          description: "प्रवेश द्वार के दाहिनी ओर क्षेत्रपाल बाबा का स्थान है, जो इस पावन क्षेत्र के रक्षक देवता के रूप में पूजे जाते हैं।",
          tag: "रक्षक देव",
          icon: <Map size={20} />
        },
        {
          id: 5,
          title: "मान स्तम्भ एवं कीर्ति स्तम्भ",
          description: "मंदिर के पूर्व में भव्य मान स्तम्भ स्थित है और उत्तर दिशा में भव्य कीर्ति स्तम्भ जैन वास्तुकला की शोभा बढ़ा रहे हैं।",
          tag: "वास्तुकला",
          icon: <Landmark size={20} />
        },
        {
          id: 6,
          title: "संत भवन एवं समाधि स्थली",
          description: "पूर्व दिशा में संत भवन स्थित है। यहाँ उपाध्याय श्री गुप्ति सागर जी महाराज जी की माताजी की पावन समाधि स्थली भी स्थित है।",
          tag: "विरासत",
          icon: <Users size={20} />
        }
      ],
      cta: "आगमन की योजना बनाएं"
    }
  };

  const t = attractionsContent[language];

  return (
    <section className="py-24 bg-[#fffcf7] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] transform rotate-180"></div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30 -ml-48 -mb-48"></div>

      <div className="max-w-site mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#d97706]"></div>
            <span className="text-[#9a3412] font-cinzel font-bold uppercase tracking-[0.2em] text-sm">
              Jai Jinendra
            </span>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#d97706]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-[#5c2415] mb-6 drop-shadow-sm">
            {t.sectionTitle}
          </h2>
          <p className="text-[#9a3412] text-lg font-playfair italic">
            {t.sectionSubtitle}
          </p>
          <div className="flex justify-center mt-6">
             <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d97706] to-transparent"></div>
          </div>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item) => (
            <div 
              key={item.id}
              className="group bg-white border border-[#fed7aa] p-8 rounded-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-4px_rgba(217,119,6,0.2)] transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Card Accent Overlay */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-12 -mt-12 group-hover:bg-[#9a3412] transition-colors duration-500 z-0"></div>
              
              {/* Ornamental Border */}
              <div className="absolute inset-0 border border-[#fff7ed] m-1 pointer-events-none"></div>
              <div className="absolute inset-0 border border-[#ffedd5] m-2 pointer-events-none"></div>

              {/* Tag & Icon */}
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#fff7ed] to-[#ffedd5] rounded-full flex items-center justify-center text-[#d97706] group-hover:text-[#9a3412] border border-[#fed7aa] shadow-sm transition-all duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#9a3412] bg-orange-50 px-3 py-1 rounded-full border border-orange-100 group-hover:bg-[#fff7ed] transition-colors">
                  {item.tag}
                </span>
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-cinzel font-bold text-[#5c2415] mb-4 group-hover:text-[#9a3412] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base font-playfair mb-6">
                  {item.description}
                </p>
              </div>
              
              {/* Subtle Divider */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fed7aa] via-[#d97706] to-[#fed7aa] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#d97706] to-[#b45309] text-white px-10 py-4 rounded-full font-cinzel font-bold tracking-widest hover:shadow-[0_0_20px_rgba(217,119,6,0.5)] transition-all duration-300 border border-[#fdba74]/30 group relative overflow-hidden hover:scale-105">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></span>
            {t.cta}
            <MoveRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;