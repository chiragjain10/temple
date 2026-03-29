import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation, Parallax } from 'swiper/modules';
import { MapPin, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroSection = ({ language = 'en' }) => {
  const navigate = useNavigate();

  const heroContent = {
    en: [
      {
        id: 1,
        subtitle: "Welcome to the Divine Land of Miracles",
        title: "Shri Digambar Jain Pateriyaji",
        description: "Experience the eternal peace and spiritual vibration of 1000+ years of heritage.",
        ctaPrimary: "Visit Temple",
        ctaSecondary: "Support & Donate",
        bgImage: "/img/Gallery/00.png",
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
        bgImage: "/img/Gallery/00.png",
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
    <section className="relative h-screen w-full overflow-hidden bg-[#1c1917]">
      {/* Custom Global Styles for Premium Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes kenburns {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        .swiper-slide-active .ken-burns-img {
          animation: kenburns 8s ease-out forwards;
        }
        .hero-pagination .swiper-pagination-bullet {
          width: 40px;
          height: 3px;
          border-radius: 0;
          background: rgba(255,255,255,0.3);
          opacity: 1;
          transition: all 0.3s;
        }
        .hero-pagination .swiper-pagination-bullet-active {
          background: #eab308 !important;
          width: 60px;
        }
      `}} />

      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation, Parallax]}
        effect="fade"
        speed={1500}
        parallax={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
          el: '.hero-pagination',
        }}
        navigation={{
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
        }}
        className="h-full w-full"
      >
        {currentSlides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative overflow-hidden">
            {/* Background Image Container */}
            <div className="absolute inset-0">
              <div 
                className="ken-burns-img absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: `url("${slide.bgImage}")` }}
              />
              {/* Premium Multi-layer Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20"></div>
            </div>

            {/* Inner Gold Frame (Subtle) */}
            <div className="absolute inset-8 border border-yellow-500/20 pointer-events-none z-10 hidden md:block"></div>

            {/* Content Section */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start pt-16">
              
              {/* Subtitle */}
              <div className="overflow-hidden mb-4">
                <div 
                  data-swiper-parallax="-200"
                  className="flex items-center gap-3"
                >
                  <span className="h-[2px] w-8 bg-yellow-500"></span>
                  <span className="text-yellow-500 font-cinzel font-bold tracking-[0.4em] uppercase text-xs md:text-sm">
                    {slide.subtitle}
                  </span>
                </div>
              </div>

              {/* Main Title */}
              <h2 
                data-swiper-parallax="-400"
                className="text-5xl md:text-8xl font-cinzel font-bold text-white mb-6 leading-[1.1] max-w-4xl"
              >
                {slide.title.split(' ').map((word, i) => (
                  <span key={i} className={i >= 3 ? "text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </h2>

              {/* Description */}
              <div className="overflow-hidden mb-10 max-w-2xl">
                <p 
                  data-swiper-parallax="-600"
                  className="text-stone-300 text-lg md:text-2xl font-playfair italic leading-relaxed"
                >
                  {slide.description}
                </p>
              </div>

              {/* Buttons */}
              <div 
                data-swiper-parallax="-800"
                className="flex flex-col sm:flex-row gap-5"
              >
                <button 
                  onClick={() => {
                    if (slide.id === 1) navigate('/about');
                    else if (slide.id === 2) navigate('/panch-kalyan');
                    else if (slide.id === 3) navigate('/gallery');
                  }}
                  className="relative group px-10 py-4 bg-yellow-600 hover:bg-yellow-500 text-white overflow-hidden transition-all duration-300">
                  <div className="absolute inset-0 w-1/4 h-full bg-white/20 -skew-x-[45deg] -translate-x-full group-hover:animate-[shimmer_0.6s_infinite]"></div>
                  <div className="flex items-center gap-3 font-cinzel font-bold tracking-widest relative z-10">
                    <MapPin size={18} className="text-yellow-200" />
                    {slide.ctaPrimary}
                  </div>
                </button>

                <button 
                  onClick={() => {
                    if (slide.id === 1) navigate('/donate');
                    else if (slide.id === 2) navigate('/panch-kalyan');
                    else if (slide.id === 3) navigate('/about');
                  }}
                  className="px-10 py-4 border border-white/40 hover:border-yellow-500 text-white backdrop-blur-md transition-all duration-300 group">
                  <div className="flex items-center gap-3 font-cinzel font-bold tracking-widest">
                    <Heart size={18} className="text-red-500 group-hover:scale-125 transition-transform" />
                    {slide.ctaSecondary}
                  </div>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation & Controls */}
      <div className="absolute bottom-12 left-6 md:left-24 z-40 flex items-center gap-8">
        <div className="hero-pagination flex gap-2"></div>
      </div>

      <div className="absolute bottom-12 right-6 md:right-24 z-40 flex gap-4">
        <button className="hero-prev w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-yellow-600 hover:border-yellow-600 transition-all">
          <ChevronLeft size={24} />
        </button>
        <button className="hero-next w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-yellow-600 hover:border-yellow-600 transition-all">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 z-40 hidden md:flex flex-col items-center pb-8">
        <div className="w-[1px] h-16 bg-gradient-to-b from-yellow-500/0 via-yellow-500 to-yellow-500/0 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;