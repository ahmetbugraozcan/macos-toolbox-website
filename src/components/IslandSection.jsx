import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal.jsx";
import { useI18n } from "../i18n.jsx";

// Real captures of DeskCast's island (transparent PNGs). `width` is the image's
// pixel width, so every state keeps the same scale on the faux desktop.
const DESK_WIDTH = 980;
const states = [
  { key: "nowPlaying", src: "/screenshots/island-nowplaying.png", width: 684 },
  { key: "glance", src: "/screenshots/island-compact.png", width: 372 },
  { key: "timer", src: "/screenshots/island-timer.png", width: 684 },
  { key: "launcher", src: "/screenshots/island-launcher.png", width: 684 },
  { key: "weather", src: "/screenshots/island-weather.png", width: 684 },
  { key: "system", src: "/screenshots/island-system.png", width: 684 },
  { key: "alerts", src: "/screenshots/island-meeting.png", width: 408 },
];

const AUTO_ADVANCE_MS = 4200;

export default function IslandSection() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = states[index];
  const highlights = t("island.highlights") || [];

  useEffect(() => {
    if (reduce || paused) return undefined;
    const id = setTimeout(() => setIndex((i) => (i + 1) % states.length), AUTO_ADVANCE_MS);
    return () => clearTimeout(id);
  }, [index, paused, reduce]);

  return (
    <section className="section island" id="island">
      <div className="wrap">
        <Reveal className="island-copy">
          <p className="eyebrow island-eyebrow">{t("island.eyebrow")}</p>
          <h2 className="headline island-title">{t("island.title")}</h2>
          <p className="lede island-lede">{t("island.lede")}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <div
            className="island-showcase"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div className="island-tabs" role="tablist" aria-label={t("island.eyebrow")}>
              {states.map((s, i) => (
                <button
                  key={s.key}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  className={`island-tab ${i === index ? "is-active" : ""}`}
                  onClick={() => setIndex(i)}
                >
                  {t(`island.tabs.${s.key}`)}
                </button>
              ))}
            </div>

            <div className="island-desk">
              <div className="island-menubar" aria-hidden="true">
                <span className="island-menubar-apple"></span>
                <span>Finder</span>
                <span className="island-menubar-dim">File</span>
                <span className="island-menubar-dim">Edit</span>
                <span className="island-menubar-dim">View</span>
                <span className="island-menubar-clock">9:41</span>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={current.key}
                  className="island-shot"
                  src={current.src}
                  alt={t(`island.captions.${current.key}`)}
                  style={{ "--island-scale": current.width / DESK_WIDTH }}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: -8 }}
                  animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: -4 }}
                  transition={reduce ? { duration: 0.2 } : { type: "spring", bounce: 0.12, duration: 0.55 }}
                />
              </AnimatePresence>
            </div>

            <p className="island-caption" aria-live="polite">
              {t(`island.captions.${current.key}`)}
            </p>
          </div>
        </Reveal>

        <div className="island-highlights">
          {highlights.map((h, i) => (
            <Reveal className="island-card" key={h.t} delay={0.04 * i}>
              <h3 className="island-card-title">{h.t}</h3>
              <p className="island-card-body">{h.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
