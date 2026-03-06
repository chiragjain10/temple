import React from 'react';
import { Quote, Sparkles, MapPin, Music } from 'lucide-react';

const IntroSection = ({ language = 'hi' }) => {
    const content = {
        en: {
            badge: "Sacred Heritage of Bundelkhand",
            verse: "I bow my head at the divine lotus feet of Lord Parshvanath, Saluting the miraculous land of Pateriyaji with deepest devotion.",
            heading: "A Living Treasury of Jain Culture & Miracles",
            para1: "The magnificent Shri Parshvanath Digambar Jain Atishay Kshetra Pateriya Ji in Gadhakota stands as a vibrant treasury of our living history. This Tirth acts as a gateway to cross the ocean of worldly existence, serving as an eternal source of faith and inspiration.",
            para2: "Situated on the virtuous land of Bundelkhand, this ancient shrine provides instant peace and purity to the soul. Known locally as the 'Temple of Jhunjhuniya' due to the celestial sounds of divine instruments heard at midnight, it remains a site where faith remains unshaken through the centuries.",
            stat1: "244+ Years",
            stat1Lbl: "Historical Legacy",
            stat2: "Gadhakota",
            stat2Lbl: "Location",
            imageAlt: "Shri Pateriyaji Temple Architecture"
        },
        hi: {
            badge: "बुन्देलखंड की पावन धरोहर",
            verse: "पार्श्वनाथ के युग चरण बन्दों शीश नवाय, अतिशय क्षेत्र पटेरिया नमन करूँ शिरनाय।",
            heading: "गौरवशाली इतिहास एवं जैन संस्कृति का जीवंत केन्द्र",
            para1: "श्री पार्श्वनाथ दिगंबर जैन अतिशय क्षेत्र पटेरिया जी, गढ़ाकोटा हमारी संस्कृति और इतिहास के जीवन्त कोषागार हैं। संसार सागर को पार करने हेतु ये तीर्थ नदी के घाट के समान उपयोगी निमित्त होते हैं, जो हमारी आस्था और प्रेरणा के महान स्रोत हैं।",
            para2: "बुन्देलखंड की सदाचार प्रवर्तिनी भूमि पर स्थित यह पावन तीर्थ दर्शन मात्र से तन-मन को शांति प्रदान करता है। मध्य रात्रि में यहाँ देवकृत भक्ति एवं वाद्ययंत्रों की ध्वनि सुनाई देने के कारण इसे 'झुनझुनिया का मंदिर' भी कहा जाता है, जो इसके जीवंत अतिशय का प्रमाण है।",
            stat1: "२४४+ वर्ष",
            stat1Lbl: "गौरवशाली इतिहास",
            stat2: "गढ़ाकोटा",
            stat2Lbl: "तीर्थ क्षेत्र",
            imageAlt: "पटेरिया जी मंदिर वास्तुकला"
        }
    };

    const t = content[language];

    return (
        <section className="relative py-24 lg:py-40 bg-[#fffcf7] overflow-hidden">
            {/* Background Textures */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#fed7aa]/20 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    
                    {/* --- Left Column: Text Content --- */}
                    <div className="lg:col-span-7 space-y-12">
                        
                        {/* 1. Badge & Heading */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="h-[1px] w-12 bg-[#d97706]"></div>
                                <span className="text-[#d97706] font-cinzel font-bold tracking-[0.3em] uppercase text-xs">
                                    {t.badge}
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-[#5c2415] leading-[1.15]">
                                {t.heading}
                            </h2>
                        </div>

                        {/* 2. Miraculous Verse (Doha) */}
                        <div className="relative group">
                            <div className="absolute -top-4 -left-4 text-[#d97706] opacity-10 group-hover:opacity-30 transition-opacity">
                                <Quote size={60} fill="currentColor" />
                            </div>
                            <div className="relative border-l-[3px] border-[#9a3412] pl-8 py-2">
                                <p className="text-xl md:text-2xl font-playfair italic text-[#9a3412] leading-relaxed">
                                    "{t.verse}"
                                </p>
                            </div>
                        </div>

                        {/* 3. Detailed Paragraphs */}
                        <div className="space-y-8 text-[#57534e] text-lg leading-[1.8] font-playfair text-justify">
                            <p className="first-letter:text-5xl first-letter:font-cinzel first-letter:text-[#d97706] first-letter:mr-3 first-letter:float-left">
                                {t.para1}
                            </p>
                            
                            <div className="flex items-center gap-6 py-4">
                                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-[#fed7aa] to-transparent"></div>
                                <Music className="text-[#d97706] opacity-40" size={20} />
                                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-[#fed7aa] to-transparent"></div>
                            </div>

                            <p>{t.para2}</p>
                        </div>

                        {/* 4. Luxury Stats Grid */}
                        <div className="grid grid-cols-2 gap-12 pt-8 border-t border-[#fed7aa]/40">
                            <div className="group">
                                <div className="flex items-center gap-3 text-[#9a3412] mb-1">
                                    <Sparkles size={18} className="opacity-50" />
                                    <h4 className="font-cinzel font-bold text-3xl tracking-tight">{t.stat1}</h4>
                                </div>
                                <p className="text-[10px] text-[#78716c] uppercase tracking-[0.2em] font-bold">{t.stat1Lbl}</p>
                            </div>
                            <div className="group">
                                <div className="flex items-center gap-3 text-[#9a3412] mb-1">
                                    <MapPin size={18} className="opacity-50" />
                                    <h4 className="font-cinzel font-bold text-3xl tracking-tight">{t.stat2}</h4>
                                </div>
                                <p className="text-[10px] text-[#78716c] uppercase tracking-[0.2em] font-bold">{t.stat2Lbl}</p>
                            </div>
                        </div>
                    </div>

                    {/* --- Right Column: Visual Showcase --- */}
                    <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                        {/* Main Image Frame */}
                        <div className="relative z-20 shadow-[0_50px_100px_-20px_rgba(92,36,21,0.25)] rounded-2xl overflow-hidden border-8 border-white group">
                            <img 
                                src="/img/Gallery/m3.png" 
                                alt={t.imageAlt}
                                className="w-full h-[650px] object-cover transition-transform duration-[2s] group-hover:scale-110"
                            />
                            {/* Artistic Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#5c2415]/60 via-transparent to-transparent opacity-60"></div>
                            
                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-8 text-center">
                                <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-[#fed7aa]/50">
                                    <p className="text-[#5c2415] font-cinzel font-bold text-xs tracking-[0.2em] uppercase">
                                        {language === 'hi' ? 'अतिशयकारी झुनझुनिया मंदिर' : 'Miraculous Jhunjhuniya Temple'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Frames & Background Elements */}
                        <div className="absolute -top-10 -right-10 w-full h-full border-[1px] border-[#d97706]/30 rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#d97706]/10 rounded-full blur-2xl -z-10"></div>
                        
                        {/* "Jhunjhuniya" Concept Illustration (Subtle) */}
                        <div className="absolute -right-8 top-1/4 transform rotate-90 origin-right">
                             <span className="text-[120px] font-cinzel font-black text-[#5c2415]/[0.03] select-none pointer-events-none">
                                HERITAGE
                             </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default IntroSection;