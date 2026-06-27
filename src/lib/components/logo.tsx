import { site } from "@/lib/data/site"

// Wordmark + eye glyph. Pure SVG/CSS so it stays sharp and themeable.
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-xl ${
          light ? "bg-white/15" : "bg-brand-600"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="white"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[15px] font-semibold tracking-tight ${
            light ? "text-white" : "text-ink"
          }`}
        >
          American Vision
        </span>
        <span
          className={`text-[11px] font-medium uppercase tracking-[0.2em] ${
            light ? "text-white/60" : "text-brand-600"
          }`}
        >
          of Bayside
        </span>
      </span>
    </span>
  )
}
