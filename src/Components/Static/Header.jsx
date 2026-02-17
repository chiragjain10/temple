import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ language, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle Language Handler
  const toggleLanguage = () => {
    onLanguageChange((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  // Scroll Detection for Sticky Header Styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Content Object (Centralized Text)
  const content = {
    en: {
      title: "Shri Digambar Jain Atishay Kshetra Pateriyaji",
      shortTitle: "Pateriyaji",
      nav: {
        home: "Home",
        about: "About",
        nagarGaurav: "Nagar Gaurav",
        donate: "Donate",
        festival: "Panch Kalyan Mahotsav 2026",
        news: "News",
        blogs: "Blogs",
        gallery: "Gallery",
        contact: "Contact",
      },
      cta: "Darshan Booking"
    },
    hi: {
      title: "श्री दिगम्बर जैन अतिशय क्षेत्र पटेरियाजी",
      shortTitle: "पटेरियाजी",
      nav: {
        home: "मुख्य पृष्ठ",
        about: "हमारे बारे में",
        nagarGaurav: "नगर गौरव",
        donate: "दान करें",
        festival: "पंचकल्याणक महोत्सव २०२६",
        news: "समाचार",
        blogs: "ब्लॉग",
        gallery: "गैलरी",
        contact: "संपर्क",
      },
      cta: "दर्शन बुकिंग"
    }
  };

  const t = content[language];

  // Navigation Keys for mapping
  const navKeys = ['home', 'about', 'nagarGaurav', 'festival', 'gallery', 'news', 'blogs', 'contact'];

  const getPath = (key) => {
    switch (key) {
        case 'home': return '/';
        case 'about': return '/about';
        case 'nagarGaurav': return '/nagar-gaurav';
        case 'festival': return '/panch-kalyan';
        case 'gallery': return '/gallery';
        case 'news': return '/news';
        case 'blogs': return '/blogs';
        case 'contact': return '/contact';
        case 'donate': return '/donate';
        default: return '/';
    }
  };

  const handleNavClick = (key) => {
    setIsMobileMenuOpen(false);
    const path = getPath(key);
    if (path.startsWith('/#')) {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById(path.substring(2));
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        navigate(path);
    }
  };

  return (
    <>
      {/* Top Bar - Premium Dark Saffron */}
      <div className="bg-[#5c2415] border-b border-[#d97706]/30 z-50 relative">
        <div className="max-w-site mx-auto px-4 py-2.5 text-orange-50 text-[11px] md:text-xs tracking-widest uppercase flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="hidden md:flex items-center gap-2">
            <span className="text-yellow-500 text-sm">ॐ</span> 
            Jai Jinendra | जय जिनेन्द्र
          </span>
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
            <Phone size={12} className="text-yellow-500" /> +91 98765 43210
          </a>
        </div>
        <div className="flex items-center gap-6">
            <span className="hidden md:inline text-orange-200/60">The Largest Directory of Jain Temples</span>
            <button 
            onClick={toggleLanguage} 
            className="flex items-center gap-2 hover:text-yellow-400 transition-all font-bold"
            >
            <Globe size={12} className="text-yellow-500" />
            {language === 'en' ? 'हिंदी' : 'English'}
            </button>
        </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`w-full z-40 transition-all duration-500 ease-in-out border-b border-[#d97706]/20
        ${isScrolled 
          ? 'fixed bg-[#fffcf7]/95 backdrop-blur-xl shadow-xl py-2 top-0' 
          : 'absolute bg-[#fffcf7] py-4 md:py-5 top-9'}`}
      >
        <div className="max-w-site mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 group cursor-pointer">
            {/* Logo Icon */}
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#9a3412] to-[#7c2d12] flex items-center justify-center shadow-lg border-2 border-yellow-500/50 group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
               <span className="text-white font-cinzel font-bold text-2xl relative z-10">ॐ</span>
            </div>
            
            <div className="flex flex-col">
              <h1 className={`font-cinzel font-bold text-[#5c2415] leading-none transition-all duration-300 ${isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl lg:text-3xl'}`}>
                {t.shortTitle}
              </h1>
              <span className="text-[10px] md:text-[11px] text-[#d97706] tracking-[0.2em] uppercase font-bold mt-1">
                {language === 'en' ? 'Atishay Kshetra' : 'अतिशय क्षेत्र'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navKeys.map((key) => (
              <button 
                key={key} 
                onClick={() => handleNavClick(key)}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-[#9a3412] relative group font-cinzel cursor-pointer bg-transparent border-none
                  ${key === 'festival' ? 'text-[#b91c1c]' : 'text-[#44403c]'}`}
              >
                {t.nav[key]}
                {/* Hover Ornament */}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#d97706] transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-[8px] text-[#d97706]">♦</span>
              </button>
            ))}

            {/* Donate Button (Premium) */}
            <Link to="/donate" className="flex items-center gap-2 bg-gradient-to-r from-[#9a3412] to-[#b91c1c] text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wider shadow-md hover:shadow-xl hover:shadow-orange-900/20 hover:-translate-y-0.5 transition-all uppercase border border-yellow-500/30">
              <Heart size={14} className="fill-current" />
              {t.nav.donate}
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-[#5c2415] p-2 hover:bg-orange-50 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div className={`fixed inset-0 z-[55] bg-[#292524]/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}></div>
      
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#fffcf7] z-[60] shadow-2xl transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) lg:hidden flex flex-col border-l border-[#d97706]/20
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Mobile Header */}
        <div className="p-6 border-b border-orange-100 flex items-center justify-between bg-orange-50/50">
            <span className="font-cinzel font-bold text-xl text-[#5c2415]">{t.shortTitle}</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-[#9a3412]">
                <X size={24} />
            </button>
        </div>

        <nav className="flex flex-col p-6 gap-2 overflow-y-auto">
          {navKeys.map((key) => (
            <button 
              key={key} 
              onClick={() => handleNavClick(key)}
              className={`text-lg font-cinzel font-medium py-3 px-4 rounded-lg transition-colors text-left
              ${key === 'festival' ? 'bg-red-50 text-red-800 border border-red-100' : 'text-[#44403c] hover:bg-orange-50 hover:text-[#9a3412]'}`}
            >
              {t.nav[key]}
            </button>
          ))}
           <Link to="/donate" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 bg-[#9a3412] text-white px-5 py-3.5 rounded-lg text-sm font-bold shadow-lg mt-6 uppercase tracking-wider">
              <Heart size={16} className="fill-current" />
              {t.nav.donate}
            </Link>
        </nav>

        {/* Mobile Decorative Footer */}
        <div className="mt-auto p-8 text-center bg-orange-50/30 border-t border-orange-100">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#9a3412] to-[#d97706] rounded-full flex items-center justify-center mb-4 shadow-lg border-2 border-white">
                <span className="text-white font-cinzel font-bold text-2xl">ॐ</span>
            </div>
            <p className="text-sm font-cinzel text-[#5c2415] font-bold">Jai Jinendra</p>
            <p className="text-xs text-orange-400 mt-1">Shri Digambar Jain Atishay Kshetra</p>
        </div>
      </div>
    </>
  );
};

export default Header;
