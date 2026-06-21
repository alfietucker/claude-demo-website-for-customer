import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCall } from "@/components/FloatingCall";
import { SITE } from "@/lib/site";
import { SiteProvider } from "@/lib/siteContext";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-charcoal">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-charcoal">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-hover">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-charcoal">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-charcoal hover:bg-secondary">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["RoofingContractor", "LocalBusiness"],
      "@id": "https://apexroofingperth.com.au/#business",
      name: SITE.name,
      url: "https://apexroofingperth.com.au",
      telephone: SITE.phone,
      email: SITE.email,
      description: "Perth's trusted roofing contractors. Roof repairs, restoration, re-roofing & replacement across Perth metro. Licensed, insured, locally owned.",
      priceRange: "$$",
      currenciesAccepted: "AUD",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      openingHours: ["Mo-Sa 07:00-18:00"],
      areaServed: [
        { "@type": "City", name: "Perth" },
        { "@type": "AdministrativeArea", name: "Western Australia" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Perth",
        addressRegion: "WA",
        postalCode: "6000",
        addressCountry: "AU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -31.9505,
        longitude: 115.8605,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: SITE.rating,
        reviewCount: SITE.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Roofing Services Perth",
        itemListElement: [
          "Roof Repairs Perth", "Roof Restoration Perth", "Roof Replacement Perth",
          "Metal Roofing Perth", "Tile Roofing Perth", "Emergency Roofing Perth",
          "Gutter Replacement Perth", "Commercial Roofing Perth",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://apexroofingperth.com.au/#website",
      url: "https://apexroofingperth.com.au",
      name: SITE.name,
      publisher: { "@id": "https://apexroofingperth.com.au/#business" },
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Roofing Perth | Apex Roofing Perth — Repairs, Restoration & Replacement" },
      { name: "description", content: "Roofing Perth specialists — roof repairs, restoration, re-roofing & replacement across Perth metro. Licensed roofers, free quotes, workmanship warranty. Call now." },
      { name: "keywords", content: "roofing perth, roof repairs perth, roof restoration perth, roofers perth, metal roofing perth, tile roofing perth, emergency roofing perth" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "author", content: SITE.name },
      { name: "geo.region", content: "AU-WA" },
      { name: "geo.placename", content: "Perth" },
      { name: "geo.position", content: "-31.9505;115.8605" },
      { name: "ICBM", content: "-31.9505, 115.8605" },
      { property: "og:site_name", content: "Apex Roofing Perth" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_AU" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Roofing Perth | Apex Roofing — Trusted Local Roofers" },
      { name: "twitter:title", content: "Roofing Perth | Apex Roofing — Trusted Local Roofers" },
      { property: "og:description", content: "Perth's trusted roofing team. Repairs, restoration & replacement. Licensed, insured, locally owned. Free quotes." },
      { name: "twitter:description", content: "Perth's trusted roofing team. Repairs, restoration & replacement. Licensed, insured, locally owned. Free quotes." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(orgSchema) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <QueryClientProvider client={queryClient}>
      <SiteProvider>
        {isAdmin ? (
          <Outlet />
        ) : (
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1"><Outlet /></main>
            <Footer />
            <FloatingCall />
          </div>
        )}
      </SiteProvider>
    </QueryClientProvider>
  );
}
