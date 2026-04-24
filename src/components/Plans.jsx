import { Section, SectionTitle } from "./Helpers";
import { PLANS } from "./Data";

export default function Plans() {
  return (
    <Section id="plans" className="bg-white">
      <SectionTitle sub="Everything I want to do with you">Our Future</SectionTitle>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {PLANS.map((p, i) => (
          <div key={i} className="bg-rose-50 rounded-2xl p-6 border border-rose-100 hover:border-rose-300 transition-colors flex flex-col items-center text-center">
            <div className="text-3xl mb-3">{p.icon}</div>
            <h3 className="font-display text-xl text-rose-800 italic mb-2">{p.title}</h3>
            <p className="font-body text-rose-500 text-sm font-light leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}