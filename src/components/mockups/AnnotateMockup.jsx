// The editor capture shows an empty sample canvas; the marks drawn on top
// illustrate the tools (same colors as the editor's palette).
export default function AnnotateMockup() {
  return (
    <div className="annotate-mockup">
      <img
        className="product-shot product-shot--window"
        src="/screenshots/annotate.png"
        alt="DeskCast annotation editor with arrow, box, pen, text, highlight and pixelate tools"
      />
      <svg className="annotate-marks" viewBox="0 0 900 512" aria-hidden="true">
        <rect x="312" y="262" width="276" height="78" rx="6" fill="none" stroke="#ff453a" strokeWidth="5" />
        <path d="M262 190 L318 250" stroke="#ff453a" strokeWidth="6" strokeLinecap="round" />
        <path d="M318 250 l-26 -4 m26 4 l-4 -26" stroke="#ff453a" strokeWidth="6" strokeLinecap="round" fill="none" />
        <rect x="222" y="380" width="170" height="30" rx="4" fill="#ffd60a" opacity="0.55" />
        <text x="232" y="402" fill="#1d1d1f" fontSize="19" fontWeight="700" fontFamily="-apple-system, system-ui, sans-serif">Ship it ✓</text>
        <path d="M600 400 q20 -30 40 0 t40 0 t40 0" stroke="#ffd60a" strokeWidth="5" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}
