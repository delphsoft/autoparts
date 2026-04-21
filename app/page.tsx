import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import ProductCard from '@/components/ProductCard';

const featuredProducts = [
  { id: 1, name: "Zerex G05 Phosphate Free Antifreeze", image: "https://picsum.photos/id/20/300/300", discount: 32, rating: 4.33, reviews: 3, price: 33.43, originalPrice: 48.55 },
  { id: 2, name: "Rislone High Mileage Steering Stop", image: "https://picsum.photos/id/21/300/300", discount: 39, rating: 4.33, reviews: 3, price: 9.88, originalPrice: 15.99 },
  { id: 3, name: "Pennzoil Platinum Full Synthetic", image: "https://picsum.photos/id/22/300/300", discount: 43, rating: 3.33, reviews: 3, price: 26.96, originalPrice: 47.11 },
];

export default function Home() {
  return (
    <>
      <Hero />
      
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Categorías Populares</h2>
        <CategoryGrid />
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Best Sellers</h2>
            <a href="/productos" className="text-blue-600 hover:underline">Ver todos →</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}