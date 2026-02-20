import React from 'react';
import { History, Landmark, MapPin, Scroll, Award, Users, Music, Waves, Sparkles, Car, Bed, Phone, Zap } from 'lucide-react';

const AboutPage = ({ language = 'hi' }) => {
    const content = {
        en: {
            title: "Shri Digambar Jain Atishay Kshetra Pateriyaji",
            subtitle: "A 244-year-old living treasury of Jain culture, history, and divine miracles.",
            shloka: "Pārśvanātha kē yuga caraṇa bandōṁ śīṣa navāya, Atiśaya kṣētra patēriyā namana karūm̐ śiranāya.",
            
            historyTitle: "Legacy & Legend",
            historyText: "Located in Garhakota, Sagar (MP), this Kshetra is known as the 'Temple of Jhunjhuniya.' Legend says celestial beings visit at midnight to worship, and the sounds of divine music and instruments can still be heard by the devout. Established in 1839 (Vikram Samvat) by Shah Mohan Das Ramkishun Ji under the patronage of Maharaja Harisingh Ju Dev Bundela.",

            architectureTitle: "Architectural Splendor",
            architectureText: "Unlike the Mughal influence common in North India, this temple features a pure Indian style mixed with Maratha architecture. It boasts a massive 'Parikrama' (circumambulation path) and a fortified 'Parakota' that stands as a testament to the aesthetic vision of its 18th-century creators.",

            deityTitle: "The Miraculous Presence",
            deityText: "The main sanctum houses three 7-foot tall idols of Lord Parshvanath—Chintamani, Trifarni, and Savliya Parshvanath. On August 20, 1992, thousands witnessed water flowing miraculously from these idols until midnight, accompanied by celestial sounds.",

            atishayTitle: "The Miracles (Atishay)",
            miracles: [
                {
                    title: "Atishay Kund",
                    desc: "It is said that during the temple's consecration, the water of this pond turned into Ghee through the penance of Bhattarak Mahendra Kirti Ji to feed the masses."
                },
                {
                    title: "Atishay Stambh",
                    desc: "Devotees believe that circumambulating this pillar three times with true faith provides relief from fevers and physical ailments."
                }
            ],

            facilitiesTitle: "Travel & Stay",
            stats: [
                { label: "Established", value: "1839 (V.S.)" },
                { label: "AC Rooms", value: "30+" },
                { label: "Main Idol", value: "7 Feet" },
                { label: "Style", value: "Maratha" }
            ]
        },

        hi: {
            title: "श्री दिगंबर जैन अतिशय क्षेत्र पटेरियाजी",
            subtitle: "जैन संस्कृति, इतिहास और दिव्य अतिशयों का २४४ वर्षीय जीवंत कोषागार।",
            shloka: "पार्श्वनाथ के युग चरण बन्दों शीश नवाय, अतिशय क्षेत्र पटेरिया नमन करूँ शिरनाय",

            historyTitle: "गौरवशाली इतिहास एवं किंवदंती",
            historyText: "सागर जिले के गढ़ाकोटा में स्थित यह क्षेत्र 'झुनझुनिया का मंदिर' के नाम से भी प्रसिद्ध है। मान्यता है कि यहाँ रात्रि में देवगण प्रभु की आराधना करने आते हैं और मध्य रात्रि में देवकृत भक्ति एवं वाद्यों की ध्वनि सुनाई देती है। इसकी प्रतिष्ठा संवत 1839 में महाराजा हरिसिंहजू देव बुन्देला के संरक्षण में हुई थी।",

            architectureTitle: "स्थापत्य एवं वास्तुकला",
            architectureText: "उत्तर भारत में प्रचलित मुगल वास्तु के स्थान पर यहाँ मराठा शैली मिश्रित विशुद्ध भारतीय स्थापत्य को अपनाया गया है। विशाल परकोटा और प्रदक्षिणा पथ निर्माताओं की भारतीयता का जीवंत प्रमाण हैं, जो 244 वर्षों से अडिग खड़ा है।",

            deityTitle: "मूलनायक एवं दिव्य प्रतिमाएँ",
            deityText: "मुख्य वेदी पर भगवान पार्श्वनाथ की 7 फुट ऊँची तीन अतिमनोज्ञ पद्मासन प्रतिमाएँ—चिंतामणी, त्रिफर्णी एवं सावलिया पार्श्वनाथ—विराजमान हैं। 20 अगस्त 1992 को इन प्रतिमाओं से जल प्रवाह होने की ऐतिहासिक घटना ने पूरे देश के श्रद्धालुओं को मंत्रमुग्ध कर दिया था।",

            atishayTitle: "क्षेत्र के प्रमुख अतिशय",
            miracles: [
                {
                    title: "अतिशय कुण्ड",
                    desc: "मान्यता है कि प्रतिष्ठा के समय भट्टारक श्री महेन्द्र कीर्ति जी की साधना से इस कुण्ड का जल घी में परिवर्तित हो गया था, जिससे विशाल जनसमूह का भोजन संपन्न हुआ।"
                },
                {
                    title: "अतिशय स्तम्भ",
                    desc: "अतिशय स्तम्भ की तीन प्रदक्षिणा कर सच्चे मन से शीश नवाने पर ज्वर एवं अन्य शारीरिक पीड़ाओं का नाश होता है।"
                }
            ],

            facilitiesTitle: "आवास एवं यात्रा",
            stats: [
                { label: "स्थापना", value: "संवत 1839" },
                { label: "AC कमरे", value: "30+" },
                { label: "मूलनायक", value: "7 फुट" },
                { label: "शैली", value: "मराठा" }
            ]
        }
    };

    const t = content[language];

    return (
        <div className="min-h-screen bg-[#fffcf7] pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] pointer-events-none"></div>

            <div className="max-w-site mx-auto relative z-10">

                {/* Hero Header */}
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-4 border border-[#d97706]/30 rounded-full bg-[#fff7ed] text-[#9a3412] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                        {language === 'en' ? 'Eternal Heritage' : 'शाश्वत धरोहर'}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-[#5c2415] mb-6 leading-tight">
                        {t.title}
                    </h1>
                    <div className="max-w-2xl mx-auto">
                        <p className="text-[#9a3412] font-cinzel font-semibold mb-4 italic">"{t.shloka}"</p>
                        <p className="text-xl text-[#78350f] font-playfair italic leading-relaxed">
                            {t.subtitle}
                        </p>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                    
                    {/* Left Side: Content Sections */}
                    <div className="lg:col-span-7 space-y-16">
                        <section className="flex gap-6">
                            <div className="hidden sm:flex flex-col items-center">
                                <div className="p-3 bg-[#fff7ed] border border-[#fed7aa] rounded-full text-[#d97706]">
                                    <Music size={24} />
                                </div>
                                <div className="w-px h-full bg-gradient-to-b from-[#d97706] to-transparent mt-4"></div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-cinzel font-bold text-[#5c2415] mb-4">{t.historyTitle}</h2>
                                <p className="text-[#57534e] text-lg leading-relaxed font-playfair text-justify">{t.historyText}</p>
                            </div>
                        </section>

                        <section className="flex gap-6">
                            <div className="hidden sm:flex flex-col items-center">
                                <div className="p-3 bg-[#fff7ed] border border-[#fed7aa] rounded-full text-[#d97706]">
                                    <Landmark size={24} />
                                </div>
                                <div className="w-px h-full bg-gradient-to-b from-[#d97706] to-transparent mt-4"></div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-cinzel font-bold text-[#5c2415] mb-4">{t.architectureTitle}</h2>
                                <p className="text-[#57534e] text-lg leading-relaxed font-playfair text-justify">{t.architectureText}</p>
                            </div>
                        </section>

                        <section className="flex gap-6">
                            <div className="hidden sm:flex flex-col items-center">
                                <div className="p-3 bg-[#fff7ed] border border-[#fed7aa] rounded-full text-[#d97706]">
                                    <Sparkles size={24} />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-cinzel font-bold text-[#5c2415] mb-4">{t.deityTitle}</h2>
                                <p className="text-[#57534e] text-lg leading-relaxed font-playfair text-justify">{t.deityText}</p>
                            </div>
                        </section>
                    </div>

                    {/* Right Side: Visuals & Quick Info */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Image Frame */}
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#d97706] to-[#9a3412] opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative bg-white p-3 border border-[#fed7aa] shadow-2xl">
                                <img 
                                    src="https://pateriyaji.com/wp-content/uploads/2022/05/Slider-2-scaled.jpg" 
                                    alt="Pateriyaji Temple" 
                                    className="w-full h-80 object-cover"
                                />
                                <div className="mt-4 text-center font-cinzel font-bold text-[#5c2415] border-t pt-4">
                                    Moolnayak Shri Parshvanath
                                </div>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {t.stats.map((stat, i) => (
                                <div key={i} className="bg-white p-4 border border-[#fed7aa]/50 rounded-lg text-center">
                                    <div className="text-xl font-bold text-[#d97706] font-cinzel">{stat.value}</div>
                                    <div className="text-[10px] uppercase tracking-widest text-[#9a3412] font-bold">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Atishay (Miracles) Grid */}
                <div className="bg-[#5c2415] rounded-3xl p-8 md:p-12 text-white mb-20 relative overflow-hidden">
                    <Zap className="absolute right-[-20px] top-[-20px] w-64 h-64 opacity-5" />
                    <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-10 text-center">{t.atishayTitle}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {t.miracles.map((m, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                <div className="flex items-center gap-4 mb-4">
                                    {i === 0 ? <Waves className="text-[#fbbf24]" /> : <Zap className="text-[#fbbf24]" />}
                                    <h3 className="text-xl font-bold font-cinzel">{m.title}</h3>
                                </div>
                                <p className="text-white/80 font-playfair leading-relaxed">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Travel & Accommodation Footer Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 border border-[#fed7aa] rounded-xl shadow-sm">
                        <div className="flex items-center gap-3 mb-6 text-[#d97706]">
                            <Car size={24} />
                            <h3 className="text-xl font-cinzel font-bold text-[#5c2415]">{language === 'en' ? 'Connectivity' : 'कैसे पहुँचें'}</h3>
                        </div>
                        <ul className="space-y-4 text-sm text-[#57534e] font-playfair">
                            <li><strong>{language === 'en' ? 'Road:' : 'सड़क मार्ग:'}</strong> Sagar (45km), Damoh (32km)</li>
                            <li><strong>{language === 'en' ? 'Rail:' : 'रेल मार्ग:'}</strong> Sagar, Damoh, Patharia Stations</li>
                            <li><strong>{language === 'en' ? 'Air:' : 'हवाई मार्ग:'}</strong> Jabalpur (130km), Bhopal (225km)</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 border border-[#fed7aa] rounded-xl shadow-sm">
                        <div className="flex items-center gap-3 mb-6 text-[#d97706]">
                            <Bed size={24} />
                            <h3 className="text-xl font-cinzel font-bold text-[#5c2415]">{language === 'en' ? 'Stay' : 'आवास'}</h3>
                        </div>
                        <ul className="space-y-4 text-sm text-[#57534e] font-playfair">
                            <li>• {language === 'en' ? '30 AC Rooms (Attached)' : '30 वातानुकूलित कमरे'}</li>
                            <li>• {language === 'en' ? 'Bhojanshala & Parking' : 'भोजनशाला एवं विस्तृत पार्किंग'}</li>
                            <li>• {language === 'en' ? 'Wheelchair Available' : 'व्हील चेयर उपलब्ध'}</li>
                        </ul>
                    </div>

                    <div className="bg-[#fff7ed] p-8 border-2 border-[#d97706] rounded-xl shadow-sm">
                        <div className="flex items-center gap-3 mb-6 text-[#d97706]">
                            <Phone size={24} />
                            <h3 className="text-xl font-cinzel font-bold text-[#5c2415]">{language === 'en' ? 'Contact' : 'संपर्क'}</h3>
                        </div>
                        <p className="text-[#5c2415] font-bold text-lg mb-2">9300581108</p>
                        <p className="text-xs text-[#9a3412] uppercase tracking-tighter mb-4">
                            {language === 'en' ? 'Contact one day prior for Shantidhara' : 'शांतिधारा हेतु एक दिन पूर्व सूचित करें'}
                        </p>
                        <div className="text-xs text-[#57534e]">
                            Garhakota, Dist. Sagar (M.P.)
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;