// app/page.tsx
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import ProductCard from '@/components/ProductCard';

const featuredProducts = [
  { id: 1, name: "Zerex G05 Phosphate Free Antifreeze Coolant", image: "https://picsum.photos/id/20/400/300", discount: 32, rating: 4.8, reviews: 124, price: 3343, originalPrice: 4855 },
  { id: 2, name: "Rislone High Mileage Steering Stop", image: "https://picsum.photos/id/201/400/300", discount: 39, rating: 4.3, reviews: 89, price: 988, originalPrice: 1599 },
  { id: 3, name: "Pennzoil Platinum Full Synthetic 5W-20", image: "https://picsum.photos/id/180/400/300", discount: 43, rating: 4.7, reviews: 156, price: 2696, originalPrice: 4711 },
  { id: 4, name: "Mobil 1 Advanced Fuel Economy 0W-20", image: "https://picsum.photos/id/133/400/300", discount: 28, rating: 4.9, reviews: 203, price: 2472, originalPrice: 3999 },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">Categorías Populares</h2>
        <p className="text-center text-gray-600 mb-12">Encuentra lo que necesitas para tu auto</p>
        <CategoryGrid />
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-4xl font-bold">Best Sellers</h2>
            <a href="/productos" className="text-red-600 hover:underline font-medium">Ver todos →</a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
