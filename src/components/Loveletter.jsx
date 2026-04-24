import { useEffect, useState } from "react";
import { Section, SectionTitle } from "./Helpers";
import { LOVELETTER } from "./Data";

export default function Loveletter({ active }) {
  const [letterDone, setLetterDone] = useState(false);
  const [letterText, setLetterText] = useState("");

  useEffect(() => {
    if (!active) return;
    let i = 0;
    setLetterText("");
    setLetterDone(false);
    const timer = setInterval(() => {
      setLetterText(LOVELETTER.slice(0, i));
      i++;
      if (i > LOVELETTER.length) {
        clearInterval(timer);
        setLetterDone(true);
      }
    }, 28);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <Section id="letter" className="bg-white">
      <SectionTitle sub="Straight from the heart">A Letter For You</SectionTitle>

      <div className="max-w-xl mx-auto">
        <div className="bg-rose-50 border border-rose-100 rounded-3xl p-8 shadow-inner relative overflow-hidden">
          <div className="absolute top-4 right-6 text-4xl opacity-10 font-display italic">❝</div>
          <pre className="font-body text-rose-700 text-sm leading-8 whitespace-pre-wrap font-light">
            {letterText}
            {!letterDone && <span className="blink text-rose-400">|</span>}
          </pre>
        </div>
      </div>
    </Section>
  );
}