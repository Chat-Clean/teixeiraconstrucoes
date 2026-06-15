import { MapPin, Phone, ShieldCheck} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-slate-100">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2">
              <img 
                src="/logoTeixeira.svg" 
                alt="Teixeira Construções" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="mt-6 text-sm leading-relaxed">
              Referência em materiais de construção na região, oferecendo sempre o melhor para quem busca construir ou reformar.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="https://www.instagram.com/teixeiraconstrucoesrn/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 hover:text-white">
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white">Navegação</h4>
            <ul className="mt-6 space-y-4 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="/#categorias" className="hover:text-white transition-colors">Categorias</a></li>
              <li><a href="/#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="/#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white">Categorias</h4>
            <ul className="mt-6 space-y-4 text-sm">
              <li><a href="/basico" className="hover:text-white transition-colors">Materiais Básicos</a></li>
              <li><a href="/hidraulica" className="hover:text-white transition-colors">Hidráulica</a></li>
              <li><a href="/eletrica" className="hover:text-white transition-colors">Elétrica</a></li>
              <li><a href="/acabamento" className="hover:text-white transition-colors">Pisos e Revestimentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white">Onde Estamos</h4>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-white" />
                <span>R. dos Jasmins, 15 - Lote Jardim Arapua, Centro, Santo Antônio/RN, 59.255-000</span>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex gap-3 text-white font-bold">
                  <Phone className="h-4 w-4 shrink-0 text-white" />
                  <a href="tel:84991809746" className="hover:text-secondary transition-colors">(84) 9700-2553</a>
                </div>
              </li>
              <li className="flex gap-3 text-xs">
                <ShieldCheck className="h-4 w-4 shrink-0 text-white" />
                <span>CNPJ: 65.495.308/0001-09</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs">
          <p>© {new Date().getFullYear()} Teixeira Construções. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
