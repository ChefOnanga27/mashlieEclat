import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/drap1.jpg',
    title: 'Collection Exclusive',
    description: 'Découvrez nos nouveautés pour sublimer votre intérieur'
  },
  {
    image: '/robe2.jpg',
    title: 'Élégance & Confort',
    description: 'Des produits sélectionnés avec soin pour votre bien-être'
  },
  {
    image: '/image1.jpg',
    title: 'Artisanat de Luxe',
    description: 'Le savoir-faire traditionnel rencontre le design moderne'
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = '/drap2.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/90 to-transparent" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl">
                <h1 className="text-5xl font-bold text-white mb-6 transform transition-transform duration-700 translate-y-0">
                  {slide.title}
                </h1>
                <p className="text-xl text-yellow-100 mb-8 transform transition-transform duration-700 delay-100 translate-y-0">
                  {slide.description}
                </p>
                <button className="px-8 py-3 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-400 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Découvrir
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-yellow-500/80 text-white hover:bg-yellow-400 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-yellow-500/80 text-white hover:bg-yellow-400 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-yellow-500 w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}