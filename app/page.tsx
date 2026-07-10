import Image from "next/image";
import Countdown from "./components/Countdown";
import Header from "./components/Header";

const WA_NUMBER = "5491165591521";
const wa = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const WA_EXPOSITOR = wa(
  "Hola, quiero recibir información para ser expositor en la Expo Gráficos & Afines 2027."
);
const WA_VISITANTE = wa(
  "Hola, quiero preacreditarme como visitante de la Expo Gráficos & Afines 2027."
);
const WA_GENERAL = wa("Hola, quiero hacer una consulta sobre la Expo Gráficos & Afines 2027.");

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Costanera+Rafael+Obligado+y+J.+Salguero+1221,+CABA";

const rubros: { categoria: string; items: string[] }[] = [
  {
    categoria: "Impresión digital y gran formato",
    items: ["Impresoras de gran formato", "Gráfica digital", "Plotters de corte", "Laminadoras"],
  },
  {
    categoria: "Gráfica tradicional y offset",
    items: ["Offset", "Flexografía", "Fotograbado", "Máquinas serigráficas e insumos"],
  },
  {
    categoria: "Textil y estampado",
    items: ["Impresión textil", "Sublimación", "Estampadoras", "Transfers", "Bordados", "Tampografía"],
  },
  {
    categoria: "Impresión 3D",
    items: ["Equipos e impresoras 3D / 4D / 5D", "Grabadoras"],
  },
  {
    categoria: "Corte y grabado",
    items: ["Corte láser", "Routers", "Pantógrafos", "Grúas"],
  },
  {
    categoria: "Cartelería y vía pública",
    items: [
      "Letras corpóreas",
      "Letreros electrónicos y luminosos",
      "Pantallas e iluminación LED",
      "Señalización",
      "Soportes publicitarios",
    ],
  },
  {
    categoria: "Comunicación visual y POP",
    items: ["Insumos para comunicación visual", "Exhibidores POP", "Artículos promocionales"],
  },
  {
    categoria: "Fotografía y software",
    items: ["Fotografía digital", "Fotografía publicitaria", "Scanners", "Software"],
  },
];

const visitantes = [
  {
    titulo: "Imprentas y empresas gráficas",
    detalle: "Conocé en vivo equipos, insumos y tecnología para potenciar tu producción.",
  },
  {
    titulo: "Distribuidores y revendedores",
    detalle: "Contacto directo con fabricantes e importadores de todo el sector.",
  },
  {
    titulo: "Técnicos y profesionales",
    detalle: "Demostraciones, novedades y capacitación sobre las últimas tendencias.",
  },
  {
    titulo: "Diseñadores y futuros clientes",
    detalle: "Descubrí materiales, soportes y soluciones para tus próximos proyectos.",
  },
];

