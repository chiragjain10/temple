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
          description: "This temple is unique for its architectural defiance. About 300 years ago, when traditional North Indian styles were fading, the builders here consciously avoided Mughal architectural symbols like domes and arches. Instead, they pioneered a distinct style influenced by Maratha architecture, creating a unique identity for this sacred space.",
          highlight: "A rare blend of Maratha influence and Jain Vastu Shastra.",
          icon: <Landmark className="text-orange-600" size={32} />,
          image: "img/Gallery/gp (10).jpeg"
        },
        {
          id: "construction",
          title: "Construction Period",
          description: "The spiritual energy of this Kshetra was formally anchored during the great consecration ceremony. The temple's Pratishta (consecration) took place on Magh Sudi Ashtami, Samvat 1839. For centuries, this date has stood as a testament to the enduring faith of the Digambar Jain community.",
          highlight: "Consecrated on Magh Sudi Ashtami, Samvat 1839.",
          icon: <History className="text-orange-600" size={32} />,
          image: "img/Gallery/gp (5).jpeg"
        },
        {
          id: "location",
          title: "Location & Accessibility",
          description: "Shri Parshvanath Digambar Jain Atishay Kshetra Pateriya Ji is located in Gadhakota, situated conveniently on the Jabalpur-Sagar highway in Madhya Pradesh. Its geographic location makes it a vital spiritual stop for pilgrims traveling through the heart of India.",
          highlight: "Located on the Jabalpur-Sagar Road, Gadhakota (M.P.)",
          icon: <MapPin className="text-orange-600" size={32} />,
          image: "img/Gallery/gp (11).jpeg"
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
          description: "इस मंदिर की विशेषता यह है कि लगभग 300 वर्ष पूर्व जब प्राचीन मंदिर निर्माण शैली उत्तर भारत से अपनी पहचान खो रही थी, उस काल में इस मंदिर के निर्माताओं ने गुबंद और महराबों जैसे मुगल वास्तु प्रतीकों की उपेक्षा की। उन्होंने अपने लिये मराठा शैली मिश्रित एक अलग प्रकार की मंदिर शैली को अपनाया, जो इस क्षेत्र को विशिष्ट बनाती है।",
          highlight: "मराठा शैली और जैन वास्तु शास्त्र का दुर्लभ संगम।",
          icon: <Landmark className="text-orange-600" size={32} />,
          image: "img/Gallery/gp (10).jpeg"
        },
        {
          id: "construction",
          title: "निर्माण काल",
          description: "इस मंदिर की आध्यात्मिक ऊर्जा को भव्य प्रतिष्ठा समारोह के दौरान स्थापित किया गया था। इस मंदिर की प्रतिष्ठा माघ सुदी अष्टमी संवत 1839 को हुई थी। सदियों से यह तिथि दिगंबर जैन समाज की अटूट आस्था का प्रतीक बनी हुई है।",
          highlight: "माघ सुदी अष्टमी संवत 1839 को प्रतिष्ठित।",
          icon: <History className="text-orange-600" size={32} />,
          image: "img/Gallery/gp (5).jpeg"
        },
        {
          id: "location",
          title: "अवस्थिति",
          description: "श्री पार्श्वनाथ दिगम्बर जैन अतिशय क्षेत्र पटेरिया जी गढ़ाकोटा, मध्यप्रदेश के जबलपुर-सागर मार्ग पर स्थित है। इसकी भौगोलिक स्थिति इसे भारत के मध्य भाग से गुजरने वाले तीर्थयात्रियों के लिए एक महत्वपूर्ण आध्यात्मिक केंद्र बनाती है।",
          highlight: "जबलपुर-सागर मार्ग, गढ़ाकोटा (म.प्र.) में स्थित।",
          icon: <MapPin className="text-orange-600" size={32} />,
          image: "img/Gallery/gp (11).jpeg"
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

                {block.id === 'location' && (
                  <button className="inline-flex items-center gap-3 px-8 py-3 bg-[#5c2415] text-white font-cinzel font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-[#431407] transition-all shadow-lg hover:shadow-orange-900/30 group">
                    {t.viewMap} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;