import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';

const NagarGaurav = ({ language = 'en', isStandalone = false }) => {
  // 1. Content Object - Spiritual & Respectful Translations
  const content = {
    en: {
      pageTitle: "Nagar Gaurav",
      pageSubtitle: "Honoring the esteemed spiritual leaders and saints who have graced our Kshetra.",
      readMore: "Read Full Profile",
      comments: "Comments",
      published: "Published on",
      items: [
        {
          id: 0,
          title: "Upadhyay Shri 108 Gupti Sagar Ji Maharaj",
          date: "December 4, 1957",
          commentCount: 0,
          image: "img/Gallery/1.png",
          link: "",
          details: {
            birthName: "Naveen Kumar Jain",
            birthPlace: "Gadhakota, Sagar, Madhya Pradesh",
            fatherName: "Late Shri Khoobchand Jain",
            motherName: "Late Smt. Indra Devi Jain (Samadhisth Punya 105 Muktishri Mata Ji)",
            ailakDiksha: "20 August 1980, Siddh Kshetra Nemgiri",
            ailakDikshaGuru: "Acharya Shri Vidyasagar Ji",
            muniDiksha: "20 August 1982, Siddh Kshetra Nemgiri",
            muniDikshaGuru: "Acharya Shri Vidyasagar Ji",
            upadhyayPad: "17 February 1991, Gommatsgiri, Indore",
            upadhyayGuru: "Acharya Shri Vidyanand Ji"
          }
        },

        {
          id: 1,
          title: "Muni Shri 108 Ajit Sagar Ji Maharaj",
          date: "April 17, 1968",
          commentCount: 0,
          image: "img/Gallery/2.png",
          link: "",
          details: {
            birthName: "Vinod Kumar Jain",
            birthPlace: "Gadhakota, Sagar, Madhya Pradesh",
            fatherName: "Shri Komalchand Jain",
            motherName: "Smt. Tarabai Jain",
            education: "High School",
            kshullakDiksha: "20 April 1996, Akshay Tritiya",
            kshullakDikshaGuru: "Acharya Shri Vidyasagar Ji Maharaj",
            ailakDiksha: "5 January 1998, Siddh Kshetra Nemawar",
            muniDiksha: "22 April 1999, Siddh Kshetra Nemawar"
          }
        },

        {
          id: 2,

          title: "Muni Shri 108 Prarthana Sagar Ji Maharaj",
          date: "October 8, 1970",
          commentCount: 0,
          image: "img/Gallery/3.png",
          link: "",
          details: {
            birthName: "Arvind Jain",
            birthPlace: "Gunjora, Gadhakota",
            fatherName: "Shri Amarchand Jain",
            motherName: "Smt. Lakshmi Devi Jain",
            education: "Graduate"
          }
        },

        {
          id: 3,

          title: "Muni Shri 108 Sugyan Sagar Ji Maharaj",
          date: "Year 1910",
          commentCount: 0,
          image: "img/Gallery/4.png",
          link: "",
          details: {
            birthName: "Kunwar Lal Ji (Banda Wale)",
            birthPlace: "Pura, Damoh",
            fatherName: "Shri Balchand Ji",
            motherName: "Smt. Shanti Bai Ji",
            education: "Primary",
            kshullakDikshaGuru: "Muni Shri Kalyan Sagar Ji Maharaj",
            muniDikshaGuru: "Acharya Shri Siddhant Sagar Ji Maharaj",
            samadhi: "Year 1998, Village Hardi"
          }
        },
        
        {
          id: 4,
          title: "Ailak Shri 105 Siddhant Sagar Ji Maharaj",
          date: "August 14, 1958",
          commentCount: 0,
          image: "img/Gallery/5.png",
          link: "",
          details: {
            birthName: "Suman Kumar Jain (Jayak)",
            birthPlace: "Gudhawar",
            fatherName: "Shri Gulzarilal Jain",
            motherName: "Smt. Sheeladevi Jain",
            education: "B.Com",
            brahmacharyaVrat: "28 March 1978, Shri Atishay Kshetra Pateriya Ji",
            kshullakDiksha: "16 May 1991, Siddh Kshetra Muktagiri Ji",
            ailakDiksha: "21 July 1991, Siddh Kshetra Muktagiri Ji"
          }
        }, 
        
        {
          id: 5,
          title: "Aryika Shri 105 Aagat Mati Mata Ji",
          date: "July 14, 1976",
          commentCount: 0,
          image: "img/Gallery/6.png",
          link: "",
          details: {
            birthName: "Bal Brahmacharini Vinita Didi",
            birthDate: "14 July 1976 (Shravan Krishna 3, Vikram Samvat)",
            birthPlace: "Gadhakota, Sagar District, Madhya Pradesh",
            fatherName: "Shri Nanduram Jain",
            motherName: "Smt. Kesarbai Jain",
            education: "M.Sc. (Physics), M.A. (Sanskrit)",
            brahmacharyaVrat: "11 January 2003, Sagar (M.P.)",
            pratima: "9 July 2004, Ramtek (Maharashtra)",
            aryikaDiksha: "13 February 2006 (Magh Shukla 15, V.S. 2062)",
            dikshaGuru: "Param Pujya Acharya Shri Vidyasagar Ji Maharaj",
            place: "Shri Digambar Jain Siddh Kshetra Kundalpur Ji, Damoh (M.P.)",
            specialNote: "Received direct Aryika Diksha"
          }
        },
        
        {
          id: 6,
          title: "Samadhistha Pujya 105 Muktishri Mata Ji",
          date: "May 5, 1995",
          commentCount: 0,
          image: "img/Gallery/7.png",
          link: "",
          details: {
            birthName: "Smt. Indra Devi Ji",
            husbandName: "Late Shri Khoobchand Jain",
            samadhiDate: "5 May 1995",
            samadhiPlace: "Shri Atishay Kshetra Pateriya Ji"
          }
        }, 
        
        
        {
          id: 7,
          title: "Aryika Shri 105 Sudharmmati Mata Ji",
          date: "September 30, 2017",
          commentCount: 0,
          image: "img/Gallery/8.png",
          link: "",
          details: {
            formerName: "Smt. Shantibai Jain",
            fatherName: "Late Shri Katturchand Badgul (Damoh)",
            motherName: "Late Smt. Pyari Bai Badgul",
            husbandName: "Late Shri Dharmchand Jain",
            diksha: "30 September 2017, Bela, Kundalpur",
            dikshaGuru: "Shri 108 Siddhant Sagar Ji Maharaj",
            samadhi: "3 November 2017, Bela, Kundalpur"
          }
        }, 
        
        
        {
          id: 8,
          title: "Kshullika Shri 105 Prabhatmati Mata Ji",
          date: "Year 1942",
          commentCount: 0,
          image: "img/Gallery/9.png",
          link: "",
          details: {
            birthName: "Smt. Kamodrani Jain",
            birthPlace: "Umra, Sagar District, Madhya Pradesh",
            fatherName: "Shri Munnalal Jain",
            husbandName: "Late Shri Nemchand Ji",
            education: "Primary",
            kshullikaDiksha: "Jakatiya, Indore",
            dikshaGuru: "Acharya Shri 108 Prasann Sagar Ji Maharaj"
          }
        },


      ]

    },
    hi: {
      pageTitle: "नगर गौरव",
      pageSubtitle: "हमारे क्षेत्र को सुशोभित करने वाले पूज्य संतों और आध्यात्मिक गुरुओं का सम्मान।",
      readMore: "पूरा प्रोफाइल पढ़ें",
      comments: "टिप्पणियाँ",
      published: "प्रकाशित तिथि",
      items: [
        {
          id: 0, title: "उपाध्याय श्री 108 गुप्ति सागर जी महाराज",
          date: "4 दिसंबर 1957",
          commentCount: 0,
          image: "img/Gallery/1.png",
          link: "",
          details: {
            जन्म_नाम: "नवीन कुमार जैन",
            जन्म_स्थान: "गढ़ाकोटा, सागर, मध्य प्रदेश",
            पिता_का_नाम: "स्व. श्री खूबचंद जैन",
            माता_का_नाम: "स्व. श्रीमती इंद्रा देवी जैन (समाधिस्थ पुण्य 105 मुक्तिश्री माता जी)",
            ऐलक_दीक्षा: "20 अगस्त 1980, सिद्ध क्षेत्र नेमगिरी",
            ऐलक_दीक्षा_गुरु: "आचार्य श्री विद्यासागर जी",
            मुनि_दीक्षा: "20 अगस्त 1982, सिद्ध क्षेत्र नेमगिरी",
            मुनि_दीक्षा_गुरु: "आचार्य श्री विद्यासागर जी",
            उपाध्याय_पद: "17 फरवरी 1991, गोम्मटगिरी, इंदौर",
            उपाध्याय_गुरु: "आचार्य श्री विद्यानंद जी"
          }
        },

        {
          id: 1,
          title: "मुनि श्री 108 अजित सागर जी महाराज",
          date: "17 अप्रैल 1968",
          commentCount: 0,
          image: "img/Gallery/2.png",
          link: "",
          details: {
            जन्म_नाम: "विनोद कुमार जैन",
            जन्म_स्थान: "गढ़ाकोटा (सागर, म.प्र.)",
            पिता_का_नाम: "श्री कोमलचंद जैन",
            माता_का_नाम: "श्रीमती ताराबाई जैन",
            शिक्षा: "हाईस्कूल",
            क्षुल्लक_दीक्षा: "20 अप्रैल 1996, अक्षय तृतीया",
            क्षुल्लक_दीक्षा_गुरु: "आचार्य श्री विद्यासागर जी महाराज",
            ऐलक_दीक्षा: "5 जनवरी 1998, सिद्धक्षेत्र नेमावर",
            मुनि_दीक्षा: "22 अप्रैल 1999, सिद्धक्षेत्र नेमावर"
          }
        },

        {
          id: 2,

          title: "मुनि श्री 108 प्रार्थना सागर जी महाराज",
          date: "8 अक्टूबर 1970",
          commentCount: 0,
          image: "img/Gallery/3.png",
          link: "",
          details: {
            जन्म_नाम: "अरविंद जैन",
            जन्म_स्थान: "गुंजौरा, गढ़ाकोटा",
            पिता_का_नाम: "श्री अमरचंद जी जैन",
            माता_का_नाम: "श्रीमती लक्ष्मी देवी जैन",
            शिक्षा: "ग्रेजुएट"
          }
        },

        {
          id: 3,

          title: "मुनि श्री 108 सुज्ञान सागर जी महाराज",
          date: "वर्ष 1910",
          commentCount: 0,
          image: "img/Gallery/4.png",
          link: "",
          details: {
            जन्म_नाम: "कुंवर लाल जी (बांदा वाले)",
            जन्म_स्थान: "पूरा (दमोह)",
            पिता_का_नाम: "श्री बालचंद जी",
            माता_का_नाम: "श्रीमती शांति बाई जी",
            शिक्षा: "प्राइमरी",
            क्षुल्लक_दीक्षा_गुरु: "मुनि श्री कल्याण सागर जी महाराज",
            मुनि_दीक्षा_गुरु: "आचार्य श्री सिद्धांत सागर जी महाराज",
            समाधि: "वर्ष 1998, ग्राम हरदी"
          }
        },
        
        {
          id: 4,
          title: "ऐलक श्री 105 सिद्धांत सागर जी महाराज",
          date: "14 अगस्त 1958",
          commentCount: 0,
          image: "img/Gallery/5.png",
          link: "",
          details: {
            जन्म_नाम: "सुमन कुमार जैन (जायक)",
            जन्म_स्थान: "गुढ़वार",
            पिता_का_नाम: "श्री गुलजारिलाल जी जैन",
            माता_का_नाम: "श्रीमती शीलादेवी जी जैन",
            शिक्षा: "बी.कॉम.",
            ब्रह्मचर्य_व्रत: "28 मार्च 1978, श्री अतिशय क्षेत्र पटेरिया जी",
            क्षुल्लक_दीक्षा: "16 मई 1991, सिद्धक्षेत्र मुकागिरी जी",
            ऐलक_दीक्षा: "21 जुलाई 1991, सिद्धक्षेत्र मुकागिरी जी"
          }
        }, 
        
        {
          id: 5,
          title: "आर्यिका श्री 105 आगत मति माता जी",
          date: "14 जुलाई 1976",
          commentCount: 0,
          image: "img/Gallery/6.png",
          link: "",
          details: {
            जन्म_नाम: "बाल ब्रह्मचारिणी विनिता दीदी",
            जन्म: "14 जुलाई 1976, बुधवार (श्रावण कृष्ण 3, वि.सं.)",
            जन्म_स्थान: "गढ़ाकोटा, जिला सागर (म.प्र.)",
            पिता_का_नाम: "श्री नंदूराम जैन",
            माता_का_नाम: "श्रीमती केसरबाई जैन",
            शिक्षा: "एम.एससी. (फिजिक्स), एम.ए. (संस्कृत)",
            ब्रह्मचर्य_व्रत: "11 जनवरी 2003, सागर (म.प्र.)",
            प्रतिमा: "09 जुलाई 2004, रामटेक (महाराष्ट्र)",
            आर्यिका_दीक्षा: "13 फरवरी 2006, माघ शुक्ल 15, वि.सं. 2062",
            दीक्षा_गुरु: "परम पूज्य आचार्य श्री विद्यासागर जी महाराज",
            स्थान: "श्री दिगम्बर जैन सिद्धक्षेत्र कुंडलपुर जी, जिला दमोह (म.प्र.)",
            विशेष: "आपकी सीधी आर्यिका दीक्षा हुई"
          }
        }, 
        
        
        {
          id: 6,
          title: "समाधिस्थ पूज्य 105 मुक्तिश्री माता जी",
          date: "5 मई 1995",
          commentCount: 0,
          image: "img/Gallery/7.png",
          link: "",
          details: {
            जन्म_नाम: "श्रीमती इंद्रा देवी जी",
            पति_का_नाम: "स्व. श्री खूबचंद जैन",
            समाधि_तिथि: "5 मई 1995",
            समाधि_स्थान: "श्री अतिशय क्षेत्र पटेरिया जी"
          }
        }, 
        
        
        {
          id: 7,
          title: "आर्यिका श्री 105 सुधर्ममति माता जी",
          date: "30 सितंबर 2017",
          commentCount: 0,
          image: "img/Gallery/8.png",
          link: "",
          details: {
            पूर्व_नाम: "श्रीमती शांति बाई जैन",
            पिता_का_नाम: "स्व. श्री कट्टूरचंद जी बड़गुल (दमोह)",
            माता_का_नाम: "स्व. श्रीमती प्यारी बाई बड़गुल",
            पति_का_नाम: "स्व. श्री धर्मचंद जी जैन",
            दीक्षा: "30 सितंबर 2017, बेला, कुंडलपुर",
            दीक्षा_गुरु: "श्री 108 सिद्धांत सागर जी महाराज",
            समाधि: "3 नवंबर 2017, बेला, कुंडलपुर"
          }
        },
        
        {
          id: 8,
          title: "क्षुल्लिका श्री 105 प्रभातमति माता जी",
          date: "वर्ष 1942",
          commentCount: 0,
          image: "img/Gallery/9.png",
          link: "",
          details: {
            जन्म_नाम: "श्रीमती कमोद्रानी जैन",
            जन्म_स्थान: "उमरा, जिला सागर (म.प्र.)",
            पिता_का_नाम: "श्री मुन्नालाल जी जैन",
            पति_का_नाम: "स्व. श्री नेमचंद जी",
            शिक्षा: "प्राइमरी",
            क्षुल्लिका_दीक्षा: "जकातिया, इंदौर",
            दीक्षा_गुरु: "आचार्य श्री 108 प्रसन्न सागर जी महाराज"
          }
        }

      ]

    }
  };

  const t = content[language];

  return (
    <div
      className={`min-h-screen bg-[#fffcf7] px-4 md:px-8 relative ${isStandalone ? 'pt-32 pb-20' : 'py-20'
        }`}
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      {/* Header */}
      <div className="max-w-site mx-auto text-center mb-20 relative z-10">
        <h1 className="text-3xl md:text-5xl font-cinzel font-bold text-[#5c2415] mb-6">
          {t.pageTitle}
        </h1>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#d97706]" />
          <div className="w-3 h-3 rotate-45 border-2 border-[#d97706]" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#d97706]" />
        </div>

        <p className="max-w-2xl mx-auto text-[#9a3412] font-playfair italic text-lg">
          {t.pageSubtitle}
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {t.items.map((post, index) => (
          <ProfileCard key={index} post={post} labels={t} />
        ))}
      </div>
    </div>
  );
};

