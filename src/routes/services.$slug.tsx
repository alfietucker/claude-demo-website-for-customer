import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { SERVICES, SITE, SUBURBS, type Service } from "@/lib/site";
import { QuoteForm } from "@/components/QuoteForm";
import { TrustBar } from "@/components/TrustBar";
import heroImg from "@/assets/hero-roof.jpg";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service not found" }] };
    return {
      meta: [
        { title: `${s.title} | Apex Roofing Perth` },
        { name: "description", content: s.short },
        { property: "og:title", content: `${s.title} | Apex Roofing Perth` },
        { property: "og:description", content: s.short },
        { property: "og:url", content: `/services/${s.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: s.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <h1 className="text-3xl font-bold text-charcoal">Service not found</h1>
      <Link to="/services" className="mt-4 inline-block text-primary font-semibold">Browse all services</Link>
    </div>
  ),
});

function ServicePage() {
  const { service } = Route.useLoaderData() as { service: Service };
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 to-charcoal/60" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">Roofing Service</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">{service.title}</h1>
          <p className="mt-5 text-lg text-white/85 max-w-2xl leading-relaxed">{service.short}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-cta hover:bg-primary-hover">Get Free Quote <ArrowRight className="w-4 h-4" /></Link>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-md bg-white text-charcoal px-6 py-3.5 font-semibold hover:bg-cream"><Phone className="w-4 h-4" /> {SITE.phone}</a>
          </div>
          <div className="mt-8"><TrustBar light /></div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal">Trusted {service.title.toLowerCase()} across Perth</h2>
              <p className="mt-4 text-charcoal-soft leading-relaxed text-lg">{service.hero}</p>
              <p className="mt-4 text-charcoal-soft leading-relaxed">
                Our Perth roofers have worked on every roof type the WA climate throws at us — from heritage tile in Fremantle to coastal Colorbond in Hillarys. Every job starts with a free on-site inspection and ends with a written workmanship warranty.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal">Common problems we fix</h2>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {service.problems.map((p) => (
                  <li key={p} className="flex gap-3 p-4 rounded-xl bg-cream border border-border">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-charcoal-soft">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal">Our process</h2>
              <ol className="mt-6 space-y-5">
                {service.process.map((step, i) => (
                  <li key={step.step} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-bold">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-charcoal text-lg">{step.step}</h3>
                      <p className="text-charcoal-soft mt-1 leading-relaxed">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal">Why Perth chooses Apex</h2>
              <ul className="mt-5 space-y-2.5">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-charcoal-soft">{b}</span></li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal">Frequently asked questions</h2>
              <div className="mt-6 space-y-4">
                {service.faqs.map((f) => (
                  <details key={f.q} className="group rounded-xl border border-border bg-white p-5">
                    <summary className="font-semibold text-charcoal cursor-pointer list-none flex justify-between items-center">
                      {f.q}
                      <span className="text-primary text-2xl leading-none group-open:rotate-45 transition">+</span>
                    </summary>
                    <p className="mt-3 text-charcoal-soft leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal">Service areas</h2>
              <p className="mt-3 text-charcoal-soft">We deliver {service.title.toLowerCase()} across the Perth metro including:</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {SUBURBS.map((s) => (
                  <Link key={s.slug} to="/areas/$slug" params={{ slug: s.slug }} className="text-sm px-3 py-1.5 rounded-full bg-cream border border-border text-charcoal-soft hover:border-primary hover:text-primary">{s.name}</Link>
                ))}
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 self-start"><QuoteForm compact /></aside>
        </div>
      </section>
    </>
  );
}
