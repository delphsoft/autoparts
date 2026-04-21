export default function Hero() {
  return (
    <div className="relative h-[500px] md:h-[600px] bg-cover bg-center flex items-center" 
         style={{ backgroundImage: "url('https://picsum.photos/id/1015/1920/1080')" }}>
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Repuestos Originales<br />para tu Auto
        </h1>
        <p className="mt-4 text-xl max-w-md">
          Envíos a todo el país • Garantía de 12 meses • Más de 50.000 productos
        </p>
        <button className="mt-8 bg-red-600 hover:bg-red-700 px-10 py-4 rounded-full text-lg font-semibold transition">
          Ver Ofertas
        </button>
      </div>
    </div>
  );
}
