import {
  HardHat,
  Droplets,
  Zap,
  Paintbrush,
  Phone,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Truck,
  CreditCard,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <section className="relative h-auto min-h-[500px] lg:h-[600px] overflow-hidden bg-primary pt-12 lg:pt-20 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative mx-auto px-4 h-full">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 h-full">
            <div className="max-w-2xl text-center lg:text-left py-20">
              <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
                Construa o seu <span className="text-white">sonho</span> com
                quem entende.
              </h2>
              <p className="mt-6 text-lg text-white/80 md:text-xl">
                As melhores marcas e os menores preços para sua obra. Do
                alicerce ao telhado, estamos com você.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                <a
                  href="https://wa.me/5584991809746"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-secondary px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:bg-secondary/90 inline-block"
                >
                  Solicitar Orçamento
                </a>
                <a
                  href="https://wa.me/5584991809746"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/30 bg-white/10 px-8 py-4 font-bold backdrop-blur-sm transition-all hover:bg-white/20 inline-block"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative lg:-mr-20">
                {/* Decorative circle behind mascot */}
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl lg:h-96 lg:w-96"></div>
                <img
                  src="https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778594823002_fml4hn_Teixerinha_3.png"
                  alt="Mascote Teixeirinha"
                  className="relative z-10 block h-auto w-full max-w-[450px] drop-shadow-2xl transition-transform duration-500 hover:scale-105 lg:max-w-[550px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold">Entrega Rápida</h4>
                <p className="text-sm text-muted-foreground">
                  Agilidade na entrega da sua obra.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold">Qualidade Garantida</h4>
                <p className="text-sm text-muted-foreground">
                  Trabalhamos com as melhores marcas.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CreditCard className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold">Pagamento Facilitado</h4>
                <p className="text-sm text-muted-foreground">
                  Parcelamos suas compras no cartão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categorias" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold md:text-4xl">
            Categorias de <span className="text-primary">Produtos</span>
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Encontre tudo o que você precisa organizado por categorias para
            facilitar sua compra.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
            {[
              {
                name: "Materiais Básicos",
                description: "Cimento, tijolos, areia e tudo para o alicerce.",
                icon: HardHat,
                color: "bg-primary",
                path: "/basico",
              },
              {
                name: "Hidráulica",
                description: "Tubos, conexões, registros e caixas d'água.",
                icon: Droplets,
                color: "bg-primary",
                path: "/hidraulica",
              },
              {
                name: "Elétrica",
                description: "Fios, cabos, disjuntores e iluminação completa.",
                icon: Zap,
                color: "bg-primary",
                path: "/eletrica",
              },
              {
                name: "Acabamento",
                description:
                  "Pisos, revestimentos, tintas e louças sanitárias.",
                icon: Paintbrush,
                color: "bg-primary",
                path: "/acabamento",
              },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={cat.path}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all hover:-translate-y-2 hover:shadow-xl block"
              >
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${cat.color} text-white transition-transform group-hover:scale-110`}
                >
                  <cat.icon className="h-8 w-8" />
                </div>
                <h4 className="mt-6 font-bold">{cat.name}</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  {cat.description}
                </p>
                <div className="mt-4 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80">
                  Ver Mais <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="container mx-auto px-4 py-20">
        <div className="rounded-3xl bg-primary p-8 text-white md:p-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold md:text-4xl">
                Precisa de um orçamento detalhado?
              </h3>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Nossa equipe está pronta para te atender e oferecer as melhores
                condições para o seu projeto.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/5584991809746"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-secondary px-8 py-4 font-bold text-white transition-colors hover:bg-secondary/90 inline-block text-center"
                >
                  Chamar no WhatsApp
                </a>
                <a href="tel:84991809746" className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="block text-sm text-primary-foreground/60">
                      Ligue para nós
                    </span>
                    <span className="font-bold">(84) 99180-9746</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778595786704_r67s5q_Teixerinha_2.png"
                alt="Teixeirinha"
                className="h-48 md:h-64 lg:h-80 w-auto drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}