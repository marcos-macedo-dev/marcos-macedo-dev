import { Reveal } from "@/components/portfolio/reveal";
import {
  Braces,
  Container,
  Database,
  FileJson,
  Layers,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  typescript: FileJson,
  next: Layers,
  react: Layers,
  node: Server,
  express: Server,
  postgresql: Database,
  mysql: Database,
  sequelize: Database,
  prisma: Database,
  vue: Braces,
  docker: Container,
};

function getStackIcon(item: string): LucideIcon {
  const key = item.toLowerCase();

  const mapped = Object.entries(iconMap).find(([token]) => key.includes(token))?.[1];

  return mapped ?? Wrench;
}

type StackProps = {
  items: string[];
};

export function Stack({ items }: StackProps) {
  return (
    <section id="stack" className="section page-shell divider-top">
      <Reveal>
        <span className="section-label">Stack</span>
        <h2 className="section-title">Ferramentas que uso no dia a dia</h2>
      </Reveal>
      <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => {
          const Icon = getStackIcon(item);

          return (
            <Reveal key={item} delayMs={index * 40}>
              <span className="panel inline-flex w-full items-center gap-2 rounded-md px-4 py-3 text-sm transition-colors hover:bg-[var(--surface-strong)]">
                <Icon size={14} className="stack-icon shrink-0" />
                {item}
              </span>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
