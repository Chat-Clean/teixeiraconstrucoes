"use client";

import { Phone, MapPin, Clock, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "/" },
    { label: "Produtos", href: "/#categorias" },
    { label: "Sobre Nós", href: "/sobre" },
    { label: "Contato", href: "/#contato" },
  ];

  return (
    <>
      {/* Top Header */}
      <div className="bg-primary py-2 text-white">
        <div className="container mx-auto flex justify-between px-4 text-xs md:text-sm">
          <div className="flex items-center gap-4">
            <a
              href="tel:84991809746"
              className="flex items-center gap-1 hover:text-white/80 transition-colors"
            >
              <Phone className="h-3 w-3" /> (84) 99985-1269
            </a>
            <span className="hidden items-center gap-1 lg:flex">
              <MapPin className="h-3 w-3" /> R. dos Jasmins, 15 - Lote Jardim Arapua. Centro. Santo
              Antônio/RN
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />{" "}
              <span className="hidden sm:inline">
                Seg-Sex: 07h às 17h | Sáb: 07h às 14h
              </span>
              <span className="sm:hidden">Seg-Sáb</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md h-20 flex items-center">
        <div className="container mx-auto flex items-center justify-between px-4 py-0 h-full">
          <div className="flex items-center h-full">
            <Link href="/" className="h-full flex items-center">
              <img
                src="/logoHorizontal.png"
                alt="Teixeira Construções"
                className="h-[220%] w-auto transition-transform hover:scale-105 object-contain max-w-none"
              />
            </Link>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative font-medium transition-colors hover:text-primary text-foreground"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 origin-left bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5584991809746"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block rounded-full bg-secondary px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              Solicitar Orçamento
            </a>

            {/* Mobile Menu Button */}
            <button
              className="p-2 text-foreground md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b shadow-lg md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col p-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="py-3 px-4 text-foreground font-medium hover:bg-slate-50 hover:text-primary rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://wa.me/5584991809746"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full rounded-xl bg-secondary px-6 py-3 text-center font-bold text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Solicitar Orçamento
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
