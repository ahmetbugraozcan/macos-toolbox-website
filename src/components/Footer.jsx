import Logo from "./Logo.jsx";
import { GITHUB_URL } from "../config.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <Logo size={22} />
          <span>DeskCast</span>
        </div>
        <nav className="footer-links">
          <a href="#features">Features</a>
          <a href="#gallery">Gallery</a>
          <a href="#download">Download</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
        <p className="footer-fine muted">
          © {new Date().getFullYear()} Ahmet Buğra Özcan · MIT licensed · Made for
          macOS
        </p>
      </div>
    </footer>
  );
}
