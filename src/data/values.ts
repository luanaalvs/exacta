import type { ValueProps } from "@/types/principles";
import { Scale, ShieldCheck, Target, Clock, Users } from "lucide-react";

export const values: ValueProps[] = [
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
