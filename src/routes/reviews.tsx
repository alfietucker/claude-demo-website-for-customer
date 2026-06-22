import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Star } from "lucide-react";
import { useSiteData } from "@/lib/siteContext";
import { SectionHeading } from "@/components/SectionHeading";
import { QuoteForm } from "@/components/QuoteForm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/reviews")({
  component: Reviews,
});

function Reviews() {
  const { site, reviews } = useSiteData();

  useEffect(() => {
    document.title = `Roofing Reviews Perth | Apex Roofing — ${site.reviewCount}+ Verified Reviews`;
  }, [site.reviewCount]);

  return (
    <>
      <section className="py-16 md:py-24 bg-cream border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Customer Reviews"
            title={`${site.rating}/5 from ${site.reviewCount}+ Perth homeowners`}
            subtitle="The reviews you'd want to read before letting a roofer near your home."
            center
          />
          <div className="mt-6 flex justify-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-7 h-7 fill-current" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <div className="flex items-center justify-between gap-4 mb-6">
              <p className="text-sm font-medium text-muted-foreground">
                Swipe or use the arrows to read more reviews
              </p>
              <div className="hidden md:flex items-center gap-2">
                <CarouselPrevious className="static translate-y-0 h-10 w-10 bg-primary text-primary-foreground border-primary hover:bg-primary-hover hover:text-primary-foreground" />
                <CarouselNext className="static translate-y-0 h-10 w-10 bg-primary text-primary-foreground border-primary hover:bg-primary-hover hover:text-primary-foreground" />
              </div>
            </div>
            <CarouselContent className="-ml-5">
              {reviews.map((r, i) => (
                <CarouselItem key={`${r.name}-${i}`} className="pl-5 basis-full md:basis-1/2 lg:basis-1/3">
                  <figure className="h-full rounded-2xl bg-white border border-border p-6 shadow-card">
                    <div className="flex gap-0.5 text-primary mb-3">
                      {Array.from({ length: r.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-charcoal-soft leading-relaxed">"{r.text}"</blockquote>
                    <figcaption className="mt-4 text-sm">
                      <p className="font-semibold text-charcoal">
                        {r.name}{" "}
                        <span className="text-muted-foreground font-normal">· {r.suburb}</span>
                      </p>
                      <p className="text-muted-foreground">{r.service}</p>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex md:hidden items-center justify-center gap-3">
              <CarouselPrevious className="static translate-y-0 h-11 w-11 bg-primary text-primary-foreground border-primary hover:bg-primary-hover hover:text-primary-foreground" />
              <CarouselNext className="static translate-y-0 h-11 w-11 bg-primary text-primary-foreground border-primary hover:bg-primary-hover hover:text-primary-foreground" />
            </div>
          </Carousel>
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
