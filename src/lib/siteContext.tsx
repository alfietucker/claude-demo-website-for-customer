import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import {
  SITE as DEFAULT_SITE,
  SERVICES as DEFAULT_SERVICES,
  SUBURBS as DEFAULT_SUBURBS,
  REVIEWS as DEFAULT_REVIEWS,
  PROJECTS as DEFAULT_PROJECTS,
  type Service,
  type Suburb,
} from "./site";

export type SiteInfo = typeof DEFAULT_SITE;

export type Review = {
  name: string;
  suburb: string;
  service: string;
  rating: number;
  text: string;
};

export type Project = {
  title: string;
  location: string;
  problem: string;
  solution: string;
  outcome: string;
};

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
};

export type FAQ = {
  q: string;
  a: string;
};

export type QuoteSubmission = {
  id: string;
  timestamp: string;
  name: string;
  phone: string;
  email: string;
  suburb: string;
  service: string;
  message: string;
  read: boolean;
};

export type HeroContent = {
  headline: string;
  subheadline: string;
  badge: string;
};

export type SiteData = {
  site: SiteInfo;
  hero: HeroContent;
  services: Service[];
  suburbs: Suburb[];
  reviews: Review[];
  projects: Project[];
  team: TeamMember[];
  faqs: FAQ[];
  submissions: QuoteSubmission[];
};

const DEFAULT_TEAM: TeamMember[] = [
  { name: "Jake Mitchell", role: "Director & Lead Roofer", initials: "JM" },
  { name: "Sam O'Brien", role: "Project Manager", initials: "SO" },
  { name: "Liam Walters", role: "Senior Tile Specialist", initials: "LW" },
  { name: "Aaron Chen", role: "Metal Roofing Lead", initials: "AC" },
];

const DEFAULT_FAQS: FAQ[] = [
  { q: "How much does a roof repair cost in Perth?", a: "Small repairs typically start from $350. After a free on-site inspection we provide a fixed written quote so you know exactly what you'll pay — no surprises." },
  { q: "How quickly can you get to me?", a: "Most repairs are inspected within 48 hours. For active leaks or storm damage we offer same-day emergency callouts across the Perth metro." },
  { q: "Do you offer a workmanship warranty?", a: "Yes. Every job — repair, restoration or replacement — is backed by a written workmanship warranty in addition to manufacturer product warranties." },
  { q: "Are you licensed and insured?", a: "Fully licensed roofing contractors with $20M public liability cover. We're happy to provide certificates of currency on request." },
  { q: "Do you handle insurance claims?", a: "Absolutely. We prepare the photos, reports and quotes that insurers need, and can liaise directly with your insurer in most cases." },
  { q: "Which suburbs do you service?", a: "All Perth metro — from Joondalup and Hillarys in the north, through to Fremantle, Cottesloe and the southern suburbs." },
];

const DEFAULT_HERO: HeroContent = {
  headline: "Perth's Trusted Roofing Specialists.",
  subheadline: "Roof Repairs, Restoration, Re-Roofing & Replacement across Perth — from Joondalup to Fremantle. Done right, on time, with a written workmanship warranty.",
  badge: "Perth's #1 Local Roofing Team",
};

const STORAGE_KEY = "apex_crm_data";

