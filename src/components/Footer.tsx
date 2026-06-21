import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useSiteData } from "@/lib/siteContext";

export function Footer() {
  const { site, services, suburbs } = useSiteData();
  const SITE = site;
  const SERVICES = services;
  const SUBURBS = suburbs;
  return (
    <footer className="bg-charcoal text-white/80 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-xl text-white">
            <span className="grid place-items-center w-9 h-9 rounded-md bg-primary text-primary-foreground">A</span>
            Apex Roofing<span className="text-primary">.</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Perth's trusted roofing specialists. Licensed, insured and locally owned — covering Perth metro from Joondalup to Rockingham.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-primary"><Phone className="w-4 h-4" /> {SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-primary"><Mail className="w-4 h-4" /> {SITE.email}</a>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {SITE.address}</p>
            <p className="flex items-center gap-2"><Clock className="w-4 h-4" /> {SITE.hours}</p>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-primary">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Service Areas</h4>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {SUBURBS.map((s) => (
              <li key={s.slug}>
                <Link to="/areas/$slug" params={{ slug: s.slug }} className="hover:text-primary">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-primary">Recent Projects</Link></li>
            <li><Link to="/reviews" className="hover:text-primary">Customer Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Get a Free Quote</Link></li>
          </ul>
          <div className="mt-6 inline-flex flex-col gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-white/10 text-white">Licensed & Insured</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white">Workmanship Warranty</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Roofing contractors serving Perth, Western Australia.</p>
        </div>
      </div>
    </footer>
  );
}
