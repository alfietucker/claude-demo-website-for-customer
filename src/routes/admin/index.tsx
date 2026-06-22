import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  useSiteData,
  type TeamMember,
  type FAQ,
  type Review,
  type Project,
  type QuoteSubmission,
} from "@/lib/siteContext";
import {
  Phone, Mail, MapPin, Clock, Star, Users, MessageSquare, Briefcase,
  HelpCircle, Settings, LogOut, Eye, EyeOff, Trash2, Plus, Save,
  CheckCircle, Bell, Home, ChevronRight, Edit3, X, RefreshCw, BarChart3,
} from "lucide-react";

const ADMIN_PASSWORD = "apex2024";
const AUTH_KEY = "apex_crm_auth";

export const Route = createFileRoute("/admin/")({
  component: AdminPage,
});

function AdminPage() {
  useEffect(() => {
    document.title = "CRM Admin — Apex Roofing Perth";
  }, []);
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem(AUTH_KEY);
    if (stored === "1") setAuthed(true);
    setChecking(false);
  }, []);

  if (checking) return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  if (!authed) return <LoginScreen onLogin={() => { sessionStorage.setItem(AUTH_KEY, "1"); setAuthed(true); }} />;
  return <Dashboard onLogout={() => { sessionStorage.removeItem(AUTH_KEY); setAuthed(false); }} />;
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      onLogin();
    } else {
      setError("Incorrect password. Please try again.");
      setPw("");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal to-charcoal/90 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground text-3xl font-bold mb-4">A</div>
          <h1 className="text-2xl font-bold text-white">Apex Roofing CRM</h1>
          <p className="text-white/60 text-sm mt-1">Website management portal</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
          <label className="block text-sm font-semibold text-charcoal mb-2">Admin Password</label>
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              value={pw}
              onChange={(e) => { setPw(e.target.value); setError(""); }}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter password"
              autoFocus
            />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
          <button type="submit" className="mt-5 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition">
            Sign In
          </button>
          <p className="mt-4 text-center text-xs text-gray-400">Default password: apex2024</p>
        </form>
      </div>
    </div>
  );
}

type Tab = "dashboard" | "site" | "hero" | "services" | "reviews" | "projects" | "team" | "faqs" | "suburbs" | "submissions";

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab] = useState<Tab>("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  const data = useSiteData();
  const unread = data.submissions.filter((s) => !s.read).length;

  const tabs: { id: Tab; label: string; icon: React.ElementType; badge?: number }[] = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "site", label: "Site Info", icon: Settings },
    { id: "hero", label: "Hero Section", icon: Home },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "reviews", label: "Reviews", icon: Star },
    { id: "projects", label: "Projects", icon: Eye },
    { id: "team", label: "Team", icon: Users },
    { id: "faqs", label: "FAQs", icon: HelpCircle },
    { id: "suburbs", label: "Suburbs", icon: MapPin },
    { id: "submissions", label: "Quote Leads", icon: MessageSquare, badge: unread },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-charcoal flex flex-col transition-transform lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">A</div>
            <div>
              <p className="text-white font-bold text-sm">Apex Roofing</p>
              <p className="text-white/40 text-xs">Website CRM</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => { setTab(t.id); setMobileOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${tab === t.id ? "bg-primary text-primary-foreground" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
            >
              <t.icon className="w-4 h-4 flex-shrink-0" />
              {t.label}
              {t.badge ? <span className="ml-auto bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">{t.badge}</span> : null}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <a href="/" target="_blank" className="flex items-center gap-2 text-white/50 hover:text-white text-xs mb-3">
            <Eye className="w-3.5 h-3.5" /> View live website
          </a>
          <button onClick={onLogout} className="flex items-center gap-2 text-white/50 hover:text-red-400 text-xs transition">
            <LogOut className="w-3.5 h-3.5" /> Sign out
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setMobileOpen(false)} />}

      {/* Main */}
      <div className="lg:pl-64 flex-1 flex flex-col min-h-screen">
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center gap-4 sticky top-0 z-20">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-1.5 text-gray-500">
            <Settings className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="font-semibold text-charcoal">CRM</span>
            <ChevronRight className="w-4 h-4" />
            <span className="capitalize">{tabs.find((t) => t.id === tab)?.label}</span>
          </div>
          {unread > 0 && (
            <button onClick={() => setTab("submissions")} className="ml-auto flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-red-100 transition">
              <Bell className="w-3.5 h-3.5" /> {unread} new lead{unread !== 1 ? "s" : ""}
            </button>
          )}
        </header>

        <main className="flex-1 p-4 sm:p-6">
          {tab === "dashboard" && <DashboardOverview data={data} setTab={setTab} />}
          {tab === "site" && <SiteTab />}
          {tab === "hero" && <HeroTab />}
          {tab === "services" && <ServicesTab />}
          {tab === "reviews" && <ReviewsTab />}
          {tab === "projects" && <ProjectsTab />}
          {tab === "team" && <TeamTab />}
          {tab === "faqs" && <FaqsTab />}
          {tab === "suburbs" && <SuburbsTab />}
          {tab === "submissions" && <SubmissionsTab />}
        </main>
      </div>
    </div>
  );
}

