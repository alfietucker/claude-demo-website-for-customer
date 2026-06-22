import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useSiteData } from "@/lib/siteContext";
import { SectionHeading } from "@/components/SectionHeading";
import { QuoteForm } from "@/components/QuoteForm";
import heroImg from "@/assets/hero-roof.jpg";
import tileImg from "@/assets/tile-roof.jpg";
import metalImg from "@/assets/metal-roof.jpg";
import commercialImg from "@/assets/commercial-roof.jpg";
import roofer from "@/assets/roofer-working.jpg";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

const imgs = [heroImg, tileImg, metalImg, commercialImg, roofer, heroImg];

function Projects() {
  const { projects } = useSiteData();

  useEffect(() => {
    document.title = "Roofing Projects Perth | Before & After | Apex Roofing";
  }, []);

  return (
    <>
      <section className="py-16 md:py-24 bg-cream border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Project Gallery"
            title="Real Perth roofs. Real outcomes."
            subtitle="Every job is photographed, documented and signed off."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <article key={`${p.title}-${i}`} className="rounded-2xl bg-white border border-border overflow-hidden shadow-card">
              <div className="aspect-[16/9] bg-secondary">
                <img
                  src={imgs[i % imgs.length]}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{p.location}</p>
                <h3 className="mt-1 text-xl font-bold text-charcoal">{p.title}</h3>
                <dl className="mt-4 space-y-2 text-sm">
                  <div>
                    <dt className="font-bold text-charcoal">Problem</dt>
                    <dd className="text-muted-foreground mt-0.5">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-charcoal">Solution</dt>
                    <dd className="text-muted-foreground mt-0.5">{p.solution}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-charcoal">Outcome</dt>
                    <dd className="text-muted-foreground mt-0.5">{p.outcome}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
