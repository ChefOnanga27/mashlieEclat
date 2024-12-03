import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Nos Produits</h1>
        
        {/* Category filters */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === null
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Tous
          </button>
          <button
            onClick={() => setSelectedCategory('kitchen')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === 'kitchen'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Cuisine
          </button>
          <button
            onClick={() => setSelectedCategory('bedroom')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === 'bedroom'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Chambre
          </button>
          <button
            onClick={() => setSelectedCategory('decoration')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === 'decoration'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Décoration
          </button>
          <button
            onClick={() => setSelectedCategory('Robe')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === 'Robe'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Robe
          </button>
           <button
            onClick={() => setSelectedCategory('parfum')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === 'parfum'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            parfum
          </button>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}