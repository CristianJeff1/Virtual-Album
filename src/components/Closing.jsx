import { HeartParticles, Section } from "./Helpers";
import { HER_NAME } from "./Data";

export default function Closing({ onRestart }) {
  return (
    <Section id="closing" className="bg-linear-to-b from-rose-100 via-pink-100 to-fuchsia-100 relative overflow-hidden">
      <HeartParticles />

      <div className="max-w-lg mx-auto text-center relative z-10">
        <div className="text-7xl mb-6 animate-bounce inline-block">💖</div>
        <h2 className="font-display italic text-5xl md:text-6xl text-rose-800 mb-6 leading-tight">
          I love you my Love,<br />{HER_NAME}.
        </h2>
        <p className="font-body text-rose-500 font-light leading-8 mb-12 text-base">
          Not just today. Not just on the good days.<br />
          Every single day — completely, quietly, endlessly.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={onRestart}
            className="px-8 py-3 border border-rose-400 text-rose-600 font-body text-sm tracking-widest uppercase rounded-full hover:bg-rose-50 transition-colors"
          >
            ↩ Start Over
          </button>
          <a
            href="#memories"
            className="px-8 py-3 bg-rose-500 text-white font-body text-sm tracking-widest uppercase rounded-full shadow-lg shadow-rose-200 hover:bg-rose-600 transition-colors"
          >
            Relive Memories ♥
          </a>
        </div>
      </div>

      <div className="mt-16 text-center font-body text-rose-300 text-xs tracking-widest">
        Made with love, just for you. ❤️
      </div>
    </Section>
  );
}