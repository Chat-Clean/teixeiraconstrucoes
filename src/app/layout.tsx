// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css'; // O seu antigo styles.css
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  title: 'Teixeira Construções',
  description: 'Materiais de construção...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children} {/* Aqui entram as páginas (page.tsx) */}
        </main>
        <Footer />
      </body>
    </html>
  );
}