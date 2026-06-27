import Link from "next/link"
import { navLinks, site } from "@/lib/data/site"
import Icon from "@/lib/components/icon"
import Logo from "@/lib/components/logo"

export default function Footer() {
  const { address } = site
  return (
    <footer className="bg-brand-950 text-white/70">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo light />
          <p className="max-w-xs text-sm leading-relaxed">
            {site.tagline}. Comprehensive, family-focused eye care for Bayside,
            NY and the surrounding communities since 2001.
          </p>
          <a
            href={site.booking.url}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Book Appointment
          </a>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h3>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Visit Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                {address.street}
                <br />
                {address.city}, {address.state} {address.zip}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-brand-400" />
              <a
                href={site.phoneHref}
                className="transition-colors hover:text-white"
              >
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <Link
            href="https://nyc.voltanpo.org"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            Website by @VoltaNYC
          </Link>
        </div>
      </div>
    </footer>
  )
}
