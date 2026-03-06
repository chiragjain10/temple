import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';

const NagarGauravDetails = ({ language = 'en' }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Content Object - Same as NagarGaurav
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
            birthdate: "December 4, 1957",
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
            birthdate: "April 17, 1968",

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
            birthdate: "October 8, 1970",
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
            birthdate: "Year 1910",
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
            birthdate: "14 August 1958",
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
            birthDate: "May 5, 1995",
            husbandName: "Late Shri Khoobchand Jain",
            samadhiDate: "5 May 1995",
            samadhiPlace: "Shri Atishay Kshetra Pateriya Ji"
          }
        },


        {
          id: 7,
          title: "Aryika Shri 105 Sudharmmati Mata Ji",

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
          image: "img/Gallery/gp (2).png",
          link: "",
          details: {
            birthName: "Smt. Kamodrani Jain",
            birthPlace: "Umra, Sagar District, Madhya Pradesh",
            birthDate: "Year 1942",
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
            जन्म_तिथि: "4 दिसंबर 1957",
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
            जन्म_तिथि: "17 अप्रैल 1968",
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
            जन्म_तिथि: "8 अक्टूबर 1970",
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
            जन्म_तिथि: "वर्ष 1910",
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
            जन्म_तिथि: "14 अगस्त 1958",
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
            जन्म_तिथि: "14 जुलाई 1976",
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
            जन्म_तिथि: "5 मई 1995",
            पति_का_नाम: "स्व. श्री खूबचंद जैन",
            समाधि_तिथि: "5 मई 1995",
            समाधि_स्थान: "श्री अतिशय क्षेत्र पटेरिया जी"
          }
        },


        {
          id: 7,
          title: "आर्यिका श्री 105 सुधर्ममति माता जी",
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
            जन्म_तिथि: "वर्ष 1942",
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
  const person = t.items[parseInt(id)];

  if (!person) {
    return (
      <div className="min-h-screen bg-[#fffcf7] pt-32 pb-20 px-4 md:px-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-cinzel font-bold text-[#5c2415] mb-4">Not Found</h1>
          <button
            onClick={() => navigate('/nagar-gaurav')}
            className="text-[#d97706] hover:text-[#9a3412] font-cinzel font-bold flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={18} />
            Back to Nagar Gaurav
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffcf7] pt-32 pb-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate('/nagar-gaurav')}
          className="flex items-center gap-2 text-[#d97706] hover:text-[#9a3412] font-cinzel font-bold mb-14 transition-all"
        >
          <ArrowLeft size={22} />
          Back to Nagar Gaurav
        </button>

        {/* ================= MAIN PREMIUM LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* ===== LEFT : IMAGE PANEL ===== */}
          <div className="lg:col-span-2 relative">
            <div className="sticky top-32 rounded-2xl overflow-hidden shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)]">
              <img
                src={`/${person.image}`}
                alt={person.title}
                className="w-full h-[620px] object-cover object-top"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a0d05]/95 via-[#2a0d05]/30 to-transparent" />

              {/* Date Badge */}

            </div>
          </div>

          {/* ===== RIGHT : CONTENT PANEL ===== */}
          <div className="lg:col-span-3">
            <div className="relative bg-white rounded-2xl p-10 md:p-14 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.3)] border border-[#fed7aa]/60">

              {/* Gold Accent Line */}
              <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#d97706] to-transparent" />

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-cinzel font-bold text-[#5c2415] leading-tight mb-8">
                {person.title}
              </h1>

              {/* Subtitle Divider */}
              <div className="h-px w-24 bg-[#d97706]/50 mb-12"></div>

              {/* Section Heading */}
              <h2 className="text-xl font-cinzel font-bold text-[#9a3412] tracking-wide mb-10">
                Life & Spiritual Journey
              </h2>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {Object.entries(person.details).map(([key, value], index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-4 border-[#d97706]/60"
                  >
                    <h3 className="text-xs font-cinzel font-bold text-[#9a3412] uppercase tracking-widest mb-2">
                      {key.replace(/_/g, ' ')}
                    </h3>
                    <p className="text-[#3b1307] text-base leading-relaxed">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );


};

export default NagarGauravDetails;
