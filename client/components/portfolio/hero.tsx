import { Reveal } from "@/components/portfolio/reveal";
import { ArrowUpRight, BriefcaseBusiness, Code2 } from "lucide-react";

type HeroProps = {
  name: string;
  role: string;
  location: string;
  headline: string;
  github: string;
  linkedin: string;
};

export function Hero({
  name,
  role,
  location,
  headline,
  github,
  linkedin,
}: HeroProps) {
  return (
    <section id="inicio" className="section page-shell grid gap-8 pt-20 md:grid-cols-[1.25fr_0.75fr]">
      <Reveal className="space-y-6">
        <span className="section-label">Disponivel para projetos</span>
        <h1 className="text-4xl font-bold leading-[0.95] tracking-[-0.05em] md:text-7xl">
          {name}
        </h1>
        <p className="max-w-xl text-lg text-[var(--muted)] md:text-xl">{headline}</p>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
          {role} - {location}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#contato"
            className="btn-primary inline-flex items-center gap-2 rounded-md px-5 py-2 text-sm font-semibold transition-opacity"
          >
            Vamos conversar
            <ArrowUpRight size={15} className="icon-shift" />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex items-center gap-2 rounded-md px-5 py-2 text-sm font-semibold transition-colors"
          >
            <Code2 size={15} className="icon-shift" />
            GitHub
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex items-center gap-2 rounded-md px-5 py-2 text-sm font-semibold transition-colors"
          >
            <BriefcaseBusiness size={15} className="icon-shift" />
            LinkedIn
          </a>
        </div>
      </Reveal>

      <Reveal delayMs={120}>
        <div className="panel relative overflow-hidden p-7">
          <div className="absolute top-0 left-0 h-1 w-full bg-[var(--foreground)]" />

          <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
            Foco atual
          </p>
          <ul className="space-y-3 text-sm text-[var(--foreground)]">
            <li>Arquitetura limpa para monorepos.</li>
            <li>Interfaces com animacoes fluidas e objetivas.</li>
            <li>Performance real em Core Web Vitals.</li>
            <li>APIs seguras com contratos previsiveis.</li>
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
