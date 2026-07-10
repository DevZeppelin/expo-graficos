"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SRC = "/plano-actualizado.jpeg";
const ALT = "Plano actualizado del Pabellón 5 del Predio BA Ferial";

export default function PlanoLightbox() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ampliar plano"
        title="Click para ampliar"
        className="relative block min-h-80 w-full flex-1 cursor-zoom-in overflow-hidden rounded-2xl border border-line bg-white transition-colors hover:border-brand-bright"
      >
        <Image
          src={SRC}
          alt={ALT}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain"
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={ALT}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/85 p-4 sm:p-8"
        >
          <Image
            src={SRC}
            alt={ALT}
            width={938}
            height={1600}
            className="h-full max-h-[90vh] w-auto max-w-full rounded-xl bg-white object-contain"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface text-xl text-foreground transition-colors hover:text-brand-bright"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
