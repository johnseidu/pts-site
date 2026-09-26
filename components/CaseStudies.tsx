"use client";

import { useState } from "react";
import { Activity, Zap, Network, Sun } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  location: string;
  summary: string;
  metrics: { icon: typeof Activity; label: string }[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "kumasi-network",
    title: "Commercial Network Overhaul",
    location: "Kumasi",
    summary:
      "Replaced a failing office LAN with structured cabling and a segmented, monitored network spanning 150+ nodes across three floors, cutting support tickets to near zero in the first quarter.",
    metrics: [
      { icon: Network, label: "150+ nodes" },
      { icon: Activity, label: "99.9% uptime" },
    ],
  },
  {
    id: "east-legon-security",
    title: "Solar CCTV & Gate Automation",
    location: "East Legon, Accra",
    summary:
      "Installed a solar-powered IP CCTV ring and a D10 automatic gate for a residential compound, keeping the system running through grid outages with zero downtime since commissioning.",
    metrics: [
      { icon: Sun, label: "Zero power outage downtime" },
      { icon: Zap, label: "Solar-backed 24/7" },
    ],
  },
];

export default function CaseStudies() {
  const [activeId, setActiveId] = useState(CASE_STUDIES[0].id);
  const active =
    CASE_STUDIES.find((study) => study.id === activeId) ?? CASE_STUDIES[0];

  return (
    <section
      id="case-studies"
      className="mx-auto max-w-7xl border-b border-white/10 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Deployments across Ghana
        </h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          A look at recent work, in the technicians&apos; own words.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Case studies"
        className="mt-8 flex flex-col gap-2 sm:flex-row sm:gap-3"
      >
        {CASE_STUDIES.map((study) => {
          const isActive = study.id === activeId;
          return (
            <button
              key={study.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(study.id)}
              className={`flex min-h-[44px] flex-1 items-center justify-between gap-3 rounded-xl border px-5 text-left text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                isActive
                  ? "border-amber-500/50 bg-amber-500/10 text-white"
                  : "border-white/10 bg-slate-900/50 text-slate-300 hover:border-white/20 hover:bg-slate-900/80"
              }`}
            >
              <span>{study.title}</span>
              <span className="font-mono text-xs text-slate-400">
                {study.location}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-md">
        <p className="font-mono text-xs text-amber-400">{active.location}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
          {active.title}
        </h3>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
          {active.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {active.metrics.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-xs text-slate-200"
            >
              <Icon className="h-4 w-4 text-amber-400" aria-hidden="true" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
