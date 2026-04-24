// ─── Shared Helper Components ───────────────────────────────────────────────

export function HeartParticles() {
  const hearts = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map(i => (
        <div
          key={i}
          className="absolute text-rose-300 opacity-30 animate-float select-none"
          style={{
            left: `${8 + i * 8}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${12 + (i % 3) * 8}px`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${6 + (i % 4)}s`,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
}

export function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`relative py-24 px-4 md:px-12 ${className}`}>
      {children}
    </section>
  );
}

export function SectionTitle({ children, sub }) {
  return (
    <div className="text-center mb-16">
      <h2 className="font-display text-4xl md:text-5xl text-rose-900 mb-3 leading-tight">{children}</h2>
      {sub && <p className="font-body text-rose-400 text-lg tracking-wide">{sub}</p>}
    </div>
  );
}