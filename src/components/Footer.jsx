import Logo from "./Logo.jsx";
import { GITHUB_URL } from "../config.js";
import { useI18n } from "../i18n.jsx";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <Logo size={22} />
          <span>DeskCast</span>
        </div>
        <nav className="footer-links">
          <a href="#features">{t("nav.features")}</a>
          <a href="#gallery">{t("nav.gallery")}</a>
          <a href="#download">{t("nav.download")}</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
        <p className="footer-fine muted">{t("footer.fine", { y: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
}
