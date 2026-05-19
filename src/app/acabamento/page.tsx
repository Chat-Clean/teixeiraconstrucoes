import { Paintbrush } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// Removido o 'createFileRoute' do TanStack Router
// Adicionado o 'export default' exigido pelo Next.js
export default function AcabamentoPage() {
  const products = [
    {
      name: "Tinta Lavável",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778601092681_p5aiex_lavavel.jpg",
    },
    {
      name: "Tinta Acrílica Premium",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778602252765_aw27z3_acrilica.jpg",
    },
    {
      name: "Argamassa",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778602393271_cfc4v5_argamassa.webp",
    },
    {
      name: "Armário de Banheiro",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778602467126_9saxga_armario_banheiro.webp",
    },
    {
      name: "Kit Vaso Sanitário",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778602526883_o6yi67_kit_vaso.webp",
    },
    {
      name: "Massa Corrida",
      image:
        "https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/43a9f0f2-e095-4cd4-a1f0-44bd342dbde5/1778602678216_1hnnuw_massa_corrida.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary py-6 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Paintbrush className="h-8 w-8 text-white" /> Acabamento
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
