import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Princípios", href: "#principios" },
  { label: "Serviços", href: "#servicos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className='fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-md text-white'>
      <div className='container-px flex items-center justify-between py-5'>
        <div>
          <p className='font-serif text-xl tracking-wide'>EXACTA</p>
          <p className='text-[10px] uppercase tracking-[3px] text-white/60 mt-0.5'>
            Vistorias · Arquitetura · Engenharia
          </p>
        </div>

        <nav className='hidden lg:flex items-center gap-8'>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className='text-xs uppercase tracking-[2px] text-white/80 hover:text-white transition-colors'
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          variant='outline'
          className='hidden lg:inline-flex border-white/30 bg-transparent text-white uppercase tracking-[2px] text-xs hover:bg-white hover:text-black hover:cursor-pointer'
        >
          Fale conosco
        </Button>
      </div>
    </header>
  );
}
