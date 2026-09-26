import { MapPin, Phone, Clock } from "lucide-react";

export default function LocationMap() {
  return (
    <section
      id="location"
      className="mx-auto max-w-7xl border-b border-white/10 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Find our office
        </h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          Visit us on Maxwell Rd, Kumasi, or call ahead to speak with a
          technician directly.
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10">
        <iframe
          title="Paaloving Tech Solutions location on Maxwell Rd, Kumasi, Ghana"
          src="https://www.google.com/maps?q=Maxwell+Rd,+Kumasi,+Ghana&output=embed"
          className="h-[420px] w-full grayscale-[15%] sm:h-[480px]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-slate-950/90 p-5 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:w-80">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium text-white">
                Maxwell Rd, Kumasi, Ghana
              </p>
              <p className="mt-1 text-xs text-slate-400">Head office &amp; workshop</p>
            </div>
          </div>
          <div className="mt-3 flex items-start gap-3">
            <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" aria-hidden="true" />
            <a
              href="tel:+233242003013"
              className="text-sm text-slate-200 transition-all duration-200 hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
            >
              +233 24 200 3013
            </a>
          </div>
          <div className="mt-3 flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" aria-hidden="true" />
            <p className="text-sm text-slate-200">Mon&ndash;Sat, 8:00&ndash;18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
