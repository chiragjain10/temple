import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Train, Bus, Plane } from 'lucide-react';

const Contact = ({ language }) => {
  const content = {
    en: {
      title: "Get in Touch",
      subtitle: "We are here to assist you with your pilgrimage. Feel free to reach out.",
      form: {
        name: "Your Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        submit: "Send Message"
      },
      info: {
        address: {
          title: "Our Location",
          value: "Shri Parsvanath Digambar Jain Atishaya Kshetra, Pateria Garha Kota, Dist. Sagar, Madhya Pradesh - 470229"
        },
        phone: {
          title: "Phone Support",
          value: "+91 98765 43210"
        },
        email: {
          title: "Email Us",
          value: "contact@pateriyaji.com"
        },
        timings: {
          title: "Temple Timings",
          value: "Morning: 5:30 AM - 12:30 PM\nEvening: 5:30 PM - 8:30 PM"
        }
      },
      reach: {
        title: "How to Reach",
        train: "Nearest Railway Stations: Sagar (45km), Damoh (32km), Patharia (19km).",
        road: "Situated on Sagar-Damoh Road. Frequent buses available from Sagar and Damoh.",
        air: "Nearest Airport: Jabalpur (approx 150km), Bhopal (approx 200km)."
      }
    },
    hi: {
      title: "संपर्क करें",
      subtitle: "हम आपकी तीर्थयात्रा में सहायता के लिए यहाँ हैं। बेझिझक संपर्क करें।",
      form: {
        name: "आपका नाम",
        email: "ईमेल पता",
        subject: "विषय",
        message: "संदेश",
        submit: "संदेश भेजें"
      },
      info: {
        address: {
          title: "हमारा पता",
          value: "श्री पार्श्वनाथ दिगम्बर जैन अतिशय क्षेत्र, पटेरिया गढ़ाकोटा, जिला सागर, मध्य प्रदेश - ४७०२२९"
        },
        phone: {
          title: "फोन संपर्क",
          value: "+९१ ९८७६५ ४३२१०"
        },
        email: {
          title: "ईमेल करें",
          value: "contact@pateriyaji.com"
        },
        timings: {
          title: "मंदिर का समय",
          value: "प्रातः: ५:३० - १२:३०\nसायं: ५:३० - ८:३०"
        }
      },
      reach: {
        title: "कैसे पहुंचें",
        train: "निकटतम रेलवे स्टेशन: सागर (४५ किमी), दमोह (३२ किमी), पथरिया (१९ किमी)।",
        road: "सागर-दमोह मार्ग पर स्थित। सागर और दमोह से बस सेवा उपलब्ध है।",
        air: "निकटतम हवाई अड्डा: जबलपुर (लगभग १५० किमी), भोपाल (लगभग २०० किमी)।"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-[#fffcf7] pt-32 pb-20 relative font-sans">
       {/* Decorative Background */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5 pointer-events-none"></div>

       <div className="max-w-site mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
                <div className="flex justify-center mb-4">
                    <span className="text-[#d97706] text-4xl">❖</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-[#5c2415] mb-4 drop-shadow-sm">
                    {t.title}
                </h1>
                <p className="text-[#9a3412] text-lg font-playfair italic max-w-2xl mx-auto">
                    {t.subtitle}
                </p>
                <div className="flex items-center justify-center gap-4 mt-6">
                    <div className="h-px w-16 bg-[#d97706]"></div>
                    <div className="w-2 h-2 rotate-45 bg-[#d97706]"></div>
                    <div className="h-px w-16 bg-[#d97706]"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* Contact Info Side */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Primary Info */}
                    <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#9a3412]">
                        <h3 className="text-2xl font-cinzel font-bold text-[#5c2415] mb-6 pb-2 border-b border-orange-100">{t.info.address.title}</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <MapPin className="text-[#d97706] shrink-0" size={24} />
                                <p className="text-gray-700 font-playfair">{t.info.address.value}</p>
                            </div>
                            <div className="flex gap-4">
                                <Phone className="text-[#d97706] shrink-0" size={24} />
                                <p className="text-gray-700 font-playfair">{t.info.phone.value}</p>
                            </div>
                            <div className="flex gap-4">
                                <Mail className="text-[#d97706] shrink-0" size={24} />
                                <p className="text-gray-700 font-playfair">{t.info.email.value}</p>
                            </div>
                             <div className="flex gap-4">
                                <Clock className="text-[#d97706] shrink-0" size={24} />
                                <p className="text-gray-700 font-playfair whitespace-pre-line">{t.info.timings.value}</p>
                            </div>
                        </div>
                    </div>

                    {/* How to Reach */}
                    <div className="bg-[#5c2415] text-white p-8 rounded-sm shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <MapPin size={100} />
                        </div>
                        <h3 className="text-2xl font-cinzel font-bold mb-6 text-[#fbbf24]">{t.reach.title}</h3>
                        <div className="space-y-6 relative z-10">
                            <div className="flex gap-4">
                                <Train className="text-[#fbbf24] shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-orange-200 uppercase text-xs tracking-widest mb-1">Train</h4>
                                    <p className="font-playfair text-sm">{t.reach.train}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Bus className="text-[#fbbf24] shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-orange-200 uppercase text-xs tracking-widest mb-1">Road</h4>
                                    <p className="font-playfair text-sm">{t.reach.road}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Plane className="text-[#fbbf24] shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-orange-200 uppercase text-xs tracking-widest mb-1">Air</h4>
                                    <p className="font-playfair text-sm">{t.reach.air}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form Side */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-[#fed7aa] relative overflow-hidden h-full">
                        {/* Ornamental Border */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9a3412] via-[#d97706] to-[#9a3412]"></div>
                        
                        <form className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2 group">
                                    <label className="text-xs font-bold text-[#9a3412] uppercase tracking-widest group-focus-within:text-[#d97706] transition-colors">{t.form.name}</label>
                                    <input type="text" className="w-full bg-[#fffcf7] border-b-2 border-[#fed7aa] p-3 focus:outline-none focus:border-[#9a3412] transition-colors rounded-t-lg" placeholder="..." />
                                </div>
                                <div className="space-y-2 group">
                                    <label className="text-xs font-bold text-[#9a3412] uppercase tracking-widest group-focus-within:text-[#d97706] transition-colors">{t.form.email}</label>
                                    <input type="email" className="w-full bg-[#fffcf7] border-b-2 border-[#fed7aa] p-3 focus:outline-none focus:border-[#9a3412] transition-colors rounded-t-lg" placeholder="..." />
                                </div>
                            </div>
                            
                            <div className="space-y-2 group">
                                <label className="text-xs font-bold text-[#9a3412] uppercase tracking-widest group-focus-within:text-[#d97706] transition-colors">{t.form.subject}</label>
                                <input type="text" className="w-full bg-[#fffcf7] border-b-2 border-[#fed7aa] p-3 focus:outline-none focus:border-[#9a3412] transition-colors rounded-t-lg" placeholder="..." />
                            </div>

                            <div className="space-y-2 group">
                                <label className="text-xs font-bold text-[#9a3412] uppercase tracking-widest group-focus-within:text-[#d97706] transition-colors">{t.form.message}</label>
                                <textarea rows="6" className="w-full bg-[#fffcf7] border-b-2 border-[#fed7aa] p-3 focus:outline-none focus:border-[#9a3412] transition-colors rounded-t-lg resize-none" placeholder="..."></textarea>
                            </div>

                            <div className="pt-4">
                                <button className="w-full md:w-auto px-12 bg-gradient-to-r from-[#9a3412] to-[#c2410c] text-white font-cinzel font-bold py-4 tracking-[0.2em] uppercase hover:shadow-lg hover:shadow-[#9a3412]/30 transition-all duration-300 flex items-center justify-center gap-3 rounded-full group">
                                    {t.form.submit}
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
       </div>
    </div>
  );
};

export default Contact;
