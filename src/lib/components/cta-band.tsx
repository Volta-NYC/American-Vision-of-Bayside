import { site } from "@/lib/data/site"
import Icon from "@/lib/components/icon"

export default function CtaBand() {
  return (
    <section className="container-page py-16 md:py-20">
      <div className="bg-grid relative overflow-hidden rounded-4xl bg-brand-800 px-8 py-14 text-center text-white md:px-16 md:py-20">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-600/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-2xl space-y-5">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Schedule your eye exam in Bayside today
          </h2>
          <p className="text-white/75 md:text-lg">
            Our doctors are ready to help you see your best. Book online in
            minutes or give us a call — new patients are always welcome.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
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
              href={site.phoneHref}
              className="btn border border-white/30 text-white hover:bg-white/10"
            >
              <Icon name="phone" className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
