    import React from 'react';
    import { Quote } from 'lucide-react';

    const IntroSection = ({ language = 'en' }) => {
    // 1. Content Object - Spiritual & Respectful Translation
    const introContent = {
        en: {
        verse: "I bow my head at the divine lotus feet of Lord Parshvanath, Saluting the miraculous land of Pateriyaji with deepest devotion.",
        heading: "The Epicenter of Glorious History & Jain Culture",
        paragraph1: "The magnificent Jain pilgrimage site, Atishay Kshetra Pateriya Ji in Gadhakota, stands as a vibrant treasury of our culture and heritage. It is a timeless sanctuary and an eternal source of spiritual inspiration for all seekers.",
        paragraph2: "The virtuous land of Bundelkhand is adorned with a chain of sacred Jain shrines, where a mere glimpse (Darshan) brings purity and peace to the body and soul. Located in Gadhakota of Sagar district, Shri Atishay Kshetra Pateriya Ji is one such sanctified destination that has preserved the essence of divinity for centuries.",
        imageAlt: "Ancient Temple Architecture"
        },
        hi: {
        verse: "पार्श्वनाथ के युग चरण बन्दों शीश नवाय, अतिशय क्षेत्र पटेरिया नमन करूँ शिरनाय।",
        heading: "गौरवशाली इतिहास एवं जैन संस्कृति का केन्द्र",
        paragraph1: "गौरवशाली इतिहास एवं जैन संस्कृति का मनोरम केन्द्र जैन तीर्थ अतिशय क्षेत्र पटेरिया जी गढ़ाकोटा तीर्थ हमारी संस्कृति और इतिहास के जीवन्त कोषागार है। ये हमारे शाश्वत धाम और प्रेरणा के स्रोत है।",
        paragraph2: "बुन्देलखंड की सदाचार प्रवर्तिनी भूमि पर ऐसे पावन जैन तीर्थों की एक श्रृंखला है जिनके दर्शन मात्र से तन और मन को शांति एवं पवित्रता प्राप्त होती है। सागर जिले के गढ़ाकोटा में स्थित श्री अतिशय क्षेत्र पटेरिया जी एक ऐसा ही पावन तीर्थ है।",
        imageAlt: "प्राचीन मंदिर वास्तुकला"
        }
    };

    const t = introContent[language];

    return (
        <section className="relative py-20 lg:py-32 bg-[#fffcf7] overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        
        {/* Golden Gradient Borders */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#fffcf7] via-[#d97706] to-[#fffcf7] opacity-30"></div>

        <div className="max-w-site mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Text Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-10">
                
                {/* Spiritual Verse (Doha) Box */}
                <div className="relative inline-block w-full group">
                    <div className="absolute -top-6 -left-6 text-[#d97706] opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                        <Quote size={80} fill="currentColor" />
                    </div>
                    <div className="relative bg-orange-50/50 border-l-4 border-[#9a3412] p-8 md:p-10 rounded-r-3xl shadow-sm italic backdrop-blur-sm hover:bg-orange-50 transition-colors duration-500">
                        <p className="text-xl md:text-2xl font-playfair text-[#5c2415] leading-relaxed tracking-wide">
                        "{t.verse}"
                        </p>
                        <div className="w-16 h-1 bg-[#d97706] mt-6 opacity-50"></div>
                    </div>
                </div>

                {/* Main Heading & Content */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-16 bg-[#d97706]"></div>
                        <span className="text-[#d97706] font-cinzel font-bold tracking-[0.2em] uppercase text-sm">
                        {language === 'en' ? 'Sacred Heritage' : 'पवित्र विरासत'}
                        </span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-[#5c2415] leading-tight">
                        {t.heading}
                    </h2>

                    <div className="space-y-6 text-[#57534e] text-lg leading-loose font-light font-playfair">
                        <p>{t.paragraph1}</p>
                        
                        {/* Visual Divider Accent */}
                        <div className="py-4 flex justify-start opacity-60">
                            <div className="flex gap-2">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className={`w-2 h-2 rotate-45 ${i % 2 === 0 ? 'bg-[#9a3412]' : 'bg-[#d97706]'}`}></div>
                                ))}
                            </div>
                        </div>

                        <p>{t.paragraph2}</p>
                    </div>
                </div>

                {/* Stats/Quick Info Small Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-orange-200/50">
                    <div>
                        <h4 className="text-[#9a3412] font-cinzel font-bold text-3xl">1000+</h4>
                        <p className="text-xs text-[#78716c] uppercase tracking-widest font-bold mt-1">Years of History</p>
                    </div>
                    <div>
                        <h4 className="text-[#9a3412] font-cinzel font-bold text-3xl">Sagar</h4>
                        <p className="text-xs text-[#78716c] uppercase tracking-widest font-bold mt-1">Location</p>
                    </div>
                </div>
            </div>

            {/* Right Column: Imagery (5 Cols) */}
            <div className="lg:col-span-5 relative">
                <div className="relative z-10 rounded-t-[10rem] rounded-b-3xl overflow-hidden shadow-2xl border-[8px] border-white group">
                    {/* Replace with actual temple image */}
                    <img 
                        src="/img/Gallery/m3.png" 
                        alt={t.imageAlt}
                        className="w-full h-[600px] object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#431407]/60 via-transparent to-transparent"></div>
                    
                    {/* Floating Caption */}
                    <div className="absolute bottom-8 left-0 w-full text-center">
                        <span className="inline-block px-6 py-2 bg-white/90 backdrop-blur-md text-[#9a3412] font-cinzel font-bold text-sm tracking-widest uppercase rounded-full shadow-lg">
                            Divine Architecture
                        </span>
                    </div>
                </div>

                {/* Decorative Frame Elements */}
                <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-[#d97706]/20 rounded-t-[10rem] rounded-b-3xl -z-10 hidden md:block"></div>
                <div className="absolute top-10 -left-10 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/binding-dark.png')] opacity-10 rounded-full animate-spin-slow"></div>
            </div>

            </div>
        </div>
        </section>
    );
    };

    export default IntroSection;