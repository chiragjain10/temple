import React, { useState } from 'react';
import { X } from 'lucide-react';

const GalleryPage = ({ language }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const content = {
    en: {
      title: "Photo Gallery",
      subtitle: "Experience the divine beauty of Shri Parsvanath Atishaya Kshetra",
      images: [
        { id: 1, src: "/img/Gallery/gp (1).jpeg" },
        { id: 2, src: "/img/Gallery/gp (2).jpeg" },
        { id: 3, src: "/img/Gallery/gp (3).jpeg" },
        { id: 4, src: "/img/Gallery/gp (4).jpeg" },
        { id: 5, src: "/img/Gallery/gp (5).jpeg" },
        { id: 6, src: "/img/Gallery/gp (6).jpeg" },
        { id: 7, src: "/img/Gallery/gp (7).jpeg" },
        { id: 8, src: "/img/Gallery/gp (8).jpeg" },
        { id: 9, src: "/img/Gallery/gp (9).jpeg" },
        { id: 10, src: "/img/Gallery/gp (10).jpeg" },
        { id: 11, src: "/img/Gallery/gp (11).jpeg" },
        { id: 12, src: "/img/Gallery/gp (12).jpeg" },
        { id: 13, src: "/img/Gallery/gp (13).jpeg" }
        
      ]
    },
    hi: {
      title: "फोटो गैलरी",
      subtitle: "श्री पार्श्वनाथ अतिशय क्षेत्र की दिव्य सुंदरता का अनुभव करें",
      images: [
        { id: 1, src: "/img/Gallery/gp (1).jpeg" },
        { id: 2, src: "/img/Gallery/gp (2).jpeg" },
        { id: 3, src: "/img/Gallery/gp (3).jpeg" },
        { id: 4, src: "/img/Gallery/gp (4).jpeg" },
        { id: 5, src: "/img/Gallery/gp (5).jpeg" },
        { id: 6, src: "/img/Gallery/gp (6).jpeg" },
         { id: 7, src: "/img/Gallery/gp (7).jpeg" },
        { id: 8, src: "/img/Gallery/gp (8).jpeg" },
        { id: 9, src: "/img/Gallery/gp (9).jpeg" },
        { id: 10, src: "/img/Gallery/gp (10).jpeg" },
        { id: 11, src: "/img/Gallery/gp (11).jpeg" },
        { id: 12, src: "/img/Gallery/gp (12).jpeg" },
        { id: 13, src: "/img/Gallery/gp (13).jpeg"}
        
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-[#fffcf7] pt-32 pb-20 relative">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-site mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-[#5c2415] mb-4">
            {t.title}
          </h1>
          <p className="text-[#9a3412] text-lg font-playfair italic max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* IMAGE-ONLY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.images.map((img, index) => (
            <div
              key={img.id}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[4/3] border border-[#fed7aa]"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={img.src}
                alt={`Gallery ${img.id}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
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
            className="max-w-6xl max-h-[90vh] object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
