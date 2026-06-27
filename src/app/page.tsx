import Link from "next/link"
import { doctors, services, site, stats } from "@/lib/data/site"
import Icon from "@/lib/components/icon"
import CtaBand from "@/lib/components/cta-band"

export default function HomePage() {
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
              <Icon name="pin" className="h-3.5 w-3.5" />
              Bayside, Queens · NY
            </span>
            <h1 className="text-4xl font-semibold leading-[1.1] md:text-6xl">
              See life more
              <span className="text-brand-300"> clearly.</span>
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-white/75">
              {site.tagline}. For over 25 years, Dr. Poley and Dr. Levine have
              delivered personalized, family-focused eye care to Bayside and
              beyond.
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
              <Link href="/services" className="btn border border-white/25 text-white hover:bg-white/10">
                Explore Services
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-brand-300" />
                {site.insurance.count} insurance plans
              </span>
              <span className="flex items-center gap-2">
                <Icon name="globe" className="h-4 w-4 text-brand-300" />
                {site.languages.join(", ")}
              </span>
            </div>
          </div>

          {/* Decorative eye-care visual built from pure CSS/SVG */}
          <div className="relative hidden md:block">
            <div className="animate-float relative mx-auto aspect-square max-w-sm">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-400/30 to-brand-700/40 backdrop-blur-sm" />
              <div className="absolute inset-8 rounded-full border border-white/15" />
              <div className="absolute inset-16 rounded-full border border-white/10" />
              <svg
                viewBox="0 0 24 24"
                className="absolute inset-0 m-auto h-40 w-40 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.1}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3.2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Stats ---------------- */}
      <section className="border-b border-brand-100 bg-brand-50/60">
        <div className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-semibold text-brand-700 md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-ink/60">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Services preview ---------------- */}
      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Complete eye care, all in one place
          </h2>
          <p className="mt-4 text-ink/60">
            From routine exams to the most challenging contact lens fittings, our
            doctors bring decades of specialized experience to every patient.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <div key={service.title} className="card group hover:-translate-y-1 hover:shadow-lift">
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

        <div className="mt-10 text-center">
          <Link href="/services" className="btn-secondary">
            View all services
            <Icon name="trend" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ---------------- Doctors ---------------- */}
      <section className="bg-brand-50/60 py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow">Meet your doctors</span>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Classmates, partners, and your neighbors since 2001
            </h2>
            <p className="mt-4 text-ink/60">
              Dr. Vladimir Poley and Dr. Flora Levine met at Brooklyn College,
              studied together at the SUNY College of Optometry, and opened
              American Vision of Bayside together. That shared history shows up
              in the consistent, attentive care every patient receives.
            </p>
            <Link href="/practice" className="btn-secondary mt-6">
              About our practice
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {doctors.map((doc) => (
              <div key={doc.name} className="card">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 font-display text-lg font-semibold text-white">
                  {doc.name
                    .split(" ")
                    .filter((w) => !w.startsWith("Dr"))
                    .map((w) => w[0])
                    .join("")}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {doc.name},{" "}
                  <span className="text-brand-600">{doc.credentials}</span>
                </h3>
                <p className="text-xs font-medium uppercase tracking-wider text-ink/40">
                  {doc.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {doc.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Why choose us ---------------- */}
      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="eyebrow">Why patients choose us</span>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Big-practice expertise with a neighborhood feel
            </h2>
            <ul className="space-y-4">
              {[
                {
                  icon: "star",
                  title: "Specialists in hard-to-fit eyes",
                  text: "Ortho-k, scleral, RGP, and keratoconus lenses — we take the cases others turn away.",
                },
                {
                  icon: "card",
                  title: `${site.insurance.count} insurance plans accepted`,
                  text: `Including ${site.insurance.featured.join(", ")} and most major vision plans.`,
                },
                {
                  icon: "globe",
                  title: "Care in your language",
                  text: `Our team speaks ${site.languages.join(", ")} to keep every patient comfortable.`,
                },
                {
                  icon: "heart",
                  title: "Care for the whole family",
                  text: "Gentle pediatric optometry through adult and senior eye health, all under one roof.",
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
                “State-of-the-art equipment, decades of experience, and the time
                to truly understand your eyes.”
              </p>
              <div className="space-y-3 border-t border-white/15 pt-6">
                {site.payments.map((p) => (
                  <span
                    key={p}
                    className="mr-2 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
