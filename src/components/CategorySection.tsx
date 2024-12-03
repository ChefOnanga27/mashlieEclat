import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Cuisine',
    image: '/categories/cuisine.jpg',
    description: 'Accessoires et décorations pour votre cuisine',
    gradient: 'from-yellow-900/80 to-yellow-800/80'
  },
  {
    name: 'Chambre',
    image: '/categories/chambre.jpg',
    description: 'Pour une chambre élégante et confortable',
    gradient: 'from-yellow-800/80 to-yellow-700/80'
  },
  {
    name: 'Robe',
    image: '/categories/robe.jpg',
    description: 'Collection de robes exclusives',
    gradient: 'from-yellow-700/80 to-yellow-600/80'
  },
  {
    name: 'Décoration',
    image: '/categories/decoration.jpg',
    description: 'Objets décoratifs pour votre intérieur',
    gradient: 'from-yellow-600/80 to-yellow-500/80'
  },
  {
    name: 'Parfum',
    image: '/categories/parfum.jpg',
    description: 'Parfums et senteurs d\'ambiance',
    gradient: 'from-yellow-500/80 to-yellow-400/80'
  }
];

export function CategorySection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          key={category.name}
          to={`/products?category=${category.name.toLowerCase()}`}
          className="group relative h-64 overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
        >
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = '../assets/placeholder.jpg';
            }}
          />
          
          <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} transition-opacity duration-300`} />
          
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="text-2xl font-bold text-white mb-2">
              {category.name}
            </h3>
            <p className="text-yellow-100 text-sm opacity-90">
              {category.description}
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center text-yellow-100 text-sm font-medium">
                Découvrir
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}