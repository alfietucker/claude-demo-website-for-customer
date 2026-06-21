import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldCheck, Clock, Award, Wrench, CheckCircle2, Star, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-roof.jpg";
import tileImg from "@/assets/tile-roof.jpg";
import metalImg from "@/assets/metal-roof.jpg";
import commercialImg from "@/assets/commercial-roof.jpg";
import projectRestoration from "@/assets/project-restoration.jpg";
import projectMetal from "@/assets/project-metal.jpg";
import projectDetail from "@/assets/project-detail.jpg";
import projectAerial from "@/assets/project-aerial.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import { QuoteForm } from "@/components/QuoteForm";
import { TrustBar } from "@/components/TrustBar";
import { SectionHeading } from "@/components/SectionHeading";
import { useSiteData } from "@/lib/siteContext";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a roof repair cost in Perth?", acceptedAnswer: { "@type": "Answer", text: "Small repairs typically start from $350. After a free on-site inspection we provide a fixed written quote so you know exactly what you'll pay — no surprises." } },
    { "@type": "Question", name: "How quickly can you get to me?", acceptedAnswer: { "@type": "Answer", text: "Most repairs are inspected within 48 hours. For active leaks or storm damage we offer same-day emergency callouts across the Perth metro." } },
    { "@type": "Question", name: "Do you offer a workmanship warranty?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every job — repair, restoration or replacement — is backed by a written workmanship warranty in addition to manufacturer product warranties." } },
    { "@type": "Question", name: "Are you licensed and insured?", acceptedAnswer: { "@type": "Answer", text: "Fully licensed roofing contractors with $20M public liability cover. We're happy to provide certificates of currency on request." } },
    { "@type": "Question", name: "Do you handle insurance claims?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. We prepare the photos, reports and quotes that insurers need, and can liaise directly with your insurer in most cases." } },
    { "@type": "Question", name: "Which suburbs do you service?", acceptedAnswer: { "@type": "Answer", text: "All Perth metro — from Joondalup and Hillarys in the north, through to Fremantle, Cottesloe and the southern suburbs." } },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roofing Perth | #1 Roofers Perth — Repairs, Restoration, Replacement" },
      { name: "description", content: "Perth's trusted roofing specialists. Roof repairs from $350, restoration, re-roofing & replacement across Perth metro. Licensed roofers, free quotes, workmanship warranty. ★4.9/5" },
      { property: "og:title", content: "Roofing Perth | Apex Roofing — Trusted Perth Roofers" },
      { property: "og:description", content: "Perth roofing experts — repairs, restoration & replacement. Free quotes, workmanship warranty. Call (08) 6555 1234." },
      { property: "og:url", content: "https://apexroofingperth.com.au/" },
      { property: "og:image", content: "/og.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://apexroofingperth.com.au/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: Home,
});

