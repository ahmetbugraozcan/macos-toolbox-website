import Reveal from "./Reveal.jsx";
import ShelfMockup from "./mockups/ShelfMockup.jsx";
import DropShelfMockup from "./mockups/DropShelfMockup.jsx";
import ImageSearchMockup from "./mockups/ImageSearchMockup.jsx";
import MenuBarMockup from "./mockups/MenuBarMockup.jsx";
import SettingsMockup from "./mockups/SettingsMockup.jsx";

const frames = [
  { title: "Screenshot Shelf", caption: "Captures stack up, ready to drag out.", Visual: ShelfMockup },
  { title: "Image Search", caption: "Find any screenshot by the text inside it.", Visual: ImageSearchMockup },
  { title: "Drop Shelf", caption: "A staging tray for anything you drag.", Visual: DropShelfMockup },
  { title: "Menu bar", caption: "One tidy menu, zero window clutter.", Visual: MenuBarMockup },
  { title: "Settings", caption: "Fine-tune every tool from one place.", Visual: SettingsMockup },
];

export default function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow" style={{ textAlign: "center" }}>
            A closer look
          </p>
          <h2 className="headline gallery-title">Small app. Surprising range.</h2>
        </Reveal>
      </div>

      <div className="gallery-rail">
        <div className="gallery-track">
          {frames.map((f, i) => (
            <Reveal className="gcard" key={f.title} delay={i * 0.05}>
              <div className="gcard-stage">
                <f.Visual />
              </div>
              <div className="gcard-meta">
                <h3 className="title gcard-title">{f.title}</h3>
                <p className="muted">{f.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <p className="gallery-hint muted">Scroll sideways →</p>
    </section>
  );
}
