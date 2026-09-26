import SurveyForm from "@/components/SurveyForm";

export default function BookSurveySection() {
  return (
    <section
      id="book-survey"
      className="mx-auto max-w-7xl border-b border-white/10 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Book a site survey
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-slate-300">
            Tell us where you are and what you need. A PTS engineer will
            review your details and call to schedule a free on-site
            assessment.
          </p>
          <dl className="mt-10 space-y-6">
            <div>
              <dt className="font-mono text-xs text-amber-400">Response time</dt>
              <dd className="mt-1 text-sm text-slate-300">
                Within 24 hours of your request
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-amber-400">Coverage</dt>
              <dd className="mt-1 text-sm text-slate-300">
                All regions of Ghana, dispatched from Kumasi
              </dd>
            </div>
          </dl>
        </div>

        <SurveyForm />
      </div>
    </section>
  );
}
