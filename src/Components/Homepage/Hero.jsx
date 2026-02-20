import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { MapPin, Heart, ChevronRight } from 'lucide-react';

// Import Swiper styles (Required for Swiper functionality)
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroSection = ({ language = 'en' }) => {
  // 1. Content Object - Centralized for i18n
  const heroContent = {
    en: [
      {
        id: 1,
        subtitle: "Welcome to the Divine Land of Miracles",
        title: "Shri Digambar Jain Pateriyaji",
        description: "Experience the eternal peace and spiritual vibration of 1000+ years of heritage.",
        ctaPrimary: "Visit Temple",
        ctaSecondary: "Support & Donate",
        bgImage: "/img/Gallery/gp (2).jpeg",
      },
      {
        id: 2,
        subtitle: "Upcoming Grand Celebration",
        title: "Panch Kalyan Mahotsav 2026",
        description: "Join us in the historic consecration ceremony of the divine Jinendra idols.",
        ctaPrimary: "Learn More",
        ctaSecondary: "Register Now",
        bgImage: "/img/Gallery/gp (3).jpeg",
      },
      {
        id: 3,
        subtitle: "Architecture of Faith",
        title: "Ancient Heritage & Culture",
        description: "Witness the intricate carvings and profound silence of our sacred Jain architecture.",
        ctaPrimary: "Gallery",
        ctaSecondary: "Our History",
        bgImage: "/img/Gallery/gp (4).jpeg",
      }
    ],
    hi: [
      {
        id: 1,
        subtitle: "चमत्कारिक सिद्ध भूमि में आपका स्वागत है",
        title: "श्री दिगम्बर जैन पटेरियाजी",
        description: "१०००+ वर्षों की विरासत की शाश्वत शांति और आध्यात्मिक स्पंदन का अनुभव करें।",
        ctaPrimary: "मंदिर दर्शन",
        ctaSecondary: "सहयोग और दान",
        bgImage: "/img/Gallery/gp (2).jpeg",
      },
      {
        id: 2,
        subtitle: "आगामी भव्य आयोजन",
        title: "पंचकल्याणक महोत्सव २०२६",
        description: "दिव्य जिनेंद्र प्रतिमाओं के ऐतिहासिक अभिषेक समारोह में हमारे साथ जुड़ें।",
        ctaPrimary: "अधिक जानकारी",
        ctaSecondary: "पंजीकरण करें",
        bgImage: "/img/Gallery/gp (3).jpeg",
      },
      {
        id: 3,
        subtitle: "आस्था की वास्तुकला",
        title: "प्राचीन विरासत और संस्कृति",
        description: "हमारी पवित्र जैन वास्तुकला की जटिल नक्काशी और गहन मौन के साक्षी बनें।",
        ctaPrimary: "गैलरी",
        ctaSecondary: "हमारा इतिहास",
        bgImage: "/img/Gallery/gp (4).jpeg",
      }
    ]
  };

  const currentSlides = heroContent[language];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#292524]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={2000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + ' bg-white/50 hover:bg-white"></span>';
          },
        }}
        className="h-full w-full hero-swiper"
      >
        {currentSlides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            {/* Background Image with Ken Burns Effect */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear scale-125"
              style={{backgroundImage: `url("${slide.bgImage}")`, }}
            >
              {/* Divine Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
              {/* Radial Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)]"></div>
            </div>

            {/* Content Container */}
            <div className="relative h-full max-w-site mx-auto px-6 flex flex-col justify-center items-center text-center pt-20">
              
              {/* Subtitle - Ornamented */}
              <div className="mb-6 flex items-center gap-4 animate-fade-in-up">
                 <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-yellow-500"></div>
                 <span className="text-yellow-400 font-cinzel font-semibold tracking-[0.3em] uppercase text-xs md:text-sm shadow-black drop-shadow-md">
                   {slide.subtitle}
                 </span>
                 <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-yellow-500"></div>
              </div>

              {/* Title - Grand & Divine */}
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-cinzel font-bold text-white mb-8 leading-tight drop-shadow-2xl max-w-5xl">
                {slide.title.split(' ').map((word, i) => (
                  <span key={i} className={i >= 3 ? "text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 block md:inline" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </h2>

              {/* Description */}
              <p className="max-w-3xl text-orange-50/90 text-lg md:text-xl mb-12 leading-relaxed font-playfair italic tracking-wide">
                "{slide.description}"
              </p>

              {/* CTA Buttons - Premium Styles */}
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                {/* Primary: Royal Button */}
                <button className="group relative overflow-hidden bg-gradient-to-r from-[#d97706] to-[#b45309] text-white px-10 py-4 rounded-full font-cinzel font-bold tracking-widest border border-yellow-500/50 hover:border-yellow-400 transition-all duration-500 shadow-[0_0_20px_rgba(217,119,6,0.5)] hover:shadow-[0_0_30px_rgba(217,119,6,0.8)] hover:scale-105">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></span>
                  <div className="flex items-center gap-3 relative z-10">
                    <MapPin size={18} />
                    {slide.ctaPrimary}
                  </div>
                </button>

                {/* Secondary: Outline Gold */}
                <button className="flex items-center gap-3 px-10 py-4 rounded-full font-cinzel font-bold tracking-widest text-yellow-100 border border-white/20 hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                   <Heart size={18} className="text-red-500" />
                  {slide.ctaSecondary}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative Bottom Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-50 z-20 mask-image-gradient-to-t"></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] text-yellow-500 uppercase tracking-widest opacity-80">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-yellow-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;