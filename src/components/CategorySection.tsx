
import { Utensils, Bed, Home, Droplet } from 'lucide-react';

const categories = [
  {
    id: 'cuisine',
    name: 'Cuisine',
    description: 'Ustensiles et équipements de cuisine',
    icon: Utensils
  },
  {
    id: 'chambre',
    name: 'Chambre',
    description: 'Linge de lit et accessoires',
    icon: Bed
  },
  {
    id: 'decoration',
    name: 'Décoration',
    description: 'Objets décoratifs et art de vivre',
    icon: Home
  },
  {
    id: 'parfum',
    name: 'Parfum',
    description: 'Découvrez nos parfums élégants et intemporels',
    icon: Droplet
  }
  
];

export function CategorySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Catégories</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
