import type { Project } from "@/data/portfolio";
import { Reveal } from "@/components/portfolio/reveal";
import { Code2, ExternalLink } from "lucide-react";

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projetos" className="section page-shell divider-top">
      <Reveal>
        <span className="section-label">Projetos</span>
        <h2 className="section-title">Cases selecionados</h2>
      </Reveal>

      <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delayMs={index * 90}>
            <article className="panel project-card flex h-full flex-col rounded-xl p-5 transition-colors hover:bg-[var(--surface-strong)]">
              <span className="mb-3 w-fit rounded-sm border border-[var(--border)] px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--muted)]">
                Projeto
              </span>
              <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={`${project.title}-${tech}`}
                    className="rounded-sm border border-[var(--border)] px-2 py-1 text-xs text-[var(--foreground)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-4 pt-6 text-sm font-semibold">
                <a
                  className="link-icon inline-flex items-center gap-1 underline decoration-[var(--border)] underline-offset-4 transition-colors hover:decoration-[var(--foreground)]"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={14} className="icon-shift" />
                  Demo
                </a>
                <a
                  className="link-icon inline-flex items-center gap-1 underline decoration-[var(--border)] underline-offset-4 transition-colors hover:decoration-[var(--foreground)]"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={14} className="icon-shift" />
                  Repositorio
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
