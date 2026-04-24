import { Section, SectionTitle } from "./Helpers";
import { SONGS } from "./Data";

export default function Songs() {
  return (
    <Section id="songs" className="bg-linear-to-b  from-pink-50 to-rose-50">
      <SectionTitle sub="Musics that reminds me of you">Our Songs</SectionTitle>

      <div className="max-w-2xl mx-auto grid gap-4">
        {SONGS.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 bg-white rounded-2xl p-5 shadow-sm border border-rose-50 hover:border-rose-200 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-linear-to-b from-rose-400 to-pink-500">
  {s.albumArt
    ? <img src={s.albumArt} alt={`${s.title} album art`} className="w-full h-full object-cover" />
    : <div className="w-full h-full flex items-center justify-center text-white text-xl">🎵</div>
  }
</div>
            <div className="flex-1">
              <p className="font-display text-lg text-rose-800">{s.title}</p>
              <p className="font-body text-rose-400 text-xs">{s.artist}</p>
            </div>
            <p className="font-body text-rose-500 text-sm italic font-light hidden md:block">{s.note}</p>
            <span className="text-rose-300 group-hover:text-rose-500 transition-colors text-lg">→</span>
          </a>
        ))}
      </div>
    </Section>
  );
}