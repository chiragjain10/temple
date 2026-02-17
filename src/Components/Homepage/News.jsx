import React from 'react';
import { Calendar, MessageCircle, ArrowRight, Bell, Tag } from 'lucide-react';

const NewsPage = ({ language = 'en', isStandalone = false }) => {
  // 1. Content Object - Generic Temple News
  const newsContent = {
    en: {
      pageTitle: "Temple News & Announcements",
      pageSubtitle: "Latest updates, upcoming events, and religious ceremonies at Shri Digambar Jain Atishay Kshetra Pateriyaji.",
      readMore: "Read Details",
      comments: "Comments",
      published: "Published",
      items: [
        {
          id: 1,
          title: "Annual Maha Mastakabhisheka Preparation Begins",
          date: "October 15, 2025",
          category: "Event",
          description: "Preparations for the grand Maha Mastakabhisheka are in full swing. Devotees are invited to participate in the preliminary rituals.",
          image: "https://images.unsplash.com/photo-1604514757530-109a0669b325?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 2,
          title: "Special Puja During Das Lakshan Parva",
          date: "September 10, 2025",
          category: "Festival",
          description: "Join us for the 10-day spiritual journey of Das Lakshan Parva with daily Pravachan and cultural programs.",
          image: "https://images.unsplash.com/photo-1560159752-d5951d3b3796?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 3,
          title: "Renovation of Guest House Completed",
          date: "August 20, 2025",
          category: "Development",
          description: "The renovation of the Dharamshala is now complete, offering modern amenities for pilgrims visiting the Kshetra.",
          image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 4,
          title: "Upcoming Medical Camp for Devotees",
          date: "July 05, 2025",
          category: "Community",
          description: "A free health checkup camp will be organized in the temple premises this Sunday. All are welcome.",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 5,
          title: "Donation Drive for Goshala Started",
          date: "June 12, 2025",
          category: "Charity",
          description: "Support our Goshala initiative. Your contributions help in providing fodder and shelter for cows.",
          image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 6,
          title: "Weekly Swadhyay Sessions Schedule",
          date: "May 01, 2025",
          category: "Spiritual",
          description: "New timings for weekly Swadhyay sessions by Pandit Ji. Join us every Sunday morning.",
          image: "https://images.unsplash.com/photo-1517865288-978fcb780652?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    hi: {
      pageTitle: "मंदिर समाचार और घोषणाएं",
      pageSubtitle: "श्री दिगम्बर जैन अतिशय क्षेत्र पटेरियाजी में नवीनतम अपडेट, आगामी कार्यक्रम और धार्मिक समारोह।",
      readMore: "विस्तार से पढ़ें",
      comments: "टिप्पणियाँ",
      published: "प्रकाशित",
      items: [
        {
          id: 1,
          title: "वार्षिक महामस्तकाभिषेक की तैयारियां शुरू",
          date: "15 अक्टूबर, 2025",
          category: "कार्यक्रम",
          description: "भव्य महामस्तकाभिषेक की तैयारियां जोरों पर हैं। भक्तों को प्रारंभिक अनुष्ठानों में भाग लेने के लिए आमंत्रित किया जाता है।",
          image: "https://images.unsplash.com/photo-1604514757530-109a0669b325?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 2,
          title: "दशलक्षण पर्व के दौरान विशेष पूजा",
          date: "10 सितंबर, 2025",
          category: "त्योहार",
          description: "दैनिक प्रवचन और सांस्कृतिक कार्यक्रमों के साथ दशलक्षण पर्व की 10 दिवसीय आध्यात्मिक यात्रा में शामिल हों।",
          image: "https://images.unsplash.com/photo-1560159752-d5951d3b3796?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 3,
          title: "अतिथि गृह का जीर्णोद्धार संपन्न",
          date: "20 अगस्त, 2025",
          category: "विकास",
          description: "धर्मशाला का जीर्णोद्धार अब पूरा हो गया है, जो क्षेत्र में आने वाले तीर्थयात्रियों के लिए आधुनिक सुविधाएं प्रदान करता है।",
          image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 4,
          title: "भक्तों के लिए आगामी चिकित्सा शिविर",
          date: "05 जुलाई, 2025",
          category: "सामुदायिक",
          description: "इस रविवार को मंदिर परिसर में नि:शुल्क स्वास्थ्य जांच शिविर का आयोजन किया जाएगा।",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 5,
          title: "गौशाला के लिए दान अभियान शुरू",
          date: "12 जून, 2025",
          category: "दान",
          description: "हमारी गौशाला पहल का समर्थन करें। आपका योगदान गायों के लिए चारा और आश्रय प्रदान करने में मदद करता है।",
          image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 6,
          title: "साप्ताहिक स्वाध्याय सत्र अनुसूची",
          date: "01 मई, 2025",
          category: "आध्यात्मिक",
          description: "पंडित जी द्वारा साप्ताहिक स्वाध्याय सत्रों के लिए नया समय। हर रविवार सुबह हमारे साथ जुड़ें।",
          image: "https://images.unsplash.com/photo-1517865288-978fcb780652?auto=format&fit=crop&q=80&w=800"
        }
      ]
    }
  };

  const t = newsContent[language];

  return (
    <div className={`min-h-screen bg-[#fffcf7] px-4 md:px-8 relative ${isStandalone ? 'pt-32 pb-20' : 'py-16'}`}>
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      {/* Header Section */}
      <div className="max-w-site mx-auto text-center mb-16 relative z-10">
        <h1 className="text-3xl md:text-5xl font-cinzel font-bold text-[#5c2415] mb-6 drop-shadow-sm">
          {t.pageTitle}
        </h1>
        
        {/* Premium Divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-[#d97706]"></div>
          <div className="w-3 h-3 rotate-45 border-2 border-[#d97706] bg-[#fffcf7]"></div>
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-[#d97706]"></div>
        </div>

        <p className="max-w-2xl mx-auto text-[#9a3412] font-playfair italic text-lg">
          {t.pageSubtitle}
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative z-10">
        {t.items.map((post) => (
          <NewsItemCard key={post.id} post={post} labels={t} />
        ))}
      </div>
    </div>
  );
};

// Updated News Card for Generic News
const NewsItemCard = ({ post, labels }) => {
  return (
    <div className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(217,119,6,0.3)] transition-all duration-500 border border-[#fed7aa] flex flex-col h-full relative cursor-pointer">
      {/* Ornamental Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#d97706]/20 rounded-tr-lg z-20 pointer-events-none group-hover:border-[#d97706]/60 transition-colors"></div>
      
      {/* Image Container */}
      <div className="relative overflow-hidden h-56">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#5c2415]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-[#fffcf7] text-[#9a3412] text-[10px] font-cinzel font-bold uppercase tracking-widest py-1 px-3 shadow-lg border border-[#fdba74] flex items-center gap-1">
          <Tag size={10} />
          {post.category}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-[#fffaf0]">
        <div className="flex items-center text-[11px] font-bold uppercase tracking-wider text-[#d97706] mb-3">
          <Calendar size={13} className="mr-1.5" />
          {post.date}
        </div>

        <h2 className="text-lg font-cinzel font-bold text-[#5c2415] mb-3 group-hover:text-[#9a3412] transition-colors leading-snug">
          {post.title}
        </h2>
        
        <p className="text-[#57534e] text-sm font-playfair leading-relaxed mb-6 line-clamp-3">
          {post.description}
        </p>

        <div className="mt-auto pt-4 border-t border-[#fed7aa]/30 flex items-center justify-between">
          <span className="text-xs font-bold font-cinzel text-[#9a3412] flex items-center gap-2 group-hover:translate-x-1 transition-transform tracking-wider">
            {labels.readMore}
            <ArrowRight size={14} />
          </span>
          <Bell size={14} className="text-[#d97706] opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;