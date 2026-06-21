import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Roofing Services Perth | Apex Roofing — Repairs, Restoration & Replacement" },
      { name: "description", content: "Full range of roofing services in Perth — roof repairs, restoration, replacement, re-roofing, metal & tile roofing, commercial, leak repairs, gutters." },
      { property: "og:title", content: "Roofing Services Perth | Apex Roofing" },
      { property: "og:description", content: "Repairs, restoration, re-roofing, replacement and commercial roofing across Perth." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="py-16 md:py-24 bg-cream border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Services" title="Every roofing service Perth homes need" subtitle="One local team for every stage of your roof's life — from a quick repair to a full replacement." />
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group rounded-2xl border border-border bg-white p-6 hover:border-primary/40 hover:shadow-card transition">
              <h3 className="text-lg font-bold text-charcoal">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"><QuoteForm /></div>
      </section>
    </>
  );
}
