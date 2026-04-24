import { Section, SectionTitle } from "./Helpers";
import { TIMELINE } from "./Data";

export default function Timeline() {
  return (
    <Section id="timeline" className="bg-linear-to-b from-rose-50 to-pink-50">
      <SectionTitle sub="From start to Present">Our Story</SectionTitle>

      <div className="max-w-2xl mx-auto relative">

        {TIMELINE.map((t, i) => (
          <div key={i} className="pl-20 flex gap-6 mb-10 relative">
            <div className="bg-white rounded-2xl p-5 flex-1 shadow-sm border border-rose-50">
              <p className="font-body text-rose-400 text-xs tracking-widest uppercase mb-1">{t.date}</p>
              <h3 className="font-display text-xl text-rose-800 italic mb-2">{t.title}</h3>
              <p className="font-body text-rose-600 text-sm font-light leading-relaxed">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}