import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Youtube,
  Instagram,
  Heart,
  Send
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = ({ language }) => {
  // 1. Content Object - Spiritual & Informative
  const footerContent = {
    en: {
      templeName: "Shri Digambar Jain Atishay Kshetra Pateriyaji",
      description: "A sacred pilgrimage dedicated to Lord Parshvanath, preserving centuries of spiritual heritage and miraculous history in the heart of Bundelkhand.",
      quickLinks: {
        title: "Quick Navigation",
        links: [
          { label: "Home", path: "/" },
          { label: "About Tirth", path: "/about" },
          { label: "Nagar Gaurav", path: "/nagar-gaurav" },
          { label: "Panch Kalyan", path: "/panch-kalyan" },
          { label: "News", path: "/news" },
          { label: "Donation", path: "/donate" },
          { label: "Contact", path: "/contact" }
        ]
      },
      contact: {
        title: "Contact Us",
        address: "Gadhakota, Dist. Sagar, Madhya Pradesh - 470229",
        phone: "+91 9300581108",
        email: "atishaykshetrapateriyaji@gmail.com"
      },
      newsletter: {
        title: "Newsletter",
        placeholder: "Enter your email",
        button: "Subscribe"
      },
      copyright: "© 2026 Shri Digambar Jain Atishay Kshetra Pateriyaji. All Rights Reserved.",
      madeBy: "Designed with devotion"
    },
    hi: {
      templeName: "श्री दिगम्बर जैन अतिशय क्षेत्र पटेरियाजी",
      description: "भगवान पार्श्वनाथ को समर्पित एक पावन तीर्थ, जो बुन्देलखण्ड के हृदय में सदियों की आध्यात्मिक विरासत और चमत्कारी इतिहास को संजोए हुए है।",
      quickLinks: {
        title: "त्वरित संपर्क",
        links: [
          { label: "मुख्य पृष्ठ", path: "/" },
          { label: "तीर्थ के बारे में", path: "/#about" },
          { label: "वास्तुकला", path: "/#about" },
          { label: "समाचार", path: "/news" },
          { label: "दान", path: "/donate" },
          { label: "संपर्क", path: "/contact" }
        ]
      },
      contact: {
        title: "संपर्क करें",
        address: "गढ़ाकोटा, जिला सागर, मध्य प्रदेश - 470229",
        phone: "+91 9300581108",
        email: "atishaykshetrapateriyaji@gmail.com"
      },
      newsletter: {
        title: "समाचार पत्रिका",
        placeholder: "अपना ईमेल दर्ज करें",
        button: "जुड़ें"
      },
      copyright: "© 2026 श्री दिगम्बर जैन अतिशय क्षेत्र पटेरियाजी। सर्वाधिकार सुरक्षित।",
      madeBy: "श्रद्धा के साथ निर्मित"
    }
  };

  const t = footerContent[language];

  return (
    <footer className="bg-[#431407] text-orange-50 pt-24 pb-12 relative overflow-hidden font-sans">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>

      {/* Decorative Top Border - Saffron/Gold Gradient */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#9a3412] via-[#fbbf24] to-[#9a3412]"></div>

      <div className="max-w-site mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Section 1: About & Logo */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#fff7ed] to-[#fed7aa] flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.3)] border-2 border-[#fbbf24] group-hover:scale-105 transition-transform duration-500">
                <span className="text-[#9a3412] font-cinzel font-bold text-2xl">ॐ</span>
              </div>
              <h3 className="font-cinzel font-bold text-xl leading-tight text-white drop-shadow-md">
                {t.templeName}
              </h3>
            </Link>
            <p className="text-orange-100/80 text-sm leading-relaxed font-playfair tracking-wide border-l-2 border-[#d97706] pl-4">
              {t.description}
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {[
                {
                  icon: Facebook,
                  link: "https://www.facebook.com/jainpateriyaji"
                },
                {
                  icon: Youtube,
                  link: "https://youtube.com/@atishaykshetrapateriyaji"
                },
                {
                  icon: Instagram,
                  link: "https://www.instagram.com/jainpateriyaji"
                }
              ].map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#5c2415] border border-[#d97706]/50 flex items-center justify-center hover:bg-[#d97706] hover:text-white hover:border-[#fbbf24] transition-all duration-300 group shadow-lg"
                >
                  <Icon
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>              
          </div>

          {/* Section 2: Quick Links */}
          <div className="space-y-6 lg:pl-10">
            <h4 className="text-[#fbbf24] font-cinzel font-bold tracking-[0.2em] uppercase text-sm border-b border-[#d97706]/30 pb-3 inline-block">
              {t.quickLinks.title}
            </h4>
            <ul className="space-y-3">
              {t.quickLinks.links.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-orange-100/70 hover:text-[#fbbf24] flex items-center gap-2 group transition-all duration-300 text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-[#d97706] rotate-45 group-hover:bg-[#fbbf24] transition-colors"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Contact Details */}
          <div className="space-y-6">
            <h4 className="text-[#fbbf24] font-cinzel font-bold tracking-[0.2em] uppercase text-sm border-b border-[#d97706]/30 pb-3 inline-block">
              {t.contact.title}
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start group">
                <div className="p-2 bg-[#5c2415] rounded-full border border-[#d97706]/30 group-hover:border-[#fbbf24] transition-colors">
                  <MapPin size={16} className="text-[#fbbf24]" />
                </div>
                <span className="text-sm text-orange-100/80 leading-relaxed group-hover:text-white transition-colors">{t.contact.address}</span>
              </li>
              <li className="flex gap-4 items-center group">
                <div className="p-2 bg-[#5c2415] rounded-full border border-[#d97706]/30 group-hover:border-[#fbbf24] transition-colors">
                  <Phone size={16} className="text-[#fbbf24]" />
                </div>
                <a href={`tel:${t.contact.phone}`} className="text-sm text-orange-100/80 group-hover:text-white transition-colors">{t.contact.phone}</a>
              </li>
              <li className="flex gap-4 items-center group">
                <div className="p-2 bg-[#5c2415] rounded-full border border-[#d97706]/30 group-hover:border-[#fbbf24] transition-colors">
                  <Mail size={16} className="text-[#fbbf24]" />
                </div>
                <a href={`mailto:${t.contact.email}`} className="text-sm text-orange-100/80 group-hover:text-white transition-colors">{t.contact.email}</a>
              </li>
            </ul>
          </div>

          {/* Section 4: Newsletter/Support */}
          <div className="space-y-6">
            <h4 className="text-[#fbbf24] font-cinzel font-bold tracking-[0.2em] uppercase text-sm border-b border-[#d97706]/30 pb-3 inline-block">
              {t.newsletter.title}
            </h4>
            <div className="relative group">
              <input
                type="email"
                placeholder={t.newsletter.placeholder}
                className="w-full bg-[#290e06]/50 border border-[#d97706]/30 rounded-full py-3 px-5 text-sm focus:outline-none focus:border-[#fbbf24] focus:ring-1 focus:ring-[#fbbf24]/50 transition-all text-orange-100 placeholder-orange-100/30"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-[#d97706] to-[#b45309] text-white px-4 rounded-full hover:from-[#fbbf24] hover:to-[#d97706] hover:text-[#5c2415] transition-all duration-300 shadow-lg">
                <Send size={16} />
              </button>
            </div>
            <div className="pt-6 mt-6 border-t border-[#d97706]/20">
              <Link to="/donate" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#7f1d1d] to-[#991b1b] py-3 rounded-full font-cinzel font-bold text-sm tracking-widest hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all border border-red-500/30 group relative overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine"></span>
                <Heart size={16} fill="currentColor" className="text-red-300 group-hover:text-white group-hover:scale-110 transition-all" />
                {language === 'en' ? 'Donate Now' : 'दान करें'}
              </Link>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[#d97706]/40 to-transparent"></div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white uppercase tracking-widest font-semibold font-cinzel">
          <p>{t.copyright}</p>

          <a
            href="https://letskillify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <span>Designed by <a href="https://letskillify.com">LetSkillify</a></span>
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 bg-[#d97706] rotate-45 animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-[#fbbf24] rotate-45 animate-pulse delay-75"></div>
              <div className="w-1.5 h-1.5 bg-[#d97706] rotate-45 animate-pulse delay-150"></div>
            </div>
          </a>
        </div>

      </div>

      {/* Background Motifs */}
      <div className="absolute -bottom-24 -right-24 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[300px] font-cinzel font-bold text-white">ॐ</span>
      </div>
      <div className="absolute top-20 left-10 opacity-[0.03] pointer-events-none select-none animate-spin-slow">
        <div className="w-64 h-64 border-4 border-dashed border-white rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;