import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery = ({ language }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const content = {
    en: {
      title: "Divine Gallery",
      subtitle: "Glimpses of the sacred kshetra and its spiritual aura",
      viewAll: "View Full Gallery",
      images: [
        { id: 1, src: "/img/Gallery/98.png" },
        { id: 2, src: "/img/Gallery/gp (1).jpeg" },
        { id: 3, src: "/img/Gallery/00.png" },

        // { id: 7, src: "/img/Gallery/gp (2).jpeg" },
        // { id: 8, src: "/img/Gallery/gp (3).jpeg" },
        { id: 4, src: "/img/Gallery/gp (4).jpeg" },
        { id: 5, src: "/img/Gallery/gp (5).jpeg" },
        { id: 6, src: "/img/Gallery/gp (6).jpeg" }
      ]
    },
    hi: {
      title: "दिव्य दर्शन",
      subtitle: "पवित्र क्षेत्र और उसकी आध्यात्मिक आभा की झलकियाँ",
      viewAll: "पूर्ण गैलरी देखें",
       images: [
         { id: 1, src: "/img/Gallery/98.png" },
        { id: 2, src: "/img/Gallery/gp (1).jpeg" },
        { id: 3, src: "/img/Gallery/00.png" },

        // { id: 7, src: "/img/Gallery/gp (2).jpeg" },
        // { id: 8, src: "/img/Gallery/gp (3).jpeg" },
        { id: 4, src: "/img/Gallery/gp (4).jpeg" },
        { id: 5, src: "/img/Gallery/gp (5).jpeg" },
        { id: 6, src: "/img/Gallery/gp (6).jpeg" }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-20 bg-[#fffcf7] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-site mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Camera className="text-[#d97706]" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-[#5c2415] mb-4">
            {t.title}
          </h2>
          <p className="text-[#9a3412] text-lg font-playfair italic max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-[#d97706]/50"></div>
            <div className="w-2 h-2 rotate-45 bg-[#d97706]"></div>
            <div className="h-px w-16 bg-[#d97706]/50"></div>
          </div>
        </div>

        {/* IMAGE ONLY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.images.map((img, index) => (
            <div
              key={img.id}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={img.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/gallery"
            className="inline-block px-10 py-3 bg-gradient-to-r from-[#9a3412] to-[#c2410c] text-white font-cinzel font-bold tracking-widest uppercase rounded-full hover:shadow-lg hover:shadow-[#9a3412]/30 transition-all duration-300 hover:-translate-y-1"
          >
            {t.viewAll}
          </Link>
        </div>
      </div>

      {/* LIGHTBOX (IMAGE ONLY) */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          <img
            src={t.images[selectedImage].src}
            alt="Gallery Preview"
            className="max-w-5xl max-h-[90vh] object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
