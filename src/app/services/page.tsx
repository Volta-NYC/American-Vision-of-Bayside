import Link from "next/link";
import { services, site } from "@/lib/data/site";
import Icon from "@/lib/components/icon";
import CtaBand from "@/lib/components/cta-band";

export default function ServicesPage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-accent-500/15 blur-3xl" />

        <div className="container-page relative grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div className="animate-fade-up space-y-7">
            <span className="eyebrow bg-white/10 text-brand-200">
              <Icon name="star" className="h-3.5 w-3.5" />
              What we treat
            </span>
            <h1 className="text-4xl font-semibold leading-[1.1] md:text-6xl">
              Every kind of eye,
              <span className="text-brand-300"> every kind of fix.</span>
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-white/75">
              From a routine annual exam to the contact lens fittings other
              practices turn away, our doctors bring decades of specialized
              experience to every visit.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={site.booking.url}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <Icon name="calendar" className="h-4 w-4" />
                Book Appointment
              </a>
              <Link
                href="/contact"
                className="btn border border-white/25 text-white hover:bg-white/10"
              >
                Ask about insurance
              </Link>
            </div>
          </div>

          {/* Decorative signature: an abstract pair of lenses */}
          <div className="relative hidden md:block">
            <div className="relative mx-auto aspect-square max-w-sm">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-400/30 to-brand-700/40 backdrop-blur-sm" />
              <div className="absolute inset-8 rounded-full border border-white/15" />
              <div className="absolute inset-16 rounded-full border border-white/10" />
              <svg
                viewBox="0 0 120 48"
                className="absolute inset-0 m-auto h-20 w-48 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.3}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="30" cy="24" r="18" />
                <circle cx="30" cy="24" r="8" opacity="0.5" />
                <circle cx="90" cy="24" r="18" />
                <circle cx="90" cy="24" r="8" opacity="0.5" />
                <path d="M48 21c4-3 10-3 14 0" />
                <path d="M12 23c-5 1-9 5-10 11" />
                <path d="M108 23c5 1 9 5 10 11" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Full services grid ---------------- */}
      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Everything under one roof</span>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Complete eye care, start to finish
          </h2>
          <p className="mt-4 text-ink/60">
            Diagnosis, treatment, lenses, and frames — handled by the same two
            doctors from your first visit to your last.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="card group hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Specialty deep-dives ---------------- */}
      <section className="bg-brand-50/60 py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Specialty care</span>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              The harder cases are kind of our thing
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <div className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name="sparkle" className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">
                Keratoconus treatment
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                When the cornea thins and curves irregularly, vision gets
                distorted fast. We fit specialty contact lenses shaped to your
                eye so you can see clearly and comfortably again.
              </p>
            </div>
            <div className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name="trend" className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">
                Myopia management
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Left unchecked, nearsightedness can keep progressing into
                adulthood. We slow it down with multifocal lenses and ortho-k,
                corneal-reshaping lenses worn overnight.
              </p>
            </div>
            <div className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name="heart" className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">
                Night vision &amp; glare
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Halos and glare after dark can point to anything from
                nearsightedness to early cataracts. We&apos;ll find the cause
                and the lens that fixes it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Facilities & frames ---------------- */}
      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="eyebrow">Behind the scenes</span>
            <h2 className="text-3xl font-semibold md:text-4xl">
              The equipment behind a precise prescription
            </h2>
            <ul className="space-y-4">
              {[
                {
                  icon: "sparkle",
                  title: "In-office digital lens lab",
                  text: "Most prescriptions are fabricated on site, so new glasses rarely mean a long wait.",
                },
                {
                  icon: "star",
                  title: "Digital retinal imaging",
                  text: "A complete picture of your retina in seconds, for earlier, easier-to-explain diagnoses.",
                },
                {
                  icon: "check",
                  title: "Co-managed surgical care",
                  text: "We coordinate with surgeons before and after laser and cataract procedures.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-4xl bg-brand-800 p-8 text-white md:p-12">
            <div className="bg-grid absolute inset-0 opacity-50" />
            <div className="relative space-y-6">
              <Icon name="sparkle" className="h-10 w-10 text-brand-300" />
              <p className="font-display text-2xl leading-snug md:text-3xl">
                A large selection of frames, so seeing better and looking great
                are never a trade-off.
              </p>
              <div className="space-y-3 border-t border-white/15 pt-6">
                {[
                  "Ray-Ban",
                  "Gucci",
                  "Prada",
                  "Fendi",
                  "Versace",
                  "Dolce & Gabbana",
                ].map((brand) => (
                  <span
                    key={brand}
                    className="mr-2 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
