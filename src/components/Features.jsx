import Reveal from "./Reveal.jsx";
import CaptureMockup from "./mockups/CaptureMockup.jsx";
import ShelfMockup from "./mockups/ShelfMockup.jsx";
import VideoCaptureMockup from "./mockups/VideoCaptureMockup.jsx";
import ImageSearchMockup from "./mockups/ImageSearchMockup.jsx";
import DropShelfMockup from "./mockups/DropShelfMockup.jsx";
import MenuBarMockup from "./mockups/MenuBarMockup.jsx";

const rows = [
  {
    id: "capture",
    eyebrow: "Capture Selected Area",
    title: "Screenshot only what you need.",
    body: "Drag over any part of your screen and DeskCast captures that exact region. The native macOS selection flow stays familiar and fast.",
    bullets: ["Precise region capture", "Global shortcut", "Native macOS selection"],
    Visual: CaptureMockup,
    dark: false,
  },
  {
    id: "shelf",
    eyebrow: "Screenshot Shelf",
    title: "Every capture lands on a floating shelf.",
    body: "Snap a region and it drops into a shelf that hovers over your work. Reorder, pin the ones you need, and drag any shot straight into another app — just like macOS, now with a memory.",
    bullets: ["Region capture", "Drag out to any app", "Pin · reorder · auto-hide"],
    Visual: ShelfMockup,
    dark: true,
    reverse: true,
  },
  {
    id: "video-capture",
    eyebrow: "Selected-area video",
    title: "Record exactly the part that matters.",
    body: "Choose a region and start recording with the native macOS capture flow. DeskCast saves the finished .mov to your selected export folder, ready to share.",
    bullets: ["Native macOS recorder", "Custom global shortcut", "Saved as .mov"],
    Visual: VideoCaptureMockup,
    dark: false,
  },
  {
    id: "image-search",
    eyebrow: "Image Search",
    title: "Find screenshots by the words inside them.",
    body: "Index a folder once, then search screenshots by filename or recognized text. The result you remember is a few keystrokes away.",
    bullets: ["On-device OCR", "Filename + text search", "Local folder indexing"],
    Visual: ImageSearchMockup,
    dark: true,
    reverse: true,
  },
  {
    id: "drop",
    eyebrow: "Drop Shelf",
    title: "Gather now. Send when you're ready.",
    body: "A floating tray that collects files, folders, links, text, and images from anywhere. Pile things up across apps, then send them together — or shake while dragging to summon it instantly.",
    bullets: ["Collect from any app", "Shake-to-open", "Send together"],
    Visual: DropShelfMockup,
    dark: false,
  },
  {
    id: "menu",
    eyebrow: "One menu, every tool",
    title: "Lives in the menu bar. Stays out of your way.",
    body: "No Dock icon, no window clutter. DeskCast tucks into the menu bar with tidy, toggleable tools — screenshots, video capture, OCR, image search, and Finder‑path copy — a keystroke away.",
    bullets: ["No Dock icon", "Global shortcuts", "Toggle each tool"],
    Visual: MenuBarMockup,
    dark: true,
    reverse: true,
  },
];

export default function Features() {
  return (
    <div id="features">
      {rows.map((r) => (
        <section
          className={`feature ${r.dark ? "feature--dark" : ""}`}
          key={r.id}
        >
          <div className={`wrap feature-grid ${r.reverse ? "reverse" : ""}`}>
            <Reveal className="feature-copy">
              <p className="eyebrow">{r.eyebrow}</p>
              <h2 className="headline feature-title">{r.title}</h2>
              <p className="lede feature-body">{r.body}</p>
              <ul className="feature-bullets">
                {r.bullets.map((b) => (
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
      ))}
    </div>
  );
}
