import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Apex Roofing Perth | Get Your Free Roofing Quote" },
      { name: "description", content: "Contact Perth's trusted roofing specialists. Free on-site quotes, 24/7 emergency response. Call (08) 6555 1234." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="py-16 md:py-24 bg-cream border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Get In Touch" title="Free quote within 2 business hours" subtitle="Tell us about your roof. A real Perth roofer will be in touch — no call centres, no chasing." />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-white border border-border p-6">
              <h3 className="font-bold text-charcoal text-lg">Speak with us</h3>
              <div className="mt-4 space-y-3 text-sm">
                <a href={SITE.phoneHref} className="flex items-center gap-3 hover:text-primary"><Phone className="w-5 h-5 text-primary" /> <span><span className="block text-xs text-muted-foreground">Phone (24/7 emergency)</span><span className="font-semibold text-charcoal">{SITE.phone}</span></span></a>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-primary"><Mail className="w-5 h-5 text-primary" /> <span><span className="block text-xs text-muted-foreground">Email</span><span className="font-semibold text-charcoal">{SITE.email}</span></span></a>
                <p className="flex items-center gap-3"><MapPin className="w-5 h-5 text-primary" /> <span><span className="block text-xs text-muted-foreground">Service area</span><span className="font-semibold text-charcoal">{SITE.address}</span></span></p>
                <p className="flex items-center gap-3"><Clock className="w-5 h-5 text-primary" /> <span><span className="block text-xs text-muted-foreground">Hours</span><span className="font-semibold text-charcoal">{SITE.hours}</span></span></p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border aspect-[4/3]">
              <iframe
                title="Apex Roofing Perth service area map"
                src="https://www.google.com/maps?q=Perth+Western+Australia&output=embed"
                loading="lazy"
                className="w-full h-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="lg:col-span-3"><QuoteForm /></div>
        </div>
      </section>
    </>
  );
}
