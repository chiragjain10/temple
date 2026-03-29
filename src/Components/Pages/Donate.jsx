import React from 'react';
import {
  Building2,
  Heart,
  ShieldCheck
} from 'lucide-react';

const Donate = ({ language }) => {
  const content = {
    en: {
      title: "Support the Kshetra",
      subtitle:
        "Your contribution helps in the preservation, development, and daily religious activities of this sacred pilgrimage.",
      bankDetails: "Bank Account Details",
      taxExemption:
        "Donations are eligible for tax exemption under Section 80G.",
      booking: {
        title: "Online Shantidhara & Religious Ritual Booking",
        description:
          "Devotees can now book Shantidhara online by contributing the prescribed amount.",
        listTitle: "Available Religious Rituals",
        list: [
          "Shanti Vidhan",
          "Bhaktamar Vidhan",
          "Navgraha Shanti Vidhan",
          "Sarvasiddhi Vidhan",
          "Kalyan Mangal Vidhan"
        ],
        footer:
          "Devotees residing in India and abroad can participate from home.",
        contact:
          "Contact Shri Atishay Kshetra Pateriyaji office for details."
      },
      accounts: [
        {
          type: "Nitya Naimittik Kosh",
          name: "Shri Parsvanath Digamber Jain Atishaya Kshetra Trust",
          bank: "Union Bank of India",
          acNo: "325502010004594",
          ifsc: "UBIN0532550",
          branch: ""
        }
      ]
    },

    hi: {
      title: "क्षेत्र सहयोग",
      subtitle:
        "आपका योगदान इस पवित्र तीर्थ के संरक्षण और विकास में सहायक है।",
      bankDetails: "बैंक खाता विवरण",
      taxExemption:
        "दान धारा 80G के तहत कर छूट के लिए पात्र है।",
      booking: {
        title: "ऑनलाइन शांतिधारा बुकिंग",
        description:
          "श्रद्धालु अब ऑनलाइन माध्यम से शांतिधारा बुक कर सकते हैं।",
        listTitle: "उपलब्ध विधान",
        list: [
          "शांति विधान",
          "भक्तामर विधान",
          "नवग्रह शांति विधान",
          "सर्वसिद्धि विधान",
          "कल्याण मंगल विधान"
        ],
        footer:
          "देश–विदेश के श्रद्धालु घर बैठे लाभ प्राप्त कर सकते हैं।",
        contact:
          "अधिक जानकारी हेतु क्षेत्र कार्यालय से संपर्क करें।"
      },
      accounts: [
        {
          type: "नित्य नैमित्तिक कोष",
          name: "श्री पार्श्वनाथ दिगम्बर जैन अतिशय क्षेत्र ट्रस्ट",
          bank: "यूनियन बैंक ऑफ इंडिया",
          acNo: "325502010004594",
          ifsc: "UBIN0532550",
          branch: ""
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-[#fffcf7] pt-32 pb-20 font-sans relative">

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

        {/* BANK DETAILS */}
        <div className="space-y-8 text-center">
          <h2 className="text-2xl font-cinzel font-bold text-[#5c2415] flex justify-center items-center gap-3 border-b-2 border-[#fed7aa] pb-2 inline-block mx-auto">
            {/* <Building2 className="text-[#d97706]" /> */}
            {t.bankDetails}
          </h2>

          <div className="flex justify-center">
            {t.accounts.map((acc, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-[#9a3412] max-w-md w-full"
              >
                <div className="text-xs font-bold text-[#9a3412] mb-2 uppercase tracking-wider">
                  {acc.type}
                </div>

                <p className="font-bold text-[#5c2415] mb-3 text-lg">
                  {acc.name}
                </p>

                <p className="text-sm mb-4 text-gray-600">
                  {acc.bank}
                </p>

                <p className="font-mono text-[#d97706] font-bold text-xl">
                  {acc.acNo}
                </p>

                <p className="font-mono text-gray-700 mt-2">
                  IFSC: {acc.ifsc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Donate;