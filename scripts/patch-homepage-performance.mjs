/**
 * Re-apply homepage performance patches after `npm run crawl` overwrites
 * `public/mirror/index.html`. Idempotent.
 */
import { readFile, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const INDEX = join(__dirname, "..", "public", "mirror", "index.html");

let html = await readFile(INDEX, "utf8");
const before = html;

if (!html.includes('rel="preconnect" href="https://www.greenbuilt.org"')) {
  html = html.replace(
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="https://gmpg.org/xfn/11">`,
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="preconnect" href="https://www.greenbuilt.org" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="image" href="https://www.greenbuilt.org/wp-content/uploads/2022/11/gba-logo-vertical-150x108.png" media="(max-width: 921px)" fetchpriority="high">
<link rel="preload" as="image" href="https://www.greenbuilt.org/wp-content/uploads/2023/06/GreenBuiltAlliance-logo-horizontal-331x70.gif" media="(min-width: 922px)" fetchpriority="high">
<link rel="profile" href="https://gmpg.org/xfn/11">`
  );
}

html = html.replace(
  /<script src="https:\/\/kit\.fontawesome\.com\/77d5a65c9a\.js" crossorigin="anonymous"><\/script>/,
  '<script src="https://kit.fontawesome.com/77d5a65c9a.js" crossorigin="anonymous" async></script>'
);

html = html.replace(
  /id="astra-google-fonts-css" href="(https:\/\/fonts\.googleapis\.com\/css\?[^"]*?)display=fallback/,
  'id="astra-google-fonts-css" href="$1display=swap'
);

html = html.replace(
  /(<link rel="preload" href="https:\/\/www\.greenbuilt\.org\/wp-content\/uploads\/uag-plugin\/assets\/fonts\/poppins\/pxiByp8kv8JHgFVrLCz7Z1xlFQ\.woff2" as="font" type="font\/woff2")>/g,
  "$1 crossorigin>"
);

html = html.replace(
  /<script src="https:\/\/www\.google\.com\/recaptcha\/api\.js"><\/script>/g,
  '<script src="https://www.google.com/recaptcha/api.js" defer></script>'
);

html = html.replace(
  /id="wpgmza_data-js"><\/script>/g,
  'id="wpgmza_data-js" defer></script>'
);

if (html !== before) {
  await writeFile(INDEX, html, "utf8");
  console.log("Updated", INDEX);
} else {
  console.log("No changes needed:", INDEX);
}
