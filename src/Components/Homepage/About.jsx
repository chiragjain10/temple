import React from 'react';
import { Compass, Calendar, MapPin, ChevronRight, Landmark, History } from 'lucide-react';

const FeaturesSection = ({ language }) => {
  // 1. Content Object - Integrated Historical & Spiritual Context
  const featuresContent = {
    en: {
      sectionTitle: "Tirth Splendor",
      sectionSubtitle: "Architectural Marvel & Historical Legacy",
      blocks: [
        {
          id: "architecture",
          title: "Architectural Features",
          description: "A living treasury of Indian heritage, this temple stands as a rare specimen of architectural defiance. Built approximately 244 years ago, its creators consciously rejected contemporary Mughal symbols like domes and arches, opting instead for a pure Indian style blended with Maratha architecture, featuring a massive 'Parakota' and internal circumambulation paths.",
          highlight: "A rare blend of Maratha influence and pure Indian Vastu Shastra.",
          icon: <Landmark className="text-orange-600" size={32} />,
          image: "img/Gallery/99.png"
        },
        {
          id: "construction",
          title: "Construction Period",
          description: "The temple's Pratishta was celebrated on Magh Sudi Ashtami, Samvat 1839, by Shah Mohan Das Ramkishun Ji under the royal patronage of Maharaja Harisingh Ju Dev Bundela. Interestingly, the construction was funded by a single day's profit from the cotton trade. Due to the divine sounds of instruments heard at midnight, it is fondly called the 'Temple of Jhunjhuniya'.",
          highlight: "Consecrated on Magh Sudi Ashtami, Samvat 1839 (1832 AD).",
          icon: <History className="text-orange-600" size={32} />,
          image: "img/Gallery/gp (5).jpeg"
        },
        {
          id: "location",
          title: "Location & Accessibility",
          description: "Shri Parshvanath Digambar Jain Atishay Kshetra Pateriya Ji is located in Gadhakota, Sagar district, M.P. It is situated 45km from Sagar and 32km from Damoh on the Jabalpur-Sagar highway. Its geographic location makes it a vital spiritual stop for pilgrims traveling through the heart of Bundelkhand.",
          highlight: "Located on the Jabalpur-Sagar Road, Gadhakota, Dist. Sagar (M.P.)",
          icon: <MapPin className="text-orange-600" size={32} />,
          image: "img/Gallery/gp (12).jpeg"
        }
      ],
      viewMap: "View on Google Maps"
    },
    hi: {
      sectionTitle: "तीर्थ वैभव",
      sectionSubtitle: "वास्तुकला वैभव एवं ऐतिहासिक विरासत",
      blocks: [
        {
          id: "architecture",
          title: "विशेषताएं",
          description: "लगभग २४४ वर्ष पूर्व निर्मित यह मंदिर अपनी विशिष्ट पहचान रखता है। उस काल में निर्माताओं ने गुबंद और महराबों जैसे मुगल वास्तु प्रतीकों के स्थान पर मराठा शैली मिश्रित विशुद्ध भारतीय स्थापत्य को अपनाया। विशाल परकोटा, प्रदक्षिणा पथ एवं अंतः परिक्रमा निर्माताओं की भारतीयता का जीवंत प्रमाण हैं जो आज भी अक्षुण्ण है।",
          highlight: "मराठा शैली और विशुद्ध भारतीय स्थापत्य का दुर्लभ संगम।",
          icon: <Landmark className="text-orange-600" size={32} />,
          image: "img/Gallery/99.png"
        },
        {
          id: "construction",
          title: "निर्माण काल",
          description: "मंदिर की प्रतिष्ठा माघ सुदी अष्टमी संवत १८३९ को महाराजा हरिसिंहजू देव बुन्देला के संरक्षण में शाह मोहनदास रामकिशुन जी द्वारा कराई गई थी। इस भव्य जिनालय का निर्माण एक दिन की रूई व्यापार की आय से हुआ था। रात्रि में यहाँ देवकृत वाद्यों की ध्वनि सुनाई देने के कारण स्थानीय लोग इसे 'झुनझुनिया का मंदिर' भी कहते हैं।",
          highlight: "माघ सुदी अष्टमी संवत १८३९ को प्रतिष्ठित।",
          icon: <History className="text-orange-600" size={32} />,
          image: "img/Gallery/gp (5).jpeg"
        },
        {
          id: "location",
          title: "अवस्थिति",
          description: "श्री पार्श्वनाथ दिगम्बर जैन अतिशय क्षेत्र पटेरिया जी सागर जिले के गढ़ाकोटा में, जबलपुर-सागर मार्ग पर स्थित है। यह दमोह से ३२ किमी और सागर से ४५ किमी की दूरी पर है। इसकी भौगोलिक स्थिति इसे बुन्देलखण्ड के हृदय क्षेत्र से गुजरने वाले तीर्थयात्रियों के लिए एक मुख्य केंद्र बनाती है।",
          highlight: "जबलपुर-सागर मार्ग, गढ़ाकोटा, जिला सागर (म.प्र.) में स्थित।",
          icon: <MapPin className="text-orange-600" size={32} />,
          image: "img/Gallery/gp (12).jpeg"
        }
      ],
      viewMap: "गूगल मैप्स पर देखें"
    }
  };

  const t = featuresContent[language];

  return (
    <section id="about" className="py-24 bg-[#fdfbf7] relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>

      <div className="max-w-site mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-block px-6 py-2 mb-6 border-y-2 border-[#d97706]/30">
            <span className="text-[#9a3412] font-cinzel font-bold tracking-[0.3em] uppercase text-xs">
              {t.sectionTitle}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-[#5c2415] mb-6">
            {t.sectionSubtitle}
          </h2>
          <div className="mt-6 flex justify-center items-center gap-2">
            <div className="w-12 h-[1px] bg-[#d97706]/50"></div>
            <div className="w-2 h-2 rotate-45 bg-[#9a3412]"></div>
            <div className="w-12 h-[1px] bg-[#d97706]/50"></div>
          </div>
        </div>

        {/* Content Blocks */}
        <div className="space-y-32">
          {t.blocks.map((block, index) => (
            <div 
              key={block.id} 
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative group perspective-1000">
                  {/* Back Accent */}
                  <div className="absolute -inset-4 bg-[#fef3c7] rounded-sm transform rotate-2 transition-transform duration-500 group-hover:rotate-0"></div>
                  
                  <div className="relative bg-white p-2 rounded-sm shadow-2xl overflow-hidden border border-orange-100 transform transition-transform duration-700 group-hover:-translate-y-2">
                    <img 
                      src={block.image} 
                      alt={block.title}
                      className="w-full h-[350px] md:h-[450px] object-cover filter sepia-[0.2] transition-all duration-700 group-hover:sepia-0 group-hover:scale-105"
                    />
                    {/* Floating Badge */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#9a3412] rounded-full flex items-center justify-center shadow-lg border-4 border-[#fffcf7] z-20 group-hover:scale-110 transition-transform">
                      <div className="text-white">
                        {block.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="flex items-center gap-4">
                   <div className="text-6xl font-cinzel font-black text-orange-100 leading-none select-none">
                      0{index + 1}
                   </div>
                   <h3 className="text-3xl md:text-4xl font-cinzel font-bold text-[#5c2415]">
                    {block.title}
                  </h3>
                </div>

                <p className="text-[#57534e] text-lg leading-loose font-playfair">
                  {block.description}
                </p>

                <div className="bg-[#fff7ed] border-l-[6px] border-[#d97706] p-6 rounded-r-lg shadow-sm">
                  <p className="text-[#9a3412] font-semibold text-base italic font-serif">
                    "{block.highlight}"
                  </p>
                </div>

                {/* {block.id === 'location' && (
                  <button className="inline-flex items-center gap-3 px-8 py-3 bg-[#5c2415] text-white font-cinzel font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-[#431407] transition-all shadow-lg hover:shadow-orange-900/30 group">
                    {t.viewMap} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;