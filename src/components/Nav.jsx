import Logo from "./Logo.jsx";

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner wrap">
        <a className="nav-brand" href="#top">
          <Logo size={26} />
          <span>DeskCast</span>
        </a>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#gallery">Gallery</a>
          <a href="#video">Video</a>
          <a href="#download">Download</a>
        </nav>
        <a className="btn nav-cta" href="#download">
          Download
        </a>
      </div>
    </header>
  );
}
