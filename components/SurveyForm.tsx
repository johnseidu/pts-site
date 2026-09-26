"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SERVICE_OPTIONS, type ServiceType, type SurveyResponse } from "@/lib/types";

type Status = "idle" | "loading" | "success" | "error";

interface FormState {
  name: string;
  phone: string;
  location: string;
  service: ServiceType | "";
  scope: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  phone: "",
  location: "",
  service: "",
  scope: "",
};

export default function SurveyForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data: SurveyResponse = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(INITIAL_STATE);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-emerald-400" aria-hidden="true" />
        <p className="mt-4 max-w-sm leading-relaxed text-slate-100">
          Thank you! Our Kumasi technical team will call you within 24 hours
          to schedule your site survey.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 min-h-[44px] rounded-lg border border-white/15 bg-white/5 px-5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          Book another survey
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-slate-900/90 p-8 shadow-2xl"
      noValidate
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="text-sm font-medium text-slate-200">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Kwame Mensah"
            className="mt-2 block min-h-[44px] w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 text-sm text-white placeholder:text-slate-500 transition-all duration-200 focus:border-amber-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="phone" className="text-sm font-medium text-slate-200">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+233 24 000 0000"
            className="mt-2 block min-h-[44px] w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 text-sm text-white placeholder:text-slate-500 transition-all duration-200 focus:border-amber-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="location" className="text-sm font-medium text-slate-200">
            Location (region / city)
          </label>
          <input
            id="location"
            name="location"
            type="text"
            required
            value={form.location}
            onChange={(e) => handleChange("location", e.target.value)}
            placeholder="Ashanti Region, Kumasi"
            className="mt-2 block min-h-[44px] w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 text-sm text-white placeholder:text-slate-500 transition-all duration-200 focus:border-amber-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="service" className="text-sm font-medium text-slate-200">
            Service
          </label>
          <select
            id="service"
            name="service"
            required
            value={form.service}
            onChange={(e) => handleChange("service", e.target.value)}
            className="mt-2 block min-h-[44px] w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 text-sm text-white transition-all duration-200 focus:border-amber-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="scope" className="text-sm font-medium text-slate-200">
            Project scope
          </label>
          <textarea
            id="scope"
            name="scope"
            rows={4}
            value={form.scope}
            onChange={(e) => handleChange("scope", e.target.value)}
            placeholder="Tell us about the site, building size, and what you need installed."
            className="mt-2 block w-full resize-none rounded-lg border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-all duration-200 focus:border-amber-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          />
        </div>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 text-sm font-semibold text-slate-950 shadow-sm transition-all duration-200 hover:bg-amber-600 hover:shadow-glow-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          "Request Site Survey"
        )}
      </button>
    </form>
  );
}
