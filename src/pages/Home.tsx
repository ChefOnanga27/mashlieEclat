import {DeliverySection} from '../components/delivery'
import { Hero } from '../components/Hero';
import { CategorySection } from '../components/CategorySection';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export function Home() {
  return (
    <div>
      <Hero />
      <CategorySection />
      
      <section className="py-12">
        <div className="container mx-auto bg-slate-400 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos Produits en Vedette
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 9).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className='my-10 bg-yellow-400'>
            <DeliverySection />
          </div>
        </div>
      </section>
    </div>
  );
}