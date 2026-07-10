"use client";

import { useState } from "react";

const WA_NUMBER = "5491165591521";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-background/70 px-4 py-3 text-foreground placeholder:text-muted/60 transition-colors focus:border-brand-bright focus:outline-none focus:ring-2 focus:ring-brand/30";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensaje, setMensaje] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const texto = [
      "Hola, quiero hacer una consulta sobre la Expo Gráficos & Afines 2027.",
      "",
      `*Nombre:* ${nombre}`,
      `*Email:* ${email}`,
      `*Teléfono:* ${telefono}`,
      empresa ? `*Empresa:* ${empresa}` : null,
      "",
      `*Mensaje:* ${mensaje}`,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(texto)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="relative mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border border-brand/40 bg-surface text-left shadow-[0_0_90px_rgba(220,38,38,0.18)]">
      <div aria-hidden className="h-1.5 bg-gradient-to-r from-brand via-brand-bright to-brand" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(220,38,38,0.14),transparent_55%)]"
      />

      <form onSubmit={handleSubmit} className="relative p-6 sm:p-10">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.5 14.2c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4.1.2.1.7-.2 1.1Z" />
            </svg>
          </span>
          <div>
            <h3 className="font-display text-xl">Envianos tu consulta</h3>
            <p className="text-sm text-muted">
              Completá el formulario y te respondemos por WhatsApp.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="nombre" className="mb-2 block text-sm font-semibold">
              Nombre <span className="text-brand-bright">*</span>
            </label>
            <input
              id="nombre"
              type="text"
              required
              autoComplete="name"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold">
              Dirección de correo electrónico <span className="text-brand-bright">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              placeholder="nombre@empresa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="telefono" className="mb-2 block text-sm font-semibold">
              Teléfono <span className="text-brand-bright">*</span>
            </label>
            <input
              id="telefono"
              type="tel"
              required
              autoComplete="tel"
              placeholder="11 1234-5678"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="empresa" className="mb-2 block text-sm font-semibold">
              Empresa
            </label>
            <input
              id="empresa"
              type="text"
              autoComplete="organization"
              placeholder="Nombre de tu empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="mensaje" className="mb-2 block text-sm font-semibold">
              Mensaje <span className="text-brand-bright">*</span>
            </label>
            <textarea
              id="mensaje"
              required
              rows={4}
              placeholder="Contanos en qué podemos ayudarte"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-bright px-8 py-4 font-semibold text-white shadow-[0_8px_30px_rgba(220,38,38,0.35)] transition-transform hover:scale-[1.02]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.5 14.2c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4.1.2.1.7-.2 1.1Z" />
          </svg>
          Enviar
        </button>
        <p className="mt-4 text-center text-sm text-muted">
          Al enviar se abre WhatsApp con tu consulta lista para mandar.
        </p>
      </form>
    </div>
  );
}
