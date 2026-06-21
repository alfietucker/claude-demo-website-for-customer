import { Star, ShieldCheck, BadgeCheck, MapPin } from "lucide-react";

const items = [
  { icon: Star, label: "4.9★ Star Rated" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: BadgeCheck, label: "Workmanship Warranty" },
  { icon: MapPin, label: "Locally Owned" },
];

export function TrustBar({ light }: { light?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${light ? "" : ""}`}>
      {items.map((i) => (
        <div
          key={i.label}
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold border ${
            light
              ? "bg-white/10 border-white/20 text-white backdrop-blur-sm"
              : "bg-white border-border text-charcoal"
          }`}
        >
          <i.icon className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="leading-none">{i.label}</span>
        </div>
      ))}
    </div>
  );
}
