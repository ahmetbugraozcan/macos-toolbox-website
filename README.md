# DeskCast website

The product website for [DeskCast](https://github.com/ahmetbugraozcan/DeskCast), a lightweight macOS menu-bar toolbox for screenshots, OCR, image search, Finder paths, and drag-and-drop collection.

## Development

```bash
npm install
npm run dev
```

The local development server runs on the URL printed by Vite.

## Checks

```bash
npm run lint
npm run build
```

## Product media

The screenshots and demo video in `public/` are captured from the real DeskCast macOS application. The app icon source is shared with the native app's `AppIcon.appiconset`.

The download button always resolves to the latest `DeskCast.dmg`. The displayed
version is read from the repository's latest GitHub Release, with the current
version kept as a fallback if GitHub is temporarily unavailable.