function DashboardOverview({ data, setTab }: { data: ReturnType<typeof useSiteData>; setTab: (t: Tab) => void }) {
  const unread = data.submissions.filter((s) => !s.read).length;
  const cards = [
    { label: "Quote Leads", value: data.submissions.length, sub: `${unread} unread`, icon: MessageSquare, color: "bg-blue-50 text-blue-600", tab: "submissions" as Tab },
    { label: "Services", value: data.services.length, sub: "active listings", icon: Briefcase, color: "bg-orange-50 text-orange-600", tab: "services" as Tab },
    { label: "Reviews", value: data.reviews.length, sub: `${data.site.rating}★ avg rating`, icon: Star, color: "bg-yellow-50 text-yellow-600", tab: "reviews" as Tab },
    { label: "Projects", value: data.projects.length, sub: "in portfolio", icon: Eye, color: "bg-green-50 text-green-600", tab: "projects" as Tab },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-charcoal">Welcome back</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your Apex Roofing website from here. Changes save instantly.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <button key={c.label} onClick={() => setTab(c.tab)} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-left hover:border-primary/30 hover:shadow transition group">
            <div className={`inline-flex p-2.5 rounded-lg ${c.color}`}>
              <c.icon className="w-5 h-5" />
            </div>
            <p className="mt-3 text-2xl font-bold text-charcoal">{c.value}</p>
            <p className="text-sm font-medium text-charcoal mt-0.5">{c.label}</p>
            <p className="text-xs text-gray-400 mt-0.5">{c.sub}</p>
          </button>
        ))}
      </div>

      {/* Recent submissions */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-semibold text-charcoal">Recent Quote Leads</h2>
          <button onClick={() => setTab("submissions")} className="text-xs text-primary font-semibold hover:underline">View all</button>
        </div>
        {data.submissions.length === 0 ? (
          <p className="px-5 py-8 text-sm text-gray-400 text-center">No leads yet. Quote form submissions will appear here.</p>
        ) : (
          <ul className="divide-y divide-gray-50">
            {data.submissions.slice(0, 5).map((s) => (
              <li key={s.id} className="px-5 py-3.5 flex items-center gap-3">
                {!s.read && <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />}
                {s.read && <span className="w-2 h-2 rounded-full bg-gray-200 flex-shrink-0" />}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-charcoal truncate">{s.name} — {s.service}</p>
                  <p className="text-xs text-gray-400">{s.suburb} · {new Date(s.timestamp).toLocaleDateString("en-AU")}</p>
                </div>
                <a href={`tel:${s.phone}`} className="text-xs font-semibold text-primary hover:underline flex-shrink-0">{s.phone}</a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h3 className="font-semibold text-amber-800 text-sm">Quick reminder</h3>
        <p className="text-amber-700 text-xs mt-1 leading-relaxed">All changes you make here update the live website immediately. No publishing needed. To change the admin password, ask your web developer.</p>
      </div>
    </div>
  );
}

function SiteTab() {
  const { site, updateSite } = useSiteData();
  const [form, setForm] = useState({ ...site });
  const [saved, setSaved] = useState(false);

  function save() {
    updateSite(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <Section title="Site Information" desc="Your business details shown across the website, header, footer and structured data.">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Business Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
        <Field label="Phone Number" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
        <Field label="Phone Href (tel:...)" value={form.phoneHref} onChange={(v) => setForm({ ...form, phoneHref: v })} />
        <Field label="Email Address" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
        <Field label="Address" value={form.address} onChange={(v) => setForm({ ...form, address: v })} />
        <Field label="Business Hours" value={form.hours} onChange={(v) => setForm({ ...form, hours: v })} />
        <Field label="Google Rating (e.g. 4.9)" value={String(form.rating)} onChange={(v) => setForm({ ...form, rating: parseFloat(v) || form.rating })} type="number" />
        <Field label="Review Count (e.g. 287)" value={String(form.reviewCount)} onChange={(v) => setForm({ ...form, reviewCount: parseInt(v) || form.reviewCount })} type="number" />
      </div>
      <SaveBtn onClick={save} saved={saved} />
    </Section>
  );
}

function HeroTab() {
  const { hero, updateHero } = useSiteData();
  const [form, setForm] = useState({ ...hero });
  const [saved, setSaved] = useState(false);

  function save() {
    updateHero(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <Section title="Hero Section" desc="The main headline, subheadline and badge shown on the homepage hero.">
      <Field label="Badge Text (top of hero)" value={form.badge} onChange={(v) => setForm({ ...form, badge: v })} />
      <Field label="Main Headline" value={form.headline} onChange={(v) => setForm({ ...form, headline: v })} />
      <TextareaField label="Subheadline / Description" value={form.subheadline} onChange={(v) => setForm({ ...form, subheadline: v })} rows={3} />
      <SaveBtn onClick={save} saved={saved} />
    </Section>
  );
}

function ServicesTab() {
  const { services, setServices } = useSiteData();
  const [editing, setEditing] = useState<number | null>(null);
  const [saved, setSaved] = useState(false);

  const s = editing !== null ? services[editing] : null;

  function update(field: string, value: string) {
    if (editing === null) return;
    const updated = services.map((svc, i) => i === editing ? { ...svc, [field]: value } : svc);
    setServices(updated);
  }

  function save() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <Section title="Services" desc="Edit your roofing service listings. These appear on the homepage and services pages.">
      {editing !== null && s ? (
        <div className="space-y-4">
          <button onClick={() => setEditing(null)} className="flex items-center gap-2 text-sm text-gray-500 hover:text-charcoal">
            <X className="w-4 h-4" /> Back to list
          </button>
          <Field label="Service Title" value={s.title} onChange={(v) => update("title", v)} />
          <TextareaField label="Short Description (card preview)" value={s.short} onChange={(v) => update("short", v)} rows={2} />
          <TextareaField label="Hero Text (full service page)" value={s.hero} onChange={(v) => update("hero", v)} rows={4} />
          <SaveBtn onClick={save} saved={saved} />
        </div>
      ) : (
        <ul className="space-y-2">
          {services.map((svc, i) => (
            <li key={svc.slug} className="flex items-center gap-3 bg-white border border-gray-100 rounded-lg px-4 py-3 hover:border-primary/30 transition">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-charcoal">{svc.title}</p>
                <p className="text-xs text-gray-400 truncate mt-0.5">{svc.short}</p>
              </div>
              <button onClick={() => setEditing(i)} className="text-xs font-semibold text-primary hover:underline flex-shrink-0 flex items-center gap-1">
                <Edit3 className="w-3.5 h-3.5" /> Edit
              </button>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

function ReviewsTab() {
  const { reviews, setReviews } = useSiteData();
  const [form, setForm] = useState<Omit<Review, "rating"> & { rating: string }>({ name: "", suburb: "", service: "", rating: "5", text: "" });
  const [saved, setSaved] = useState(false);

  function addReview() {
    if (!form.name || !form.text) return;
    setReviews([...reviews, { ...form, rating: parseInt(form.rating) || 5 }]);
    setForm({ name: "", suburb: "", service: "", rating: "5", text: "" });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function remove(i: number) {
    setReviews(reviews.filter((_, idx) => idx !== i));
  }

  return (
    <Section title="Reviews" desc="Manage customer testimonials shown on the homepage carousel and reviews page.">
      <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-3 mb-6">
        <h3 className="font-semibold text-charcoal text-sm">Add New Review</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="Customer Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
          <Field label="Suburb" value={form.suburb} onChange={(v) => setForm({ ...form, suburb: v })} />
          <Field label="Service Used" value={form.service} onChange={(v) => setForm({ ...form, service: v })} />
          <Field label="Rating (1-5)" value={form.rating} onChange={(v) => setForm({ ...form, rating: v })} type="number" />
        </div>
        <TextareaField label="Review Text" value={form.text} onChange={(v) => setForm({ ...form, text: v })} rows={3} />
        <button onClick={addReview} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-hover transition">
          <Plus className="w-4 h-4" /> Add Review
        </button>
        {saved && <span className="text-xs text-green-600 font-semibold">Saved!</span>}
      </div>
      <ul className="space-y-2">
        {reviews.map((r, i) => (
          <li key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-lg px-4 py-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-charcoal">{r.name}</p>
                <span className="text-yellow-500 text-xs">{"★".repeat(r.rating)}</span>
              </div>
              <p className="text-xs text-gray-400">{r.suburb} · {r.service}</p>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">{r.text}</p>
            </div>
            <button onClick={() => remove(i)} className="text-gray-300 hover:text-red-400 transition flex-shrink-0 mt-0.5">
              <Trash2 className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ProjectsTab() {
  const { projects, setProjects } = useSiteData();
  const [form, setForm] = useState<Project>({ title: "", location: "", problem: "", solution: "", outcome: "" });
  const [saved, setSaved] = useState(false);

  function addProject() {
    if (!form.title) return;
    setProjects([...projects, form]);
    setForm({ title: "", location: "", problem: "", solution: "", outcome: "" });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function remove(i: number) {
    setProjects(projects.filter((_, idx) => idx !== i));
  }

  return (
    <Section title="Projects" desc="Portfolio of completed roofing projects shown on the projects page.">
      <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-3 mb-6">
        <h3 className="font-semibold text-charcoal text-sm">Add New Project</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="Project Title" value={form.title} onChange={(v) => setForm({ ...form, title: v })} />
          <Field label="Location / Suburb" value={form.location} onChange={(v) => setForm({ ...form, location: v })} />
        </div>
        <TextareaField label="Problem" value={form.problem} onChange={(v) => setForm({ ...form, problem: v })} rows={2} />
        <TextareaField label="Solution" value={form.solution} onChange={(v) => setForm({ ...form, solution: v })} rows={2} />
        <TextareaField label="Outcome" value={form.outcome} onChange={(v) => setForm({ ...form, outcome: v })} rows={2} />
        <button onClick={addProject} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-hover transition">
          <Plus className="w-4 h-4" /> Add Project
        </button>
        {saved && <span className="text-xs text-green-600 font-semibold ml-3">Saved!</span>}
      </div>
      <ul className="space-y-2">
        {projects.map((p, i) => (
          <li key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-lg px-4 py-3">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-charcoal">{p.title}</p>
              <p className="text-xs text-gray-400">{p.location}</p>
              <p className="text-xs text-gray-600 mt-1 line-clamp-1">{p.solution}</p>
            </div>
            <button onClick={() => remove(i)} className="text-gray-300 hover:text-red-400 transition flex-shrink-0 mt-0.5">
              <Trash2 className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function TeamTab() {
  const { team, setTeam } = useSiteData();
  const [form, setForm] = useState<TeamMember>({ name: "", role: "", initials: "" });
  const [saved, setSaved] = useState(false);

  function addMember() {
    if (!form.name) return;
    const initials = form.initials || form.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
    setTeam([...team, { ...form, initials }]);
    setForm({ name: "", role: "", initials: "" });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function remove(i: number) {
    setTeam(team.filter((_, idx) => idx !== i));
  }

  function updateMember(i: number, field: keyof TeamMember, value: string) {
    setTeam(team.map((m, idx) => idx === i ? { ...m, [field]: value } : m));
  }

  return (
    <Section title="Team Members" desc="The team shown on the homepage and about page.">
      <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-3 mb-6">
        <h3 className="font-semibold text-charcoal text-sm">Add Team Member</h3>
        <div className="grid sm:grid-cols-3 gap-3">
          <Field label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
          <Field label="Role / Title" value={form.role} onChange={(v) => setForm({ ...form, role: v })} />
          <Field label="Initials (auto)" value={form.initials} onChange={(v) => setForm({ ...form, initials: v })} placeholder="e.g. JM" />
        </div>
        <button onClick={addMember} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-hover transition">
          <Plus className="w-4 h-4" /> Add Member
        </button>
        {saved && <span className="text-xs text-green-600 font-semibold ml-3">Saved!</span>}
      </div>
      <ul className="space-y-2">
        {team.map((m, i) => (
          <li key={i} className="flex items-center gap-3 bg-white border border-gray-100 rounded-lg px-4 py-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-hover text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
              {m.initials}
            </div>
            <div className="flex-1 grid sm:grid-cols-2 gap-2">
              <input
                value={m.name}
                onChange={(e) => updateMember(i, "name", e.target.value)}
                className="text-sm font-semibold text-charcoal bg-transparent border-b border-transparent hover:border-gray-200 focus:border-primary focus:outline-none px-0 py-0.5"
              />
              <input
                value={m.role}
                onChange={(e) => updateMember(i, "role", e.target.value)}
                className="text-xs text-gray-500 bg-transparent border-b border-transparent hover:border-gray-200 focus:border-primary focus:outline-none px-0 py-0.5"
              />
            </div>
            <button onClick={() => remove(i)} className="text-gray-300 hover:text-red-400 transition flex-shrink-0">
              <Trash2 className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
      {team.length > 0 && (
        <button
          onClick={() => { setTeam([...team]); setSaved(true); setTimeout(() => setSaved(false), 2000); }}
          className="mt-4 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-hover transition"
        >
          <Save className="w-4 h-4" /> Save Changes
        </button>
      )}
    </Section>
  );
}

function FaqsTab() {
  const { faqs, setFaqs } = useSiteData();
  const [form, setForm] = useState<FAQ>({ q: "", a: "" });
  const [saved, setSaved] = useState(false);

  function add() {
    if (!form.q || !form.a) return;
    setFaqs([...faqs, form]);
    setForm({ q: "", a: "" });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function remove(i: number) {
    setFaqs(faqs.filter((_, idx) => idx !== i));
  }

  function update(i: number, field: keyof FAQ, value: string) {
    setFaqs(faqs.map((f, idx) => idx === i ? { ...f, [field]: value } : f));
  }

  return (
    <Section title="FAQs" desc="Frequently asked questions on the homepage. Also feeds the FAQ schema for Google rich results.">
      <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-3 mb-6">
        <h3 className="font-semibold text-charcoal text-sm">Add New FAQ</h3>
        <Field label="Question" value={form.q} onChange={(v) => setForm({ ...form, q: v })} />
        <TextareaField label="Answer" value={form.a} onChange={(v) => setForm({ ...form, a: v })} rows={3} />
        <button onClick={add} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-hover transition">
          <Plus className="w-4 h-4" /> Add FAQ
        </button>
        {saved && <span className="text-xs text-green-600 font-semibold ml-3">Saved!</span>}
      </div>
      <ul className="space-y-3">
        {faqs.map((f, i) => (
          <li key={i} className="bg-white border border-gray-100 rounded-lg p-4">
            <div className="flex items-start gap-2 mb-2">
              <div className="flex-1">
                <input
                  value={f.q}
                  onChange={(e) => update(i, "q", e.target.value)}
                  className="w-full text-sm font-semibold text-charcoal bg-gray-50 border border-gray-200 rounded px-3 py-2 focus:outline-none focus:border-primary"
                />
              </div>
              <button onClick={() => remove(i)} className="text-gray-300 hover:text-red-400 transition mt-1 flex-shrink-0">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <textarea
              value={f.a}
              onChange={(e) => update(i, "a", e.target.value)}
              rows={2}
              className="w-full text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded px-3 py-2 focus:outline-none focus:border-primary resize-none"
            />
          </li>
        ))}
      </ul>
      {faqs.length > 0 && (
        <button
          onClick={() => { setFaqs([...faqs]); setSaved(true); setTimeout(() => setSaved(false), 2000); }}
          className="mt-4 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-hover transition"
        >
          <Save className="w-4 h-4" /> Save Changes
        </button>
      )}
    </Section>
  );
}

function SuburbsTab() {
  const { suburbs, setSuburbs } = useSiteData();
  const [form, setForm] = useState({ slug: "", name: "", region: "", blurb: "" });
  const [saved, setSaved] = useState(false);

  function add() {
    if (!form.name) return;
    const slug = form.slug || form.name.toLowerCase().replace(/\s+/g, "-");
    setSuburbs([...suburbs, { ...form, slug }]);
    setForm({ slug: "", name: "", region: "", blurb: "" });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function remove(i: number) {
    setSuburbs(suburbs.filter((_, idx) => idx !== i));
  }

  function update(i: number, field: string, value: string) {
    setSuburbs(suburbs.map((s, idx) => idx === i ? { ...s, [field]: value } : s));
  }

  return (
    <Section title="Service Areas / Suburbs" desc="Perth suburbs listed on the homepage and service area pages.">
      <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-3 mb-6">
        <h3 className="font-semibold text-charcoal text-sm">Add Suburb</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="Suburb Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
          <Field label="Region" value={form.region} onChange={(v) => setForm({ ...form, region: v })} placeholder="e.g. Northern Suburbs" />
        </div>
        <TextareaField label="Description (for suburb page)" value={form.blurb} onChange={(v) => setForm({ ...form, blurb: v })} rows={2} />
        <button onClick={add} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-hover transition">
          <Plus className="w-4 h-4" /> Add Suburb
        </button>
        {saved && <span className="text-xs text-green-600 font-semibold ml-3">Saved!</span>}
      </div>
      <div className="grid sm:grid-cols-2 gap-2">
        {suburbs.map((s, i) => (
          <div key={s.slug} className="flex items-center gap-2 bg-white border border-gray-100 rounded-lg px-3 py-2.5">
            <input
              value={s.name}
              onChange={(e) => update(i, "name", e.target.value)}
              className="flex-1 text-sm font-medium text-charcoal bg-transparent focus:outline-none"
            />
            <input
              value={s.region}
              onChange={(e) => update(i, "region", e.target.value)}
              className="text-xs text-gray-400 bg-transparent focus:outline-none w-32"
            />
            <button onClick={() => remove(i)} className="text-gray-200 hover:text-red-400 transition">
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
      {suburbs.length > 0 && (
        <button
          onClick={() => { setSuburbs([...suburbs]); setSaved(true); setTimeout(() => setSaved(false), 2000); }}
          className="mt-4 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-hover transition"
        >
          <Save className="w-4 h-4" /> Save Changes
        </button>
      )}
    </Section>
  );
}

function SubmissionsTab() {
  const { submissions, markSubmissionRead, deleteSubmission } = useSiteData();
  const [selected, setSelected] = useState<QuoteSubmission | null>(null);

  function open(s: QuoteSubmission) {
    setSelected(s);
    if (!s.read) markSubmissionRead(s.id);
  }

  if (selected) {
    return (
      <Section title="Quote Lead Detail" desc="">
        <button onClick={() => setSelected(null)} className="flex items-center gap-2 text-sm text-gray-500 hover:text-charcoal mb-4">
          <X className="w-4 h-4" /> Back to leads
        </button>
        <div className="bg-white border border-gray-100 rounded-xl p-6 space-y-4 max-w-lg">
          <div className="grid grid-cols-2 gap-4">
            <Detail label="Name" value={selected.name} />
            <Detail label="Phone" value={selected.phone} isPhone />
            <Detail label="Email" value={selected.email} isEmail />
            <Detail label="Suburb" value={selected.suburb} />
            <Detail label="Service" value={selected.service} />
            <Detail label="Date" value={new Date(selected.timestamp).toLocaleString("en-AU")} />
          </div>
          {selected.message && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Message</p>
              <p className="text-sm text-charcoal bg-gray-50 rounded-lg p-3 leading-relaxed">{selected.message}</p>
            </div>
          )}
          <button
            onClick={() => { deleteSubmission(selected.id); setSelected(null); }}
            className="flex items-center gap-2 text-red-500 hover:text-red-600 text-sm font-medium"
          >
            <Trash2 className="w-4 h-4" /> Delete lead
          </button>
        </div>
      </Section>
    );
  }

  return (
    <Section title="Quote Leads" desc="Every form submission from your website. Click a lead to view full details.">
      {submissions.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
          <MessageSquare className="w-10 h-10 text-gray-200 mx-auto mb-3" />
          <p className="text-gray-400 text-sm">No leads yet.</p>
          <p className="text-gray-300 text-xs mt-1">Quote form submissions will appear here automatically.</p>
        </div>
      ) : (
        <ul className="space-y-2">
          {submissions.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => open(s)}
                className={`w-full flex items-center gap-3 bg-white border rounded-lg px-4 py-3.5 text-left hover:border-primary/30 transition ${!s.read ? "border-primary/20 bg-primary/5" : "border-gray-100"}`}
              >
                {!s.read && <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />}
                {s.read && <span className="w-2 h-2 rounded-full bg-gray-200 flex-shrink-0" />}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-charcoal">{s.name}</p>
                    {!s.read && <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-1.5 py-0.5 rounded">New</span>}
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{s.service} · {s.suburb}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-semibold text-charcoal">{s.phone}</p>
                  <p className="text-xs text-gray-400">{new Date(s.timestamp).toLocaleDateString("en-AU")}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

// Shared components
function Section({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="space-y-5 max-w-3xl">
      <div>
        <h1 className="text-xl font-bold text-charcoal">{title}</h1>
        {desc && <p className="text-sm text-gray-500 mt-1">{desc}</p>}
      </div>
      {children}
    </div>
  );
}

function Field({ label, value, onChange, type = "text", placeholder }: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary bg-white"
      />
    </div>
  );
}

function TextareaField({ label, value, onChange, rows = 3 }: { label: string; value: string; onChange: (v: string) => void; rows?: number }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none"
      />
    </div>
  );
}

function SaveBtn({ onClick, saved }: { onClick: () => void; saved: boolean }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-hover transition mt-2"
    >
      {saved ? <><CheckCircle className="w-4 h-4" /> Saved!</> : <><Save className="w-4 h-4" /> Save Changes</>}
    </button>
  );
}

function Detail({ label, value, isPhone, isEmail }: { label: string; value: string; isPhone?: boolean; isEmail?: boolean }) {
  return (
    <div>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{label}</p>
      {isPhone ? (
        <a href={`tel:${value}`} className="text-sm font-semibold text-primary hover:underline">{value}</a>
      ) : isEmail ? (
        <a href={`mailto:${value}`} className="text-sm font-semibold text-primary hover:underline break-all">{value}</a>
      ) : (
        <p className="text-sm text-charcoal font-medium">{value}</p>
      )}
    </div>
  );
}
