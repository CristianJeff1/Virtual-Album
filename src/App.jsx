import { useState, useEffect } from "react";
import Landing from "./components/Landing";
import Memories from "./components/Memories";
import Timeline from "./components/Timeline";
import LoveLetter from "./components/LoveLetter";
import Songs from "./components/Songs";
import Reasons from "./components/Reasons";
import Plans from "./components/Plans";
import Closing from "./components/Closing";

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Lato:wght@300;400&display=swap');
  .font-display { font-family: 'Cormorant Garamond', serif; }
  .font-body { font-family: 'Lato', sans-serif; }
  @keyframes float { 0%,100%{transform:translateY(0);opacity:.25} 50%{transform:translateY(-30px);opacity:.4} }
  .animate-float { animation: float linear infinite; }
  .flip-card { perspective: 800px; }
  .flip-inner { transform-style: preserve-3d; transition: transform .6s; }
  .flip-inner.flipped { transform: rotateY(180deg); }
  .flip-front, .flip-back { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
  .flip-back { transform: rotateY(180deg); }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #fff1f2; }
  ::-webkit-scrollbar-thumb { background: #fca5a5; border-radius: 3px; }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
  .blink { animation: blink 1s step-end infinite; }
  .timeline-line { background: linear-gradient(to bottom, #fecdd3, #fda4af, #fb7185); }
`;

export default function App() {
  const [page, setPage] = useState("landing");

  useEffect(() => {
    document.title = page === "landing" ? "Happy Monthsary Love💖" : "Our Album";
  }, [page]);

  const handleOpen = () => setPage("album");
  const handleRestart = () => {
    setPage("landing");
    window.scrollTo(0, 0);
  };

  if (page === "landing") {
    return <Landing onOpen={handleOpen} />;
  }

  return (
    <div className="bg-rose-50 min-h-screen text-rose-900">
      <style>{GLOBAL_STYLES}</style>
      <Memories />
      <Timeline />
      <LoveLetter active={true} />
      <Songs />
      <Reasons />
      <Plans />
      <Closing onRestart={handleRestart} />
    </div>
  );
}