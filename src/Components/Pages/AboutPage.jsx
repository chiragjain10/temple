import React from 'react';
import { 
  History, Landmark, MapPin, ScrollText, Award, Users, 
  Music, Waves, Sparkles, Car, Bed, Phone, Zap, 
  Milestone, Utensils, Construction, ShieldCheck
} from 'lucide-react';

const AboutPage = ({ language = 'hi' }) => {
  const content = {
    en: {
      title: "Shri Digambar  Jain Atishay Kshetra Pateriyaji",
      subtitle: "A 244-year-old living treasury of Jain culture, history, and divine miracles.",
      shloka: "Pārśvanātha kē yuga caraṇa bandōṁ śīṣa navāya, Atiśaya kṣētra patēriyā namana karūm̐ śiranāya.",
      historyTitle: "Legacy & Legend",
      historyText: "Located in Garhakota, Sagar (MP), this Kshetra is known as the 'Temple of Jhunjhuniya' due to the celestial sounds of bells and instruments heard at midnight. Established in 1839 (V.S.) by Shah Mohan Das Ramkishun Ji, the temple was built under the royal protection of Maharaja Harisingh Ju Dev Bundela. Remarkably, the construction was funded by a single day's profit from the cotton trade.",
      architectureTitle: "The Craftsmanship",
      architectureText: "Stepping away from Mughal influences, the temple is a rare specimen of pure Indian architecture blended with Maratha styles. It features a massive 'Parakota' (fortified wall) and an intricate 'Antah Parikrama' that reflects the deep-rooted Indian identity of its creators.",
      deityTitle: "Sacred Idols",
      deityText: "The sanctum houses three 7-foot tall idols of Lord Parshvanath: Chintamani, Trifarni, and Savliya Parshvanath. Additionally, the outer parikrama holds a rare black-stone idol of Lord Mahavir recovered from the Garhakota Fort and a magnificent Sahasrafarni Parshvanath.",
      miraclesTitle: "Divine Atishay",
      attractionsTitle: "Key Highlights",
      connectivityTitle: "Pilgrimage Access",
      stayTitle: "Guest Facilities",
      stats: [
        { label: "Established", value: "V.S. 1839" },
        { label: "Main Idols", value: "03" },
        { label: "AC Suites", value: "30" },
        { label: "Heritage", value: "244 Yrs" }
      ]
    },
    hi: {
      title: "श्री दिगंबर जैन अतिशय क्षेत्र पटेरियाजी",
      subtitle: "जैन संस्कृति, इतिहास और दिव्य अतिशयों का २४४ वर्षीय जीवंत कोषागार।",
      shloka: "पार्श्वनाथ के युग चरण बन्दों शीश नवाय, अतिशय क्षेत्र पटेरिया नमन करूँ शिरनाय",
      historyTitle: "गौरवशाली इतिहास",
      historyText: "गढ़ाकोटा (सागर) में स्थित यह क्षेत्र 'झुनझुनिया का मंदिर' के नाम से प्रसिद्ध है, क्योंकि मध्य रात्रि में यहाँ देवकृत वाद्यों की ध्वनि सुनाई देती है। इसकी प्रतिष्ठा माघ सुदी अष्टमी संवत 1839 को महाराजा हरिसिंहजू देव बुन्देला के संरक्षण में शाह मोहनदास रामकिशुन जी द्वारा कराई गई थी। इस भव्य मंदिर का निर्माण मात्र एक दिन के रूई व्यापार की आय से हुआ था।",
      architectureTitle: "वास्तुकला एवं स्थापत्य",
      architectureText: "मुगल वास्तु प्रतीकों के स्थान पर यहाँ मराठा शैली मिश्रित विशुद्ध भारतीय स्थापत्य को अपनाया गया है। विशाल परकोटा और अंतः परिक्रमा मार्ग निर्माताओं की भारतीय दृष्टि का जीवंत प्रमाण हैं, जो सदियों से अपनी भव्यता बनाए हुए है।",
      deityTitle: "मूलनायक एवं प्रतिमाएँ",
      deityText: "यहाँ भगवान पार्श्वनाथ की ७ फुट ऊँची तीन पद्मासन प्रतिमाएँ—चिंतामणी, त्रिफर्णी एवं सावलिया पार्श्वनाथ—विराजमान हैं। साथ ही, किले से प्राप्त भगवान महावीर की कृष्णवर्ण प्रतिमा और सहस्त्रफर्णी पार्श्वनाथ की खडगासन प्रतिमा भी दर्शनार्थियों के आकर्षण का केंद्र हैं।",
      miraclesTitle: "क्षेत्र के अतिशय",
      attractionsTitle: "प्रमुख आकर्षण",
      connectivityTitle: "कैसे पहुँचें",
      stayTitle: "आवास एवं सुविधाएँ",
      stats: [
        { label: "स्थापना", value: "संवत १८३९" },
        { label: "पद्मासन प्रतिमाएं", value: "०३" },
        { label: "AC कमरे", value: "३०" },
        { label: "प्राचीनता", value: "२४४ वर्ष" }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-[#fffcf7] text-[#44403c] selection:bg-[#fed7aa] selection:text-[#78350f]">
      {/* Decorative Top Border */}
      <div className="h-2 bg-gradient-to-r from-[#5c2415] via-[#d97706] to-[#5c2415]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20">
        
        {/* --- SECTION: HERO --- */}
        <header className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 opacity-10">
            <Landmark size={200} strokeWidth={1} />
          </div>
          
          <span className="inline-block py-1.5 px-6 border border-[#d97706]/30 rounded-full bg-[#fff7ed] text-[#9a3412] text-xs font-bold tracking-[0.3em] uppercase mb-8 animate-fade-in">
             {language === 'hi' ? 'अतिशय क्षेत्र गढ़ाकोटा' : 'Sacred Heritage of Garhakota'}
          </span>
          
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold text-[#5c2415] mb-8 leading-tight tracking-tight">
            {t.title}
          </h1>

          <div className="relative max-w-3xl mx-auto">
             <div className="absolute -left-8 top-0 text-4xl text-[#d97706] opacity-30 font-serif">“</div>
             <p className="text-[#9a3412] font-cinzel font-bold mb-6 text-xl md:text-2xl leading-relaxed italic">
                {t.shloka}
             </p>
             <p className="text-xl text-[#78350f] font-playfair italic leading-relaxed opacity-80">
                {t.subtitle}
             </p>
          </div>
        </header>

        {/* --- SECTION: QUICK STATS BAR --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-y border-[#fed7aa] py-10 mb-24 bg-[#fffcf7]/50 backdrop-blur-sm">
          {t.stats.map((stat, i) => (
            <div key={i} className={`text-center ${i !== 3 ? 'md:border-r border-[#fed7aa]/50' : ''}`}>
              <div className="text-3xl md:text-4xl font-cinzel font-bold text-[#d97706] mb-2">{stat.value}</div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#9a3412] font-bold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* --- SECTION: HISTORY & ARCHITECTURE (Asymmetric Grid) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#fed7aa]/20 rounded-full blur-3xl"></div>
            <div className="relative bg-white p-4 shadow-2xl border border-[#fed7aa] transform -rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="img/Gallery/gp (11).jpeg" 
                alt="Temple Architecture" 
                className="w-full h-[500px] object-cover"
              />
              <div className="p-6 text-center">
                <p className="font-cinzel text-[#5c2415] font-bold text-sm tracking-widest uppercase">
                  {language === 'hi' ? 'प्राचीन भव्य जिनालय' : 'Ancient Divine Temple'}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-4 mb-6">
                <History className="text-[#d97706]" size={32} />
                <h2 className="text-4xl font-cinzel font-bold text-[#5c2415]">{t.historyTitle}</h2>
              </div>
              <p className="text-[#57534e] text-lg leading-relaxed font-playfair text-justify first-letter:text-5xl first-letter:font-cinzel first-letter:text-[#d97706] first-letter:mr-3">
                {t.historyText}
              </p>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-6">
                <Landmark className="text-[#d97706]" size={32} />
                <h2 className="text-4xl font-cinzel font-bold text-[#5c2415]">{t.architectureTitle}</h2>
              </div>
              <p className="text-[#57534e] text-lg leading-relaxed font-playfair text-justify">
                {t.architectureText}
              </p>
            </section>
          </div>
        </div>

        {/* --- SECTION: THE DEITY (Centered Grandeur) --- */}
        <div className="bg-[#fff7ed] border-y border-[#fed7aa] -mx-6 lg:-mx-12 px-6 lg:px-12 py-24 mb-32">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="mx-auto text-[#d97706] mb-6" size={48} />
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-[#5c2415] mb-8">{t.deityTitle}</h2>
            <p className="text-xl text-[#78350f] font-playfair italic leading-relaxed mb-12">
              {t.deityText}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {['चिंतामणी', 'त्रिफर्णी', 'सावलिया'].map((name, idx) => (
                 <div key={idx} className="p-4 border border-[#d97706]/20 bg-white shadow-sm rounded-lg font-cinzel font-bold text-[#9a3412]">
                   {name} पार्श्वनाथ
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* --- SECTION: ATISHAY & ATTRACTIONS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
           {/* Left: Atishay Cards */}
           <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-cinzel font-bold text-[#5c2415] flex items-center gap-3">
                <Zap className="text-[#d97706]" /> {t.miraclesTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group bg-[#5c2415] p-8 rounded-2xl text-white transition-all hover:-translate-y-2">
                   <Waves className="text-[#fbbf24] mb-4" size={32} />
                   <h3 className="text-xl font-cinzel font-bold mb-4">{language === 'hi' ? 'अतिशय कुण्ड' : 'Atishay Kund'}</h3>
                   <p className="text-white/70 text-sm font-playfair leading-relaxed">
                     {language === 'hi' ? 'साधना के प्रभाव से इस कुण्ड का जल घी में परिवर्तित हो गया था।' : 'The water of this pond turned into Ghee to feed the masses during consecration.'}
                   </p>
                </div>
                <div className="group bg-white border border-[#fed7aa] p-8 rounded-2xl text-[#5c2415] transition-all hover:-translate-y-2 shadow-xl">
                   <ShieldCheck className="text-[#d97706] mb-4" size={32} />
                   <h3 className="text-xl font-cinzel font-bold mb-4">{language === 'hi' ? 'अतिशय स्तम्भ' : 'Atishay Stambh'}</h3>
                   <p className="text-[#57534e] text-sm font-playfair leading-relaxed">
                     {language === 'hi' ? 'स्तम्भ की ३ प्रदक्षिणा करने से शारीरिक पीड़ाओं का नाश होता है।' : 'Three circumambulations of this pillar are believed to heal ailments and fevers.'}
                   </p>
                </div>
              </div>
              {/* 1992 Event Card */}
              <div className="bg-[#fffbeb] border-l-4 border-[#d97706] p-8 rounded-r-2xl">
                 <h4 className="font-cinzel font-bold text-[#9a3412] mb-2">20 August 1992</h4>
                 <p className="text-[#78350f] font-playfair italic">
                    {language === 'hi' ? 'तीनों प्रतिमाओं से मध्य रात्रि तक जल प्रवाह हुआ, जिसे हजारों ने देखा।' : 'A miraculous flow of water from the three idols was witnessed by thousands until midnight.'}
                 </p>
              </div>
           </div>

           {/* Right: List of Highlights */}
           <div className="bg-white border border-[#fed7aa] p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-cinzel font-bold text-[#5c2415] mb-8 flex items-center gap-3">
                <Award className="text-[#d97706]" /> {t.attractionsTitle}
              </h2>
              <ul className="space-y-4">
                {[
                  { hi: 'क्षेत्रपाल बाबा - मनोकामना पूर्ति', en: 'Kshetrapal Baba - Wishes' },
                  { hi: 'नवीन मान स्तम्भ एवं कीर्ति स्तम्भ', en: 'New Manastambh & Kirti Stambh' },
                  { hi: 'मुक्ति श्री माताजी समाधि स्थली', en: 'Muktishri Mataji Samadhi' },
                  { hi: 'किले से प्राप्त प्राचीन महावीर प्रतिमा', en: 'Ancient Mahavir Idol (Fort)' },
                  { hi: 'भक्तिमय झुनझुनिया मंदिर गूँज', en: 'Celestial Bells Sound' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 border-b border-[#fed7aa]/30 pb-3 text-sm font-playfair text-[#57534e]">
                    <span className="text-[#d97706] mt-1">•</span>
                    {language === 'hi' ? item.hi : item.en}
                  </li>
                ))}
              </ul>
           </div>
        </div>

        {/* --- SECTION: TRAVEL & STAY (Modern Grid) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#fed7aa] pt-20">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-[#d97706]">
              <Car size={28} />
              <h3 className="text-2xl font-cinzel font-bold text-[#5c2415]">{t.connectivityTitle}</h3>
            </div>
            <div className="space-y-4 font-playfair text-[#57534e]">
              <div className="flex justify-between border-b border-[#fed7aa]/20 pb-2">
                <span>{language === 'hi' ? 'दमोह' : 'Damoh'}</span> <span className="font-bold">32 km</span>
              </div>
              <div className="flex justify-between border-b border-[#fed7aa]/20 pb-2">
                <span>{language === 'hi' ? 'सागर' : 'Sagar'}</span> <span className="font-bold">45 km</span>
              </div>
              <div className="flex justify-between border-b border-[#fed7aa]/20 pb-2">
                <span>{language === 'hi' ? 'जबलपुर' : 'Jabalpur'}</span> <span className="font-bold">130 km</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-[#d97706]">
              <Bed size={28} />
              <h3 className="text-2xl font-cinzel font-bold text-[#5c2415]">{t.stayTitle}</h3>
            </div>
            <ul className="grid grid-cols-1 gap-3 font-playfair text-[#57534e]">
              <li className="flex items-center gap-2"><Utensils size={14} /> {language === 'hi' ? '३० AC कमरे (अटैच)' : '30 AC Suites'}</li>
              <li className="flex items-center gap-2"><Users size={14} /> {language === 'hi' ? 'भोजनशाला एवं संत भवन' : 'Mess & Saint Bhavan'}</li>
              <li className="flex items-center gap-2"><Construction size={14} /> {language === 'hi' ? 'विस्तृत पार्किंग एवं हॉल' : 'Large Parking & Hall'}</li>
            </ul>
          </div>

          <div className="bg-[#5c2415] p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
              <Phone size={80} />
            </div>
            <h3 className="text-xl font-cinzel font-bold mb-6 flex items-center gap-3">
               <Phone size={20} className="text-[#fbbf24]" /> 
               {language === 'hi' ? 'संपर्क करें' : 'Contact Us'}
            </h3>
            <div className="text-3xl font-cinzel font-bold mb-2 tracking-tighter">9300581108</div>
            <p className="text-xs text-white/60 uppercase tracking-widest mb-6">
               {language === 'hi' ? 'शांतिधारा हेतु एक दिन पूर्व सूचित करें' : 'Inform 1 day prior for Shantidhara'}
            </p>
            <div className="text-sm font-playfair text-white/80 italic">
               Garhakota, Dist. Sagar (M.P.)
            </div>
          </div>
        </div>

      </div>

      {/* Footer Decoration */}
      <div className="bg-[#5c2415] py-8 text-center border-t border-[#d97706]/30">
        <p className="text-[#fed7aa] font-cinzel text-xs tracking-[0.5em] uppercase opacity-60">
           Shri Digambar Jain Atishay Kshetra Pateriyaji
        </p>
      </div>
    </div>
  );
};

export default AboutPage;