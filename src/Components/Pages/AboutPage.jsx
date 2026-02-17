import React from 'react';
import { History, Landmark, MapPin, Scroll, Award, Users } from 'lucide-react';

const AboutPage = ({ language = 'en' }) => {
    const content = {
        en: {
            title: "Shri Digambar Jain Atishay Kshetra Pateriyaji",
            subtitle:
                "A sacred center of faith, devotion, and spiritual purification revered by devotees across the world.",

            historyTitle: "Divine Significance",
            historyText:
                "Located on the holy land of Garhakota in Sagar district, Madhya Pradesh, Shri Digambar Jain Atishay Kshetra Pateriyaji is an unparalleled center of faith, devotion, and inner purification. Owing to its divine energy, ancient Jain traditions, and miraculous influence, this sacred Kshetra has remained a place of deep reverence for devotees from India and abroad.",

            architectureTitle: "Lord Parshvanath – The Divine Presence",
            architectureText:
                "This sacred pilgrimage is graced by the presence of Lord Shri Parshvanath Ji, whose ancient and miraculous idol is a powerful center of devotion. The Trifani Parshvanath idol inspires restraint, compassion, and spiritual upliftment. It is believed that sincere worship here removes obstacles and fills life with peace and positivity.",

            constructionTitle: "A Living School of Jain Values",
            constructionText:
                "Atishay Kshetra Pateriyaji is not merely a pilgrimage site, but a living school of non-violence, truth, non-attachment, and self-purification. Regular religious activities such as Shantidhara, Jinabhishek, Abhishek Pujan, discourses, and Swadhyay are conducted here, strengthening Jain culture and values.",

            locationTitle: "Purpose & Vision",
            locationText:
                "Through the blessings of saints, devotion of Shrāvaks and Shrāvikās, and the continuous efforts of a dedicated trust, this sacred Kshetra is progressing steadily. Our mission is to preserve and promote Jain principles and to connect future generations with spiritual values.",

            stats: [
                { label: "Sacred Kshetra", value: "Atishay Kshetra" },
                { label: "Location", value: "Garhakota, MP" },
                { label: "Spiritual Values", value: "Ahimsa & Satya" },
                { label: "Main Deity", value: "Lord Parshvanath" }
            ]
        },

        hi: {
            title: "श्री दिगंबर जैन अतिशय क्षेत्र पटेरियाजी",
            subtitle:
                "आस्था, श्रद्धा और आत्मशुद्धि का अनुपम आध्यात्मिक केंद्र।",

            historyTitle: "दिव्य महत्व",
            historyText:
                "मध्यप्रदेश के सागर जिले के गढ़ाकोटा की पावन धरती पर स्थित श्री दिगंबर जैन अतिशय क्षेत्र पटेरियाजी आस्था, श्रद्धा और आत्मशुद्धि का अनुपम केंद्र है। यह क्षेत्र अपनी दिव्य ऊर्जा, प्राचीन जैन परंपराओं और अतिशय प्रभाव के कारण देश-विदेश के श्रद्धालुओं के लिए विशेष आस्था का स्थान रहा है।",

            architectureTitle: "भगवान श्री पार्श्वनाथ जी की दिव्य उपस्थिति",
            architectureText:
                "इस पावन तीर्थ में भगवान श्री पार्श्वनाथ जी विराजमान हैं, जो अत्यंत प्राचीन, चमत्कारी एवं श्रद्धालुओं की गहन आस्था का केंद्र हैं। त्रिफणी पार्श्वनाथ भगवान की यह दिव्य प्रतिमा भक्तों को संयम, करुणा और आत्मकल्याण की प्रेरणा प्रदान करती है। मान्यता है कि यहाँ सच्चे मन से की गई पूजा-आराधना से अनेक कष्ट दूर होते हैं और जीवन में शांति व सकारात्मकता का संचार होता है।",

            constructionTitle: "जैन मूल्यों की जीवंत पाठशाला",
            constructionText:
                "अतिशय क्षेत्र पटेरियाजी केवल एक तीर्थ नहीं, बल्कि अहिंसा, सत्य, अपरिग्रह और आत्मशुद्धि की जीवंत पाठशाला है। यहाँ नियमित रूप से शांतिधारा, जिनाभिषेक, अभिषेक पूजन, प्रवचन एवं स्वाध्याय जैसे धार्मिक आयोजन संपन्न होते हैं, जो जैन संस्कृति और मूल्यों को सुदृढ़ करते हैं।",

            locationTitle: "उद्देश्य एवं दृष्टि",
            locationText:
                "यह पावन क्षेत्र संत-महात्माओं के सानिध्य, श्रावक-श्राविकाओं की निष्ठा तथा सेवाभावी ट्रस्ट के सतत प्रयासों से निरंतर विकास की ओर अग्रसर है। हमारा उद्देश्य जैन धर्म के सिद्धांतों का संरक्षण, संवर्धन तथा आने वाली पीढ़ियों को आध्यात्मिक संस्कारों से जोड़ना है। आइए, अतिशय क्षेत्र पटेरियाजी पधारकर भगवान श्री पार्श्वनाथ जी की दिव्य मूलनायक प्रतिमा के दर्शन कर धर्म, ध्यान और दिव्यता का अनुभव करें।",

            stats: [
                { label: "पावन क्षेत्र", value: "अतिशय क्षेत्र" },
                { label: "स्थान", value: "गढ़ाकोटा, म.प्र." },
                { label: "आध्यात्मिक मूल्य", value: "अहिंसा एवं सत्य" },
                { label: "मूलनायक", value: "भगवान पार्श्वनाथ" }
            ]
        }
    };


    const t = content[language];

    return (
        <div className="min-h-screen bg-[#fffcf7] pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#fef3c7] to-transparent opacity-40 pointer-events-none"></div>

            <div className="max-w-site mx-auto relative z-10">

                {/* Hero Title */}
                <div className="text-center mb-20">
                    <span className="inline-block py-1 px-4 border border-[#d97706]/30 rounded-full bg-[#fff7ed] text-[#9a3412] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                        {language === 'en' ? 'Heritage & Legacy' : 'विरासत और इतिहास'}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-[#5c2415] mb-6 leading-tight">
                        {t.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-[#78350f] font-playfair italic max-w-3xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>

                    <div className="mt-10 flex justify-center gap-2">
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d97706] to-transparent"></div>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column - History & Architecture */}
                    <div className="lg:col-span-7 space-y-16">

                        {/* History Section */}
                        <section className="relative group">
                            <div className="absolute -left-8 top-0 bottom-0 w-1 bg-[#d97706]/20 hidden lg:block"></div>
                            <div className="flex items-start gap-6">
                                <div className="p-3 bg-[#fff7ed] border border-[#fed7aa] rounded-sm text-[#d97706] shrink-0 mt-1">
                                    <History size={24} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-cinzel font-bold text-[#5c2415] mb-4">
                                        {t.historyTitle}
                                    </h2>
                                    <p className="text-[#57534e] text-lg leading-loose font-playfair text-justify">
                                        {t.historyText}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Architecture Section */}
                        <section className="relative group">
                            <div className="absolute -left-8 top-0 bottom-0 w-1 bg-[#d97706]/20 hidden lg:block"></div>
                            <div className="flex items-start gap-6">
                                <div className="p-3 bg-[#fff7ed] border border-[#fed7aa] rounded-sm text-[#d97706] shrink-0 mt-1">
                                    <Landmark size={24} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-cinzel font-bold text-[#5c2415] mb-4">
                                        {t.architectureTitle}
                                    </h2>
                                    <p className="text-[#57534e] text-lg leading-loose font-playfair text-justify">
                                        {t.architectureText}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Construction Section */}
                        <section className="relative group">
                            <div className="absolute -left-8 top-0 bottom-0 w-1 bg-[#d97706]/20 hidden lg:block"></div>
                            <div className="flex items-start gap-6">
                                <div className="p-3 bg-[#fff7ed] border border-[#fed7aa] rounded-sm text-[#d97706] shrink-0 mt-1">
                                    <Scroll size={24} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-cinzel font-bold text-[#5c2415] mb-4">
                                        {t.constructionTitle}
                                    </h2>
                                    <p className="text-[#57534e] text-lg leading-loose font-playfair text-justify">
                                        {t.constructionText}
                                    </p>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Right Column - Stats & Location */}
                    <div className="lg:col-span-5 space-y-12">

                        {/* Image Card */}
                        <div className="relative p-2 bg-white border border-[#fed7aa] shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9a3412] via-[#d97706] to-[#9a3412] z-20"></div>
                            <img
                                src="https://pateriyaji.com/wp-content/uploads/2022/05/Slider-2-scaled.jpg"
                                alt="Pateriyaji Temple"
                                className="w-full h-64 object-cover filter sepia-[0.1]"
                            />
                            <div className="p-4 text-center bg-[#fffcf7]">
                                <p className="font-cinzel font-bold text-[#5c2415] text-sm tracking-widest uppercase">Shri Parshvanath Temple</p>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {t.stats.map((stat, idx) => (
                                <div key={idx} className="bg-white p-6 border border-[#fed7aa]/50 shadow-sm text-center group hover:border-[#d97706] transition-colors">
                                    <div className="text-3xl font-cinzel font-bold text-[#d97706] mb-2 group-hover:scale-110 transition-transform">
                                        {idx === 0 ? <History className="mx-auto" size={28} /> :
                                            idx === 1 ? <MapPin className="mx-auto" size={28} /> :
                                                idx === 2 ? <Landmark className="mx-auto" size={28} /> :
                                                    <Award className="mx-auto" size={28} />
                                        }
                                    </div>
                                    <div className="text-2xl font-bold text-[#5c2415] mb-1 font-serif">{stat.value}</div>
                                    <div className="text-xs text-[#9a3412] uppercase tracking-wider font-bold">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Location Box */}
                        <div className="bg-[#fff7ed] p-8 border-l-4 border-[#d97706] relative overflow-hidden">
                            <MapPin className="absolute -right-4 -bottom-4 text-[#d97706]/10 w-32 h-32" />
                            <h3 className="text-xl font-cinzel font-bold text-[#5c2415] mb-4 flex items-center gap-2">
                                {t.locationTitle}
                            </h3>
                            <p className="text-[#57534e] font-playfair leading-relaxed relative z-10">
                                {t.locationText}
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;