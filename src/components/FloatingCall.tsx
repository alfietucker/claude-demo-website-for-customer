import { Phone } from "lucide-react";
import { useSiteData } from "@/lib/siteContext";

export function FloatingCall() {
  const { site } = useSiteData();
  return (
    <a
      href={site.phoneHref}
      aria-label="Call Apex Roofing now"
      className="lg:hidden fixed bottom-4 right-4 z-40 inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2.5 shadow-cta font-semibold text-sm"
    >
      <Phone className="w-4 h-4" /> Call Now
    </a>
  );
}
