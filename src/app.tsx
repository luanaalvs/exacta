import "@/styles/index.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, ShieldCheck, Target, Clock, Users } from "lucide-react";

interface PrinciplesProps {
  title: string;
  description: string;
}

const principles: PrinciplesProps[] = [
  {
    title: "Missão",
    description:
      "Oferecer serviços técnicos de vistoria e assessoria em arquitetura com precisão, transparência e qualidade, garantindo segurança e confiabilidade nas relações entre proprietários, locatários e empresas.",
  },
  {
    title: "Visão",
    description:
      "Ser reconhecida como referência em serviços de vistoria e consultoria técnica na região de São Paulo e Grande ABC.",
  },
  {
    title: "Valores",
    description:
      "Nossos valores são a base de cada decisão e de cada relacionamento. Eles estão presentes em tudo o que fazemos.",
  },
];

interface ValueProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const values: ValueProps[] = [
  {
    title: "Ética Profissional",
    description: "Atuamos com integridade, responsabilidade e respeito.",
    icon: Scale,
  },
  {
    title: "Transparência",
    description: "Comunicação clara e verdadeira em todas as etapas.",
    icon: ShieldCheck,
  },
  {
    title: "Precisão Técnica",
    description: "Análises detalhadas e laudos com alto padrão de qualidade.",
    icon: Target,
  },
  {
    title: "Compromisso com Prazos",
    description: "Respeitamos o tempo do cliente e entregamos com eficiência.",
    icon: Clock,
  },
  {
    title: "Atendimento Personalizado",
    description: "Cada cliente é único e merece atenção exclusiva.",
    icon: Users,
  },
];

export function App() {
  return (
    <div>
      <h1>Exacta Vistorias, Arquitetura e Engenharia</h1>

      {/* Missão, visão e valores */}
      <section className='h-full container-px py-28 section-py bg-accent-foreground text-primary-foreground'>
        <div>
          <div>
            <p className='eyebrow text-white/60 uppercase tracking-[4px] text-[12px] font-extralight'>
              Nossos princípios
            </p>
            <div className='hairline mt-8 mb-16 bg-white' />
            <h2 className='text-4xl md:text-5xl lg:text-6xl max-w-3xl leading-tight'>
              Missão, visão e valores que guiam cada projeto.
            </h2>
          </div>
        </div>

        <div className='mt-24 grid grid-cols-1 md:grid-cols-3 divide-y divide-white/10 md:divide-y-0 md:divide-x'>
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className='py-8 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0'
            >
              <span className='font-serif text-5xl text-white/20'>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className='font-serif text-2xl mt-4'>{principle.title}</h3>
              <p className='mt-4 text-white/60 leading-relaxed'>
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <div className='mt-24 grid grid-cols-1 gap-4 lg:grid-cols-5'>
          {values.map((value) => (
            <Card
              key={value.title}
              className='group relative h-40 overflow-hidden border border-white/5 bg-transparent shadow-lg shadow-black/40 transition-colors duration-300 hover:bg-white/10'
            >
              <CardHeader className='h-full flex flex-col items-center justify-center text-center transition-opacity duration-300 group-hover:opacity-0'>
                <value.icon className='h-8 w-8 text-white/20' />
                <CardTitle className='mt-4 text-xs font-semibold uppercase tracking-widest text-white'>
                  {value.title}
                </CardTitle>
              </CardHeader>

              <CardContent className='absolute inset-0 flex items-center justify-center p-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                <p className='text-sm text-white/70'>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
