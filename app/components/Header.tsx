"use client";

import { useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#expositores", label: "Expositores" },
  { href: "#visitantes", label: "Visitantes" },
  { href: "#lugar", label: "Lugar y plano" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header({ waHref }: { waHref: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="font-display text-lg leading-none tracking-tight">
          EXPO <span className="text-brand-bright">GRÁFICOS</span>
          <span className="text-muted"> &amp; </span>AFINES
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-bright"
          >
            Quiero exponer
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-background px-4 pb-6 pt-2 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3 text-base text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Quiero exponer
          </a>
        </nav>
      )}
    </header>
  );
}
