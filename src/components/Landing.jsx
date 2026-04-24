import { HeartParticles } from "./Helpers";
import { HER_NAME, HERO_MSG } from "./Data";

export default function Landing({ onOpen }) {
  return (
    <div className="min-h-screen bg-linear-to-b from-rose-50 via-pink-50 to-fuchsia-50 flex flex-col items-center justify-center relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Lato:wght@300;400&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
        @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg);opacity:.25} 50%{transform:translateY(-40px) rotate(10deg);opacity:.4} }
        .animate-float { animation: float linear infinite; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        .fade-up { animation: fadeUp 1s ease forwards; }
        .fade-up-d1 { animation: fadeUp 1s .3s ease both; }
        .fade-up-d2 { animation: fadeUp 1s .6s ease both; }
        @keyframes pulse-heart { 0%,100%{transform:scale(1)} 50%{transform:scale(1.15)} }
        .pulse-heart { animation: pulse-heart 2s ease-in-out infinite; }
      `}</style>

      <HeartParticles />

      {/* Decorative rings */}
      <div className="absolute w-96 h-96 rounded-full border border-rose-200 opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150" />
      <div className="absolute w-96 h-96 rounded-full border border-pink-200 opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125" />

      <div className="relative z-10 text-center px-6 max-w-lg">
        <div className="pulse-heart text-6xl mb-6">💖</div>
        <p className="font-body text-rose-400 tracking-[0.3em] text-sm uppercase fade-up mb-3">A gift for my Love,</p>
        <h1 className="font-display italic text-7xl md:text-8xl text-rose-800 leading-none fade-up-d1 mb-5">{HER_NAME}</h1>
        <p className="font-body text-rose-500 text-lg font-light fade-up-d2 mb-12 leading-relaxed">{HERO_MSG}</p>

        <button
          onClick={onOpen}
          className="fade-up-d2 group relative px-10 py-4 bg-rose-500 text-white font-body text-sm tracking-widest uppercase rounded-full shadow-lg shadow-rose-200 hover:bg-rose-600 hover:shadow-rose-300 transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10">Open Our Story</span>
          <div className="absolute inset-0 bg-linear-to-b from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>

      {/* Bottom petals */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 opacity-40">
        {["🌸","🌺","🌸","🌺","🌸"].map((f, i) => <span key={i} className="text-lg">{f}</span>)}
      </div>
    </div>
  );
}