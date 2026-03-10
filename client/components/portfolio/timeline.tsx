import type { TimelineItem } from "@/data/portfolio";
import { Reveal } from "@/components/portfolio/reveal";

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <section className="section page-shell divider-top">
      <Reveal>
        <span className="section-label">Trajetoria</span>
        <h2 className="section-title">Experiencia e evolucao tecnica</h2>
      </Reveal>

      <div className="mt-7 space-y-4">
        {items.map((item, index) => (
          <Reveal key={`${item.company}-${item.period}`} delayMs={index * 90}>
            <article className="panel p-5">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--muted)]">{item.period}</p>
              <h3 className="mt-2 text-lg font-semibold">
                {item.role} - {item.company}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
