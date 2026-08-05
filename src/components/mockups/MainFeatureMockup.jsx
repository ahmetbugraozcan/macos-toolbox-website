import CaptureMockup from "./CaptureMockup.jsx";
import ShelfMockup from "./ShelfMockup.jsx";

export default function MainFeatureMockup() {
  return (
    <div className="main-feature-mockup">
      <div className="main-feature-capture">
        <CaptureMockup />
      </div>
      <div className="main-feature-arrow" aria-hidden="true">→</div>
      <div className="main-feature-shelf">
        <ShelfMockup />
      </div>
    </div>
  );
}
