import React from 'react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const Blog = ({ language }) => {
  const content = {
    en: {
      title: "Spiritual Insights & Blogs",
      subtitle: "Explore the depths of Jain philosophy and the history of Pateriyaji through our curated articles.",
      readMore: "Read Article",
      posts: [
        {
          id: 1,
          title: "The Significance of Atishay Kshetra",
          excerpt: "Understanding why certain pilgrimages are termed 'Atishay Kshetra' and their impact on a devotee's spiritual journey.",
          date: "October 15, 2025",
          author: "Pt. Shastri Ji",
          image: "https://www.jainmandir.info/wp-content/uploads/2020/01/Jain-Mandir-Info-Logo-New.png" // Placeholder
        },
        {
          id: 2,
          title: "History of Lord Parshvanath's Idol",
          excerpt: "Tracing the miraculous origins and the divine discovery of the main idol at Pateriyaji.",
          date: "September 28, 2025",
          author: "History Committee",
          image: "https://www.jainmandir.info/wp-content/uploads/2020/01/Jain-Mandir-Info-Logo-New.png"
        },
        {
          id: 3,
          title: "Panch Kalyan Mahotsav Preparations",
          excerpt: "A glimpse into the grand preparations for the upcoming Mahotsav in 2026.",
          date: "August 10, 2025",
          author: "Event Team",
          image: "https://www.jainmandir.info/wp-content/uploads/2020/01/Jain-Mandir-Info-Logo-New.png"
        }
      ]
    },
    hi: {
      title: "आध्यात्मिक विचार और ब्लॉग",
      subtitle: "हमारे लेखों के माध्यम से जैन दर्शन की गहराई और पटेरियाजी के इतिहास का अन्वेषण करें।",
      readMore: "पूरा लेख पढ़ें",
      posts: [
        {
          id: 1,
          title: "अतिशय क्षेत्र का महत्व",
          excerpt: "समझें कि क्यों कुछ तीर्थों को 'अतिशय क्षेत्र' कहा जाता है और भक्त की आध्यात्मिक यात्रा पर उनका प्रभाव।",
          date: "अक्टूबर १५, २०२५",
          author: "पं. शास्त्री जी",
          image: "https://www.jainmandir.info/wp-content/uploads/2020/01/Jain-Mandir-Info-Logo-New.png"
        },
        {
          id: 2,
          title: "भगवान पार्श्वनाथ की प्रतिमा का इतिहास",
          excerpt: "पटेरियाजी में मुख्य प्रतिमा की चमत्कारिक उत्पत्ति और दिव्य खोज का पता लगाना।",
          date: "सितंबर २८, २०२५",
          author: "इतिहास समिति",
          image: "https://www.jainmandir.info/wp-content/uploads/2020/01/Jain-Mandir-Info-Logo-New.png"
        },
        {
          id: 3,
          title: "पंचकल्याणक महोत्सव की तैयारियां",
          excerpt: "२०२६ में आगामी महोत्सव के लिए भव्य तैयारियों की एक झलक।",
          date: "अगस्त १०, २०२५",
          author: "आयोजन टीम",
          image: "https://www.jainmandir.info/wp-content/uploads/2020/01/Jain-Mandir-Info-Logo-New.png"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-[#fffcf7] pt-32 pb-20 relative overflow-hidden font-sans">
       {/* Background Pattern */}
       <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
       
       <div className="max-w-site mx-auto px-6 relative z-10">
         {/* Header */}
         <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#d97706]"></div>
                <span className="text-[#9a3412] font-cinzel font-bold uppercase tracking-[0.2em] text-sm">
                    {language === 'en' ? 'Knowledge' : 'ज्ञान'}
                </span>
                <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#d97706]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-[#5c2415] mb-6 drop-shadow-sm">
                {t.title}
            </h1>
            <p className="text-[#9a3412] text-lg md:text-xl font-playfair italic">
                {t.subtitle}
            </p>
         </div>

         {/* Blog Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {t.posts.map((post) => (
                <article key={post.id} className="bg-white border border-[#fed7aa] rounded-sm overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(217,119,6,0.2)] transition-all duration-500 group flex flex-col h-full relative">
                    {/* Ornamental Corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#d97706]/20 rounded-tr-lg z-20 pointer-events-none group-hover:border-[#d97706]/60 transition-colors"></div>

                    {/* Image */}
                    <div className="h-56 overflow-hidden relative">
                        <div className="absolute inset-0 bg-[#5c2415]/20 group-hover:bg-transparent transition-colors z-10"></div>
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 bg-[#9a3412] text-white px-4 py-1 text-xs font-cinzel font-bold tracking-widest z-20">
                            BLOG
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-xs font-bold text-[#d97706] uppercase tracking-wider mb-4">
                            <div className="flex items-center gap-1">
                                <Calendar size={12} />
                                {post.date}
                            </div>
                            <div className="w-1 h-1 bg-[#d97706] rounded-full"></div>
                            <div className="flex items-center gap-1">
                                <User size={12} />
                                {post.author}
                            </div>
                        </div>

                        <h2 className="text-2xl font-cinzel font-bold text-[#5c2415] mb-4 leading-tight group-hover:text-[#9a3412] transition-colors">
                            {post.title}
                        </h2>

                        <p className="text-gray-600 font-playfair mb-6 leading-relaxed flex-grow">
                            {post.excerpt}
                        </p>

                        <button className="flex items-center gap-2 text-[#9a3412] font-bold tracking-widest uppercase text-xs group/btn mt-auto">
                            {t.readMore}
                            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Bottom Border */}
                    <div className="h-1 bg-gradient-to-r from-[#9a3412] via-[#d97706] to-[#9a3412] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </article>
            ))}
         </div>
       </div>
    </div>
  );
};

export default Blog;