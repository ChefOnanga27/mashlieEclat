import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    {
      src: "./public/image1.jpg",
      text: "Équipez votre maison avec style"
    },
    {
      src: "./public/image2.jpg",
      text: "Des articles de maison pour chaque besoin"
    },
    {
      src: "./public/image 3.jpg",
      text: "Offrez à votre espace de vie une nouvelle dimension"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3 seconds
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-yellow-700 to-yellow-500 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Image Carousel */}
        <div className="relative h-96 overflow-hidden rounded-lg">
          <img
            src={images[currentIndex].src}
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {images[currentIndex].text}
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Découvrez notre collection d'articles de maison élégants et fonctionnels,
                sélectionnés avec soin pour embellir votre quotidien.
              </p>
              <div className="flex items-center gap-4 justify-center">
                <ShoppingBag size={24} />
                <span className="text-lg">
                  Livraison rapide
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
