import Reveal from "./Reveal.jsx";
import Logo from "./Logo.jsx";
import { DMG_URL } from "../config.js";
import { useI18n } from "../i18n.jsx";
import { useLatestVersion } from "../useLatestVersion.js";

export default function Download() {
  const { t } = useI18n();
  const version = useLatestVersion();
  const steps = t("download.steps") || [];

  return (
    <section className="section download" id="download">
      <div className="download-glow" aria-hidden="true" />
      <div className="wrap download-inner">
        <Reveal>
          <div className="download-badge">
            <Logo size={62} glass />
          </div>
          <h2 className="display download-title">{t("download.title")}</h2>
          <p className="lede download-lede">{t("download.lede")}</p>
          <div className="download-actions">
            <a className="btn btn--lg download-btn" href={DMG_URL} download>
              <span className="apple-mark" aria-hidden="true"></span>
              {t("download.button")}
            </a>
          </div>
          <p className="download-meta">
            {t("download.meta", { v: version })}
            <span className="muted-2">{t("download.metaMuted")}</span>
          </p>
        </Reveal>

        <Reveal className="download-steps" delay={0.1}>
          {steps.map((s, i) => (
            <div className="dstep" key={i}>
              <span className="dstep-n">{i + 1}</span>
              <div>
                <h3 className="dstep-t">{s.t}</h3>
                <p className="dstep-d">{s.d}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
