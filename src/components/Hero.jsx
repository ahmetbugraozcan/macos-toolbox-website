import { motion, useReducedMotion } from "motion/react";
import MainFeatureMockup from "./mockups/MainFeatureMockup.jsx";
import { DMG_URL } from "../config.js";
import { useI18n } from "../i18n.jsx";
import { useLatestVersion } from "../useLatestVersion.js";

export default function Hero() {
  const reduce = useReducedMotion();
  const { t } = useI18n();
  const version = useLatestVersion();
  const title = t("hero.title");
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
          {t("hero.eyebrow")}
        </motion.p>
        <motion.h1 className="display hero-title" {...rise(0.06)}>
          {title[0]}
          <br />
          {title[1]}
        </motion.h1>
        <motion.p className="lede hero-lede" {...rise(0.12)}>
          {t("hero.lede")}
        </motion.p>

        <motion.div className="hero-actions" {...rise(0.18)}>
          <a className="btn btn--lg" href={DMG_URL} download>
            <span className="apple-mark" aria-hidden="true"></span>
            {t("hero.download")}
          </a>
          <a className="btn btn--ghost" href="#features">
            {t("hero.secondary")}
          </a>
        </motion.div>
        <motion.p className="hero-meta muted" {...rise(0.24)}>
          {t("hero.meta", { v: version })}
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
            <MainFeatureMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
