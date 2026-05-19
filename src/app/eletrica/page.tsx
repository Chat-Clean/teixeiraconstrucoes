import { Zap } from "lucide-react";

export default function EletricaPage() {
  const products = [
    {
      name: "Cabo Flexível",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778599554500_c7bw3q_cabo.webp",
    },
    {
      name: "Disjuntor",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778599761340_j705us_disjuntor.webp",
    },
    {
      name: "Lâmpada LED",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778600025264_az8ens_lampada.webp",
    },
    {
      name: "Quadro de Distribuição",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778600093265_2huuro_quadro.jpg",
    },
    {
      name: "Tomada",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778600199962_xq2jy4_tomada.webp",
    },
    {
      name: "Conduíte Flexível",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778600481342_3r1tfd_conduite.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary py-6 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Zap className="h-8 w-8 text-white" /> Elétrica
          </h1>
        </div>
      </div>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  {/* Price removed */}
                  <button className="w-full mt-6 bg-secondary text-white py-3 rounded-xl font-bold hover:bg-secondary/90 transition-colors">
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
