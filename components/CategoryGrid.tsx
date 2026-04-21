import Image from 'next/image';

const categories = [
  { name: "Aceites y Fluidos", image: "https://picsum.photos/id/20/300/300", count: "124" },
  { name: "Filtros", image: "https://picsum.photos/id/107/300/300", count: "89" },
  { name: "Frenos", image: "https://picsum.photos/id/201/300/300", count: "67" },
  { name: "Luces", image: "https://picsum.photos/id/180/300/300", count: "45" },
  { name: "Suspensión", image: "https://picsum.photos/id/133/300/300", count: "52" },
  { name: "Neumáticos", image: "https://picsum.photos/id/1077/300/300", count: "38" },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((cat, index) => (
        <div key={index} className="bg-white border rounded-2xl p-4 text-center hover:shadow-md transition">
          <div className="mx-auto w-20 h-20 relative">
            <Image src={cat.image} alt={cat.name} fill className="object-contain" />
          </div>
          <p className="font-medium mt-3">{cat.name}</p>
          <p className="text-sm text-gray-500">{cat.count} productos</p>
        </div>
      ))}
    </div>
  );
}
