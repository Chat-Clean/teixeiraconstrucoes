import { Droplets } from "lucide-react";

export default function HidraulicaPage() {
  const products = [
    {
      name: "Tubo PVC Esgoto",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778598482934_w093ku_tubo.jpg",
    },
    {
      name: "Caixa D'água",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778598606722_j2zrdm_caixa.webp",
    },
    {
      name: "Registro de Pressão",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778599065951_vuuvhh_registro.webp",
    },
    {
      name: "Tubo Soldável",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778598530726_lx3za1_soldavel.webp",
    },
    {
      name: "Torneira Cozinha",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778598924603_k9rrhs_torneira.webp",
    },
    {
      name: "Vaso Sanitário",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778598708929_n7o1qj_vaso.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary py-6 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Droplets className="h-8 w-8 text-white" /> Hidráulica
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
