import { useState } from "react";
import { Section, SectionTitle } from "./Helpers";
import { REASONS } from "./Data";

export default function Reasons() {
  const [flipped, setFlipped] = useState({});
  const toggleFlip = (i) => setFlipped(f => ({ ...f, [i]: !f[i] }));

  return (
    <Section id="reasons" className="bg-linear-to-b from-rose-50 to-pink-50">
      <SectionTitle sub="Flip each card for reasons why">Why I Love You? </SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {REASONS.map((r, i) => (
          <div
            key={i}
            className="flip-card h-36 cursor-pointer"
            onClick={() => toggleFlip(i)}
          >
            <div className={`flip-inner relative w-full h-full ${flipped[i] ? "flipped" : ""}`}>
              <div className="flip-front absolute inset-0 bg-white rounded-2xl shadow-sm border border-rose-50 flex flex-col items-center justify-center p-4">
                <span className="text-3xl mb-2">💗</span>
                <p className="font-body text-rose-400 text-xs tracking-widest">Reason #{i + 1}</p>
                <p className="font-body text-rose-300 text-xs mt-2">tap to reveal</p>
              </div>
              <div className="flip-back absolute inset-0 bg-linear-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center p-5">
                <p className="font-display italic text-white text-center text-base leading-relaxed">{r}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}