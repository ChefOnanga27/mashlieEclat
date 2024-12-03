
import { Product } from '../types';
import { MessageCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Bonjour, je souhaite commander ${product.name} au prix de ${product.price} Fcfa. Merci de me donner plus d'informations.`
    );
    window.open(`https://wa.me/+24162830351?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="w-full aspect-w-1 aspect-h-1">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-2 text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">{product.price} Fcfa</span>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            <MessageCircle size={20} />
            Commander
          </button>
        </div>
      </div>
    </div>
  );
}