function SectionTitle({
  kicker,
  title,
  className = "",
}: {
  kicker: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-bright">
        {kicker}
      </p>
      <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">{title}</h2>
      <div className="mt-4 h-1 w-16 bg-brand" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header waHref={WA_EXPOSITOR} />

      <main className="flex-1">
        {/* Hero */}
        <section
          id="inicio"
          className="relative overflow-hidden pt-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(220,38,38,0.10),transparent_50%)]"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-muted">
                <span className="h-2 w-2 rounded-full bg-brand-bright" />
                1ª edición · Buenos Aires
              </p>
              <h1 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                EXPO <span className="text-brand-bright">GRÁFICOS</span>
                <br />
                &amp; AFINES 2027
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted">
                El primer gran encuentro que reúne a proveedores, imprentas,
                fabricantes, distribuidores, técnicos y clientes del mundo
                gráfico, en un mismo espacio.
              </p>

              <div className="mt-8 space-y-1 text-base">
                <p className="font-semibold">
                  21, 22 y 23 de octubre de 2027 · 13 a 20 hs
                </p>
                <p className="text-muted">
                  Predio BA Ferial (ex Centro Costa Salguero) · Pabellón 5 · CABA
                </p>
              </div>

              <div className="mt-8">
                <Countdown />
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={WA_EXPOSITOR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-bright"
                >
                  Quiero ser expositor
                </a>
                <a
                  href={WA_VISITANTE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line bg-surface px-7 py-3.5 font-semibold transition-colors hover:border-brand-bright hover:text-brand-bright"
                >
                  Preacreditación de visitantes
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <Image
                src="/logo.png"
                alt="Logo de Expo Gráficos & Afines"
                width={900}
                height={781}
                preload
                className="h-auto w-full drop-shadow-[0_0_60px_rgba(220,38,38,0.25)]"
              />
            </div>
          </div>
        </section>

        {/* Quiénes somos */}
        <section id="quienes-somos" className="border-t border-line bg-surface/40">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
            <div>
              <SectionTitle kicker="Quiénes somos" title="Una expo con historia, pensada para hacer negocios" />
              <div className="mt-6 space-y-4 text-muted">
                <p>
                  La 1ª Exposición de Gráficos &amp; Afines nace para reunir en
                  un mismo espacio a proveedores, empresas, imprentas,
                  fabricantes, distribuidores, técnicos y futuros clientes del
                  rubro gráfico.
                </p>
                <p>
                  Seguimos el legado y linaje de{" "}
                  <strong className="text-foreground">Oscar De Luca</strong>,
                  una figura de trayectoria, criterio y experiencia dentro del
                  sector. Desde esa historia, y con una mirada actual,
                  impulsamos un encuentro serio, organizado y comercialmente
                  valioso para todos los participantes.
                </p>
                <p>
                  Acompañamos a cada empresa con asesoramiento, presencia y
                  compromiso, para que pueda mostrar sus productos, fortalecer
                  su marca, generar nuevos contactos y concretar oportunidades
                  reales de negocio.
                </p>
                <p className="text-foreground">
                  Viviana De Luca —{" "}
                  <span className="text-muted">
                    1ª Exposición de Gráficos &amp; Afines
                  </span>
                </p>
              </div>
            </div>
            <figure>
              <Image
                src="/predio.jpeg"
                alt="Vista aérea del Predio BA Ferial junto al Río de la Plata"
                width={1600}
                height={716}
                className="w-full rounded-2xl border border-line object-cover"
              />
              <figcaption className="mt-3 text-sm text-muted">
                Predio BA Ferial, sobre la costanera de Buenos Aires.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Expositores */}
        <section id="expositores" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionTitle
                kicker="Expositores"
                title="Perfil del expositor"
                className="max-w-2xl"
              />
              <a
                href={WA_EXPOSITOR}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-bright"
              >
                Reservá tu stand
              </a>
            </div>
            <p className="mt-6 max-w-3xl text-muted">
              Productos y servicios que van a estar presentes en la exposición.
              Si tu empresa trabaja en alguno de estos rubros, este es tu lugar
              para exponer.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {rubros.map((r) => (
                <div
                  key={r.categoria}
                  className="rounded-2xl border border-line bg-surface/60 p-5 transition-colors hover:border-brand/60"
                >
                  <h3 className="font-semibold">{r.categoria}</h3>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {r.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visitantes */}
        <section id="visitantes" className="border-t border-line bg-surface/40">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <SectionTitle kicker="Visitantes" title="¿Quiénes visitan la expo?" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {visitantes.map((v, i) => (
                <div key={v.titulo} className="rounded-2xl border border-line bg-background p-6">
                  <span className="font-display text-3xl text-brand-bright">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-semibold">{v.titulo}</h3>
                  <p className="mt-2 text-sm text-muted">{v.detalle}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 rounded-2xl border border-line bg-background p-6 sm:p-8">
              <p className="flex-1 basis-64 text-lg">
                La entrada es para profesionales y empresas del sector.{" "}
                <span className="text-muted">
                  Preacreditate y recibí tu acceso para los tres días.
                </span>
              </p>
              <a
                href={WA_VISITANTE}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-bright"
              >
                Preacreditarme
              </a>
            </div>
          </div>
        </section>

        {/* Lugar y plano */}
        <section id="lugar" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <SectionTitle kicker="Lugar y plano" title="Predio BA Ferial · Pabellón 5" />
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <Image
                  src="/mapa.jpeg"
                  alt="Plano del Pabellón 5 del Predio BA Ferial"
                  width={780}
                  height={517}
                  className="w-full rounded-2xl border border-line bg-white"
                />
                <a
                  href="/plano-expo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:border-brand-bright hover:text-brand-bright"
                >
                  Descargar plano (PDF)
                </a>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-5">
                  <div className="rounded-2xl border border-line bg-surface/60 p-6">
                    <p className="font-display text-3xl">3.600 m²</p>
                    <p className="mt-1 text-sm text-muted">Área del salón</p>
                  </div>
                  <div className="rounded-2xl border border-line bg-surface/60 p-6">
                    <p className="font-display text-3xl">4.343 m²</p>
                    <p className="mt-1 text-sm text-muted">Área total</p>
                  </div>
                  <div className="rounded-2xl border border-line bg-surface/60 p-6">
                    <p className="font-display text-3xl">3 días</p>
                    <p className="mt-1 text-sm text-muted">21, 22 y 23 de octubre</p>
                  </div>
                  <div className="rounded-2xl border border-line bg-surface/60 p-6">
                    <p className="font-display text-3xl">13–20 hs</p>
                    <p className="mt-1 text-sm text-muted">Horario de visita</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-line bg-surface/60 p-6">
                  <h3 className="font-semibold">Cómo llegar</h3>
                  <p className="mt-2 text-muted">
                    Av. Costanera Rafael Obligado y J. Salguero 1221, CABA.
                    Estacionamiento y acceso peatonal dentro del predio.
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-bright"
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="border-t border-line bg-surface/40">
          <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
            <SectionTitle
              kicker="Contacto"
              title="Reservá tu espacio hoy"
              className="mx-auto flex max-w-2xl flex-col items-center [&>div]:mx-auto"
            />
            <p className="mx-auto mt-6 max-w-2xl text-muted">
              Contactanos para recibir información sobre espacios disponibles,
              beneficios comerciales y condiciones de participación. No pierdas
              la oportunidad de formar parte del primer gran evento del mundo
              gráfico y afines.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-white transition-colors hover:bg-brand-bright"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.5 14.2c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4.1.2.1.7-.2 1.1Z" />
                </svg>
                WhatsApp 11 6559-1521
              </a>
            </div>
            <p className="mt-6 text-sm text-muted">
              21, 22 y 23 de octubre de 2027 · Predio BA Ferial, Pabellón 5 ·
              Av. Costanera Rafael Obligado y J. Salguero 1221, CABA
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-10 sm:px-6">
          <div>
            <p className="font-display text-lg">
              EXPO <span className="text-brand-bright">GRÁFICOS</span>
              <span className="text-muted"> &amp; </span>AFINES
            </p>
            <p className="mt-2 text-sm text-muted">
              1ª Exposición de Gráficos &amp; Afines · Octubre 2027 · Buenos
              Aires
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <a href="#quienes-somos" className="hover:text-foreground">Quiénes somos</a>
            <a href="#expositores" className="hover:text-foreground">Expositores</a>
            <a href="#visitantes" className="hover:text-foreground">Visitantes</a>
            <a href="#lugar" className="hover:text-foreground">Lugar y plano</a>
            <a href="#contacto" className="hover:text-foreground">Contacto</a>
          </nav>
        </div>
        <div className="border-t border-line py-5 text-center text-xs text-muted">
          {`© ${new Date().getFullYear()} `}Expo Gráficos &amp; Afines. Todos
          los derechos reservados.
        </div>
      </footer>
    </>
  );
}
