import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AUTONEX | Autopartes y Repuestos para Autos en Argentina",
  description: "Repuestos originales y aftermarket para tu auto. Aceites, filtros, frenos, luces. Envíos a todo el país.",
  keywords: ["autopartes", "repuestos auto", "aceite motor", "filtros", "frenos", "cordoba"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
