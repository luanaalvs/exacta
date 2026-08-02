import "@/styles/index.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { principles } from "@/data/principles";
import { values } from "@/data/values";
import { services } from "@/data/services";

export function App() {
  return (
    <div>
      <h1>Exacta Vistorias, Arquitetura e Engenharia</h1>

      {/* Quem somos */}
      <section className='section-py bg-background text-foreground'>
        <div className='container-px grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-center'>
          <div className='order-2 lg:order-1'>
            <div className='aspect-4/5 w-full max-w-md mx-auto lg:max-w-none lg:w-full overflow-hidden'>
              <img
                src='/founder.jpeg'
                className='w-full h-full object-cover grayscale'
              />
            </div>
          </div>

          <div className='order-1 lg:order-2'>
            <p className='eyebrow text-muted-foreground uppercase tracking-[4px] text-[12px] font-extralight'>
              Quem somos
            </p>
            <div className='hairline mt-4 mb-8 bg-foreground w-12 h-px' />

            <h2 className='font-serif text-4xl md:text-5xl leading-tight'>
              Mais do que serviços, entregamos{" "}
              <em className='italic'>confiança.</em>
            </h2>

            <p className='mt-8 text-muted-foreground leading-relaxed max-w-xl'>
              A Exacta Vistorias nasce do compomisso com a precisão técnica e a
              excelência no atendimento. Atuamos com vistorias, arquitetura e
              acessoria oferecendo segurança e confiabilidade nas relações entre
              proprietários, locatários e empresas — porque acreditamos que
              credibilidade se constrói no detalhe.
            </p>

            <p className='mt-8 uppercase tracking-[3px] text-[12px] text-muted-foreground'>
              Conte com a Exacta · Conte com especialistas
            </p>
          </div>
        </div>
      </section>

      {/* Missão, visão e valores */}
      <section className='h-full container-px section-py bg-accent-foreground text-primary-foreground'>
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

      {/* Serviços */}
      <section className='section-py bg-background text-foreground'>
        <div className='container-px grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start'>
          <div>
            <p className='eyebrow text-muted-foreground uppercase tracking-[4px] text-[12px] font-extralight'>
              Serviços
            </p>
            <div className='hairline mt-4 mb-8 bg-foreground w-12 h-px' />

            <h2 className='font-serif text-4xl md:text-5xl leading-tight'>
              Soluções completas, do <em className='italic'>conceito</em> à
              entrega.
            </h2>

            <p className='mt-8 text-muted-foreground leading-relaxed max-w-sm'>
              Atuação técnica integrada para imóveis residenciais, comerciais e
              corporativos.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2'>
            {services.map((service, index) => {
              const isLastColumn = index % 2 === 1;
              const isLastRow = index >= services.length - 2;

              return (
                <div
                  key={service.title}
                  className={cn(
                    "group p-8 border-border transition-colors duration-300 hover:bg-black cursor-default",
                    index !== services.length - 1 && "border-b",
                    isLastRow && "sm:border-b-0",
                    !isLastColumn && "sm:border-r",
                  )}
                >
                  <service.icon
                    className='h-6 w-6 transition-colors duration-300 group-hover:text-white'
                    strokeWidth={1.5}
                  />
                  <h3 className='font-serif text-xl mt-6 group-hover:text-white'>
                    {service.title}
                  </h3>
                  <p className='mt-2 text-muted-foreground leading-relaxed group-hover:text-white/70'>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
