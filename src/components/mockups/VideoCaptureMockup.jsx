export default function VideoCaptureMockup() {
  return (
    <div className="video-capture-mockup">
      <img
        className="video-capture-shot"
        src="/demo-poster.jpg"
        alt="A real DeskCast workflow ready to be captured as video"
      />
      <div className="recording-badge" aria-hidden="true">
        <span className="recording-dot" />
        Selected area
      </div>
      <div className="recording-frame" aria-hidden="true" />
    </div>
  );
}
