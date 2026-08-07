import { useRef, useEffect } from "react";
import Reveal from "./Reveal.jsx";
import CaptureMockup from "./mockups/CaptureMockup.jsx";
import ShelfMockup from "./mockups/ShelfMockup.jsx";
import VideoCaptureMockup from "./mockups/VideoCaptureMockup.jsx";
import ImageSearchMockup from "./mockups/ImageSearchMockup.jsx";
import DropShelfMockup from "./mockups/DropShelfMockup.jsx";
import MenuBarMockup from "./mockups/MenuBarMockup.jsx";
import SettingsMockup from "./mockups/SettingsMockup.jsx";
import { useI18n } from "../i18n.jsx";

const frames = [
  { key: "capture", Visual: CaptureMockup },
  { key: "shelf", Visual: ShelfMockup },
  { key: "video", Visual: VideoCaptureMockup },
  { key: "search", Visual: ImageSearchMockup },
  { key: "drop", Visual: DropShelfMockup },
  { key: "menu", Visual: MenuBarMockup },
  { key: "settings", Visual: SettingsMockup },
];

export default function Gallery() {
  const { t } = useI18n();
  const railRef = useRef(null);

  // Let a vertical mouse wheel scroll the horizontal rail, but hand control back
  // to the page once the rail reaches an edge (so it never traps the scroll).
  // Horizontal trackpad swipes are left untouched.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const atStart = rail.scrollLeft <= 0;
      const atEnd = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 1;
      if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) return;
      e.preventDefault();
      rail.scrollLeft += e.deltaY;
    };

    rail.addEventListener("wheel", onWheel, { passive: false });
    return () => rail.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="section gallery" id="gallery">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow" style={{ textAlign: "center" }}>
            {t("gallery.eyebrow")}
          </p>
          <h2 className="headline gallery-title">{t("gallery.title")}</h2>
        </Reveal>
      </div>

      <div className="gallery-rail" ref={railRef}>
        <div className="gallery-track">
          {frames.map((f, i) => (
            <Reveal className="gcard" key={f.key} delay={i * 0.05}>
              <div className="gcard-stage">
                <f.Visual />
              </div>
              <div className="gcard-meta">
                <h3 className="title gcard-title">{t(`gallery.names.${f.key}`)}</h3>
                <p className="muted">{t(`gallery.captions.${f.key}`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <p className="gallery-hint muted">{t("gallery.hint")}</p>
    </section>
  );
}
