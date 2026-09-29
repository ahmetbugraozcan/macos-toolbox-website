export default function IslandMockup({ src = "/screenshots/island-nowplaying.png", alt = "DeskCast Dynamic Island" }) {
  return (
    <div className="island-mini">
      <img className="island-mini-shot" src={src} alt={alt} />
    </div>
  );
}
