import { CheckCircle2, Users, History, Award } from "lucide-react";

export default function SobrePage() {
  const values = [
    {
      title: "Qualidade",
      description:
        "Trabalhamos apenas com as melhores marcas e materiais certificados para garantir a segurança da sua obra.",
      icon: Award,
    },
    {
      title: "Compromisso",
      description:
        "Nossa prioridade é o cumprimento de prazos e a satisfação total de nossos clientes e parceiros.",
      icon: CheckCircle2,
    },
    {
      title: "Tradição",
      description:
        "Anos de experiência no mercado de construção, evoluindo junto com as necessidades da nossa região.",
      icon: History,
    },
    {
      title: "Equipe",
      description:
        "Contamos com profissionais capacitados para oferecer o melhor atendimento e suporte técnico.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Nossa História
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Conheça a trajetória da Teixeira Construções, sua parceira de
            confiança em materiais de construção.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Mais que uma loja, sua parceira na construção
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A Teixeira Construções nasceu com o propósito de facilitar o
                acesso a materiais de qualidade para todos os tipos de obras.
                Localizada em Santo Antônio/RN, nos tornamos referência na
                região pelo atendimento personalizado e pela diversidade de
                produtos.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Acompanhamos o crescimento de muitas famílias e empresas,
                fornecendo desde o cimento para o alicerce até o acabamento
                final que transforma uma house em um lar. Nosso compromisso é
                com a qualidade do que entregamos, pois sabemos que cada tijolo
                faz parte de um sonho maior.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778595713535_feumwi_Teixerinha_1.png"
                alt="Teixeirinha"
                className="max-h-[500px] w-auto drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              Nossos Valores
            </h2>
            <p className="text-slate-600 mt-4">
              Os pilares que sustentam o nosso trabalho diário
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Pronto para começar sua obra?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5584991809746"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-colors"
            >
              Falar com um consultor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
