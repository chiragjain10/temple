import React from 'react';
import {
  CreditCard,
  Building2,
  Smartphone,
  Heart,
  Copy,
  ShieldCheck,
  Gift
} from 'lucide-react';

const Donate = ({ language }) => {
  const content = {
    en: {
      title: "Support the Kshetra",
      subtitle:
        "Your contribution helps in the preservation, development, and daily religious activities of this sacred pilgrimage.",
      bankDetails: "Bank Account Details",
      qrTitle: "Scan to Donate",
      copy: "Copy",
      copied: "Copied!",
      taxExemption:
        "Donations are eligible for tax exemption under Section 80G.",
      booking: {
        title: "Online Shantidhara & Religious Ritual Booking",
        description:
          "Devotees can now book Shantidhara online by contributing the prescribed amount. This facility is available for birthdays, wedding anniversaries, family occasions, auspicious events, and prayers for good health.",
        listTitle: "Available Religious Rituals",
        list: [
          "Shanti Vidhan",
          "Bhaktamar Vidhan",
          "Navgraha Shanti Vidhan",
          "Sarvasiddhi Vidhan",
          "Kalyan Mangal Vidhan",
          "Other special rituals as per devotee’s faith"
        ],
        footer:
          "This online booking facility allows devotees residing in India and abroad to earn religious merit from their homes.",
        contact:
          "For more details and booking, devotees may contact the Shri Atishay Kshetra Pateriyaji office."
      },
      accounts: [
        {
          type: "Kshetra Development",
          name: "Shri Parsvanath Digamber Jain Atishaya Kshetra Trust",
          bank: "State Bank of India",
          acNo: "30123456789",
          ifsc: "SBIN0001234",
          branch: "Garhakota Branch"
        },
        {
          type: "Goshala (Cow Shelter)",
          name: "Pateriyaji Goshala Samiti",
          bank: "Central Bank of India",
          acNo: "35987654321",
          ifsc: "CBIN0281234",
          branch: "Sagar Branch"
        }
      ]
    },

    hi: {
      title: "क्षेत्र सहयोग",
      subtitle:
        "आपका योगदान इस पवित्र तीर्थ के संरक्षण, विकास और दैनिक धार्मिक गतिविधियों में सहायक है।",
      bankDetails: "बैंक खाता विवरण",
      qrTitle: "दान हेतु स्कैन करें",
      copy: "कॉपी करें",
      copied: "कॉपी हो गया!",
      taxExemption:
        "दान धारा 80G के तहत कर छूट के लिए पात्र है।",
      booking: {
        title: "ऑनलाइन शांतिधारा एवं धार्मिक विधान बुकिंग",
        description:
          "श्री अतिशय क्षेत्र पटेरियाजी में अब श्रद्धालु ऑनलाइन माध्यम से राशि भेजकर शांतिधारा बुक कर सकते हैं। यह सुविधा जन्मदिन, विवाह वर्षगांठ, परिवारजनों के जन्मदिन, अन्य किसी भी शुभ अवसर तथा स्वास्थ्य लाभ की कामना हेतु उपलब्ध है।",
        listTitle: "उपलब्ध धार्मिक विधान",
        list: [
          "शांति विधान",
          "भक्तामर विधान",
          "नवग्रह शांति विधान",
          "सर्वसिद्धि विधान",
          "कल्याण मंगल विधान",
          "अन्य विशेष विधि-विधान (श्रद्धालु की भावना अनुसार)"
        ],
        footer:
          "ऑनलाइन बुकिंग सुविधा से देश–विदेश में निवासरत श्रद्धालुओं को भी घर बैठे पुण्य लाभ प्राप्त करने का अवसर मिलेगा।",
        contact:
          "अधिक जानकारी एवं बुकिंग हेतु श्रद्धालु श्री अतिशय क्षेत्र पटेरियाजी कार्यालय से संपर्क करें।"
      },
      accounts: [
        {
          type: "क्षेत्र विकास",
          name: "श्री पार्श्वनाथ दिगम्बर जैन अतिशय क्षेत्र ट्रस्ट",
          bank: "भारतीय स्टेट बैंक",
          acNo: "३०१२३४५६७८९",
          ifsc: "SBIN0001234",
          branch: "गढ़ाकोटा शाखा"
        },
        {
          type: "गौशाला सहयोग",
          name: "पटेरियाजी गौशाला समिति",
          bank: "सेंट्रल बैंक ऑफ इंडिया",
          acNo: "३५९८७६५४३२१",
          ifsc: "CBIN0281234",
          branch: "सागर शाखा"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-[#fffcf7] pt-32 pb-20 font-sans relative">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-site mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-block p-4 rounded-full border-2 border-[#d97706] mb-6 animate-pulse bg-white">
            <Heart size={32} className="text-[#9a3412]" fill="currentColor" />
          </div>
          <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-[#5c2415] mb-6">
            {t.title}
          </h1>
          <p className="text-[#9a3412] text-lg md:text-xl font-playfair italic">
            {t.subtitle}
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-green-700 bg-green-50 inline-block px-4 py-2 rounded-full border border-green-200">
            <ShieldCheck size={16} />
            <span>{t.taxExemption}</span>
          </div>
        </div>

        {/* SHANTIDHARA BOOKING SECTION */}
        <div className="max-w-5xl mx-auto mb-20 bg-white rounded-2xl shadow-lg border-l-8 border-[#9a3412] p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-[#5c2415] mb-6">
            🕉️ {t.booking.title}
          </h2>

          <p className="text-[#44403c] text-lg mb-6">
            {t.booking.description}
          </p>

          <h3 className="text-xl font-bold text-[#9a3412] mb-4">
            {t.booking.listTitle}
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {t.booking.list.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 bg-orange-50 border border-orange-100 rounded-lg px-4 py-3 text-[#5c2415] font-medium"
              >
                <span className="text-[#d97706]">✦</span>
                {item}
              </li>
            ))}
          </ul>

          <p className="italic text-[#44403c] mb-4">
            {t.booking.footer}
          </p>

          <div className="mt-4 p-4 bg-[#fff7ed] border border-[#fed7aa] rounded-lg text-center font-semibold text-[#9a3412]">
            {t.booking.contact}
          </div>
        </div>

        {/* BANK + QR SECTION (UNCHANGED) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Bank Details */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-cinzel font-bold text-[#5c2415] flex items-center gap-3 border-b-2 border-[#fed7aa] pb-2 inline-block">
              <Building2 className="text-[#d97706]" />
              {t.bankDetails}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.accounts.map((acc, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#9a3412]"
                >
                  <div className="text-xs font-bold text-[#9a3412] mb-2">
                    {acc.type}
                  </div>
                  <p className="font-bold text-[#5c2415] mb-2">
                    {acc.name}
                  </p>
                  <p className="text-sm mb-2">
                    {acc.bank}, {acc.branch}
                  </p>
                  <p className="font-mono text-[#d97706] font-bold">
                    {acc.acNo}
                  </p>
                  <p className="font-mono">{acc.ifsc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* QR */}
          <div className="bg-[#5c2415] text-white p-10 rounded-lg shadow-2xl text-center sticky top-32">
            <h2 className="text-xl font-cinzel font-bold mb-6 text-[#fbbf24] flex justify-center gap-2">
              <Smartphone /> {t.qrTitle}
            </h2>

            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=temple@upi"
              alt="Donation QR"
              className="mx-auto mb-6"
            />

            <div className="text-sm flex justify-center items-center gap-2">
              <Gift size={14} /> GPay, PhonePe, Paytm Accepted
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
