import { useRef, useState } from "react";
import Reveal from "./Reveal.jsx";

export default function VideoSection() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const v = ref.current;
    if (!v) return;
    v.play().then(() => setPlaying(true)).catch(() => {});
  };

  return (
    <section className="section video" id="video">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow" style={{ textAlign: "center" }}>
            See it move
          </p>
          <h2 className="headline video-title">
            Thirty seconds of everyday flow.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="video-frame">
            <video
              ref={ref}
              className="video-el"
              src="/demo.mp4"
              poster="/demo-poster.jpg"
              controls={playing}
              playsInline
              preload="metadata"
            />
            {!playing && (
              <button className="video-play" onClick={play} aria-label="Play DeskCast demo">
                <span className="video-play-glyph">▶</span>
                <span className="video-play-label">Watch the real app</span>
              </button>
            )}
          </div>
          <p className="video-note muted">Captured directly from DeskCast on macOS.</p>
        </Reveal>
      </div>
    </section>
  );
}
