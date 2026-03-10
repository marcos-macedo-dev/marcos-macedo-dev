import { Reveal } from "@/components/portfolio/reveal";
import { Mail } from "lucide-react";

type ContactProps = {
  email: string;
};

export function Contact({ email }: ContactProps) {
  return (
    <section id="contato" className="section page-shell divider-top">
      <Reveal>
        <div className="panel p-8 md:p-10">
          <span className="section-label">Contato</span>
          <h2 className="section-title">Vamos tirar sua ideia do papel</h2>
          <p className="section-copy">
            Se voce precisa de um dev para construir produto novo, acelerar uma squad ou melhorar um projeto existente, estou pronto para contribuir.
          </p>

          <a
            href={`mailto:${email}`}
            className="btn-primary mt-6 inline-flex items-center gap-2 rounded-md px-5 py-2 text-sm font-semibold transition-opacity"
          >
            <Mail size={15} className="icon-shift" />
            {email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