function Home() {
  const { site: SITE, services: SERVICES, suburbs: SUBURBS, reviews: REVIEWS, faqs, hero, team } = useSiteData();
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Beautifully restored Colorbond metal roof on a modern Perth home" className="w-full h-full object-cover brightness-[0.8]" width={1920} height={1280} fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/45 to-charcoal/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-charcoal/5" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-white">
            {/* Top badge row: brand chip + Google score */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> {hero.badge}
              </span>
              <a
                href="https://www.google.com/search?q=apex+roofing+perth+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-3 py-1.5 hover:bg-white/20 transition"
              >
                <svg viewBox="0 0 48 48" className="w-3.5 h-3.5" aria-hidden="true">
                  <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.7 2.4 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.3l7.9 6.1C12.4 13.1 17.7 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.2-.4-4.7H24v9h12.7c-.6 3-2.3 5.5-4.9 7.2l7.6 5.9c4.4-4.1 7.1-10.1 7.1-17.4z"/>
                  <path fill="#FBBC05" d="M10.5 28.6c-.5-1.4-.8-2.9-.8-4.6s.3-3.2.8-4.6l-7.9-6.1C1 16.7 0 20.2 0 24s1 7.3 2.6 10.7l7.9-6.1z"/>
                  <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.8 2.3-8.3 2.3-6.3 0-11.6-3.6-13.5-9.4l-7.9 6.1C6.5 42.6 14.6 48 24 48z"/>
                </svg>
                <span className="text-xs font-bold text-white leading-none">{SITE.rating}★</span>
                <span className="text-[11px] text-white/70 leading-none">Google</span>
              </a>
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {hero.headline}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              {hero.subheadline}
            </p>
            <p className="mt-3 text-sm font-semibold text-white/90">
              <span className="text-primary">★</span> Trusted by {SITE.reviewCount}+ Perth homeowners
            </p>

            <div className="mt-7 flex flex-col items-start gap-3">
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-cta hover:bg-primary-hover transition">
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-white/70 bg-transparent text-white px-6 py-3.5 text-base font-semibold hover:bg-white hover:text-charcoal transition">
                  <Phone className="w-4 h-4" /> Call {SITE.phone}
                </a>
              </div>

              <p className="text-xs font-medium text-white/70">
                Same-day response · No obligation
              </p>
            </div>


            <div className="mt-8"><TrustBar light /></div>

            {/* Google Reviews badge */}
            <a
              href="https://www.google.com/search?q=apex+roofing+perth+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3 hover:bg-white/20 transition"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white">
                <svg viewBox="0 0 48 48" className="w-5 h-5" aria-hidden="true">
                  <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.7 2.4 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.3l7.9 6.1C12.4 13.1 17.7 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.2-.4-4.7H24v9h12.7c-.6 3-2.3 5.5-4.9 7.2l7.6 5.9c4.4-4.1 7.1-10.1 7.1-17.4z"/>
                  <path fill="#FBBC05" d="M10.5 28.6c-.5-1.4-.8-2.9-.8-4.6s.3-3.2.8-4.6l-7.9-6.1C1 16.7 0 20.2 0 24s1 7.3 2.6 10.7l7.9-6.1z"/>
                  <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.8 2.3-8.3 2.3-6.3 0-11.6-3.6-13.5-9.4l-7.9 6.1C6.5 42.6 14.6 48 24 48z"/>
                </svg>
              </span>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-extrabold text-white leading-none">{SITE.rating}</span>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-0.5 text-[#FBBC05]">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <span className="text-[11px] text-white/80 leading-none">{SITE.reviewCount}+ Google reviews</span>
                </div>
              </div>
            </a>
          </div>

          <div className="lg:col-span-5">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Trust stats */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { v: "1,800+", l: "Projects Completed" },
            { v: "15+", l: "Years Experience" },
            { v: "99%", l: "Customer Satisfaction" },
            { v: "24/7", l: "Emergency Response" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-3xl md:text-4xl font-bold text-charcoal font-display">{s.v}</p>
              <p className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <SectionHeading
              eyebrow="What We Do"
              title="Roofing services built for Perth conditions"
              subtitle="From a single cracked tile to a complete commercial re-roof — one local team, one written warranty."
            />
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">View all services <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => {
              const img = [tileImg, metalImg, commercialImg][i % 3];
              return (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group rounded-2xl border border-border bg-white p-6 hover:border-primary/40 hover:shadow-card transition"
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-secondary">
                    <img src={img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <SectionHeading eyebrow="Recent Work" title="Projects across Perth" />
            <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">View all projects <ArrowRight className="w-4 h-4" /></Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {[
              { img: projectMetal, title: "Colorbond Re-Roof", location: "Hillarys", span: "col-span-2 row-span-2" },
              { img: projectRestoration, title: "Tile Restoration", location: "Morley", span: "col-span-1 row-span-1" },
              { img: projectCommercial, title: "Commercial Warehouse", location: "Osborne Park", span: "col-span-1 row-span-1" },
              { img: heroImg, title: "Storm Emergency", location: "Baldivis", span: "col-span-1 row-span-1" },
              { img: tileImg, title: "Heritage Tile Repair", location: "Fremantle", span: "col-span-1 row-span-1" },
              { img: metalImg, title: "Gutter Replacement", location: "Canning Vale", span: "col-span-1 row-span-1" },
              { img: projectAerial, title: "Full Re-Roof", location: "Joondalup", span: "col-span-2 row-span-1" },
              { img: projectDetail, title: "Ridge Capping", location: "Wanneroo", span: "col-span-1 row-span-1" },
            ].map((p) => (
              <div key={p.title} className={`group relative overflow-hidden rounded-xl border border-border bg-white shadow-card ${p.span}`}>
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    width={1024}
                    height={768}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent opacity-60 group-hover:opacity-80 transition duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <div className="flex items-center gap-1.5 text-primary mb-1">
                    <MapPin className="w-3 h-3" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">{p.location}</span>
                  </div>
                  <p className="text-white font-bold text-sm md:text-base drop-shadow">{p.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / Why Choose Us */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Perth homeowners pick Apex for good reason"
            subtitle="Local team, premium materials, fixed pricing and a written warranty on every job."
            center
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: ShieldCheck, title: "Licensed & Insured", text: "Fully licensed roofing contractors with $20M public liability cover." },
              { icon: Award, title: "15+ Years Experience", text: "Over 1,800 Perth roofs completed across tile, metal and commercial." },
              { icon: Clock, title: "On-Time, Every Time", text: "Same-week response and projects finished on the day we promise." },
              { icon: Wrench, title: "Workmanship Warranty", text: "Every job backed by a written workmanship warranty you can hold us to." },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl bg-white border border-border p-6 shadow-card">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <b.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-charcoal">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Meet The Team"
            title="The Perth roofers behind every job"
            subtitle="Locally owned, family run — the same crew that quotes your job is the one on your roof."
            center
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl bg-white border border-border p-6 text-center shadow-card">
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-hover text-primary-foreground flex items-center justify-center text-2xl font-bold">
                  {m.initials}
                </div>
                <h3 className="mt-4 text-base font-bold text-charcoal">{m.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="relative py-24 bg-gradient-to-b from-cream via-cream to-white overflow-hidden">

        <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--charcoal)) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What Perth Says"
            title="Loved by homeowners across Perth"
            subtitle="Real reviews from real customers — verified on Google."
            center
          />
          <div className="mt-4 flex justify-center">
            <Link to="/reviews" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">Read all reviews <ArrowRight className="w-4 h-4" /></Link>
          </div>

          {/* Google rating badge */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.google.com/search?q=apex+roofing+perth+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 rounded-full bg-white border border-border pl-3 pr-5 py-2.5 shadow-card hover:shadow-cta transition-all hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-border">
                {/* Google G */}
                <svg viewBox="0 0 48 48" className="w-5 h-5" aria-hidden="true">
                  <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.7 2.4 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.3l7.9 6.1C12.4 13.1 17.7 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.2-.4-4.7H24v9h12.7c-.6 3-2.3 5.5-4.9 7.2l7.6 5.9c4.4-4.1 7.1-10.1 7.1-17.4z"/>
                  <path fill="#FBBC05" d="M10.5 28.6c-.5-1.4-.8-2.9-.8-4.6s.3-3.2.8-4.6l-7.9-6.1C1 16.7 0 20.2 0 24s1 7.3 2.6 10.7l7.9-6.1z"/>
                  <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.8 2.3-8.3 2.3-6.3 0-11.6-3.6-13.5-9.4l-7.9 6.1C6.5 42.6 14.6 48 24 48z"/>
                </svg>
              </span>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-bold text-charcoal leading-none">{SITE.rating}</span>
                  <div className="flex gap-0.5 text-[#FBBC05]">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                </div>
                <p className="text-[11px] font-medium text-muted-foreground mt-0.5 leading-none">Based on {SITE.reviewCount}+ Google reviews</p>
              </div>
            </a>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="mt-12 max-w-2xl mx-auto">
            <CarouselContent>
              {REVIEWS.map((r) => (
                <CarouselItem key={r.name} className="basis-full">
                  <figure className="relative rounded-2xl bg-white border border-border p-7 sm:p-9 shadow-card">
                    {/* Header: avatar + name + Google logo */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover text-primary-foreground flex items-center justify-center font-bold">
                        {r.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-semibold text-charcoal truncate">{r.name}</p>
                          <svg viewBox="0 0 48 48" className="w-5 h-5 flex-shrink-0" aria-label="Google review">
                            <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.7 2.4 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.3l7.9 6.1C12.4 13.1 17.7 9.5 24 9.5z"/>
                            <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.2-.4-4.7H24v9h12.7c-.6 3-2.3 5.5-4.9 7.2l7.6 5.9c4.4-4.1 7.1-10.1 7.1-17.4z"/>
                            <path fill="#FBBC05" d="M10.5 28.6c-.5-1.4-.8-2.9-.8-4.6s.3-3.2.8-4.6l-7.9-6.1C1 16.7 0 20.2 0 24s1 7.3 2.6 10.7l7.9-6.1z"/>
                            <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.8 2.3-8.3 2.3-6.3 0-11.6-3.6-13.5-9.4l-7.9 6.1C6.5 42.6 14.6 48 24 48z"/>
                          </svg>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{r.suburb} · Local Guide</p>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex gap-0.5 text-[#FBBC05]">
                            {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                          </div>
                          <span className="text-xs text-muted-foreground">· a week ago</span>
                        </div>
                      </div>
                    </div>

                    <blockquote className="mt-5 text-charcoal-soft leading-relaxed text-[15px]">{r.text}</blockquote>

                    <p className="mt-5 pt-4 border-t border-border text-xs text-muted-foreground">
                      Service: <span className="font-medium text-charcoal">{r.service}</span>
                    </p>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex items-center justify-center gap-4">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white text-charcoal border-border hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-card transition-all" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Swipe or tap</span>
              <CarouselNext className="static translate-y-0 h-12 w-12 bg-white text-charcoal border-border hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-card transition-all" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Roofing questions, answered"
            subtitle="The questions we hear most often from Perth homeowners."
            center
          />
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl bg-white border border-border p-5 shadow-card">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-charcoal">
                  <span>{f.q}</span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Service Areas" title="Roofing across the Perth metro" subtitle="Click your suburb for local examples and pricing guidance." />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {SUBURBS.map((s) => (
              <Link key={s.slug} to="/areas/$slug" params={{ slug: s.slug }} className="rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-charcoal hover:border-primary hover:text-primary transition text-center">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 grid md:grid-cols-[1fr_auto] items-center gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-80">24/7 Emergency Roofing</p>
              <h2 className="mt-2 text-2xl md:text-4xl font-bold">Storm damage? Active leak? We're on the way.</h2>
              <p className="mt-2 opacity-90 max-w-xl">Same-day make-safe across the Perth metro. Tarp, board-up and full insurance reports.</p>
            </div>
            <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-charcoal px-6 py-4 text-base font-bold hover:bg-cream whitespace-nowrap">
              <Phone className="w-5 h-5" /> Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Final quote */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Get Started" title="Request your free quote today" subtitle="Tell us a little about your roof — a Perth specialist will be in touch within 2 business hours." center />
          <div className="mt-10"><QuoteForm /></div>
          <div className="mt-6 flex justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-cta hover:bg-primary-hover transition">
              Go to contact page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["Free on-site inspection", "Fixed-price written quote", "No obligation", "Workmanship warranty"].map((x) => (
              <li key={x} className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" />{x}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
