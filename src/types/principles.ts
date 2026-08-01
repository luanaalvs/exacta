export interface PrinciplesProps {
  title: string;
  description: string;
}

export interface ValueProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}
