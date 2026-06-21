import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { useSiteData } from "@/lib/siteContext";
import logo from "@/assets/apex-logo.png";



const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { site } = useSiteData();
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-lg lg:text-xl text-charcoal">
          <img src={logo} alt="Apex Roofing" width={36} height={36} className="w-9 h-9 object-contain" />
          <span>Apex Roofing<span className="text-primary">.</span></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium text-charcoal-soft hover:text-primary transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:gap-4">
          <a href={site.phoneHref} className="hidden md:flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-primary">
            <Phone className="w-4 h-4" /> {site.phone}
          </a>
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-cta hover:bg-primary-hover transition-colors"
          >
            Get Free Quote
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-charcoal"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-base font-medium text-charcoal hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="px-3 py-3 rounded-md text-base font-semibold text-primary flex items-center gap-2">
              <Phone className="w-5 h-5" /> {site.phone}
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-base font-semibold text-primary-foreground"
            >
              Get Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
