import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useSiteData } from "@/lib/siteContext";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/areas/")({
  component: AreasIndex,
});

function AreasIndex() {
  const { suburbs } = useSiteData();

  useEffect(() => {
    document.title = "Roofing Service Areas Perth | Apex Roofing";
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Service Areas"
          title="Roofing across the Perth metro"
          subtitle="Local crews, local knowledge — covering every major suburb from the northern beaches to the southern coast."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {suburbs.map((s) => (
            <Link
              key={s.slug}
              to="/areas/$slug"
              params={{ slug: s.slug }}
              className="rounded-2xl border border-border bg-white p-6 hover:border-primary/40 hover:shadow-card transition"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{s.region}</p>
              <h3 className="mt-1 text-xl font-bold text-charcoal">Roofing {s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{s.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
