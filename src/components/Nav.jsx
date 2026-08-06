import Logo from "./Logo.jsx";
import { useI18n } from "../i18n.jsx";

export default function Nav() {
  const { t, lang, setLang } = useI18n();

  return (
    <header className="nav">
      <div className="nav-inner wrap">
        <a className="nav-brand" href="#top">
          <Logo size={26} />
          <span>DeskCast</span>
        </a>
        <nav className="nav-links">
          <a href="#features">{t("nav.features")}</a>
          <a href="#gallery">{t("nav.gallery")}</a>
          <a href="#video">{t("nav.video")}</a>
          <a href="#download">{t("nav.download")}</a>
        </nav>
        <div className="lang-switch" role="group" aria-label="Language">
          <button
            className={lang === "en" ? "is-active" : ""}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
          <button
            className={lang === "tr" ? "is-active" : ""}
            onClick={() => setLang("tr")}
            aria-pressed={lang === "tr"}
          >
            TR
          </button>
        </div>
        <a className="btn nav-cta" href="#download">
          {t("nav.cta")}
        </a>
      </div>
    </header>
  );
}
