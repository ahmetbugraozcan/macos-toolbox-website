import { motion, useReducedMotion } from "motion/react";
import ShelfMockup from "./mockups/ShelfMockup.jsx";
import { DMG_URL, VERSION } from "../config.js";

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    animate: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: reduce
      ? { duration: 0.3 }
      : { type: "spring", bounce: 0, duration: 0.75, delay },
  });

  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-inner">
        <motion.p className="eyebrow" {...rise(0)}>
          A tiny toolbox for your Mac menu bar
        </motion.p>
        <motion.h1 className="display hero-title" {...rise(0.06)}>
          Capture, collect, and&nbsp;send —
          <br />
          without breaking your flow.
        </motion.h1>
        <motion.p className="lede hero-lede" {...rise(0.12)}>
          DeskCast lives quietly in your menu bar. Snap a region into a floating
          shelf, gather files onto a drop tray, and search every screenshot by
          its text — all in a single, focused little app.
        </motion.p>

        <motion.div className="hero-actions" {...rise(0.18)}>
          <a className="btn btn--lg" href={DMG_URL} download>
            <span className="apple-mark" aria-hidden="true"></span>
            Download for Mac
          </a>
          <a className="btn btn--ghost" href="#features">
            See what it does ↓
          </a>
        </motion.div>
        <motion.p className="hero-meta muted" {...rise(0.24)}>
          Free · macOS · Version {VERSION}
        </motion.p>

        <motion.div
          className="hero-stage"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.98 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          transition={
            reduce
              ? { duration: 0.35 }
              : { type: "spring", bounce: 0, duration: 0.9, delay: 0.28 }
          }
        >
          <div className="hero-desktop" aria-hidden="true">
            <ShelfMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
