import {DeliverySection} from '../components/delivery'
import { Hero } from '../components/Hero';
import { CategorySection } from '../components/CategorySection';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Letekou Maureen",
    role: "Décoratrice d'intérieur",
    image: "./maureen.jpg",
    quote: "Les produits de MachlieEclat ont transformé ma façon de décorer. La qualité est exceptionnelle !",
    rating: 5
  },
  {
    name: "Jean Kouassi",
    role: "Client fidèle",
    image: "/kouassi.jpg",
    quote: "Le service client est remarquable et les livraisons sont toujours à temps. Je recommande !",
    rating: 5
  },
  {
    name: "Sarah Mengue",
    role: "Architecte",
    image: "/mengue.jpg",
    quote: "Des articles uniques qui apportent une touche d'élégance à n'importe quel intérieur.",
    rating: 5
  }
];

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Hero />
      
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-yellow-800">
            Nos Catégories
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez notre sélection unique d'articles pour chaque pièce de votre maison
          </p>
          <CategorySection />
        </div>
      </div>
      
      <section className="py-16 bg-gradient-to-b from-yellow-100/50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-800 mb-4">
              Nos Produits en Vedette
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une sélection soignée de nos meilleurs articles pour votre intérieur
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-16 bg-gradient-to-b from-yellow-50 to-yellow-100/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-800 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les expériences de nos clients satisfaits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
              >
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <Quote className="w-12 h-12 text-yellow-200" />
                </div>
                
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.src = '/drap2.jpg';
                    }}
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-yellow-800">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-yellow-50">
        <div className="container mx-auto px-4">
          <DeliverySection />
        </div>
      </section>
    </div>
  );
}