export default function CaptureMockup() {
  return (
    <div className="capture-selection-mockup">
      <img
        className="capture-selection-shot"
        src="/screenshots/settings-menubar.png"
        alt="DeskCast settings inside a selected screenshot region"
      />
      <div className="capture-selection-frame" aria-hidden="true" />
      <div className="capture-selection-label" aria-hidden="true">
        Capture selected area
      </div>
    </div>
  );
}
