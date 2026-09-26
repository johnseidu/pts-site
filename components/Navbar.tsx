"use client";

import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#our-work" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Location", href: "#location" },
  { label: "Book Survey", href: "#book-survey" },
];

const WHATSAPP_LINK = "https://wa.me/233242003013";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B192C]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-2 rounded-md focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-amber-500/10 font-mono text-sm font-bold text-amber-400 ring-1 ring-inset ring-amber-500/30">
            PTS
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-white sm:inline">
            Paaloving Tech Solutions
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-all duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#20BA5A] hover:shadow-glow-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-md text-slate-200 transition-all duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 md:hidden"
        >
          <span className="relative block h-5 w-5">
            <Menu
              className={`absolute inset-0 h-5 w-5 transition-all duration-200 ${
                isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              className={`absolute inset-0 h-5 w-5 transition-all duration-200 ${
                isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-b border-white/10 bg-[#0B192C]/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex min-h-[44px] items-center rounded-md px-3 text-base font-medium text-slate-200 transition-all duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 text-sm font-medium text-white transition-all duration-200 hover:bg-[#20BA5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
