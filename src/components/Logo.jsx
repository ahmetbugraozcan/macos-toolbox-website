export default function Logo({ size = 30, glass = false }) {
  return (
    <img
      className={`app-logo${glass ? " app-logo--glass" : ""}`}
      src="/app-icon.png"
      width={size}
      height={size}
      alt="DeskCast"
    />
  );
}
