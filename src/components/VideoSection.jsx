import { useRef, useState } from "react";
import Reveal from "./Reveal.jsx";
import { useI18n } from "../i18n.jsx";

export default function VideoSection() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const { t } = useI18n();

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
            {t("video.eyebrow")}
          </p>
          <h2 className="headline video-title">{t("video.title")}</h2>
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
              <button className="video-play" onClick={play} aria-label={t("video.play")}>
                <span className="video-play-glyph">▶</span>
                <span className="video-play-label">{t("video.play")}</span>
              </button>
            )}
          </div>
          <p className="video-note muted">{t("video.note")}</p>
        </Reveal>
      </div>
    </section>
  );
}
