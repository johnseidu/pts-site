import { Satellite, ShieldCheck, Cable } from "lucide-react";

const TRUST_BADGES = [
  { icon: Satellite, label: "Certified Starlink Installer" },
  { icon: ShieldCheck, label: "24/7 Smart Surveillance" },
  { icon: Cable, label: "Enterprise Cabling" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(245,158,11,0.08), transparent 40%), radial-gradient(circle at 85% 0%, rgba(56,189,248,0.07), transparent 45%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs text-amber-400">
            Based in Kumasi &mdash; serving all of Ghana
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Next-generation IT infrastructure &amp; smart security automation
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            From high-speed Starlink installations and structured corporate
            networking to 24/7 solar-powered CCTV and smart gate automation,
            we secure and connect your home and business across Ghana.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book-survey"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-amber-500 px-6 text-sm font-semibold text-slate-950 shadow-sm transition-all duration-200 hover:bg-amber-600 hover:shadow-glow-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              Book a Site Survey
            </a>
            <a
              href="#services"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition-all duration-200 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {TRUST_BADGES.map(({ icon: Icon, label }, idx) => (
              <div
                key={label}
                className={`flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-xs text-slate-200 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] ${
                  idx === 1 ? "sm:mt-3" : ""
                } ${idx === 2 ? "sm:-mt-1" : ""}`}
              >
                <Icon className="h-4 w-4 text-amber-400" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
