import {
  ShieldCheck,
  Satellite,
  Server,
  Sun,
  DoorClosed,
  Wifi,
  PhoneCall,
  Wrench,
  Laptop,
} from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl border-b border-white/10 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          What we install, secure, and maintain
        </h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          Three areas of work, one technical team &mdash; from the fence line
          to the server rack.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2">
        {/* Card 1: Large - Security & Smart Automation */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-8 transition-all duration-200 hover:border-amber-500/50 md:col-span-2 md:row-span-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 ring-1 ring-inset ring-amber-500/30">
            <ShieldCheck className="h-6 w-6 text-amber-400" aria-hidden="true" />
          </div>
          <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
            Security &amp; smart automation
          </h3>
          <p className="mt-3 max-w-md leading-relaxed text-slate-300">
            24/7 solar-powered and IP CCTV systems, electric security
            fencing, and D10 motorized automatic gate installations built to
            run through Ghana&apos;s power cuts without missing a frame.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <li className="flex items-center gap-2 text-sm text-slate-300">
              <Sun className="h-4 w-4 flex-shrink-0 text-amber-400" aria-hidden="true" />
              Solar &amp; IP CCTV, 24/7
            </li>
            <li className="flex items-center gap-2 text-sm text-slate-300">
              <ShieldCheck className="h-4 w-4 flex-shrink-0 text-amber-400" aria-hidden="true" />
              Electric security fencing
            </li>
            <li className="flex items-center gap-2 text-sm text-slate-300">
              <DoorClosed className="h-4 w-4 flex-shrink-0 text-amber-400" aria-hidden="true" />
              D10 automatic gate motors
            </li>
          </ul>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl transition-all duration-200 group-hover:bg-amber-500/20"
          />
        </div>

        {/* Card 2: High-Speed Connectivity */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-8 transition-all duration-200 hover:border-amber-500/50">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500/10 ring-1 ring-inset ring-sky-500/30">
            <Satellite className="h-6 w-6 text-sky-400" aria-hidden="true" />
          </div>
          <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">
            High-speed connectivity
          </h3>
          <p className="mt-3 leading-relaxed text-slate-300">
            Starlink satellite deployment, structured server room rack
            organization, and office intercom systems.
          </p>
          <ul className="mt-5 space-y-2.5">
            <li className="flex items-center gap-2 text-sm text-slate-300">
              <Wifi className="h-4 w-4 flex-shrink-0 text-sky-400" aria-hidden="true" />
              Starlink deployment
            </li>
            <li className="flex items-center gap-2 text-sm text-slate-300">
              <Server className="h-4 w-4 flex-shrink-0 text-sky-400" aria-hidden="true" />
              Server rack organization
            </li>
            <li className="flex items-center gap-2 text-sm text-slate-300">
              <PhoneCall className="h-4 w-4 flex-shrink-0 text-sky-400" aria-hidden="true" />
              Office intercoms
            </li>
          </ul>
        </div>

        {/* Card 3: Hardware & Enterprise Support */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-8 transition-all duration-200 hover:border-amber-500/50">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-inset ring-emerald-500/30">
            <Laptop className="h-6 w-6 text-emerald-400" aria-hidden="true" />
          </div>
          <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">
            Hardware &amp; enterprise support
          </h3>
          <p className="mt-3 leading-relaxed text-slate-300">
            Custom workstation buildouts, Apple hardware repairs, and
            corporate IT infrastructure deployment.
          </p>
          <ul className="mt-5 space-y-2.5">
            <li className="flex items-center gap-2 text-sm text-slate-300">
              <Wrench className="h-4 w-4 flex-shrink-0 text-emerald-400" aria-hidden="true" />
              Workstation buildouts
            </li>
            <li className="flex items-center gap-2 text-sm text-slate-300">
              <Laptop className="h-4 w-4 flex-shrink-0 text-emerald-400" aria-hidden="true" />
              Apple hardware repairs
            </li>
            <li className="flex items-center gap-2 text-sm text-slate-300">
              <Server className="h-4 w-4 flex-shrink-0 text-emerald-400" aria-hidden="true" />
              Corporate IT deployment
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
