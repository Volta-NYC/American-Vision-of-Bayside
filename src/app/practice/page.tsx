import Link from "next/link";
import { doctors, site } from "@/lib/data/site";
import Icon from "@/lib/components/icon";
import CtaBand from "@/lib/components/cta-band";

export default function PracticePage() {
  const [doctorA, doctorB] = doctors;

  const initialsOf = (name?: string) =>
    name
      ?.split(" ")
      .filter((w) => !w.startsWith("Dr"))
      .map((w) => w[0])
      .join("") ?? "";

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
              Care that&apos;s stayed
              <span className="text-brand-300"> personal since 2001.</span>
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-white/75">
              Dr. Vladimir Poley and Dr. Flora Levine met as classmates at
              Brooklyn College, studied together at the SUNY College of
              Optometry, and have practiced side by side ever since. Same two
              doctors, same neighborhood, for over 25 years.
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
                href="/services"
                className="btn border border-white/25 text-white hover:bg-white/10"
              >
                See our services
              </Link>
            </div>
          </div>

          {/* Decorative signature: two overlapping doctor marks, partners since 2001 */}
          <div className="relative hidden md:block">
            <div className="relative mx-auto aspect-square max-w-sm">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-400/30 to-brand-700/40 backdrop-blur-sm" />
              <div className="absolute inset-8 rounded-full border border-white/15" />
              <div className="absolute inset-16 rounded-full border border-white/10" />

              <div className="absolute inset-0 m-auto flex h-44 w-44 items-center justify-center">
                <span className="absolute left-2 top-2 flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-brand-600/90 font-display text-2xl font-semibold text-white shadow-lift">
                  {initialsOf(doctorA?.name)}
                </span>
                <span className="absolute bottom-2 right-2 flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-accent-500/90 font-display text-2xl font-semibold text-white shadow-lift">
                  {initialsOf(doctorB?.name)}
                </span>
                <span className="absolute rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-soft">
                  Since 2001
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Doctors ---------------- */}
      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Meet your doctors</span>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Decades of experience, never a stranger behind the chair
          </h2>
          <p className="mt-4 text-ink/60">
            Every patient sees one of the same two doctors who founded this
            practice — no rotating staff, no guesswork about who you&apos;ll
            get.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {doctors.map((doc, i) => (
            <div
              key={doc.name}
              className="grid items-center gap-8 lg:grid-cols-[0.7fr_1.3fr]"
            >
              <div
                className={`flex flex-col items-center gap-4 text-center lg:items-start lg:text-left ${
                  i % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-600 font-display text-2xl font-semibold text-white">
                  {initialsOf(doc.name)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink">
                    {doc.name},{" "}
                    <span className="text-brand-600">{doc.credentials}</span>
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-ink/40">
                    {doc.role}
                  </p>
                </div>
              </div>

              <div
                className={`card ${i % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
              >
                <p className="text-sm leading-relaxed text-ink/70">{doc.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Facilities & equipment ---------------- */}
      <section className="bg-brand-50/60 py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Behind the scenes</span>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Equipment that keeps up with your eyes
            </h2>
            <p className="mt-4 text-ink/60">
              We invest in the tools that make exams faster, fittings more
              precise, and diagnoses easier to catch early.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            <div className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name="sparkle" className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">
                In-office digital lens lab
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Most prescriptions are fabricated right here, so new glasses
                rarely mean a long wait.
              </p>
            </div>
            <div className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name="star" className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">
                Digital retinal imaging
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                A complete picture of your retina in seconds, helping us catch
                changes earlier and explain them more clearly.
              </p>
            </div>
            <div className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name="check" className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">
                Hard-to-fit specialty fittings
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Ortho-k, scleral, RGP, and keratoconus lenses — the fittings
                other practices tend to pass on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Insurance, payments, languages ---------------- */}
      <section className="container-page py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <span className="eyebrow">
              <Icon name="card" className="h-3.5 w-3.5" />
              Insurance
            </span>
            <h3 className="mt-4 text-xl font-semibold text-ink">
              {site.insurance.count} plans accepted
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Including most major vision plans and local unions.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {site.insurance.featured.map((plan) => (
                <span
                  key={plan}
                  className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                >
                  {plan}
                </span>
              ))}
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                + many more
              </span>
            </div>
          </div>

          <div>
            <span className="eyebrow">
              <Icon name="heart" className="h-3.5 w-3.5" />
              Payments
            </span>
            <h3 className="mt-4 text-xl font-semibold text-ink">
              However works best for you
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              No surprises at checkout.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {site.payments.map((p) => (
                <span
                  key={p}
                  className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="eyebrow">
              <Icon name="globe" className="h-3.5 w-3.5" />
              Languages
            </span>
            <h3 className="mt-4 text-xl font-semibold text-ink">
              Comfortable conversations
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Our team is glad to assist you in:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {site.languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
