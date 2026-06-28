import { site } from "@/lib/data/site";
import Icon from "@/lib/components/icon";
import ContactForm from "@/lib/components/contact-form";
import CtaBand from "@/lib/components/cta-band";

// Practice contact details. Move these into lib/data/site.ts alongside the
// rest of `site` whenever convenient — kept local here so this page doesn't
// depend on data shapes outside what the homepage already proved out.
const contact = {
  phoneDisplay: "(718) 717-8531",
  phoneHref: "tel:+17187178531",
  addressLine1: "41-01 Bell Boulevard",
  addressLine2: "Bayside, NY 11361",
  directionsUrl:
    "https://www.google.com/maps/place/American+Vision+of+Bayside/@40.7635372,-73.7732744,17z",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.931233953404!2d-73.77327442397171!3d40.7635371713859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c261e010239c51%3A0x4686ffc4bd7e44e4!2sAmerican%20Vision%20of%20Bayside!5e0!3m2!1sen!2sin!4v1696485403324!5m2!1sen!2sin",
  hours: [
    { day: "Monday", time: "10:00 AM – 5:30 PM" },
    { day: "Tuesday", time: "10:00 AM – 5:30 PM" },
    { day: "Wednesday", time: "10:00 AM – 5:30 PM" },
    { day: "Thursday", time: "10:00 AM – 6:00 PM" },
    { day: "Friday", time: "10:00 AM – 5:00 PM" },
    { day: "Saturday", time: "10:00 AM – 5:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

export default function ContactPage() {
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
              Let&apos;s get you
              <span className="text-brand-300"> on the schedule.</span>
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-white/75">
              Questions about insurance, a new patient exam, or a hard-to-fit
              lens fitting — call, message us, or stop by our Bell Boulevard
              office. We{"'"}re close by and happy to help.
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
              <a
                href={contact.phoneHref}
                className="btn border border-white/25 text-white hover:bg-white/10"
              >
                <Icon name="phone" className="h-4 w-4" />
                {contact.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Decorative locator beacon — signature visual for this page */}
          <div className="relative hidden md:block">
            <div className="relative mx-auto aspect-square max-w-sm">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-400/30 to-brand-700/40 backdrop-blur-sm" />
              <div className="absolute inset-8 rounded-full border border-white/15" />
              <div className="absolute inset-16 rounded-full border border-white/10" />
              <span
                className="absolute inset-0 m-auto h-44 w-44 rounded-full border border-brand-300/40"
                style={{
                  animation: "ping 3s cubic-bezier(0,0,0.2,1) infinite",
                }}
              />
              <span
                className="absolute inset-0 m-auto h-28 w-28 rounded-full border border-brand-300/50"
                style={{
                  animation: "ping 3s cubic-bezier(0,0,0.2,1) infinite",
                  animationDelay: "1s",
                }}
              />
              <Icon
                name="pin"
                className="absolute inset-0 m-auto h-16 w-16 text-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Quick info cards ---------------- */}
      <section className="container-page py-16 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon name="pin" className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">Visit us</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              {contact.addressLine1}
              <br />
              {contact.addressLine2}
            </p>
            <a
              href={contact.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              Get directions
              <Icon name="trend" className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="card">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon name="phone" className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">Call us</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              For appointments, prescriptions, or quick questions, our team is
              on hand during office hours.
            </p>
            <a
              href={contact.phoneHref}
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              {contact.phoneDisplay}
            </a>
          </div>

          <div className="card">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon name="clock" className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">
              Office hours
            </h3>
            <ul className="mt-2 space-y-1 text-sm leading-relaxed text-ink/60">
              <li className="flex justify-between gap-4">
                <span>Mon – Wed</span>
                <span>10 – 5:30</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Thursday</span>
                <span>10 – 6:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Fri – Sat</span>
                <span>10 – 5:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon name="calendar" className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">Book online</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Prefer to skip the phone call? Grab a time that works for you in a
              couple of taps.
            </p>
            <a
              href={site.booking.url}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              Schedule now
              <Icon name="trend" className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- Form + map ---------------- */}
      <section className="bg-brand-50/60 py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Message form */}
          <div className="card">
            <span className="eyebrow">Send a message</span>
            <h2 className="mt-4 text-2xl font-semibold text-ink md:text-3xl">
              Tell us what you need
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Fill out the form and a member of our team will follow up within
              one business day. For anything time-sensitive, please call the
              office instead.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>

          {/* Map + location recap */}
          <div className="space-y-5">
            <div className="overflow-hidden rounded-4xl border border-brand-100 shadow-soft">
              <iframe
                src={contact.mapEmbedUrl}
                title="American Vision of Bayside location"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>

            <div className="card">
              <h3 className="text-base font-semibold text-ink">
                American Vision of Bayside
              </h3>
              <p className="mt-2 flex items-start gap-2 text-sm text-ink/60">
                <Icon
                  name="pin"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                />
                <span>
                  {contact.addressLine1}
                  <br />
                  {contact.addressLine2}
                </span>
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm text-ink/60">
                <Icon
                  name="phone"
                  className="h-4 w-4 shrink-0 text-brand-600"
                />
                <a href={contact.phoneHref} className="hover:text-brand-700">
                  {contact.phoneDisplay}
                </a>
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink/10 pt-5 text-xs text-ink/50">
                <span className="flex items-center gap-1.5">
                  <Icon name="check" className="h-3.5 w-3.5 text-brand-600" />
                  {site.insurance.count} insurance plans
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="globe" className="h-3.5 w-3.5 text-brand-600" />
                  {site.languages.join(", ")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
