import Reveal from "./Reveal.jsx";
import { useI18n } from "../i18n.jsx";

// Simple stroke glyphs, tinted per tool like the app's menu tiles.
const icons = {
  scroll: (
    <path d="M7 3h10v18H7zM12 8v8m-3-3 3 3 3-3" />
  ),
  ocr: (
    <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M8 9h8M12 9v7" />
  ),
  color: (
    <path d="m14.5 5.5 4 4M4 20l2-1 9.5-9.5-2-2L4 17zM16.5 3.5a2.1 2.1 0 0 1 3 3l-1.5 1.5-3-3z" />
  ),
  pin: (
    <path d="M9 3h6l-1 6 3 3H7l3-3zM12 12v9" />
  ),
  finder: (
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM8 13h8" />
  ),
  language: (
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3.5 9h17M3.5 15h17M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z" />
  ),
};

export default function ToolsGrid() {
  const { t } = useI18n();
  const items = t("tools.items") || [];

  return (
    <section className="section tools" id="tools">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow" style={{ textAlign: "center" }}>{t("tools.eyebrow")}</p>
          <h2 className="headline tools-title">{t("tools.title")}</h2>
        </Reveal>
        <div className="tools-grid">
          {items.map((item, i) => (
            <Reveal className={`tool-card tool-card--${item.k}`} key={item.k} delay={0.04 * i}>
              <span className="tool-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {icons[item.k]}
                </svg>
              </span>
              <h3 className="tool-title">{item.t}</h3>
              <p className="tool-body">{item.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
