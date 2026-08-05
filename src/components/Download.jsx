import Reveal from "./Reveal.jsx";
import Logo from "./Logo.jsx";
import { DMG_URL, VERSION } from "../config.js";

const steps = [
  { n: "1", t: "Download the .dmg", d: "One click below — no account, no installer wizard." },
  { n: "2", t: "Drag to Applications", d: "Open the disk image and drop DeskCast into your Applications folder." },
  { n: "3", t: "Launch from the menu bar", d: "Open it once; it settles into the menu bar and stays out of your Dock." },
];

export default function Download() {
  return (
    <section className="section download" id="download">
      <div className="download-glow" aria-hidden="true" />
      <div className="wrap download-inner">
        <Reveal>
          <div className="download-badge">
            <Logo size={62} glass />
          </div>
          <h2 className="display download-title">Get DeskCast.</h2>
          <p className="lede download-lede">
            Free, focused, and about as light as an app gets.
          </p>
          <div className="download-actions">
            <a className="btn btn--lg download-btn" href={DMG_URL} download>
              <span className="apple-mark" aria-hidden="true"></span>
              Download for Mac
            </a>
          </div>
          <p className="download-meta">
            macOS · Version {VERSION} ·{" "}
            <span className="muted-2">downloadable .dmg</span>
          </p>
        </Reveal>

        <Reveal className="download-steps" delay={0.1}>
          {steps.map((s) => (
            <div className="dstep" key={s.n}>
              <span className="dstep-n">{s.n}</span>
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
