import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Award, Wrench, Users } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { QuoteForm } from "@/components/QuoteForm";
import { TrustBar } from "@/components/TrustBar";
import roofer from "@/assets/roofer-working.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Apex Roofing Perth | Local Roofing Specialists" },
      { name: "description", content: "Locally owned Perth roofing company. Licensed, insured and trusted by 1,800+ homeowners. Meet the team behind Apex Roofing." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="py-16 md:py-24 bg-cream border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="About Apex Roofing" title="Local roofers Perth has trusted for 15+ years" subtitle="We're a family-run Perth roofing company built on workmanship, fair pricing and showing up when we say we will." />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden">
            <img src={roofer} alt="Apex Roofing crew at work on a Perth home" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-charcoal">Built on referrals, not radio ads.</h2>
            <p className="mt-4 text-charcoal-soft leading-relaxed">
              We started Apex Roofing because we were tired of seeing Perth homeowners get burned by fly-by-night operators. Cracked tile? Stick a daub of sealant on it and run. Quote for $5,000, leave a $15,000 mess.
            </p>
            <p className="mt-4 text-charcoal-soft leading-relaxed">
              We do the opposite. Every quote is fixed and in writing. Every job is run by a licensed roofer who's been on Perth rooftops for over a decade. Every repair, restoration and replacement is backed by a written workmanship warranty. That's it — no spin.
            </p>
            <div className="mt-8"><TrustBar /></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What we stand for" center />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { i: ShieldCheck, t: "Honesty", d: "Straight quotes. No fear tactics. No upsell." },
              { i: Award, t: "Craftsmanship", d: "Premium materials, finished to a standard we'd accept on our own home." },
              { i: Wrench, t: "Accountability", d: "Workmanship warranty in writing on every single job." },
              { i: Users, t: "Local", d: "Perth-born, Perth-based. We know your suburb and your weather." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl bg-white border border-border p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center"><v.i className="w-6 h-6" /></div>
                <h3 className="mt-4 font-bold text-charcoal">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"><QuoteForm /></div>
      </section>
    </>
  );
}
