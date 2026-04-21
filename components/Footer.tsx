import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a2a] text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">📞 +(54) 351 123-4567</p>
            <p className="text-sm mb-2">✉️ info@autonex.com.ar</p>
            <p className="text-sm">📍 Córdoba, Argentina</p>
          </div>

          {/* Let Us Help You */}
          <div>
            <h3 className="text-xl font-bold mb-4">Let Us Help You</h3>
            <ul className="space-y-2 text-sm">
              <li>Tu Pedido</li>
              <li>Devoluciones</li>
              <li>Envíos y Seguimiento</li>
              <li>Política de Garantía</li>
              <li>Preguntas Frecuentes</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>Vender en Autonex</li>
              <li>Convertirse en Afiliado</li>
              <li>Centro de Ayuda</li>
            </ul>
          </div>

          {/* Get to Know Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Sobre Nosotros</li>
              <li>Noticias</li>
              <li>Trabajá con Nosotros</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-2xl font-bold">
            AUTONEX
          </div>

          <div className="flex gap-6">
            <Facebook className="hover:text-red-500 cursor-pointer" />
            <Instagram className="hover:text-red-500 cursor-pointer" />
            <Twitter className="hover:text-red-500 cursor-pointer" />
            <Youtube className="hover:text-red-500 cursor-pointer" />
          </div>

          <div className="text-xs text-gray-400">
            © 2026 Autonex. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
