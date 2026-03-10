export function Footer() {
  return (
    <footer className="border-t border-[var(--strong-line)] py-8">
      <div className="page-shell flex flex-wrap items-center justify-between gap-2 text-sm text-[var(--muted)]">
        <p>Feito com Next.js e Tailwind.</p>
        <a href="#inicio" className="transition-colors hover:text-[var(--foreground)]">
          Voltar ao topo
        </a>
      </div>
    </footer>
  );
}
