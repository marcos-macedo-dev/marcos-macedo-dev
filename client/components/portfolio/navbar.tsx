"use client";

import { useEffect, useState } from "react";
import { Braces } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [activeHref, setActiveHref] = useState("#inicio");

  useEffect(() => {
    const sections = navItems
      .map((item) => {
        const element = document.querySelector(item.href);

        return element instanceof HTMLElement
          ? { href: item.href, element }
          : null;
      })
      .filter((section): section is { href: string; element: HTMLElement } => section !== null);

    if (!sections.length) {
      return;
    }

    let ticking = false;

    const updateActiveSection = () => {
      const line = window.innerHeight * 0.38;
      const isAtPageBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;

      if (isAtPageBottom) {
        setActiveHref(sections[sections.length - 1].href);
        ticking = false;

        return;
      }

      let currentHref = sections[0].href;

      sections.forEach((section) => {
        const rect = section.element.getBoundingClientRect();

        if (rect.top <= line) {
          currentHref = section.href;
        }
      });

      setActiveHref(currentHref);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--strong-line)] bg-[color:var(--background)]/90 backdrop-blur">
      <nav className="page-shell flex h-16 items-center justify-between">
        <a href="#inicio" className="brand-link font-semibold tracking-[-0.03em]">
          <span className="inline-flex items-center gap-2">
            <Braces size={16} strokeWidth={2.2} className="brand-icon" />
            dev.portfolio
          </span>
        </a>

        <ul className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className={`nav-link transition-colors hover:text-[var(--foreground)] ${
                  activeHref === item.href ? "nav-link-active" : ""
                }`}
                href={item.href}
                aria-current={activeHref === item.href ? "page" : undefined}
                onClick={() => setActiveHref(item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
