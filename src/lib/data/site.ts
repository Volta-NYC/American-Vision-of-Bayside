// Central source of truth for business information.
// Update these values to keep the whole site in sync.

export const site = {
  name: "American Vision of Bayside",
  shortName: "American Vision",
  tagline: "Your Local Eye Care Professionals",
  description:
    "Comprehensive eye care in Bayside, NY. Over 25 years of combined experience in eye exams, specialty contact lenses, ortho-k, myopia control, and designer eyewear.",
  phone: "(718) 717-8531",
  phoneHref: "tel:+17187178531",
  address: {
    street: "41-01 Bell Boulevard",
    city: "Bayside",
    state: "NY",
    zip: "11361",
  },
  booking: {
    // ZocDoc online booking
    url: "https://www.zocdoc.com/practice/glen-oaks-family-vision-11022",
    label: "Book on ZocDoc",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=41-01+Bell+Boulevard+Bayside+NY+11361",
  mapEmbedUrl:
    "https://www.google.com/maps?q=41-01+Bell+Boulevard+Bayside+NY+11361&output=embed",
  languages: ["English", "Russian", "Spanish", "Greek"],
  payments: ["Cash", "Visa", "Mastercard", "American Express", "Discover"],
  insurance: {
    count: "1,500+",
    featured: ["VSP", "Medicare", "Medicaid"],
  },
  // Hours are not published on the original site — confirm before launch.
  hours: [
    { day: "Monday", time: "Call to confirm" },
    { day: "Tuesday", time: "Call to confirm" },
    { day: "Wednesday", time: "Call to confirm" },
    { day: "Thursday", time: "Call to confirm" },
    { day: "Friday", time: "Call to confirm" },
    { day: "Saturday", time: "Call to confirm" },
    { day: "Sunday", time: "Closed" },
  ],
} as const

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/practice", label: "Our Practice" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const

export type Doctor = {
  name: string
  credentials: string
  role: string
  bio: string
}

export const doctors: Doctor[] = [
  {
    name: "Dr. Vladimir Poley",
    credentials: "O.D.",
    role: "Optometrist",
    bio: "A graduate of the SUNY College of Optometry (2000), Dr. Poley brings over 20 years of experience to even the most challenging vision cases. He specializes in rigid gas permeable (RGP) lens fittings, multifocal contact lenses, and soft lenses.",
  },
  {
    name: "Dr. Flora Levine",
    credentials: "O.D.",
    role: "Optometrist",
    bio: "Also a 2000 graduate of the SUNY College of Optometry, Dr. Levine was a classmate of Dr. Poley at both Brooklyn College and optometry school. Together they launched American Vision of Bayside in 2001, building a practice rooted in personalized, family-focused care.",
  },
]

export type Service = {
  title: string
  description: string
  icon: string // key into the Icon component
}

export const services: Service[] = [
  {
    title: "Computer-Assisted Eye Exams",
    description:
      "Comprehensive vision assessments using modern diagnostic technology for accurate, thorough results.",
    icon: "eye",
  },
  {
    title: "Ocular Disease & Injury Care",
    description:
      "Professional evaluation and management of eye conditions, infections, and trauma-related injuries.",
    icon: "shield",
  },
  {
    title: "Complete Contact Lens Services",
    description:
      "Full-service contact lens care, including all specialty lens products for every kind of vision need.",
    icon: "contact",
  },
  {
    title: "Surgery Co-Management",
    description:
      "Coordinated pre- and post-operative care for LASIK, laser, and cataract surgeries alongside your surgeon.",
    icon: "stethoscope",
  },
  {
    title: "Progressive & Bifocal Lenses",
    description:
      "Multifocal eyewear designed to give you clear vision at every distance as your eyes change with age.",
    icon: "layers",
  },
  {
    title: "Designer Frame Styling",
    description:
      "Over one thousand designer frames, styled to complement your face, lifestyle, and personality.",
    icon: "glasses",
  },
  {
    title: "Hard-to-Fit Contact Lenses",
    description:
      "Specialty fittings including ortho-k and scleral lenses for complex or sensitive eyes.",
    icon: "target",
  },
  {
    title: "Keratoconus Treatment",
    description:
      "Custom contact lenses that fit comfortably and correct the cone-shaped corneal distortion of keratoconus.",
    icon: "cornea",
  },
  {
    title: "Myopia Management",
    description:
      "Slow the progression of nearsightedness in children with multifocal glasses, contacts, and orthokeratology.",
    icon: "trend",
  },
  {
    title: "Night Vision Glare Assessment",
    description:
      "Evaluation and treatment of low-light vision difficulties and glare-related driving concerns.",
    icon: "moon",
  },
  {
    title: "Glaucoma Diagnosis & Management",
    description:
      "Ongoing monitoring and treatment to protect your sight from intraocular pressure-related disease.",
    icon: "drop",
  },
  {
    title: "Pediatric Optometry",
    description:
      "Gentle, kid-friendly eye care and vision screenings to support healthy development at every age.",
    icon: "child",
  },
]

export const stats = [
  { value: "25+", label: "Years of combined experience" },
  { value: "1,500+", label: "Insurance plans accepted" },
  { value: "1,000+", label: "Designer frames in stock" },
  { value: "4", label: "Languages spoken" },
]
