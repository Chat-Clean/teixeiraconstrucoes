import { HardHat } from "lucide-react";

export default function BasicoPage() {
  const products = [
    {
      name: "Cimento",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778597814592_23sli2_cimento.jpg",
    },
    {
      name: "Areia Lavada",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778597939943_1jygok_areia-lavada.webp",
    },
    {
      name: "Tijolo Cerâmico",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778598087775_mlp4jh_tijolo.jpg",
    },
    {
      name: "Vergalhão de Ferro",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778598149283_rdy8bc_vergalhao-20mm.webp",
    },
    {
      name: "Pedra Brita",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778598211813_ipl7ua_brita.jpg",
    },
    {
      name: "Cal Hidratada",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778598250542_q1a7l9_cal.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary py-6 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <HardHat className="h-8 w-8 text-white" /> Materiais Básicos
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
