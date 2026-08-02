import {
  ClipboardCheck,
  FileText,
  Briefcase,
  Compass,
  ScrollText,
  Building2,
  Scale,
  HardHat,
} from "lucide-react";
import type { ServiceProps } from "@/types/services";

export const services: ServiceProps[] = [
  {
    title: "Vistorias Técnicas",
    description: "Inspeções precisas com rigor técnico e documental.",
    icon: ClipboardCheck,
  },
  {
    title: "Laudos",
    description: "Laudos detalhados e juridicamente consistentes.",
    icon: FileText,
  },
  {
    title: "Consultoria",
    description: "Orientação estratégica para decisões seguras.",
    icon: Briefcase,
  },
  {
    title: "Projetos Arquitetônicos",
    description: "Arquitetura autoral, funcional e atemporal.",
    icon: Compass,
  },
  {
    title: "Regularização",
    description: "Adequação legal de imóveis e empreendimentos.",
    icon: ScrollText,
  },
  {
    title: "Assessoria Técnica",
    description: "Suporte completo em todas as etapas do projeto.",
    icon: Building2,
  },
  {
    title: "Avaliações",
    description: "Análises imobiliárias com metodologia certificada.",
    icon: Scale,
  },
  {
    title: "Acompanhamento de Obras",
    description: "Gestão e fiscalização para entregas impecáveis.",
    icon: HardHat,
  },
];
