import { useEffect, useState } from "react";
import { FALLBACK_VERSION, LATEST_RELEASE_URL } from "./config.js";

function versionFromTag(tagName) {
  return tagName?.match(/^v?(\d+\.\d+(?:\.\d+)?)/)?.[1] || FALLBACK_VERSION;
}

export function useLatestVersion() {
  const [version, setVersion] = useState(FALLBACK_VERSION);

  useEffect(() => {
    const controller = new AbortController();

    fetch(LATEST_RELEASE_URL, {
      headers: { Accept: "application/vnd.github+json" },
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub release request failed: ${response.status}`);
        return response.json();
      })
      .then((release) => setVersion(versionFromTag(release.tag_name)))
      .catch((error) => {
        if (error.name !== "AbortError") setVersion(FALLBACK_VERSION);
      });

    return () => controller.abort();
  }, []);

  return version;
}
