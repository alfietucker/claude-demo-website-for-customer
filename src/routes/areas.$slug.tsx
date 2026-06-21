import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { CheckCircle2, Phone, Star } from "lucide-react";
import { SUBURBS, SERVICES, REVIEWS, SITE, type Suburb } from "@/lib/site";
import { QuoteForm } from "@/components/QuoteForm";
import { TrustBar } from "@/components/TrustBar";
import heroImg from "@/assets/hero-roof.jpg";

export const Route = createFileRoute("/areas/$slug")({
  loader: ({ params }) => {
    const suburb = SUBURBS.find((s) => s.slug === params.slug);
    if (!suburb) throw notFound();
    return { suburb };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.suburb;
    if (!s) return { meta: [{ title: "Suburb not found" }] };
    return {
      meta: [
        { title: `Roofing ${s.name} | Apex Roofing Perth` },
        { name: "description", content: `Trusted roofing contractors in ${s.name}. Roof repairs, restoration, re-roofing & emergency leak repairs. Licensed, insured & locally owned.` },
        { property: "og:title", content: `Roofing ${s.name} | Apex Roofing Perth` },
        { property: "og:description", content: `Local roofing specialists serving ${s.name}.` },
        { property: "og:url", content: `/areas/${s.slug}` },
      ],
      links: [{ rel: "canonical", href: `/areas/${s.slug}` }],
    };
  },
  component: SuburbPage,
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <h1 className="text-3xl font-bold text-charcoal">Suburb not found</h1>
      <Link to="/areas" className="mt-4 inline-block text-primary font-semibold">Browse all areas</Link>
    </div>
  ),
});

function SuburbPage() {
  const { suburb } = Route.useLoaderData() as { suburb: Suburb };
  const localReviews = REVIEWS.filter((r) => r.suburb === suburb.name);
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 to-charcoal/60" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">{suburb.region}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Roofing {suburb.name}</h1>
          <p className="mt-5 text-lg text-white/85 max-w-2xl leading-relaxed">Local, licensed roofing specialists serving {suburb.name} families and businesses with repairs, restoration, re-roofing and emergency callouts.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-cta hover:bg-primary-hover">Get Free {suburb.name} Quote</Link>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-md bg-white text-charcoal px-6 py-3.5 font-semibold"><Phone className="w-4 h-4" /> {SITE.phone}</a>
          </div>
          <div className="mt-8"><TrustBar light /></div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal">Your local {suburb.name} roofers</h2>
              <p className="mt-4 text-charcoal-soft leading-relaxed text-lg">{suburb.blurb}</p>
              <p className="mt-4 text-charcoal-soft leading-relaxed">
                We've worked on roofs all over {suburb.name} — from older brick-and-tile homes needing a full restoration to newer Colorbond builds needing repairs after a Perth storm. Whatever the job, you get a fixed-price quote, a real roofer on-site, and a workmanship warranty in writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal">Services we offer in {suburb.name}</h2>
              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                {SERVICES.map((s) => (
                  <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="flex items-center gap-3 p-4 rounded-xl bg-cream border border-border hover:border-primary transition">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-charcoal">{s.title.replace(" Perth", "")}</span>
                  </Link>
                ))}
              </div>
            </div>

            {localReviews.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-charcoal">What {suburb.name} customers say</h2>
                <div className="mt-5 space-y-4">
                  {localReviews.map((r) => (
                    <figure key={r.name} className="rounded-xl border border-border bg-white p-5">
                      <div className="flex gap-0.5 text-primary mb-2">
                        {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <blockquote className="text-charcoal-soft">"{r.text}"</blockquote>
                      <figcaption className="mt-2 text-sm text-muted-foreground">— {r.name}, {r.service}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-bold text-charcoal">FAQs — Roofing in {suburb.name}</h2>
              <div className="mt-5 space-y-4">
                {[
                  { q: `Do you service ${suburb.name}?`, a: `Yes — ${suburb.name} is well within our regular service area. Most quotes are scheduled within 48 hours.` },
                  { q: `How much does roofing cost in ${suburb.name}?`, a: `Pricing depends on the job. Repairs start from around $350; restorations and re-roofs vary by roof size and material. Every quote is fixed-price in writing.` },
                  { q: `Are you insured to work in ${suburb.name}?`, a: `Yes. We hold $20M public liability and full workers' compensation insurance, and every job is covered by our written workmanship warranty.` },
                ].map((f) => (
                  <details key={f.q} className="group rounded-xl border border-border bg-white p-5">
                    <summary className="font-semibold text-charcoal cursor-pointer list-none flex justify-between items-center">
                      {f.q}<span className="text-primary text-2xl leading-none group-open:rotate-45 transition">+</span>
                    </summary>
                    <p className="mt-3 text-charcoal-soft leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 self-start"><QuoteForm compact title={`Free ${suburb.name} Quote`} /></aside>
        </div>
      </section>
    </>
  );
}