function loadFromStorage(): Partial<SiteData> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveToStorage(data: Partial<SiteData>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

type SiteContextValue = SiteData & {
  updateSite: (updates: Partial<SiteInfo>) => void;
  updateHero: (updates: Partial<HeroContent>) => void;
  setServices: (services: Service[]) => void;
  setSuburbs: (suburbs: Suburb[]) => void;
  setReviews: (reviews: Review[]) => void;
  setProjects: (projects: Project[]) => void;
  setTeam: (team: TeamMember[]) => void;
  setFaqs: (faqs: FAQ[]) => void;
  addSubmission: (sub: Omit<QuoteSubmission, "id" | "timestamp" | "read">) => void;
  markSubmissionRead: (id: string) => void;
  deleteSubmission: (id: string) => void;
  resetToDefaults: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SiteData>({
    site: DEFAULT_SITE,
    hero: DEFAULT_HERO,
    services: DEFAULT_SERVICES,
    suburbs: DEFAULT_SUBURBS,
    reviews: DEFAULT_REVIEWS as Review[],
    projects: DEFAULT_PROJECTS,
    team: DEFAULT_TEAM,
    faqs: DEFAULT_FAQS,
    submissions: [],
  });

  useEffect(() => {
    const stored = loadFromStorage();
    setData((prev) => ({
      site: stored.site ? { ...prev.site, ...stored.site } : prev.site,
      hero: stored.hero ? { ...prev.hero, ...stored.hero } : prev.hero,
      services: stored.services ?? prev.services,
      suburbs: stored.suburbs ?? prev.suburbs,
      reviews: stored.reviews ?? prev.reviews,
      projects: stored.projects ?? prev.projects,
      team: stored.team ?? prev.team,
      faqs: stored.faqs ?? prev.faqs,
      submissions: stored.submissions ?? prev.submissions,
    }));
  }, []);

  const persist = useCallback((updates: Partial<SiteData>) => {
    setData((prev) => {
      const next = { ...prev, ...updates };
      // Only persist overrides (not defaults) to save space
      const stored = loadFromStorage();
      saveToStorage({ ...stored, ...updates });
      return next;
    });
  }, []);

  const updateSite = useCallback((updates: Partial<SiteInfo>) => {
    setData((prev) => {
      const next = { ...prev, site: { ...prev.site, ...updates } };
      const stored = loadFromStorage();
      saveToStorage({ ...stored, site: next.site });
      return next;
    });
  }, []);

  const updateHero = useCallback((updates: Partial<HeroContent>) => {
    setData((prev) => {
      const next = { ...prev, hero: { ...prev.hero, ...updates } };
      const stored = loadFromStorage();
      saveToStorage({ ...stored, hero: next.hero });
      return next;
    });
  }, []);

  const setServices = useCallback((services: Service[]) => persist({ services }), [persist]);
  const setSuburbs = useCallback((suburbs: Suburb[]) => persist({ suburbs }), [persist]);
  const setReviews = useCallback((reviews: Review[]) => persist({ reviews }), [persist]);
  const setProjects = useCallback((projects: Project[]) => persist({ projects }), [persist]);
  const setTeam = useCallback((team: TeamMember[]) => persist({ team }), [persist]);
  const setFaqs = useCallback((faqs: FAQ[]) => persist({ faqs }), [persist]);

  const addSubmission = useCallback((sub: Omit<QuoteSubmission, "id" | "timestamp" | "read">) => {
    setData((prev) => {
      const newSub: QuoteSubmission = {
        ...sub,
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        read: false,
      };
      const submissions = [newSub, ...prev.submissions];
      const stored = loadFromStorage();
      saveToStorage({ ...stored, submissions });
      return { ...prev, submissions };
    });
  }, []);

  const markSubmissionRead = useCallback((id: string) => {
    setData((prev) => {
      const submissions = prev.submissions.map((s) => s.id === id ? { ...s, read: true } : s);
      const stored = loadFromStorage();
      saveToStorage({ ...stored, submissions });
      return { ...prev, submissions };
    });
  }, []);

  const deleteSubmission = useCallback((id: string) => {
    setData((prev) => {
      const submissions = prev.submissions.filter((s) => s.id !== id);
      const stored = loadFromStorage();
      saveToStorage({ ...stored, submissions });
      return { ...prev, submissions };
    });
  }, []);

  const resetToDefaults = useCallback(() => {
    if (typeof window !== "undefined") localStorage.removeItem(STORAGE_KEY);
    setData({
      site: DEFAULT_SITE,
      hero: DEFAULT_HERO,
      services: DEFAULT_SERVICES,
      suburbs: DEFAULT_SUBURBS,
      reviews: DEFAULT_REVIEWS as Review[],
      projects: DEFAULT_PROJECTS,
      team: DEFAULT_TEAM,
      faqs: DEFAULT_FAQS,
      submissions: [],
    });
  }, []);

  return (
    <SiteContext.Provider value={{
      ...data,
      updateSite,
      updateHero,
      setServices,
      setSuburbs,
      setReviews,
      setProjects,
      setTeam,
      setFaqs,
      addSubmission,
      markSubmissionRead,
      deleteSubmission,
      resetToDefaults,
    }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSiteData() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSiteData must be used within SiteProvider");
  return ctx;
}
