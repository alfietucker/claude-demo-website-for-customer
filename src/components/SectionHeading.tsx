export function SectionHeading({ eyebrow, title, subtitle, center }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">{title}</h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}
