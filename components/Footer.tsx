const SERVICE_LINKS = [
  "Starlink Installation",
  "CCTV & Gate Automation",
  "Corporate Networking",
  "Hardware & Support",
];

const COMPANY_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Book a Survey", href: "#book-survey" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B192C]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-amber-500/10 font-mono text-sm font-bold text-amber-400 ring-1 ring-inset ring-amber-500/30">
                PTS
              </span>
              <span className="text-sm font-semibold tracking-tight text-white">
                Paaloving Tech Solutions
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              IT infrastructure and smart security hardware installation,
              built for Ghana&apos;s homes and businesses.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Navigate</h3>
            <ul className="mt-4 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-all duration-200 hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service} className="text-sm text-slate-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>Maxwell Rd, Kumasi, Ghana</li>
              <li>
                <a
                  href="tel:+233242003013"
                  className="transition-all duration-200 hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
                >
                  +233 24 200 3013
                </a>
              </li>
              <li>Mon&ndash;Sat, 8:00&ndash;18:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Paaloving Tech Solutions. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
