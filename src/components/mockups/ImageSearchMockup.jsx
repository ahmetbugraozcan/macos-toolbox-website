export default function ImageSearchMockup() {
  // The raw capture has a lot of empty canvas below the results — frame it to the
  // populated top region (search bar + indexed tiles) so it reads cleanly.
  return (
    <div className="isearch-shot">
      <img
        src="/screenshots/image-search.png"
        alt="DeskCast Image Search indexing real app screenshots"
      />
    </div>
  );
}