// ============================
// Premium Profile Card
// ============================
const ProfileCard = ({ post, labels }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/nagar-gaurav/${post.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative flex flex-col h-full rounded-xl overflow-hidden bg-white border border-[#fed7aa]/60
      shadow-[0_15px_40px_-20px_rgba(0,0,0,0.25)]
      hover:shadow-[0_35px_80px_-25px_rgba(217,119,6,0.45)]
      transition-all duration-700 cursor-pointer"
    >
      {/* Gold Hover Glow */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-[#d97706]/10 group-hover:ring-[#d97706]/40 transition-all pointer-events-none"></div>

      {/* Image Section (Increased Height) */}
      <div className="relative h-[26rem] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-110"
        />

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3b1307]/90 via-[#3b1307]/30 to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-5 right-5 bg-[#9a3412] text-white text-[11px] font-cinzel font-bold tracking-widest px-4 py-1.5 shadow-lg border border-[#fdba74]/40">
          Nagar Gaurav
        </div>
      </div>

      {/* Floating Content Card */}
      <div className="-mt-16 mx-5 mb-5 p-8 bg-gradient-to-b from-white to-[#fffaf0] rounded-xl shadow-xl border border-[#fed7aa]/60 relative z-10 flex flex-col flex-grow">
        {/* Meta */}
        <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider uppercase text-[#d97706] mb-4">
          <Calendar size={13} />
          {post.date}
        </div>

        {/* Title */}
        <h2 className="text-lg font-cinzel font-bold text-[#5c2415] mb-5 leading-snug group-hover:text-[#9a3412] transition-colors">
          {post.title}
        </h2>

        {/* Divider */}
        <div className="h-px w-16 bg-[#d97706]/40 mb-6"></div>

        {/* CTA */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#fed7aa]/40">
          <span className="text-xs font-cinzel font-bold text-[#9a3412] tracking-widest flex items-center gap-2 group-hover:translate-x-1 transition-transform">
            {labels.readMore}
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NagarGaurav;