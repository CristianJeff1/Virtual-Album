import { useState } from "react";
import { HeartParticles, Section, SectionTitle } from "./Helpers";
import { MEMORIES } from "./Data";

// Pre-computed rotations & offsets per card so they don't shift on re-render
const TRANSFORMS = [
  { rotate: "-6deg",  tx: "8px",  ty: "-6px"  },
  { rotate: "4deg",   tx: "-5px", ty: "10px"  },
  { rotate: "-2deg",  tx: "12px", ty: "4px"   },
  { rotate: "7deg",   tx: "-8px", ty: "-4px"  },
  { rotate: "-5deg",  tx: "4px",  ty: "8px"   },
  { rotate: "3deg",   tx: "-10px",ty: "-8px"  },
];

// Tape strip across the top of each polaroid (alternates color)
const TAPE_COLORS = [
  "rgba(253,204,220,0.75)",
  "rgba(255,236,179,0.75)",
  "rgba(204,230,255,0.75)",
  "rgba(220,255,220,0.75)",
];

export default function Memories() {
  const [modalMemory, setModalMemory] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <Section id="memories" className="relative overflow-hidden" style={{ background: "#fdf6f0" }}>
      <HeartParticles />

      {/* Corkboard texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c0735a' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <SectionTitle sub="Every photo tells a story">Our Memories</SectionTitle>

      {/* Scattered polaroid grid */}
      <div
        className="relative max-w-4xl mx-auto px-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "2.5rem 1.5rem",
          paddingTop: "1rem",
          paddingBottom: "2rem",
        }}
      >
        {MEMORIES.map((m, i) => {
          const t = TRANSFORMS[i % TRANSFORMS.length];
          const tape = TAPE_COLORS[i % TAPE_COLORS.length];
          const isHovered = hovered === m.id;

          return (
            <div
              key={m.id}
              onClick={() => setModalMemory(m)}
              onMouseEnter={() => setHovered(m.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                transform: isHovered
                  ? "rotate(0deg) translate(0,0) scale(1.07)"
                  : `rotate(${t.rotate}) translate(${t.tx}, ${t.ty})`,
                transition: "transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease",
                cursor: "pointer",
                zIndex: isHovered ? 10 : 1,
                position: "relative",
              }}
            >
              {/* Polaroid frame */}
              <div
                style={{
                  background: "#fff",
                  padding: "10px 10px 36px 10px",
                  boxShadow: isHovered
                    ? "0 20px 40px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.1)"
                    : "0 6px 18px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.07)",
                  borderRadius: "2px",
                  position: "relative",
                }}
              >
                {/* Tape strip */}
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "52px",
                    height: "22px",
                    background: tape,
                    borderRadius: "2px",
                    zIndex: 2,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  }}
                />

                {/* Photo area */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    background: m.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    borderRadius: "1px",
                  }}
                >
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.caption}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <span style={{ fontSize: "3rem" }}>{m.emoji}</span>
                  )}
                </div>

                {/* Caption below photo */}
                <p
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "0.8rem",
                    color: "#9f4f60",
                    textAlign: "center",
                    marginTop: "10px",
                    lineHeight: 1.3,
                    padding: "0 4px",
                  }}
                >
                  {m.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Caveat font for handwritten captions */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&display=swap');`}</style>

      {/* Modal */}
      {modalMemory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
          onClick={() => setModalMemory(null)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#fff",
              padding: "18px 18px 48px 18px",
              maxWidth: "320px",
              width: "100%",
              boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
              borderRadius: "2px",
              transform: "rotate(-1.5deg)",
              position: "relative",
            }}
          >
            {/* Modal tape */}
            <div
              style={{
                position: "absolute",
                top: "-12px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "64px",
                height: "24px",
                background: "rgba(253,204,220,0.8)",
                borderRadius: "2px",
              }}
            />

            {/* Photo */}
            <div
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                background: modalMemory.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: "1px",
                marginBottom: "14px",
              }}
            >
              {modalMemory.image ? (
                <img
                  src={modalMemory.image}
                  alt={modalMemory.caption}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <span style={{ fontSize: "5rem" }}>{modalMemory.emoji}</span>
              )}
            </div>

            <p
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "0.75rem",
                color: "#bf7080",
                textAlign: "center",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              {modalMemory.date}
            </p>
            <p
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1.25rem",
                color: "#7a2535",
                textAlign: "center",
                lineHeight: 1.4,
              }}
            >
              {modalMemory.caption}
            </p>

            <button
              onClick={() => setModalMemory(null)}
              style={{
                position: "absolute",
                bottom: "14px",
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "'Caveat', cursive",
                fontSize: "0.9rem",
                color: "#fb7185",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              close ✕
            </button>
          </div>
        </div>
      )}
    </Section>
  );
}