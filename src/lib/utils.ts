export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function absoluteUrl(path = "/") {
  return `${siteConfigUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

function siteConfigUrl() {
  // Kept as a function so this module stays usable in both server and client
  // contexts without importing the full content object.
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://darpanwelfare.org"
  );
}
