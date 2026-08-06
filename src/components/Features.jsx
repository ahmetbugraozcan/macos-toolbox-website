import Reveal from "./Reveal.jsx";
import CaptureMockup from "./mockups/CaptureMockup.jsx";
import ShelfMockup from "./mockups/ShelfMockup.jsx";
import VideoCaptureMockup from "./mockups/VideoCaptureMockup.jsx";
import ImageSearchMockup from "./mockups/ImageSearchMockup.jsx";
import DropShelfMockup from "./mockups/DropShelfMockup.jsx";
import MenuBarMockup from "./mockups/MenuBarMockup.jsx";
import { useI18n } from "../i18n.jsx";

const rows = [
  { key: "capture", Visual: CaptureMockup, dark: false },
  { key: "shelf", Visual: ShelfMockup, dark: true, reverse: true },
  { key: "video", Visual: VideoCaptureMockup, dark: false },
  { key: "search", Visual: ImageSearchMockup, dark: true, reverse: true },
  { key: "drop", Visual: DropShelfMockup, dark: false },
  { key: "menu", Visual: MenuBarMockup, dark: true, reverse: true },
];

export default function Features() {
  const { t } = useI18n();

  return (
    <div id="features">
      {rows.map((r) => {
        const bullets = t(`features.${r.key}.bullets`) || [];
        return (
          <section className={`feature ${r.dark ? "feature--dark" : ""}`} key={r.key}>
            <div className={`wrap feature-grid ${r.reverse ? "reverse" : ""}`}>
              <Reveal className="feature-copy">
                <p className="eyebrow">{t(`features.${r.key}.eyebrow`)}</p>
                <h2 className="headline feature-title">{t(`features.${r.key}.title`)}</h2>
                <p className="lede feature-body">{t(`features.${r.key}.body`)}</p>
                <ul className="feature-bullets">
                  {bullets.map((b) => (
                    <li key={b}>
                      <span className="tick" aria-hidden="true">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="feature-visual" delay={0.08}>
                <div className="stage">
                  <r.Visual />
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}
    </div>
  );
}
