import { Reveal } from "@/components/portfolio/reveal";

type AboutProps = {
  copy: string;
};

export function About({ copy }: AboutProps) {
  return (
    <section id="sobre" className="section page-shell divider-top">
      <Reveal>
        <span className="section-label">Sobre</span>
        <h2 className="section-title">Um perfil tecnico com entrega orientada a resultado</h2>
        <p className="section-copy text-base leading-8 md:text-lg">{copy}</p>
      </Reveal>
    </section>
  );
}
