import { Product } from '../types';
import { MessageCircle, Heart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Bonjour, je souhaite commander ${product.name} au prix de ${product.price} Fcfa. Merci de me donner plus d'informations.`
    );
    window.open(`https://wa.me/+24162830351?text=${message}`, '_blank');
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="relative w-full aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = '/placeholder.jpg';
          }}
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isLiked ? 'fill-yellow-500 text-yellow-500' : 'text-gray-600'
            }`}
          />
        </button>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-yellow-600">
              {product.price}
            </span>
            <span className="text-yellow-600 ml-1">Fcfa</span>
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all"
          >
            <MessageCircle size={20} />
            Commander
          </button>
        </div>
      </div>
    </div>
  );
}
